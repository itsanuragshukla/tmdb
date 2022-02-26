import React from 'react'
import {
    MovieDiv,
    MovieGrid,
    PosterImage,
} from './Containers'

import {
    Link
} from 'react-router-dom'

import {
    IMAGE_BASE_URL,
    POSTER_SIZE
} from './config'

class TopMovies extends React.Component {

    constructor(props) {
        super()
        this.state = {}

    }
    render() {

        return (
            <>
            <h1 className="gridHead">{this.props.search !== "" ? "Search Results for: " : "Popular Movies"}{this.props.search}</h1>
            <MovieGrid>
           {this.props.data.map(movie =>
                movie.poster_path !== null &&
                <Link key={movie.id+movie.vote_count} to={`/${movie.id}`}>
                    <MovieDiv>
                    <PosterImage imgUrl={IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path}>
                    <img src={IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path} alt="movie poster" />
                    </PosterImage>
                    </MovieDiv>
                    </Link>)}
                    </MovieGrid> < />

        )
    }}

export default TopMovies
