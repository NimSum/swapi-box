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
      renderCards: [],
    }
  }

  componentDidMount() {
    const randomMovieId = Math.floor(Math.random() * 7) + 1;
    this.updateFavoriteCount();
    fetchRandomMovie(randomMovieId)
      .then(film => this.setState({ selectedMovie: film }))
      .catch(error => console.log(error) )
  }

  updateFavoriteCount = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({ favoriteCount: favorites.length })
  }

  renderFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(favorites)
  }

  changeCategory = category => {
    this.setState({ categorySelected: category, renderCards: [] });
    category === 'people' && this.fetchPeople();
    category === 'planets' && this.fetchPlanets();
    category === 'vehicles' && this.fetchVehicles();
    category === 'favorites' && this.renderFavorites();
  }

  fetchPeople = () => {
    fetchCategory('people')
      .then(people => {
        people.forEach(person => {
          const homeworldInfo = fetchItem(person.homeworld)
            .then(world => ({ worldName: world.name, worldPopulation: world.population }));
          const speciesInfo = fetchItem(...person.species)
            .then(species => ({ speciesName: species.name }));
          Promise.all([ homeworldInfo, speciesInfo ])
            .then(characterInfo => {
              const card = { ...characterInfo[0], ...characterInfo[0] , ...person, id: uuidv4() }
              const renderCards = [ ...this.state.renderCards, card ]
              this.setState({ renderCards })
            })
        })
      });
  }

  fetchPlanets = () => {
    fetchCategory('planets')
      .then(planets => planets.forEach(planet => {
        const names = planet.residents.map(resident => 
          fetchItem(resident)
            .then(person => ({ name: person.name, id: uuidv4() })));
        Promise.all([...names])
          .then(names => {
            const card = ({ residentNames: names, ...planet, id: uuidv4() })
            const renderCards = [...this.state.renderCards, card]
            this.setState({ renderCards })
          })
      }))
  }

  fetchVehicles = () => {
    fetchCategory('vehicles')
    .then(vehicles => vehicles.forEach(vehicle => {
      const vehicleCard = { ...vehicle, id: uuidv4() }
      const renderCards = [...this.state.renderCards, vehicleCard ]
      this.setState({ renderCards })
    }));
  }

  render() {
    return (
      <div className="App">
        < Header />
        < CardContainer 
          { ...this.state.selectedMovie }
          cards={ this.state.renderCards }
          category={ this.state.categorySelected }
          updateFavoriteCount={ this.updateFavoriteCount } />
        < CategoryBtnSection 
          changeCategory={ this.changeCategory }
          favoriteCount={ this.state.favoriteCount }
          updateFavoriteCount={ this.props.updateFavoriteCount } />
      </div>
    )
  }
}




export default App;
