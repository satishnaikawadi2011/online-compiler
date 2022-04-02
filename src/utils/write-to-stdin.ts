import { ChildProcess } from 'child_process';

/**
 * 
 * @param proc Child process to whose stdin we have to write
 * @param stdin Actual stdin content to be written
 */
export function writeToStdin(proc: ChildProcess, stdin: string): void {
	if (stdin && proc.stdin) {
		proc.stdin.on('error', (err) => {
			// Ignore input if stream is already closed
			console.log(err);
			return;
		});
		proc.stdin.write(stdin + '\r\n', (err) => {
			if (!err) {
				proc.stdin!.end();
			}
		});
	}
}
