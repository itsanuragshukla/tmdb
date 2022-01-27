import React from 'react'
import {
    MovieDiv,
    MovieGrid,
    PosterImage,
} from './Containers'

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

            <MovieGrid>
           {this.props.data.map(movie =>
                <MovieDiv key={movie.id+movie.vote_count}>
           <PosterImage imgUrl={IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path}>
             <img src={IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path} alt = "movie poster"/>
           </PosterImage>
           </MovieDiv>)}
            </MovieGrid>

        )
    }}

export default TopMovies