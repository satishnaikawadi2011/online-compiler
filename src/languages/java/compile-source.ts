import { SOURCE_CODE_PATH } from '../../constants';
import { writeSourceFileGeneric } from '../../utils/source-writer/write-generic';
import * as path from 'path';
import { compileJava } from './compile-file';
import { Options } from '../../types';

/**
 * 
 * @param source Source Code of a Java Language to be compiled
 * @param options Any extra options or spawn like arguments
 * @returns  class file path (.class) of the related (.java) source file
 */
export async function compileJavaSource(source: string, options?: Options): Promise<string> {
	let publicClass;
	try {
		publicClass = getPublicClassName(source);
	} catch (err) {
		return err;
	}
	let fileName = `${publicClass}.java`;
	let filePath = path.join(SOURCE_CODE_PATH, fileName);
	await writeSourceFileGeneric(filePath, source);
	//compile
	return compileJava(filePath, options);
}

/**
 * 
 * @param source Source Code of a Java Language to be compiled
 * @returns Name of public class from a java source code file
 */
function getPublicClassName(source: string): string {
	const re = /public\sclass\s([A-Za-z0-9]+)\s*{/gm;
	let res = re.exec(source);
	if (res) {
		return res[1];
	}
	else {
		throw {
			stdout: '',
			stderr: 'Invalid public class',
			exitCode: 3,
			errorType: 'pre-compile-time'
		};
	}
}
