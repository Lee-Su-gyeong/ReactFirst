const express = require('express');
const app = express();
const port = 3000;
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const {User}=require("./models/User");
const config=require('./config/key')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mogooseDB conneted...')).catch(err=>console.log(err))
// MongooseServerSelectionError 오류 해결 몽고 db 사이트에 adddress에 0.0.0.0 하기 https://www.inflearn.com/questions/29435

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World! 나는 이수경이야')
})

//회원 가입할때 필요한 정보들을 clint에서 가져오면 그것들을 데이터베이스에 넣어준다.

app.post("/register", (req, res) => {

  const user = new User(req.body);
  
  user.save((err, userInfo) => {

    if (err) return res.json({ success: false, err });

    return res.status(200).json({
      success: ture

    });

  });

});

app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`);

});