import logo from './logo.svg';
import './App.css';

//import components
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Home />
      </header>
    </div>
  );
}

export default App;
