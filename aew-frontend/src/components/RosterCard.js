import { Link, useHistory } from 'react-router-dom'
function RosterCard({wrestler}){
    // const history = useHistory()

    function handleClick(){
        sessionStorage.setItem('wrestler_id', wrestler.id)
        // history.push('/WrestlerPage')
    }

    return(
        <div className="container" onClick={handleClick}>
            <img className="wrestler-image" src={wrestler.image_url} />
            <h6 className="nickname">{wrestler.nickname}</h6>
            <h5 className="name">{wrestler.name}</h5>
            <h6 className="record">Overall Record</h6>
            <h7 className="record">{wrestler.num_wins} - {wrestler.num_losses}</h7>
        </div>
    )
}

export default RosterCard