import React, { Component } from 'react';
import { CardContainer } from '../SectionContainers/CardContainer';
import { Header } from '../SectionContainers/Header';
import CategoryBtnSection from '../SectionContainers/CategoryBtnSection';
import { fetchRandomMovie, fetchCategory, fetchItem } from '../ApiCalls/apiFetches';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {},
      loading: false,
      categorySelected: '',
      renderCards: []
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
    category === 'people' && this.fetchPeople();
  }

  fetchPeople = () => {
    fetchCategory('people')
      .then(people => {
        people.forEach(person => {
          const homeworldInfo = fetchItem(person.homeworld)
            .then(world => ({homeworld: world.name, population: world.population}));
          const species = fetchItem(...person.species)
            .then(species => ({ species: species.name }));
          Promise.all([homeworldInfo, species, { name: person.name, id: uuidv4() }])
            .then(characterInfo => Object.assign(
              characterInfo[0],
              characterInfo[1],
              characterInfo[2]))
            .then(result => this.setState({renderCards: this.state.renderCards.concat(result)}))
        })
      });
  }

  fetchPlanets = () => {
    console.log('hi')
  }

  fetchVehicles = () => {
    console.log('hi')
  }

  render() {
    const { opening_crawl, title, release_date } = this.state.selectedMovie;

    return (
      <div className="App">
        < Header 
          title = { title }/>
        < CardContainer 
          { ...this.state.selectedMovie }
          cards={ this.state.renderCards } />
        < CategoryBtnSection 
          changeCategory={ this.changeCategory }/>
      </div>
    )
  }
}




export default App;
