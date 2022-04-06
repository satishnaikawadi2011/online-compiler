import * as express from 'express';
import * as cors from 'cors';
import CRouter from './routes/c';
import CppRouter from './routes/cpp';
import JavaRouter from './routes/java';
import PythonRouter from './routes/python';
import NodeRouter from './routes/node';
import GoRouter from './routes/go';
import RustRouter from './routes/rust';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/c', CRouter);
app.use('/api/cpp', CppRouter);
app.use('/api/java', JavaRouter);
app.use('/api/python', PythonRouter);
app.use('/api/node', NodeRouter);
app.use('/api/go', GoRouter);
app.use('/api/rust', RustRouter);

const PORT = (process.env.PORT as any) || 4000;
app.listen(PORT, () => console.log(`Successfully running at http://localhost:${PORT}`));
