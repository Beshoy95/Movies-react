import axios from 'axios'
import React, { Component } from 'react'

class Home extends Component {
    state = {
        movies: [],
        tv: []
    }

    componentDidMount() {
        this.getTrending('movies')
        this.getTrending('tv')
    }

    getTrending = async (mediaType) => {
        const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=13261900e23432183fa92f71503de473`)
        this.setState({ [mediaType]: data.results })
    }

    render() {
        // let { trendingMovies, trendingTv } = this.props
        let { movies, tv } = this.state
        return (<>
            <div>
                <div className="row">
                    <div className="col-md-4 py-3">
                        <div className="brdr w-25 mb-3"></div>
                        <h3>Trending <br /> Movies <br />
                     to watch right now
                 </h3>
                        <p className='secondFontColor my-3'>most watched movies by day</p>
                        <div className="brdr w-100 mt-3"></div>
                    </div>
                    {movies.slice(0, 10).map((movie) => <div key={movie.id} className="col-md-2">
                        <div className="movie">
                            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} className="w-100" alt="" />
                            <h4 className="py-2 h6">{movie.title} {movie.name}</h4>
                            <div className='vote position-absolute'>{movie.vote_average}</div>
                        </div>
                    </div>)}
                </div>

                <div className="row">
                    <div className="col-md-4 py-3">
                        <div className="brdr w-25 mb-3"></div>
                        <h3>Trending <br /> Tv <br />
                     to watch right now
                 </h3>
                        <p className='secondFontColor my-3'>most watched tv by day</p>
                        <div className="brdr w-100 mt-3"></div>
                    </div>
                    {tv.slice(0, 10).map((movie) => <div key={movie.id} className="col-md-2">
                        <div className="movie">
                            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} className="w-100" alt="" />
                            <h4 className="py-2 h6">{movie.title} {movie.name}</h4>
                            <div className='vote position-absolute'>{movie.vote_average}</div>
                        </div>
                    </div>)}
                </div>
            </div>
        </>);
    }
}

export default Home;