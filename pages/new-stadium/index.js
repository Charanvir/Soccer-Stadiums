// domain.com/new-stadium
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import Head from 'next/head'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewStadiumPage = () => {
    const router = useRouter()
    const addStadiumHandler = async (enteredStadiumData) => {
        const response = await fetch('/api/new-stadium', {
            method: 'POST',
            body: JSON.stringify(enteredStadiumData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        console.log(data)

        router.push('/')
    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Stadium</title>
                <meta
                    name='description'
                    content='Add new stadiums to the database for everyone around the world to see'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addStadiumHandler}></NewMeetupForm>
        </Fragment>
    )
}

export default NewStadiumPage;