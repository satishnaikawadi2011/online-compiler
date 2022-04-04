import { writeSourceFile } from '../../utils/source-writer';
import { Options } from '../../types';
import { compileCpp } from './compile-file';

/**
 * 
 * @param sourceCode Source Code of a C Language to be compiled
 * @param options Any extra options or spawn like arguments
 * @returns Array containing values as source filePath and related executable path
 */
export async function compileCppSource(sourceCode: string, options?: Options): Promise<string[]> {
	let filePath = await writeSourceFile('cpp', sourceCode);
	let executablePath = await compileCpp(filePath, options);
	return [
		filePath,
		executablePath
	];
}
