import { MongoClient } from "mongodb";

// define functions that define server side code
// do not add React components here because these functions will be triggered on request for APIS

// /api/new-statidum

const handler = async (req, res) => {
    if (req.method === "POST") {
        const data = req.body

        const client = await MongoClient.connect('mongodb+srv://charanvir123:Capsfan123@cluster0.qluddrx.mongodb.net/stadiums?retryWrites=true&w=majority')
        const db = client.db()

        const stadiumCollections = db.collection('stadium')
        const result = await stadiumCollections.insertOne(data);

        console.log(result);

        client.close()

        res.status(201).json({ message: 'Stadium inserted' })
    }
}

export default handler