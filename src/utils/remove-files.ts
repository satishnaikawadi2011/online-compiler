import * as fs from 'fs';

/**
 * Function to remove files , given their paths
 * @param paths Array of strings containing paths to the files to be removed
 */
export const removeFiles = async (paths: string[]) => {
	paths.forEach(async (filePath) => {
		await fs.unlink(filePath, (err) => {
			if (err) {
				console.log(err);
			}
		});
	});
};
