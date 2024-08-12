import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url); 

import express from "express";
import mariadb from "mariadb"
import dotenv from "dotenv";
dotenv.config();

const app = express()

app.use(express.json()); //json 포맷 인식
// route : .get(): 받기, .post(): 보내기, .put(): 보내서 부분 수정, .delete() : 보내서 삭제
// RESTful API : REpresentational (대표성 있는 방식으로 요청 URL을 생성하는 규칙)
app.get('/', function (req, res) {
  // res.send('<h1>Hello World</h1>')
  // console.log(__dirname);
  res.sendFile(__dirname+"/public/index.html");
})

// db connection
const pool = mariadb.createPool({
  host: process.env.DB_HOST, 
  user: process.env.DB_USER, 
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  connectionLimit: 5
});

app.get('/getAllUsers', function (req, res) {
  pool.getConnection()
    .then(conn => {
      console.log("====================MariaDB is connected! ========================");
      conn.query("SELECT * FROM users")
        .then((rows) => {
          res.status(200).json(rows);
          return conn.end();  // res 응답객체에서 제공하는 .json()메소드로 데이터를 전송
          // return conn.end(); // 또다른 요청에 응답하기 위해 한번 요청처리하면 접속 끊기
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      console.log(err); // DB 연결시 에러가 발생되면, 에러 출력
    });
})

app.listen(3000)