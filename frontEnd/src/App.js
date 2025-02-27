import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Login from './pages/Login/Login';
import Search from './components/Search/Search';
import { AppProvider } from "./components/Search/context";


function App() {

  return (
    <AppProvider>
        <Router>
        <div className="App">
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        
    </div>
    </Router>
    </AppProvider>

  );
}

/*
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Login from './pages/Login/Login';
import Search from './components/Search/Search';
import { AppProvider } from "./components/Search/context";


function App() {

  return (
    <AppProvider>
    <div className="App">
        <Router>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/search" element={<Search />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
    </AppProvider>

  );
}


export default App;
*/


export default App;