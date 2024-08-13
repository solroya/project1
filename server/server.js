import { fileURLToPath } from "url";
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const __filename = fileURLToPath(import.meta.url); 

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import userRouter from "./routes/userRoutes.js"

const app = express()
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json()); //json 포맷 인식

// route : .get(): 받기, .post(): 보내기, .put(): 보내서 부분 수정, .delete() : 보내서 삭제
// RESTful API : REpresentational (대표성 있는 방식으로 요청 URL을 생성하는 규칙)

app.use("/", userRouter);

//es6 : import(가져오기), export(내보내기)
//commonJS : require(가져오기), module.exports 또는 exports (내보내기)

const setting = {
  app,
  port
}
export default setting;