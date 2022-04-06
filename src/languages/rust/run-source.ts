import { removeFiles } from './../../utils/remove-files';
import { Options, Result } from '../../types';
import { runExecutable } from '../../utils/executable/execute-executable';
import { compileRustSource } from './compile-source';

/**
 * 
 * @param source  Source Code of a Rust Language to be run
 * @param options Any extra options or spawn like arguments
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runSource(sourceCode: string, options?: Options): Promise<Result> {
	try {
		let [
			filePath,
			executablePath
		] = await compileRustSource(sourceCode, options);
		const res = await runExecutable(executablePath, options);
		await removeFiles([
			filePath,
			executablePath
		]);
		return res;
	} catch (err) {
		return err;
	}
}
