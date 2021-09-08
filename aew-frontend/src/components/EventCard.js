function EventCard({event}){

    function handleClick(){
        sessionStorage.setItem('event_id', event.id)
    }

    return(
        <div className='events-container' onClick={handleClick}>
            <div>
                <img className="event-image" src={event.image_url} />
                <div className='event-info'>
                    <h4>{event.name}</h4>
                    <h5>{event.venue}</h5>
                    <h6>{event.date}</h6>
                </div>
            </div>
        </div>
            )
}

export default EventCard