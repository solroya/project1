import setting from "../server.js";

const {app, port} = setting;

app.listen(3000, ()=> {
    console.log("Server is runnung on port 3000");
  })