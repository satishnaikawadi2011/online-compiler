import { writeSourceFile } from '../../utils/source-writer/write-source';
import { Options, Result } from '../../types';
import { runGoFile } from './run-file';
import { removeFiles } from '../../utils/remove-files';

/**
 * 
 * @param sourceCode  Source Code of a Go Language to be run
 * @param options Any extra options or spawn like arguments
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runGoSource(soureCode: string, options?: Options): Promise<Result> {
	let filePath = await writeSourceFile('go', soureCode);
	let res = await runGoFile(filePath, options);
	await removeFiles([
		filePath
	]);
	return res;
}
