import { useEffect, useState } from "react"
import Grid from '@material-ui/core/Grid';
import RosterCard from './RosterCard'
import ChampionshipCard from './ChampionshipCard'
function Roster(){
    //set states
    const [rosterData, setRosterData] = useState([])
    const [champData, setChampData] = useState([])
    const [tagData, setTagData] = useState([])

    document.title = "AEW Roster"

    useEffect(() => {
        fetch('http://localhost:3000/wrestlers')
        .then(res => res.json())
        .then(wrestlerData => setRosterData(wrestlerData))
    },[])

    useEffect(() => {
        fetch('http://localhost:3000/championships')
        .then(res => res.json())
        .then(championshipData => setChampData(championshipData))
    },[])

    const wrestlerCards = rosterData.map((wrestler) => 
        <Grid container item xs={12} sm={3}>
            <RosterCard wrestler={wrestler} tagData={tagData} key={wrestler.id}/>
        </Grid>
    )

    const championshipCards = champData.map((champ) =>
    <Grid container item xs={12} sm={3}>
    <ChampionshipCard champ={champ} key={champ.id} />
    </Grid>
    )

    return(
        <div>
        <h1>AEW Roster</h1>
        <div className='roster-list'>
        <Grid container spacing={1}>
            {championshipCards}
           {wrestlerCards} 
        </Grid>
        </div>
        </div>
    )
}

export default Roster