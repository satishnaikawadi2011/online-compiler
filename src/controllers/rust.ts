import { formatStdin } from './../utils/format-stdin';
import { Request, Response } from 'express';
import { validateBody } from '../utils/validation';
import rust from '../languages/rust';

/**
 * 
 * @param req Express request object
 * @param res Express response object
 * @returns A response with specific status code 
 */
export const RustController = async (req: Request, res: Response) => {
	try {
		const { code, input } = req.body;
		validateBody(req, res);
		const stdin = formatStdin(input);

		// need to generate a rust file with content from the request
		const result = await rust.runSource(code, { stdin });
		return res.status(201).json({ result });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ success: false, error });
	}
};
