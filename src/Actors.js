import React from 'react'
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from './config';
import AnyGrid from './AnyGrid'
import {
    Person,
    PersonImg
} from './MovieContainer'
import {
    Button,
    Spinner,
    Preloader
} from './Containers';
class Actors extends React.Component {
    constructor(props) {
        super()

        this.state = {
            actors: [],
            loading: false,
            total_casts: 0,
            casts: 10,
        }
        this.loadMore = this.loadMore.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = async () => {
        await this.setState(prevState => ({
            casts: prevState.casts+5,
        }))
        this.loadMore(this.state.casts);
    }

    loadMore = async (limit = 10) => {
        this.setState({
            loading: true
        })
        const actor = await this.props.cast.slice(limit-5, limit).filter(data => {
            return data.profile_path !== null;
        });
        await this.setState(prev => ({
            actors: [...prev.actors, ...actor]
        }))
        this.setState({
            loading: false
        })
    }


    componentDidMount() {
        const actor = this.props.cast.slice(0, 10).filter(data => {
            return data.profile_path !== null;
        });
        const ttl = this.props.cast.length;
      //  console.log(ttl)
        this.setState({
            total_casts: ttl,
            actors: actor
        })}

    render() {

        return <><AnyGrid heading="Starring">
			{
            this.state.actors &&
            this.state.actors.map(name =>
                <Person key={name.id}>
                    <PersonImg imgUrl={IMAGE_BASE_URL+POSTER_SIZE+name.profile_path}>
                  <span>  <h1>{name.name}</h1>
                    <p>
                    {name.character}
                </p>
                </span>
                    <img src={IMAGE_BASE_URL+POSTER_SIZE+name.profile_path} alt="Actor_img" />
                    </PersonImg>
                </Person>
            )
            }

			</AnyGrid>
        {
            this.state.casts < this.state.total_casts && < Button onClick = {
                this.handleClick
            } >
            {
                this.state.loading ? <Spinner />: "Load More"
            } < /Button>
        } < />
    }
}

export default Actors