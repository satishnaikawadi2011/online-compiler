import { formatStdin } from './../utils/format-stdin';
import { Request, Response } from 'express';
import { validateBody } from '../utils/validation';
import java from '../languages/java';

/**
 * 
 * @param req Express request object
 * @param res Express response object
 * @returns A response with specific status code 
 */
export const JavaController = async (req: Request, res: Response) => {
	try {
		const { code, input } = req.body;
		validateBody(req, res);
		const stdin = formatStdin(input);

		const result = await java.runJava(code, { stdin });
		return res.status(201).json({ result });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, error });
	}
};
