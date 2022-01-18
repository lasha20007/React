import MovieList from "./components/MovieList";
import {BrowserRouter as  Router, Route, Routes} from 'react-router-dom';
import HomePage from "./components/HomePage";
import Header from "./components/Header"
import Error from "./components/Error"
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<HomePage />}/>
          <Route exact path='/Movies' element={<MovieList />}/>
          <Route exact path='/Contact' element = {<Contact />}/>
          <Route path='*' element={<Error />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
