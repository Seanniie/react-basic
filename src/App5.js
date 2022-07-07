import React, { useState } from "react";
import Movie from './components/Movie';
import MovieForm from "./components/MovieForm";
import Navbar from "./components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route
    
} from 'react-router-dom';
import Users from "./pages/Users";

function App5(){

    const [movies, setMovies] = useState([]);
    const removeMovie=(id)=>{
        setMovies(movies.filter(movie=>{
            return movie.id !==id;
        }));
    };

    const renderMovies = movies.length ? movies.map(movie =>{
        return(
            <Movie movie= {movie} 
                    key = {movie.id}
                    removeMovie = {removeMovie}></Movie>
        );
    }) : '추가된 영화가 없습니다';

    const addMovie = (movie) =>{
        setMovies([
            ...movies,movie
        ]);
 
    };

    return(
        <Router>
            <div className="App">
                <Navbar></Navbar>
                <Switch>
                    <Route path="/movies">
                        <h1>Movie list</h1>
                        <MovieForm addMovie={addMovie}></MovieForm>
                        {renderMovies}
                    </Route>
                    <Route path="/" exact>
                        <h1>Home</h1>
                    </Route>
                    <Route path="/users">
                        <Users></Users>
                    </Route>
                    
                </Switch>
            </div>
        </Router>
    );
}

export default App5;