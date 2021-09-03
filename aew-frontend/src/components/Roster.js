import { useEffect, useState } from "react"
import Grid from '@material-ui/core/Grid';
import RosterCard from './RosterCard'
function Roster(){
    //set states
    const [rosterData, setRosterData] = useState([])
    const [tagData, setTagData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/wrestlers')
        .then(res => res.json())
        .then(wrestlerData => setRosterData(wrestlerData))
    },[])

    const wrestlerCards = rosterData.map((wrestler) => 
        <Grid container item xs={12} sm={3}>
            <RosterCard wrestler={wrestler} tagData={tagData} key={wrestler.id}/>
        </Grid>
    )

    return(
        <div>
        <h1>AEW Roster</h1>
        <Grid container spacing={1}>
           {wrestlerCards} 
        </Grid>
        </div>
    )
}

export default Roster