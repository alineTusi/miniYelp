import { config } from 'dotenv'; 
config();
import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: true,
    ssl: { rejectUnauthorized: false },
})

async function getCities() {
    return pool.query(`SELECT id, name FROM city`)
        .then((data) => {
            return data.rows;
        })
}

async function getCityById(id) {
    const data = await pool.query('SELECT id, name FROM city WHERE id=$1;', [id]);
    return (data.rows);
}

async function getTags() {
    return pool.query(`SELECT id, name FROM tag`)
        .then((data) => {
            return data.rows;
        })
}

async function getTagById(id) {
    const data = await pool.query('SELECT id, name FROM tag WHERE id=$1;', [id]);
    data.rows[0].restaurants = await getRestaurantsByTagId(id);
    return (data.rows);
}

async function getRestaurants() {
    return pool.query(`SELECT id, name, picture, city_id FROM restaurant`)
        .then((data) => {
            return data.rows;
        })
}

async function getRestaurantById(id) {
    const data = await pool.query('SELECT r.id, r.name, r.picture, r.city_id FROM restaurant r WHERE r.id=$1;', [id]);
    data.rows[0].comments = await getCommentsByRestaurantId(id);
    return (data.rows);
}

async function getCommentsByRestaurantId(id) {
    const data = await pool.query('SELECT c.text, c.date FROM comment c WHERE c.restaurant_id=$1;', [id]);
    return (data.rows);
}

async function getRestaurantsByTagId(id) {
    const data = await pool.query('SELECT r.id, r.name, r.picture, r.city_id FROM restaurant r, restaurant_has_tags rt WHERE rt.id_restaurant = r.id AND rt.id_tag=$1;', [id]);
    return (data.rows);
}

export default {
    getCities, getRestaurants, getTags, getCityById, getRestaurantById, getTagById
}