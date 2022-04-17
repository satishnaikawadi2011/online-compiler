import client from './client';

export interface ResponseDataType {
	stderr: string;
	stdout: string;
	exitCode: number;
	signal?: any;
	memoryUsage: number;
	cpuUsage: number;
}

const runSourceCode = (language: string, sourceCode: string, input: any[]) => {
	return client.post(`${language}/run`, { code: sourceCode, input, language });
};

export default {
	runSourceCode
};
