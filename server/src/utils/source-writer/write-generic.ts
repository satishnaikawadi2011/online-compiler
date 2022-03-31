import * as fs from 'fs';

/**
 * 
 * @param filePath Path of the file to be written
 * @param source Source code of the given file
 * @returns Path of the generated file
 */
export async function writeSourceFileGeneric(filePath: string, source: string): Promise<string> {
	await fs.writeFileSync(filePath, source);
	return filePath;
}
