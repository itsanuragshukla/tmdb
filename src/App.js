import React from 'react'
import NavBar from './NavBar'
import './App.css'
import Defs from './API'
import TopMovies from './TopMovies'
import HeroMain from './Hero'
import SearchBar from './SearchBar'


import {
    Button,
    Spinner,
    Preloader
} from './Containers'
import {
    IMAGE_BASE_URL,
    BACKDROP_SIZE,
    POSTER_SIZE
} from './config'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            page: 0,
            results: [],
            total_pages: 0,
            total_results: 0,
            loading: true,
            searchTerm: "",
        }
        this.loadMore = this.loadMore.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleSearchTerm = this.handleSearchTerm.bind(this)
    }
    loadMore = async (query = "", pageNum = 1) => {
        this.setState(prev => ({
            loading: !prev.loading && !prev.loading,
        }))
        const data = await Defs.fetchMovies(query, pageNum)
        this.setState(prev => ({
            ...data,
            results:
            prev.page > 1 ? [...prev.results, ...data.results]: [...data.results]

        }))
        this.setState(prev => ({
            loading: prev.loading && !prev.loading,
        }))
    };

    handleSearchTerm = (query) => {
        this.setState({
            searchTerm: query,
        });
        this.loadMore(query);
        return;
    }

    handleClick = async () => {
        await this.setState(prevState => ({
            page: prevState.page+1
        }));
        this.loadMore(this.state.searchTerm,this.state.page);
    }

    componentDidMount = () => {
        this.handleClick();
    }

    render() {
        return (<>
            <NavBar />
            {
                this.state.results[0]
                ?
                <>
                <HeroMain movie={this.state.results[0]} />
                <SearchBar callback={this.handleSearchTerm} /> < TopMovies data = {
                    this.state.results
                } />
                {
                    this.state.page < this.state.total_pages && < Button onClick = {
                        this.handleClick
                    } >
                    {
                        this.state.loading ? <Spinner />: "Load More"
                    } < /Button>
                } < / >: <><Preloader><Spinner color="#03CC90" / > </Preloader> < />
        } < / >
    )
}
}
export default App;