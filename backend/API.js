const express = require('express')
const nodemailer=require('nodemailer')
const body_parser = require('body-parser')
const cors = require('cors')
const { addcontactus,addsignup, show, add, drop, update,addfeedback, del,findEmail,Updatepass,checklogin } = require('./database.js')
const app = express()
app.use(cors())
app.use(body_parser.urlencoded({ extended: true }))
app.use(body_parser.json())
app.post('/contact', async (req, res) => {
    const data = req.body
    const response = await addcontactus(data)
    console.log("contactus added")
    res.send(response)
})
app.post('/login', async(req,res)=>{
  const data= req.body
  const response= await checklogin(data)
  console.log(response)
  res.send(response)
})
app.post('/feedback', async (req, res) => {
    const data = req.body
    const response = await addfeedback(data)
    console.log("feedback added")
    res.send(response)
})
app.post('/signup', async (req, res) => {
    const data = req.body
    const response = await addsignup(data)
    console.log("signup added")
    res.send(response)
})
app.post('/add', function (req, res) {

    const responseData = {

        transe: req.body.trans,
        ethie: req.body.ethi,
        msgs: req.body.msg,
    }
    console.log(responseData)
    add(responseData)
});

app.get('/show', async (req, res) => {
    const stu = await show()
    let list = []
    for await (let i of stu) {
        list.push(i)
    }
    res.send(list)

})

app.put('/update/:id', async (req, res) => {
    //res.send("put user calling")
    const data = req.body
    const result = await update(req.params.id, data)
    res.status(201)
    res.send("Updated Sucessfully")
})

app.delete('delete/:id', async (req, res) => {
    const result = await drop(req.params.id)
    res.send(result)
})

app.post('/del', async (req, res) => {
    const id = JSON.parse(req.body.s_id)
    id.forEach(async element => {
        await del(element)
    });
})

app.get('*', (req, res) => {
    res.status(404).send("URL not found")
})
var transporter= nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:"crypTrade1011@gmail.com",
      pass:"eywm ijom zgse rani"
    },
    tls:{
      rejectUnauthorized:false
    }
  })

  app.post('/forget',async(req,res)=>{
    const data=req.body
    const email= data.email
    const response=await findEmail(data)
    if(response===1){
    var mail={
      from:'crypTrade1011@gmail.com',
      to:email,
      subject:'Password reset',
      html:`<h1> Password reset mail:</h1> <br/> <p> Click on the link below to reset your password </p> <br/>
       <a href='http://localhost:3000/reset'> Link </a>`
    }
    transporter.sendMail(mail,function(error,info){
      if(error){
        console.log(error)
        res.send({done:"no"})
      }
      else{
        console.log("done")
        res.send({done:"yes"})
      }
    })
  }
  else{
    res.send({done:"no"})
  }
  })
  app.put('/reset/:i',async(req,res)=>{
    const data=req.body
    const data2=req.params.i
    const response= await Updatepass(data,data2)
    if(response===1){
    console.log("password updated")
    res.send({done:"yes"}) }
    else{
      console.log("error in updation")
      res.send({done:"no"})
    }
  })
app.listen(4001)
