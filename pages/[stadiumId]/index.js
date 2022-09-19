import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head"
import { Fragment } from "react"
// domain.com/[stadiumId]
import MeetupDetail from "../../components/meetups/MeetupDetail"

const StadiumDetails = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.stadiumData.title}</title>
                <meta
                    name='description'
                    content={props.stadiumData.description}
                />
            </Head>
            <MeetupDetail
                image={props.stadiumData.image}
                title={props.stadiumData.title}
                address={props.stadiumData.address}
                description={props.stadiumData.description}
            ></MeetupDetail>
        </Fragment>
    )
}

// this will return all of the possible ids that are available for users to click
export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://charanvir123:Capsfan123@cluster0.qluddrx.mongodb.net/stadiums?retryWrites=true&w=majority')
    const db = client.db()

    const stadiumCollections = db.collection('stadium')

    const stadiums = await stadiumCollections.find({}, { _id: 1 }).toArray()
    // when using a backend with a database, you would fetch all of the ids within the database

    client.close();

    return {
        // paths contains all of the possible values
        fallback: 'blocking',
        paths: stadiums.map(stadium => ({ params: { stadiumId: stadium._id.toString() } }))
    }
}

export async function getStaticProps(context) {
    const stadiumId = context.params.stadiumId

    const client = await MongoClient.connect('mongodb+srv://charanvir123:Capsfan123@cluster0.qluddrx.mongodb.net/stadiums?retryWrites=true&w=majority')
    const db = client.db()

    const stadiumCollections = db.collection('stadium')

    const stadium = await stadiumCollections.findOne({ _id: ObjectId(stadiumId) })
    // when using a backend with a database, you would fetch all of the ids within the database

    client.close();

    return {
        props: {
            stadiumData: {
                id: stadium._id.toString(),
                title: stadium.title,
                image: stadium.image,
                address: stadium.address,
                description: stadium.description
            }
        }
    }
}

export default StadiumDetails