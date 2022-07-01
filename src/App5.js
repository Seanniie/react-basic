import React, { useState } from "react";
import Movie from './components/Movie';

function App5(){
    
    
    const[movieTitle,setMovieTitle] = useState('');
    const[movieYear,setMovieYear] = useState('');
    const [movies, setMovies] = useState([
        { title : 'kossie coder1', year: 2001},
        { title : 'kossie coder2', year: 2002},
        { title : 'kossie coder3', year: 2003},
        { title : 'kossie coder4', year: 2004},
        
    ]);


    const renderMovies = movies.map(movie =>{
        return(
            <Movie movie= {movie} key = {movie.title}></Movie>
        );
    });

    const addMovie = (event) =>{
        event.preventDefault();
        setMovies([...movies,{
            title: movieTitle,
            year: movieYear,
        }]);
        setMovieTitle('');
        setMovieYear('');

    };

    return(
        <div className="App">
            <h1>Movie list</h1>
            <form onSubmit={addMovie}>
                <input type = 'text'
                value={movieTitle}
                placeholder = '영화제목'
                onChange={e=>setMovieTitle(e.target.value)}></input>
                <br/>
                <input type = 'text'
                value={movieYear}
                placeholder = '개봉년도'
                onChange={e=>setMovieYear(e.target.value)}></input>
                <br/>
                <button type = "submit">영화추가</button>
            </form>
            {renderMovies}

        </div>
    );
}

export default App5;