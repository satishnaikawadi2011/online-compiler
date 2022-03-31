import { Readable } from 'stream';

/**
 * 
 * @param stream Stream to be converted to string
 * @returns Converted string
 */
export async function streamDataToString(stream: Readable): Promise<string> {
	return new Promise<string>((res, rej) => {
		try {
			let data = '';
			stream.on('data', (chunk) => {
				data += chunk;
			});
			stream.on('end', () => {
				res(data);
			});
		} catch (err) {
			rej(err);
		}
	});
}
