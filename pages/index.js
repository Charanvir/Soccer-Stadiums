// domain.com/
import { MongoClient } from 'mongodb'
import MeetupList from '../components/meetups/MeetupList'

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.stadiums}></MeetupList>
    )
}

// only works on page component files
export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://charanvir123:Capsfan123@cluster0.qluddrx.mongodb.net/stadiums?retryWrites=true&w=majority')
    const db = client.db()

    const stadiumCollections = db.collection('stadium')

    const stadiums = await stadiumCollections.find().toArray()

    client.close();

    return {
        props: {
            stadiums: stadiums.map(stadium => ({
                title: stadium.title,
                address: stadium.address,
                image: stadium.image,
                id: stadium._id.toString()
            }))
        },
        revalidate: 60
    }
}


//////// SERVER SIDE RENDERING
// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res


//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export default HomePage
