import { useEffect, useState } from "react"
import Grid from '@material-ui/core/Grid';
import RosterCard from './RosterCard'
function Roster(){
    //set states
    const [rosterData, setRosterData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/wrestlers')
        .then(res => res.json())
        .then(wrestlerData => setRosterData(wrestlerData))
    },[])

    const wrestlerCards = rosterData.map((wrestler) => 
    <Grid container
    direction="row"
    justify-content="space-evenly"
    spacing={3}>
        <Grid container item xs={20}>
            <RosterCard wrestler={wrestler} key={wrestler.id}/>
        </Grid>
    </Grid>
    )

    return(
        <div>
            <h1>AEW Roster</h1>
           {wrestlerCards} 
        </div>
    )
}

export default Roster