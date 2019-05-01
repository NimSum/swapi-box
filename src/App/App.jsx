import React, { Component } from 'react';
import { CardContainer } from '../SectionContainers/CardContainer';
import { Header } from '../SectionContainers/Header';
import CategoryBtnSection from '../SectionContainers/CategoryBtnSection';


class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {},
      loading: false
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(films => this.setState(
      { selectedMovie: films.results
        .sort(() => Math.random() - 0.5)
        .pop()}))
    .catch(error => console.log(error) )
  }

  render() {
    const { opening_crawl, title, release_date } = this.state.selectedMovie;

    return (
      <div className="App">
        < Header 
          title = { title }/>
        < CardContainer 
          opening = { opening_crawl }/>
        < CategoryBtnSection />
      </div>
    )
  }
}




export default App;
