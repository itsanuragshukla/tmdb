import React from 'react';
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from './config';
import Defs from './API';
import HeroMain from './Hero';
import {
    Wrapper,
    Poster,
    MovieInfo
} from './MovieContainer';
import Actors from './Actors';
import Crew from './Crew';
import {
    Spinner,
    Preloader
} from './Containers';
import {
    MovieInfoMain
} from './MovieInfoMain'

class Movie extends React.Component {
    constructor(props) {
        super();
        this.state = {
            loaded: false,
        }
        this.getMovie = this.getMovie.bind(this);
        this.getOld = this.getOld.bind(this);

    }

    getMovie = async (id) => {
        const data = await Defs.fetchMovie(id);
        const credits = await Defs.fetchCredits(id);
        //console.log(data);
        // console.log(credits);
        //    console.log("fetching api")
        this.setState((prev) => ({
            movieData: data,
            credits: credits,
            loaded: true,
        }));
        sessionStorage.setItem("data"+id, JSON.stringify(data));
        sessionStorage.setItem("credit"+id, JSON.stringify(credits));
        return;
    }

    getOld = (id) => {
        //    console.log("not fetching api")
        const oldData = JSON.parse(sessionStorage.getItem("data"+this.props.movieId));
        const oldCredits = JSON.parse(sessionStorage.getItem("credit"+this.props.movieId));
        this.setState((prev) => ({
            movieData: oldData,
            credits: oldCredits,
            loaded: true,
        }));

    }

    componentDidMount() {
        const oldData = sessionStorage.getItem("data"+this.props.movieId);
        oldData != null ? this.getOld(this.props.movieId): this.getMovie(this.props.movieId);
    }

    render() {
        return (
            this.state.loaded ? <>
            <HeroMain movie={this.state.movieData} />
            <Wrapper imgUrl={IMAGE_BASE_URL+BACKDROP_SIZE+this.state.movieData.backdrop_path}>
            <Poster imgUrl={IMAGE_BASE_URL+POSTER_SIZE+this.state.movieData.poster_path}>
		<img src={IMAGE_BASE_URL+POSTER_SIZE+this.state.movieData.poster_path} alt="" />
		</Poster>
        </Wrapper>
            <MovieInfo>
                <MovieInfoMain data={this.state.movieData} />
		</MovieInfo>


            <Actors cast={this.state.credits.cast.filter(data => {
            return data.profile_path !== null;
        })} /> < Crew crew = {
                this.state.credits.crew.filter(data => {
            return data.profile_path !== null;
        })
            } /> < />: !this.state.loaded
            ? <Preloader><Spinner /> </Preloader>: <h1>Not found</h1>

        );
    }
}

export default Movie;