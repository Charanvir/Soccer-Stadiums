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
                <title>Stadiums Around the World</title>
                <meta
                    name='description'
                    content='Browse stadiums from all over the world, including some of the biggest and most famous, such as Camp Nou and Old Trafford.'
                />
            </Head>
            <NewMeetupForm onAddMeetup={addStadiumHandler}></NewMeetupForm>
        </Fragment>
    )
}

export default NewStadiumPage;