import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"jesusmaryjoseph3",
    database:"altar-serving-master"
})

app.listen(8800, () => {
    console.log("Connected to backend successfully")
})