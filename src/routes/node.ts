import * as express from 'express';
import { NodeController } from '../controllers/node';

const router = express.Router();

/**
 * @api {post} /run Run Javascript (Node JS) language source code
 * @apiName RunJavascript
 * @ApiGroup Javascript (Node JS)
 * @apiBody {String} code      Source code of Javascript (Node JS) language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', NodeController);

export default router;
