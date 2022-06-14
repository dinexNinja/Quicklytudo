import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import usuariocontroll from './controller/usuarioController.js'
import comandascontroll from './controller/comandasController.js'

const server = express();
server.use(cors());
server.use(express.json());

server.use(usuariocontroll);
server.use(comandascontroll);

server.listen(process.env.PORT, () => console.log(`API NA PORTA ${process.env.PORT}`));