import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomeFeed from './components/HomeFeed';
import MovieDetails from './components/MovieDetails';
import Nav from './sections/Nav';
import Login from "./components/Login"
import ActorDetails from './components/ActorDetails';
import TvDetails from './components/TvDetails';
import SearchResults from './components/SearchResults';
import MoviePlayer from './components/MoviePlayer';
const App = () => {
  return (
    <div>
    
    <Router>
    <Nav/>
      <Routes>
        <Route path='/' element={<HomeFeed/>}/>
        <Route path='/movie/:id' element={<MovieDetails/>}/>
        <Route path='/tv/:id' element={<TvDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/person/:id' element={<ActorDetails/>}/>
        <Route path='/search/:id' element={<SearchResults/>}/>
        <Route path='/movie/play/:id' element={<MoviePlayer/>}/>
        <Route path='/tv/play/:id' element={<MoviePlayer/>}/>
      </Routes>
    </Router>
    </div>
  )
  
}

export default App


