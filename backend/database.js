const { MongoClient, ObjectId } = require('mongodb')
const uri = 'mongodb://127.0.0.1:27017/'

const getDb = () => {
    const client = new MongoClient(uri)
    const db = client.db('CryptoTrade')
    console.log('database connected')
    console.log("connecteds");
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
    show, add, drop, update, del, addcontactus
}

