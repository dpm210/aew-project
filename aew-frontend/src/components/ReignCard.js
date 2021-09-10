function ReignCard({reign}){

    return(
        <div className='reign-container'>
            <h1>{reign.competitor.name}</h1>
            <img src={reign.competitor.image_url} />
            <h3>Won: {reign.start_date}</h3>
            {reign.end_date === null ? null: <h3>Lost: {reign.end_date}</h3>}
            {reign.end_date === null ? <h3>Reign Length: {reign.length}+</h3> : <h3>Reign Length: {reign.length}</h3>}
        </div>
    )
}

export default ReignCard