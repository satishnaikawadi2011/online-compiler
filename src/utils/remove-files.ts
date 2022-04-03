import * as fs from 'fs';

export const removeFiles = async (executablePath: string, filePath: string) => {
	await fs.unlink(executablePath, (err) => {
		if (err) {
			console.log(err);
		}
	});
	await fs.unlink(filePath, (err) => {
		if (err) {
			console.log(err);
		}
	});
};
