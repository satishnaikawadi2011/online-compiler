import * as express from 'express';
import { PythonController } from '../controllers/python';

const router = express.Router();

/**
 * @api {post} /run Run Python language source code
 * @apiName RunPython
 * @ApiGroup Python
 * @apiBody {String} code      Source code of Python language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', PythonController);

export default router;
