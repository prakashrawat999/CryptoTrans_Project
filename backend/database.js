const { MongoClient} = require('mongodb')
const uri ='mongodb://127.0.0.1:27017/'
const getDb = () => {
    const client = new MongoClient(uri)
    const db = client.db('CrypTrade')
    console.log('database connected')
    console.log("connecteds");
    return db
}
const getCollection = async (collname) => {
    const db = await getDb()
    const users = await db.collection(collname)
    return users
}
const addcontactus=async (object)=>{   
    const collname=await getCollection('ContactUs') 
    return await collname.insertOne(object)
}
module.exports={ addcontactus}