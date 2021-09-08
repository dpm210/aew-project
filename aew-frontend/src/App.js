import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import components
import Home from './components/Home'
import NavBar from './components/NavBar'
import Roster from './components/Roster'
import Events from './components/Events'
import WrestlerPage from './components/WrestlerPage';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        {/* <Router> */}
        <NavBar />
        <Events />
        {/* <WrestlerPage /> */}


      {/* <Switch> */}

        {/* <Route exact path="/"> */}
          <Home />
        {/* </Route> */}

        {/* <Route path="roster"> */}
          {/* <Roster /> */}
        {/* </Route> */}

      {/* </Switch> */}
      {/* </Router> */}
      </header>
    </div>
  );
}

export default App;
