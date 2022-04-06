import { writeSourceFile } from '../../utils/source-writer/write-source';
import { Options } from '../../types';
import { compileRust } from './compile-file';

/**
 * 
 * @param sourceCode Source Code of a Rust Language to be compiled
 * @param options Any extra options or spawn like arguments
 * @returns Array containing values as source filePath and related executable path
 */
export async function compileRustSource(sourceCode: string, options?: Options): Promise<string[]> {
	let filePath = await writeSourceFile('rust', sourceCode);
	let executablePath = await compileRust(filePath, options);
	return [
		filePath,
		executablePath
	];
}
