import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Movie from './pages/Movie';


function App() {
  return (
    <Router>

      <Routes>

        <Route exact path="/" element={ <Home/> } />
        
        <Route  path="/movies/:id" element={ <Movie/> } />

      </Routes>

    </Router>
  );
}

export default App;
