import React, { useContext, useState } from "react"
import { MovieContext } from "./MovieList"
import { useHistory, useParams } from 'react-router-dom'

export default function MovieForm() {
    let {movies,setMovie} = useContext(MovieContext);
    let {mid} = useParams();

    let movie = mid ? movies.find(m => m.id == mid) : {}
    let[title,setTitle] = useState(movie.title)
    let[poster,setPoster] = useState(movie.poster)
    let[plot,setPlot] = useState(movie.plot)
    let[year,setYear] = useState(movie.year)
    let[rated,setRated] = useState(movie.rated)
    let[genre,setGenre] = useState(movie.genre)
    let[rating,setRating] = useState(movie.rating)
    let[votes,setVotes] = useState(movie.votes)
    let[imdbID,setImdbID] = useState(movie.imdbID)
    let[reviews,setReviews] = useState(movie.reviews)

    const history = useHistory();
    const submit = e => {
        e.preventDefault();
    }

    return(
        <form onSubmit={submit}>
            <h1>Adding/Editing a Movie</h1>
            <div className="field">
                <label htmlFor="title">Title</label>
                <div className="control">
                    <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                    <p className="help">Title is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="title">Year</label>
                <div className="control">
                    <input type="text" name="year" value={year} onChange={e => setYear(e.target.value)}/>
                    <p className="help">Year is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="title">Rated</label>
                <div className="control">
                    <input type="text" name="rated" value={rated} onChange={e => setRated(e.target.value)}/>
                    <p className="help">Rated is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="title">Genre</label>
                <div className="control">
                    <input type="text" name="year" value={genre} onChange={e => setGenre(e.target.value)}/>
                    <p className="help">Genre is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="poster">Poster</label>
                <div className="control">
                    <input type="url" name="poster" value={poster} onChange={e => setPoster(e.target.value)}/>
                    <p className="help">Poster is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="plot">Plot</label>
                <div className="control">
                    <textarea name="plot" value={plot} onChange={e => setPlot(e.target.value)}/>
                    <p className="help">Plot is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="title">Rating</label>
                <div className="control">
                    <input type="text" name="year" value={rating} onChange={e => setRating(e.target.value)}/>
                    <p className="help">Rating is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="title">Votes</label>
                <div className="control">
                    <input type="text" name="year" value={votes} onChange={e => setVotes(e.target.value)}/>
                    <p className="help">Votes is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="title">ImdbID</label>
                <div className="control">
                    <input type="text" name="year" value={imdbID} onChange={e => setImdbID(e.target.value)}/>
                    <p className="help">ImdbID is required</p>
                </div>
            </div>

            <div className="field">
                <label htmlFor="title">Reviews</label>
                <div className="control">
                    <input type="text" name="year" value={reviews} onChange={e => setReviews(e.target.value)}/>
                    <p className="help">Reviews is required</p>
                </div>
            </div>

            <div className="field">
                <label></label>
                <div className="control">
                   <button className="primary">Submit</button>
                   <button className="primary" onClick={ () => history.push('/movies') }>Cancel</button>
                </div>
            </div>

        </form>
    ) 
}