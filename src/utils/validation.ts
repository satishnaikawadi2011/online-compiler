import { Request, Response } from 'express';
import { LANGUAGES } from '../constants/languages';

/**
 * 
 * @param req Express request object
 * @param res Express response object
 */
export const validateBody = (req: Request, res: Response) => {
	const { language, code, input } = req.body;
	if (input && !Array.isArray(input)) {
		return res.status(400).json({ success: false, error: 'Please provide the input in the foem of array!' });
	}

	if (!code) {
		return res.status(400).json({ success: false, error: 'Code body is required!' });
	}

	if (!language || !Object.keys(LANGUAGES).includes(language)) {
		return res
			.status(400)
			.json({ success: false, error: 'Please mention the valid name for programming language used!' });
	}
	return;
};
