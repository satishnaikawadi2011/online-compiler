import * as path from 'path';
import { OUTPUT_PATH } from '../../constants';
import { execute } from '../../execute-command';
import { Options } from '../../types';

/**
 * 
 * @param filePath Absolute path of the file to be compile
 * @param options Any extra options or arguments like in case of spawn
 * @returns Absolute path of the generated executable file
 */
export async function compileJava(filePath: string, options?: Options): Promise<string> {
	filePath = path.resolve(filePath);
	const outputPath = path.resolve(OUTPUT_PATH);
	const compilationPath: string = 'javac';
	let res = await execute(
		compilationPath,
		[
			'-d',
			outputPath,
			filePath
		],
		{
			timeout: (options && options.compileTimeout) || 3000
		}
	);
	if (res.exitCode !== 0) {
		res.errorType = 'compile-time';
		throw res;
	}
	let basename = path.basename(filePath);
	let [
		fileBaseName
	] = basename.split('.');
	let classFilePath = path.join(outputPath, `${fileBaseName}.class`);
	return classFilePath;
}
