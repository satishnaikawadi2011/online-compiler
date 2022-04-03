import { Result } from './../../types';
import { compileCSource } from './compile-source';
import { Options } from '../../types';
import { runExecutable } from '../../utils/executable/execute-executable';
import { removeFiles } from '../../utils/remove-files';

/**
 * 
 * @param sourceCode  Source Code of a C Language to be run
 * @param options Any extra options or spawn like arguments
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runCSource(sourceCode: string, options?: Options): Promise<Result> {
	try {
		let [
			filePath,
			executablePath
		] = await compileCSource(sourceCode, options);
		const res = await runExecutable(executablePath, options);
		await removeFiles(executablePath, filePath);
		return res;
	} catch (err) {
		return err;
	}
}
