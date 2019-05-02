import React, { Component } from 'react';
import { CardContainer } from '../SectionContainers/CardContainer';
import { Header } from '../SectionContainers/Header';
import CategoryBtnSection from '../SectionContainers/CategoryBtnSection';
import { fetchRandomMovie, fetchPeople, fetchItem } from '../ApiCalls/apiFetches';


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
    fetchPeople()
      .then(people => {
        const info = people.map(person => {
          const homeworldInfo = fetchItem(person.homeworld)
            .then(world => ({worldName: world.name, population: world.population}));
          const species = fetchItem(...person.species)
            .then(species => ({ species: species.name }));
          return Promise.all([homeworldInfo, species, { name: person.name}])
            .then(characterInfo => Object.assign(
              characterInfo[0],
              characterInfo[1],
              characterInfo[2]))
        })
        Promise.all(info).then(renderCards => this.setState({ renderCards }));
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
          { ...this.state.renderCards } />
        < CategoryBtnSection 
          changeCategory={ this.changeCategory }/>
      </div>
    )
  }
}




export default App;
