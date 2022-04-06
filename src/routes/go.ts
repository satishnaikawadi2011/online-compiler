import * as express from 'express';
import { GoController } from '../controllers/go';

const router = express.Router();

/**
 * @api {post} /run Run Go language source code
 * @apiName RunGo
 * @ApiGroup Go
 * @apiBody {String} code      Source code of Go language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', GoController);

export default router;
