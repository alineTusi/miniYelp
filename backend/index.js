import express from 'express';
import db from "./controller/pg_controller.js";
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 8080;

app.get('/cities', (req, res) => {
    db.getCities()
    .then((data) => {res.json(data)})
    .catch((err) => {
        res.status(400).send({error: err.message})
    })
})

app.get('/cities/:id', (req, res) => {
    const {id} = req.params;
    db.getCityById(id)
    .then((data) => {res.json(data)})
    .catch((err) => {
        res.status(400).send({error: err.message})
    })
});

app.get('/restaurants', (req, res) => {
    db.getRestaurants()
    .then((data) => {res.json(data)})
    .catch((err) => {
        res.status(400).send({error: err.message})
    })
})

app.get('/restaurants/:id', (req, res) => {
    const {id} = req.params;
    db.getRestaurantById(id)
    .then((data) => {res.json(data)})
    .catch((err) => {
        res.status(400).send({error: err.message})
    })
});

app.get('/tags', (req, res) => {
    db.getTags()
    .then((data) => {res.json(data)})
    .catch((err) => {
        res.status(400).send({error: err.message})
    })
})

app.get('/tags/:id', (req, res) => {
    const {id} = req.params;
    db.getTagById(id)
    .then((data) => {res.json(data)})
    .catch((err) => {
        res.status(400).send({error: err.message})
    })
});

app.listen(port, () => console.log('Server listening at ' + port));