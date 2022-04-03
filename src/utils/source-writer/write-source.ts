import * as fs from 'fs';
import * as path from 'path';

import { OUTPUT_PATH, SOURCE_CODE_PATH } from '../../constants';
import { LANGUAGES } from '../../constants/languages';
import { LanguageNameType } from '../../types/Extension';
import { getFileName } from './file-name';

export const dirCodes = SOURCE_CODE_PATH;

if (!fs.existsSync(dirCodes)) {
	fs.mkdirSync(dirCodes, { recursive: true });
}

if (!fs.existsSync(OUTPUT_PATH)) {
	fs.mkdirSync(OUTPUT_PATH, { recursive: true });
}

/**
 * 
 * @param lang Name of the language whose source file is to create
 * @param source Actual source code of the file
 * @returns Path of the generated source file
 */
export async function writeSourceFile(lang: LanguageNameType, source: string): Promise<string> {
	let ext = await getExtension(lang);
	const fileName = getFileName(ext);
	const filePath = path.join(dirCodes, fileName);
	await fs.writeFileSync(filePath, source);
	return filePath;
}

/**
 * 
 * @param lang Name of the language whose extension is to get
 * @returns Extension of the given language
 */
export function getExtension(lang: string): Promise<string> {
	return new Promise((resolve, reject) => {
		if (!Object.keys(LANGUAGES).includes(lang)) {
			reject('Please provide the valid programming language name!');
		}
		else {
			//@ts-ignore
			resolve(LANGUAGES[lang]);
		}
	});
}
