// domain.com/new-stadium
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const NewStadiumPage = () => {
    const addStadiumHandler = (enteredStadiumData) => {
        console.log(enteredStadiumData)
    }

    return (
        <NewMeetupForm onAddMeetup={addStadiumHandler}></NewMeetupForm>
    )
}

export default NewStadiumPage;