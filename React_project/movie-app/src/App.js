import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import About from './Components/About';
import Movies from './Components/Movies';
import Home from './Components/Home';


function App() {
  return (
    <Router>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
          <div className='collapse navbar-collapse' id="navbar">
            <ul className='navbar-nav mr-auto'>
              <li className='nav-item'>
                <NavLink className="nav-link" to ="/">Home</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to ="/about">About</NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className="nav-link" to ="/movies">Movies</NavLink>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/movies" element={<Movies />} />

        </Routes>
      </div>
    </Router>
    
   
    
  );
}

export default App;


