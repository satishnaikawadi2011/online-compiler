import * as express from 'express';
import { JavaController } from '../controllers/java';

const router = express.Router();

/**
 * @api {post} /run Run Java language source code
 * @apiName RunJava
 * @ApiGroup Java
 * @apiBody {String} code      Source code of Java language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', JavaController);

export default router;
