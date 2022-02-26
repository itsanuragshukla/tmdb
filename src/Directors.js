import React from 'react'
import {
    IMAGE_BASE_URL,
    POSTER_SIZE
} from './config';
import AnyGrid from './AnyGrid'
import {
    Person,
    PersonImg
} from './MovieContainer'

class Directors extends React.Component {
    constructor(props) {
        super()

        this.state = {
            directors: [],
        }
    }

    componentDidMount() {
        const director = this.props.crew.filter(person => {
            return person.job === 'Director'
        }).filter(data => {
            return data.profile_path !== null;
        });

        this.setState({
            directors: director
        })}

    render() {

        return <AnyGrid heading="Directors">
			{
            this.state.directors &&
            this.state.directors.map(name =>
                <Person>
                    <h1>{name.name}</h1>
                    <PersonImg imgUrl={IMAGE_BASE_URL+POSTER_SIZE+name.profile_path}>
                    <img src={IMAGE_BASE_URL+POSTER_SIZE+name.profile_path} alt="Director_img" />
                    </PersonImg>
                </Person>
            )
            }

			</AnyGrid>
    }
}

export default Directors
