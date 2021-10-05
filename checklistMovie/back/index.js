import express, { json } from 'express';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());

import FilmesRoutes from '/routes/filmes.routes';

app.use('/filmes', FilmesRoutes);


app.get('/', (_req)=>{
    console.info('Seja bem vind@ à minha lista de Filmes Favoritos!');
})


const port = 3000;

app.listen(port, ()=>{
    console.info(`O servidor está rodando no endereço: http://localhost:${port}/`);
})