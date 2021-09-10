import { useEffect, useState } from "react"
import ReignCard from './ReignCard'
function ChampionshipPage(){
const [champ, setChamp] = useState([])

    useEffect(() => {
        const championshipId = sessionStorage.getItem('championship_id')
        fetch(`http://localhost:3000/championships/${championshipId}`)
        .then(res => res.json())
        .then(champData => setChamp(champData))
    },[])

    const reignArray = champ.reigns.map(reign => <ReignCard reign={reign} key={reign.name} />)

    return(
        <div>
            <h1>{champ.name}</h1>
            <img className='champ-image' src={champ.image_url} />
            {reignArray}
        </div>
    )
}

export default ChampionshipPage