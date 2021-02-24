const express = require('express')
const app = express()
const port = 5000

const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://sugyeong:tn340115@boilerplate.m7pik.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(()=>console.log('mogooseDB conneted...')).catch(err=>console.log(err))
//MongooseServerSelectionError 오류 해결 몽고db사이트에 adddress에 0.0.0.0하기 https://www.inflearn.com/questions/29435


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})