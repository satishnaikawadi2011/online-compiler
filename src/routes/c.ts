import * as express from 'express';
import { CController } from '../controllers/c';

const router = express.Router();

/**
 * @api {post} /run Run C language source code
 * @apiName RunC
 * @ApiGroup C
 * @apiBody {String} code      Source code of C language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', CController);

export default router;
