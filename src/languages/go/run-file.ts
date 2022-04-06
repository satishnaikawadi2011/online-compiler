import * as path from 'path';
import { execute } from '../../execute-command';
import { Options, Result } from '../../types';

/**
 * 
 * @param filePath Absolute path of the file to be run
 * @param options Any extra options or arguments like in case of spawn
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runGoFile(filePath: string, options?: Options): Promise<Result> {
	//Make the path absolute
	filePath = path.resolve(filePath);
	const executionPath = 'go';
	let res = await execute(
		executionPath,
		[
			'run',
			filePath
		],
		options
	);
	if (res.exitCode != 0) {
		res.errorType = 'run-time';
	}
	return res;
}
