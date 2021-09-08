import { Link } from 'react-router-dom'
function NavBar(){

    return(
        <div>
            <ul>
                <li><img className="aew-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/AEW_Logo_%28simplified%29.svg/1280px-AEW_Logo_%28simplified%29.svg.png" /></li>
                {/* <Link to='/'> */}
                <li>Home</li>
                {/* </Link> */}

                {/* <Link to='roster'> */}
                <li>Roster</li>
                {/* </Link> */}
                
                <li>Events</li>
            </ul>
        </div>
    )
}

export default NavBar