import { useEffect, useState } from 'react'
import EventCard from './EventCard'

function Events(){
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then(eventData => setEvents(eventData))
    },[])

    //PPV Filter and Card Mapping
    const filteredEvents = events.filter(event => event.program === 'ppv')
    const eventCards = filteredEvents.map((event) => <EventCard event={event} key={event.id}/>)
    

    return(
        <div>
            <h1>Events</h1>
            {eventCards}
        </div>
    )
}

export default Events