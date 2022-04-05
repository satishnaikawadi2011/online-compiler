import * as path from 'path';
import { execute } from '../../execute-command';
import { Options, Result } from '../../types';
import { removeFiles } from '../../utils/remove-files';
import { compileJavaSource } from './compile-source';

/**
 * 
 * @param source  Source Code of a Java Language to be run
 * @param options Any extra options or spawn like arguments
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runJava(source: string, options?: Options): Promise<Result> {
	try {
		let classFilePath = await compileJavaSource(source, options);
		let classPath = path.dirname(classFilePath);
		let [
			className
		] = path.basename(classFilePath).split('.');
		const executionPath = 'java';
		let res = await execute(
			executionPath,
			[
				'-classpath',
				classPath,
				className
			],
			options
		);
		if (res.stderr) {
			res.errorType = 'run-time';
		}
		await removeFiles([
			classFilePath
		]);
		return res;
	} catch (err) {
		return err;
	}
}
