import React, { Component } from 'react';
import { CardContainer } from '../SectionContainers/CardContainer';
import { Header } from '../SectionContainers/Header';
import CategoryBtnSection from '../SectionContainers/CategoryBtnSection';
import { fetchRandomMovie } from '../ApiCalls/apiFetches';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {},
      loading: false,
      categorySelected: ''
    }
  }

  componentDidMount() {
    const randomMovieId = Math.floor(Math.random() * 7) + 1;
    fetchRandomMovie(randomMovieId)
      .then(film => this.setState({ selectedMovie: film }))
      .catch(error => console.log(error) )
  }

  changeCategory = category => {
    this.setState({ categorySelected: category });
  }


  render() {
    const { opening_crawl, title, release_date } = this.state.selectedMovie;

    return (
      <div className="App">
        < Header 
          title = { title }/>
        < CardContainer 
          { ...this.state.selectedMovie } />
        < CategoryBtnSection 
          changeCategory={ this.changeCategory }/>
      </div>
    )
  }
}




export default App;
