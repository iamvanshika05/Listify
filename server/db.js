// const {Client} = require('pg')
const Pool  = require("pg").Pool;


const pool= new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"root",
    database:"PERNprac"
})


module.exports = pool;