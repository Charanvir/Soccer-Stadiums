// domain.com/[stadiumId]
import MeetupDetail from "../../components/meetups/MeetupDetail"

const StadiumDetails = (props) => {
    return (
        <MeetupDetail
            image='https://dd20lazkioz9n.cloudfront.net/wp-content/uploads/2022/03/Copy-of-WP-News-story-template-2022-03-15T093911.099.jpg'
            title='Old Trafford'
            address='Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, UK'
            description='The home stadium of one of Europes most prestige clubs, Manchester United.'
        ></MeetupDetail>
    )
}

export async function getStaticPaths() {
    // when using a backend with a database, you would fetch all of the ids within the database
    return {
        // paths contains all of the possible values
        fallback: false,
        paths: [
            {
                params: {
                    stadiumId: 'm1'
                }
            },
            {
                params: {
                    stadiumId: 'm2'
                }
            },
            {
                params: {
                    stadiumId: 'm3'
                }
            },
        ]
    }
}

export async function getStaticProps(context) {
    const stadiumId = context.params

    return {
        props: {
            stadiumData: {
                image: 'https://dd20lazkioz9n.cloudfront.net/wp-content/uploads/2022/03/Copy-of-WP-News-story-template-2022-03-15T093911.099.jpg',
                title: 'Old Trafford',
                address: 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester M16 0RA, UK',
                description: 'The home stadium of one of Europes most prestige clubs, Manchester United.',
                id: stadiumId
            }
        }
    }
}

export default StadiumDetails