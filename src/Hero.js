import React from 'react'
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE
} from './config'

import {
    HeroDiv,
    HeroInfo,
} from './Containers'


class HeroMain extends React.Component {

    constructor(props) {
        super()
        this.state = {}
    }

    render() {
        return (
            <HeroDiv heroImgUrl={IMAGE_BASE_URL+BACKDROP_SIZE+this.props.movie.backdrop_path}>
                <img src={IMAGE_BASE_URL+BACKDROP_SIZE+this.props.movie.backdrop_path} alt = "Movie backdrop_path"/>
                <HeroInfo>
                    <h1> {this.props.movie.original_title}</h1>
                    <p>
                    {this.props.movie.overview}
            </p>
                </HeroInfo>
            </HeroDiv>
        );
    }

}

export default HeroMain;