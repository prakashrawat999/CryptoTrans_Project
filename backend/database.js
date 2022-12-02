const { MongoClient, ObjectId } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017/'

const getDb = () => {
    const client = new MongoClient(uri)
    const db = client.db('CryptoTrade')
    console.log('database connected')
    return db
}
const getCollection = async (collname) => {
    const db = await getDb()
    const users = await db.collection(collname)
    return users
}
const addcontactus = async (object) => {
    const collname = await getCollection('ContactUs')
    return await collname.insertOne(object)
}
const addsignup = async (object) => {
    const collname = await getCollection('Usersignup')
    const check= await collname.findOne({email:object.email})
    if(check===null){
        return await collname.insertOne(object)
    }
    else{
        return({acknowledged:false})
    }
}
const checklogin= async(object)=>{
    const collname= await getCollection("Usersignup")
    const see= await collname.findOne({email:object.email,password:object.password});
    return(see)
}
const Updatepass=async(obj,mail)=>{
    const email=mail
    const password=obj.password
    const collname= await getCollection('Usersignup')
    const ans= await collname.updateOne({email:email},{$set:{password:password}})
    if(ans.acknowledged===true){
        return 1;
    }
    else{
        return 0;
    }
}
const findEmail=async(object)=>{
    const collname=await getCollection('Usersignup')
    const data= await collname.findOne({email:object.email})
    if(data!=null){
        return 1;
    }
    else{
        return 0;
    }
}
const findEmailreset=async(object)=>{
    const collname=await getCollection('Usersignup')
    const data= await collname.findOne({email:object})
    if(data!=null){
        return 1;
    }
    else{
        return 0;
    }
}
const addfeedback = async (object) => {
    const collname = await getCollection('feedbacks')
    return await collname.insertOne(object)
}

//CrMughav@1017 pass of crypTrade1011@gmail.com pass: eywm ijom zgse rani
const show = async () => {
    const collName = await getCollection('transaction')
    const col = await collName.find()
    return col
}

const add = async (object) => {
    const collName = await getCollection('transaction')
    collName.insertOne(object)
}


const drop = async (id) => {
    const collName = await getCollection('transaction')
    return await collName.deleteOne({ _id: ObjectId(id) })
}


const update = async (id, object) => {
    const collName = await getCollection('transaction')
    return await collName.findOneAndUpdate({ _id: ObjectId(id) }, { $set: object })
}

const del = async (id) => {
    const collName = await getCollection('transaction')
    return await collName.deleteMany({ _id: ObjectId(id) })
}

module.exports = {
    show, add, drop, update, del, addcontactus,addsignup,addfeedback, findEmail,findEmailreset, Updatepass,checklogin
}

