import express from 'express';
const Route = express.Router();

Route.get('/', (req, res) => res.render('index'));
Route.get('/tentang', (req, res) => res.render('tentang'));
Route.get('/artikel', (req, res) => res.render('artikel'));
Route.get('/artikel1', (req, res) => res.render('artikel_1'));
Route.get('/artikel2', (req, res) => res.render('artikel_2'));
Route.get('/artikel3', (req, res) => res.render('artikel_3'));
Route.get('/artikel4', (req, res) => res.render('artikel_4'));

export default Route;
