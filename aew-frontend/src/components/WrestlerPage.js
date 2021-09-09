import { useEffect, useState } from "react"
function WrestlerPage(){
    const [wrestlerData, setWrestlerData] = useState([])

    document.title = wrestlerData.name
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
            <img className='wrestler-page-image' src={wrestlerData.image_url} />
            <div className='wrestler-stats'>
                {wrestlerData.hometown === null ? null : <h3>Hometown: {wrestlerData.hometown}</h3>}
                {wrestlerData.weight === null ? null : <h3>Weight: {wrestlerData.weight} lbs</h3>}
                <h3>Overall Record: {wrestlerData.num_wins} - {wrestlerData.num_losses}</h3>
                <h2>Championship Reigns</h2>
                <h4>{wrestlerData.reigns[0].championship.name}</h4>
                <h3>Reign Length</h3>
                <h4>{wrestlerData.reigns[0].length} Days</h4>
            </div>

        </div>
    )
}

export default WrestlerPage