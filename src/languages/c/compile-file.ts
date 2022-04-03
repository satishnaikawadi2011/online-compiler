import * as path from 'path';
import { OUTPUT_PATH } from '../../constants';
import { execute } from '../../execute-command';
import { Options } from '../../types';
import { getExecutableExt } from '../../utils/executable/executable-ext';
import { getFileName } from '../../utils/source-writer';

/**
 * 
 * @param filePath Absolute path of the file to be compile
 * @param options Any extra options or arguments like in case of spawn
 * @returns Absolute path of the generated executable file
 */
export async function compileC(filePath: string, options?: Options): Promise<string> {
	let compileTimeout = (options && options.compileTimeout) || 3000;
	let executableExt = getExecutableExt();
	const compilationPath: string = 'g++';
	const compilerArgs: string = (options && options.compilerArgs) || '-lm';
	let executableName = getFileName(executableExt);
	let executablePath = path.join(OUTPUT_PATH, executableName);
	let res = await execute(
		compilationPath,
		[
			filePath,
			'-o',
			executablePath,
			compilerArgs
		],
		{ timeout: compileTimeout }
	);
	if (res.exitCode !== 0) {
		res.errorType = 'compile-time';
		throw res;
	}
	return executablePath;
}
