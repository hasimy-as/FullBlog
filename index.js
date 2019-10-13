import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';

import Route from './routes/router';

const PORT = 3001 || process.env.PORT;
const server = express();

server.set('views', path.join(__dirname, 'views'));
server.set('view engine', 'ejs');

server.use(cookieParser());

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(express.static(path.join(__dirname, 'public')));

server.use('/', Route);

//deklarasi server
server.listen(PORT, err => {
  if (err) throw err;
  console.info(`Terkoneksi di ${PORT}!`);
});
