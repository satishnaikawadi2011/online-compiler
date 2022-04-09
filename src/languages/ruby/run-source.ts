import { writeSourceFile } from '../../utils/source-writer/write-source';
import { Options, Result } from '../../types';
import { runRubyFile } from './run-file';
import { removeFiles } from '../../utils/remove-files';

/**
 * 
 * @param source  Source Code of a Ruby Language to be run
 * @param options Any extra options or spawn like arguments
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runRubySource(soureCode: string, options?: Options): Promise<Result> {
	let filePath = await writeSourceFile('ruby', soureCode);
	let res = await runRubyFile(filePath, options);
	await removeFiles([
		filePath
	]);
	return res;
}
