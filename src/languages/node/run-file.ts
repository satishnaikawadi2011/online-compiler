import * as path from 'path';
import { execute } from '../../execute-command';
import { Options, Result } from '../../types';
import { removeFiles } from '../../utils/remove-files';

/**
 * 
 * @param filePath Absolute path of the file to be run
 * @param options Any extra options or arguments like in case of spawn
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runNodeFile(filePath: string, options?: Options): Promise<Result> {
	//Make the path absolute
	filePath = path.resolve(filePath);
	const executionPath = 'node';
	let res = await execute(
		executionPath,
		[
			filePath
		],
		options
	);
	if (res.exitCode != 0) {
		res.errorType = 'run-time';
	}
	await removeFiles([
		filePath
	]);
	return res;
}
