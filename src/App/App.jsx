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
    category === 'planets' && this.fetchPlanets();
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
    fetchCategory('planets')
      .then(planets => planets.forEach(planet => {
        const names = planet.residents.map(resident => 
          fetchItem(resident)
            .then(person => person.name));
        Promise.all([...names])
          .then(names => Object.assign(planet, { residentNames: names, id: uuidv4() }))
          .then(result => this.setState({ renderCards: this.state.renderCards.concat(result)}))
      }))
  }

  fetchVehicles = () => {
    console.log('hi')
  }

  render() {
    return (
      <div className="App">
        < Header />
        < CardContainer 
          { ...this.state.selectedMovie }
          cards={ this.state.renderCards }
          category={ this.state.categorySelected } />
        < CategoryBtnSection 
          changeCategory={ this.changeCategory }/>
      </div>
    )
  }
}




export default App;
