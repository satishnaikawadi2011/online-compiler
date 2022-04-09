import * as express from 'express';
import { ElixirController } from '../controllers/elixir';

const router = express.Router();

/**
 * @api {post} /run Run Elixir language source code
 * @apiName RunElixir
 * @ApiGroup Elixir
 * @apiBody {String} code      Source code of Elixir language to be run
 * @apiBody {Array} [input]    Optional array of strings as a input parameters for 
 * given source code
 */
router.post('/run', ElixirController);

export default router;
