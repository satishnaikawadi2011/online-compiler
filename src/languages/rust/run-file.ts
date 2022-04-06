import { Options, Result } from '../../types';
import { runExecutable } from '../../utils/executable/execute-executable';

/**
 * 
 * @param executablePath Path to the executable file to be run
 * @param options Any extra options or spawn like arguments
 * @returns Result object containing all the info like stdout,stderr,etc.
 */
export async function runRustFile(executablePath: string, options?: Options): Promise<Result> {
	try {
		const res = await runExecutable(executablePath, options);
		return res;
	} catch (err) {
		return err;
	}
}
