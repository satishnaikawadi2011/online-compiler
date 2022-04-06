import { writeSourceFile } from '../../utils/source-writer/write-source';
import { Options, Result } from '../../types';
import { runNodeFile } from './run-file';

/**
 * 
 * @param source  Source Code of a Javascript (Node JS) Language to be run
 * @param options Any extra options or spawn like arguments
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runNodeSource(soureCode: string, options?: Options): Promise<Result> {
	let filePath = await writeSourceFile('node', soureCode);
	return runNodeFile(filePath, options);
}
