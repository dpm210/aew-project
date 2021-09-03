import { useEffect, useState } from "react"
function Roster(){

    useEffect(() => {
        fetch('http://localhost:3000/wrestlers')
        .then(res => res.json())
        .then(wrestlerData => console.log(wrestlerData))
    })

    return(
        <div>

        </div>
    )
}

export default Roster