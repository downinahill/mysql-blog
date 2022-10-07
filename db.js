import mysql from 'mysql'

export const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "OnTheBus23!@#$",
    database: "blog"
})