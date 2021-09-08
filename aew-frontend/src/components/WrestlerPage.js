import { useEffect, useState } from "react"
function WrestlerPage(){
    const [wrestlerData, setWrestlerData] = useState([])

    useEffect(() => {
        const wrestlerId = sessionStorage.getItem('wrestler_id')
        fetch(`http://localhost:3000/wrestlers/${wrestlerId}`)
        .then(res => res.json())
        .then(data => setWrestlerData(data))
    },[])



    return(
        <div>
            <h4>{wrestlerData.nickname}</h4>
            <h1>{wrestlerData.name}</h1>
            <img src={wrestlerData.image_url} />
            {wrestlerData.hometown === null ? null : <h3>Hometown: {wrestlerData.hometown}</h3>}
            {wrestlerData.weight === null ? null : <h3>Weight: {wrestlerData.weight} lbs</h3>}
            <h3>Overall Record: {wrestlerData.num_wins} - {wrestlerData.num_losses}</h3>

        </div>
    )
}

export default WrestlerPage