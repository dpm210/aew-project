function EventCard({event}){

    return(
        <div className='events-container'>
            {event.program === 'ppv' ?
                <div>
                <img className="event-image" src={event.image_url} />
                <div className='event-info'>
                    <h4>{event.name}</h4>
                    <h5>{event.venue}</h5>
                    <h6>{event.date}</h6>
                </div>
                </div>
                :
                null
            }
        </div>
    )
}

export default EventCard