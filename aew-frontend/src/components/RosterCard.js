function RosterCard({wrestler}){

    function handleClick(){

    }

    return(
        <div className="container">
            <img className="wrestler-image" src={wrestler.image_url} />
            <h6 className="nickname">{wrestler.nickname}</h6>
            <h5 className="name">{wrestler.name}</h5>
            <h6 className="record">Overall Record</h6>
            <h7 className="record">{wrestler.num_wins} - {wrestler.num_losses}</h7>
        </div>
    )
}

export default RosterCard