import * as crypto from 'crypto';

/**
 * 
 * @param ext Extension for the file being created
 * @returns Randomly generated file name
 */

export function getFileName(ext?: string): string {
	const rand = crypto.pseudoRandomBytes(16).toString('hex');
	const ts = new Date().getTime();
	if (ext) {
		return `source-${rand}-${ts}.${ext}`;
	}
	else {
		return `source-${rand}-${ts}`;
	}
}
