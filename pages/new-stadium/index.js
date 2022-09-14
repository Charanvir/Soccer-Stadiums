// domain.com/new-stadium
import { useRouter } from 'next/router'
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
        <NewMeetupForm onAddMeetup={addStadiumHandler}></NewMeetupForm>
    )
}

export default NewStadiumPage;