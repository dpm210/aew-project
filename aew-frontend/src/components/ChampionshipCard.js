import { Link, useHistory } from 'react-router-dom'
function ChampionshipCard({champ}){
    // const history = useHistory()

    function handleClick(){
        sessionStorage.setItem('championship_id', champ.id)
    }

    return(
        <div className="container" onClick={handleClick}>
            <img className="championship-image" src={champ.image_url} />
            <h5 className="championship-name">{champ.name}</h5>
        </div>
    )
}

export default ChampionshipCard