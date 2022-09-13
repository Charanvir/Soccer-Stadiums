// domain.com/
import MeetupList from '../components/meetups/MeetupList'

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'Old Trafford',
        image: 'https://dd20lazkioz9n.cloudfront.net/wp-content/uploads/2022/03/Copy-of-WP-News-story-template-2022-03-15T093911.099.jpg',
        address: 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, UK',
        description: 'The home stadium of one of Europes most prestige clubs, Manchester United.'
    },
    {
        id: 'm2',
        title: 'Santiago Bernabéu Stadium',
        image: 'https://www.spain.info/export/sites/segtur/.content/imagenes/cabeceras-grandes/madrid/estadio-bernabeu-vista-aerea-c-turismo-madrid.jpg',
        address: 'Av. de Concha Espina, 1, 28036 Madrid, Spain',
        description: 'The home stadium of Europes most successful and legendary club, Real Madrid'
    },
    {
        id: 'm3',
        title: 'Allianz Arena',
        image: 'https://s.bundesliga.com/assets/img/1100000/1098493_imgw968.jpg',
        address: 'Werner-Heisenberg-Allee 25, 80939 München, Germany',
        description: 'The home of Germanys largest and most successful club, Bayern Munich'
    },
]

const HomePage = (props) => {

    return (
        <MeetupList meetups={props.meetups}></MeetupList>
    )
}

// only works on page component files
export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    }
}

export default HomePage
