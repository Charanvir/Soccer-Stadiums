import classes from './MeetupDetail.module.css'

const MeetupDetail = (props) => {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title}></img>
            <h1>{props.title}</h1>
            <address><b>Address: </b>{props.address}</address>
            <p>{props.city}, {props.country}</p>
            <p><b>Teams: {props.teams}</b></p>
            <p><b>Capacity: </b>{props.capacity}</p>
            <p>{props.description}</p>
            <p><b>Date Opened: </b>{props.date_opened}</p>
        </section>
    )
}

export default MeetupDetail