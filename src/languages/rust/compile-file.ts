import { Options } from './../../types/options';
import * as path from 'path';
import * as fs from 'fs';
import { OUTPUT_PATH } from '../../constants';
import { execute } from '../../execute-command';
import { getExecutableExt } from '../../utils/executable/executable-ext';
import { getFileName } from '../../utils/source-writer';

const outputPath = OUTPUT_PATH;

if (!fs.existsSync(outputPath)) {
	fs.mkdirSync(outputPath, { recursive: true });
}

/**
 * 
 * @param filePath Absolute path of the file to be compile
 * @param options Any extra options or arguments like in case of spawn
 * @returns Absolute path of the generated executable file
 */
export async function compileRust(filePath: string, options?: Options): Promise<string> {
	let compileTimeout = (options && options.compileTimeout) || 3000;
	let executableExt = getExecutableExt();
	const compilationPath: string = 'rustc';
	let executableName = getFileName(executableExt);
	let executablePath = path.join(outputPath, executableName);
	let res = await execute(
		compilationPath,
		[
			filePath,
			'-o',
			executablePath
		],
		{ timeout: compileTimeout }
	);
	if (res.exitCode !== 0) {
		res.errorType = 'compile-time';
		throw res;
	}
	return executablePath;
}
