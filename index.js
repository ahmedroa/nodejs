const express = require('express');

const app = express()

const mongoose = require('mongoose');

const Article = require('./Models/Article');

let kay = '';
mongoose.connect(kay).then(() =>{
   console.log('Connected Successfully')
}).catch(() =>{
   console.log('error  with connecting with the DB')
})
app.use(express.json());

app.get('/' , (req, res)=> {

res.send('Hello')
})
app.get('/numbers' , (req, res)=> {
   let numbers = '';
   for (let i = 0; i <= 100; i++){
      numbers += i + ' - ';
   }
//    res.sendFile(__dirname + '/pages/numbers.html')
// res.send(__dirname + '/pages/numbers.html')
res.render('numbers.ejs')

console.log(numbers)
})
app.get('/fbressd' , (req, res)=> {
res.send('Hello')
})
app.get('/findSum/:number1/:number2' , (req, res)=> {
   const num1 = req.params.number1;
   const num2 = req.params.number2;
   console.log(req.params)
res.send('thr numbers are: ${mum1} / ${mum2}')
})

app.get('/hbvgcvffi' , (req, res)=> {
res.send('hfdsi')
})
 app.post('/commit', (req,res) => {
    res.send('Post request on add commit')
 })
 app.post('/Article', async (req,res) => {
   const newArticle = new Article()
   const artTitle = req.body.ArticleTitle
   const artBody  = req.body.ArticleBody
   // res.send(artTitle + " " + artBody);
   // return ;
 
   newArticle.titl = artTitle
   newArticle.body = artBody
   newArticle.numberOfLikes = 100
  await newArticle.save()
    res.send('Post request on add commit')
 })
 app.delete('/delete', (req,res) => {
    res.send('Post request on add commit')
 })

app.get("/Articles", async (req, res) =>{
 const articles = await Article.find(); 
 console.log('the Article Are : ', articles );
 res.json(articles);
} );
app.listen(3000, ()=> { 
    console.log('Hello word')
})
