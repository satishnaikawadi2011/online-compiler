import { Request, Response } from 'express';
import { validateBody } from '../utils/validation';
import cpp from '../languages/cpp';
import { formatStdin } from '../utils/format-stdin';

/**
 * 
 * @param req Express request object
 * @param res Express response object
 * @returns A response with specific status code 
 */
export const CppController = async (req: Request, res: Response) => {
	try {
		const { code, input } = req.body;
		validateBody(req, res);
		const stdin = formatStdin(input);

		// need to generate a C++ file with content from the request
		const result = await cpp.runCppSource(code, { stdin });
		return res.status(201).json({ result });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, error });
	}
};
