import { Options, Result } from '../../types';
import { execute } from '../execute-command';

/**
 * 
 * @param filePath Path of the executable to be running
 * @param options spawn like arguments or options
 * @returns result coming from a execute function
 */
export async function runExecutable(filePath: string, options?: Options): Promise<Result> {
	let res = await execute(filePath, options);
	if (res.signal === 'SIGSEGV') {
		//probably seg fault and other memory/pagination issues
		res.errorType = 'run-time';
	}
	else if (res.signal === 'SIGTERM') {
		//probably timeout or killed by SO somehow
		res.errorType = 'run-timeout';
	}
	return res;
}
