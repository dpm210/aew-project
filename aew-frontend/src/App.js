import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react'

//import components
import Home from './components/Home'
import NavBar from './components/NavBar'
import Roster from './components/Roster'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
        <Roster />
      </header>
    </div>
  );
}

export default App;
