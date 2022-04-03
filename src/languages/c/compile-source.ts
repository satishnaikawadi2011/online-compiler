import { Options } from '../../types';
import { writeSourceFile } from '../../utils/source-writer';
import { compileC } from './compile-file';

/**
 * 
 * @param sourceCode Source Code of a C Language to be compiled
 * @param options Any extra options or spawn like arguments
 * @returns Array containing values as source filePath and related executable path
 */
export async function compileCSource(sourceCode: string, options?: Options): Promise<string[]> {
	let filePath = await writeSourceFile('c', sourceCode);
	let executablePath = await compileC(filePath, options);
	return [
		filePath,
		executablePath
	];
}
