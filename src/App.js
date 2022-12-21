import React, { useEffect } from "react";
import NavBar from "./NavBar";
import "./App.css";
import Defs from "./API";
import TopMovies from "./TopMovies";
import HeroMain from "./Hero";
import SearchBar from "./SearchBar";
import Movie from "./Movie";
import { Routes, Route, useParams } from "react-router-dom";
import { Button, Spinner, Preloader } from "./Containers";
import GoToTop from "./GoToTop";

const GetMovieComponent = (props) => {
  const { movieId } = useParams();
  useEffect(() => {
    props.reset();
  }, []);
  return <Movie movieId={movieId} />;
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      results: [],
      total_pages: 0,
      total_results: 0,
      loading: true,
      searchTerm: "",
      firstLoad: true,
    };
    this.loadMore = this.loadMore.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSearchTerm = this.handleSearchTerm.bind(this);
    this.getOld = this.getOld.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }
  loadMore = async (query = "", pageNum = 1) => {
    this.setState({
      loading: true,
    });
    const data = await Defs.fetchMovies(query, pageNum);
    await this.setState((prev) => ({
      ...data,
      results:
        prev.page > 1 ? [...prev.results, ...data.results] : [...data.results],
    }));
    await this.setState({
      loading: false,
      firstLoad: false,
    });
    query === "" &&
      sessionStorage.setItem("homeData", JSON.stringify(this.state));
  };

  handleSearchTerm = async (query) => {
    if (query.trim() === "" && query !== "") {
      return;
    }
    await this.setState({
      searchTerm: query.trim(),
    });
    await this.loadMore(this.state.searchTerm);
    return;
  };
  resetSearch = () => {
    this.setState({
      searchTerm: "",
    });
    this.getOld();
  };
  handleClick = async () => {
    await this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
    this.loadMore(this.state.searchTerm, this.state.page);
  };

  getOld = async () => {
    const oldHomeData = JSON.parse(sessionStorage.getItem("homeData"));
    await this.setState(oldHomeData);
    await this.setState({
      loading: false,
      firstLoad: false,
    });
  };

  componentDidMount = async () => {
    const oldHome = await sessionStorage.getItem("homeData");
    oldHome !== null ? this.getOld() : this.handleClick();
  };

  render() {
    return (
      <>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                {this.state.results[0] && !this.state.searchTerm && (
                  <HeroMain movie={this.state.results[0]} />
                )}{" "}
                <SearchBar callback={this.handleSearchTerm} />
                {this.state.results[0] ? (
                  <TopMovies
                    data={this.state.results}
                    search={this.state.searchTerm}
                  />
                ) : this.state.loading || this.state.firstLoad ? (
                  <Preloader>
                    <Spinner />
                  </Preloader>
                ) : (
                  <h1>Not found</h1>
                )}
                {this.state.page < this.state.total_pages && (
                  <Button onClick={this.handleClick}>
                    {this.state.loading ? <Spinner /> : "Load More"}{" "}
                  </Button>
                )}{" "}
                <GoToTop />
              </>
            }
          />

          <Route
            path="/:movieId"
            element={<GetMovieComponent reset={this.resetSearch} />}
          />
        </Routes>{" "}
      </>
    );
  }
}
export default App;
