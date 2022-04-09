import * as express from 'express';
import { RubyController } from '../controllers/ruby';

const router = express.Router();

/**
 * @api {post} /run Run Ruby language source code
 * @apiName RunRuby
 * @ApiGroup Ruby
 * @apiBody {String} code      Source code of Ruby language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', RubyController);

export default router;
