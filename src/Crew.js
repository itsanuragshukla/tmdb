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
import {
    Button,
    Spinner,
} from './Containers';
class Crew extends React.Component {
    constructor(props) {
        super()

        this.state = {
            CrewMembers: [],
            loading: false,
            total_crews: 0,
            crews: 10,
        }
        this.loadMore = this.loadMore.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = async () => {
        await this.setState(prevState => ({
            crews: prevState.crews+10,
        }))
        this.loadMore(this.state.crews);
    }

    loadMore = async (limit = 10) => {
        this.setState({
            loading: true
        })
        const person = await this.props.crew.slice(limit-10, limit).filter(data => {
            return data.profile_path !== null;
        });
        await this.setState(prev => ({
            CrewMembers: [...prev.CrewMembers, ...person]
        }))
        this.setState({
            loading: false
        })
    }


    componentDidMount() {
        const actor = this.props.crew.slice(0, 10).filter(data => {
            return data.profile_path !== null;
        });
        const ttl = this.props.crew.length;
        this.setState({
            total_crews: ttl,
            CrewMembers: actor
        })}

    render() {

        return <><AnyGrid heading="Crew Members">
			{
            this.state.CrewMembers &&
            this.state.CrewMembers.map(name =>
                <Person key={name.credit_id}>
                    <PersonImg imgUrl={IMAGE_BASE_URL+POSTER_SIZE+name.profile_path}>
                  <span>  <h1>{name.name}</h1>
                    <p>
                    {name.job}
                </p>
                </span>
                    <img src={IMAGE_BASE_URL+POSTER_SIZE+name.profile_path} alt="Crew_img" />
                    </PersonImg>
                </Person>
            )
            }

			</AnyGrid>
        {
            this.state.crews < this.state.total_crews && < Button onClick = {
                this.handleClick
            } >
            {
                this.state.loading ? <Spinner />: "Load More"
            } < /Button>
        } < />
    }
}

export default Crew
