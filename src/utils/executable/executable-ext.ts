import * as os from 'os';

/**
 * 
 * @returns Extension of executable file depending on type of OS
 */
export function getExecutableExt(): string {
	if (os.type() === 'Windows_NT') {
		return 'exe';
	}
	else {
		return 'out';
	}
}
