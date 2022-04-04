import * as express from 'express';
import * as cors from 'cors';
import CRouter from './routes/c';
import CppRouter from './routes/cpp';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/c', CRouter);
app.use('/api/cpp', CppRouter);

const PORT = (process.env.PORT as any) || 4000;
app.listen(PORT, () => console.log(`Successfully running at http://localhost:${PORT}`));
