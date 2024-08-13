import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url); 

import express from "express";
import cors from "cors"

const app = express()
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json()); //json 포맷 인식
// route : .get(): 받기, .post(): 보내기, .put(): 보내서 부분 수정, .delete() : 보내서 삭제
// RESTful API : REpresentational (대표성 있는 방식으로 요청 URL을 생성하는 규칙)
app.get('/', function (req, res) {
  // res.send('<h1>Hello World</h1>')
  // console.log(__dirname);
  res.sendFile(__dirname+"/public/index.html");
})



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
        .catch(err => {
          //handle error
          console.log(err); 
          conn.end();
        })
        
    }).catch(err => {
      console.log(err); // DB 연결시 에러가 발생되면, 에러 출력
    });
})

//es6 : import(가져오기), export(내보내기)
//commonJS : require(가져오기), module.exports 또는 exports (내보내기)

const setting = {
  app,
  port
}
export default setting;