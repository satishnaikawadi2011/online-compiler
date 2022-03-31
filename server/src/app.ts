import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = 4000;

app.listen(PORT, () => console.log(`Successfully running at http://localhost:${PORT}`));
