import * as express from 'express';
import { CppController } from '../controllers/cpp';

const router = express.Router();

/**
 * @api {post} /run Run Cpp language source code
 * @apiName RunCpp
 * @ApiGroup Cpp
 * @apiBody {String} code      Source code of C language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', CppController);

export default router;
