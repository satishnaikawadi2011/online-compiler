import * as express from 'express';
import { RustController } from '../controllers/rust';

const router = express.Router();

/**
 * @api {post} /run Run Rust language source code
 * @apiName RunRust
 * @ApiGroup Rust
 * @apiBody {String} code      Source code of Rust language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', RustController);

export default router;
