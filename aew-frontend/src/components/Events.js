import { useEffect, useState } from 'react'
import EventCard from './EventCard'

function Events(){
    const [events, setEvents] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/events')
        .then(res => res.json())
        .then(eventData => setEvents(eventData))
    },[])

    const eventCards = events.map((event) => 
        <EventCard event={event} key={event.id}/>)

    return(
        <div>
            {eventCards}
        </div>
    )
}

export default Events