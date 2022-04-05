import { writeSourceFile } from '../../utils/source-writer/write-source';
import { Options, Result } from '../../types';
import { runPythonFile } from './run-file';
import { removeFiles } from '../../utils/remove-files';

/**
 * 
 * @param source  Source Code of a Python Language to be run
 * @param options Any extra options or spawn like arguments
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runPythonSource(soureCode: string, options?: Options): Promise<Result> {
	let filePath = await writeSourceFile('python', soureCode);
	let res = await runPythonFile(filePath, options);
	await removeFiles([
		filePath
	]);
	return res;
}
