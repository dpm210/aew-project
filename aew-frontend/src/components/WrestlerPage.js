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
            <h1>{wrestlerData.name}</h1>
        </div>
    )
}

export default WrestlerPage