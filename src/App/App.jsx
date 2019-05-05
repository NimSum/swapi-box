import React, { Component } from 'react';
import { CardContainer } from '../SectionContainers/CardContainer';
import { Header } from '../SectionContainers/Header';
import { CategoryBtnSection } from '../SectionContainers/CategoryBtnSection';
import { fetchRandomMovie, fetchCategory, fetchItem } from '../ApiCalls/apiFetches';
const uuidv4 = require('uuid/v4');

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: {},
      loading: false,
      categorySelected: 'home',
      renderCards: [],
      favoriteCount: 0,
      currentPage: 1
    }
  }

  componentDidMount() {
    const randomMovieId = Math.floor(Math.random() * 7) + 1;
    this.setState({ loading: true })
    this.updateFavoriteCount();
    fetchRandomMovie(randomMovieId)
    .then(film => this.setState({ selectedMovie: film, loading: false }))
    .catch(error => console.log(error) )
  }

  updateFavoriteCount = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.setState({ favoriteCount: favorites.length })
  }

  renderFavorites = () => {
    const renderCards = JSON.parse(localStorage.getItem('favorites')) || [];
    renderCards.length && this.setState({ renderCards })
  }

  changeCategory = category => {
    this.setState({ categorySelected: category, renderCards: [], currentPage: 1 });
    category === 'people' && this.fetchPeople();
    category === 'planets' && this.fetchPlanets();
    category === 'vehicles' && this.fetchVehicles();
    category === 'favorites' && this.renderFavorites();
  }

  fetchPeople = (more) => 
    fetchCategory(`${ more ? `people/?page=${ this.state.currentPage }` : 'people' }`)
      .then(people => 
        people.map(person => {
          const homeworldInfo = fetchItem(person.homeworld)
            .then(world => ({ worldName: world.name, worldPopulation: world.population }));
          const speciesInfo = fetchItem(...person.species)
            .then(species => ({ speciesName: species.name }));
          return Promise.all([ homeworldInfo, speciesInfo ])
            .then(characterInfo => {
              const card = { ...characterInfo[0], ...characterInfo[1] , ...person, id: uuidv4(), type: 'character' }
              const renderCards = [ ...this.state.renderCards, card ];
              this.setState({ renderCards })
              return renderCards;
            });
        })
      ).catch(error => console.log(error));

  fetchPlanets = (more) => 
    fetchCategory(`${ more ? `planets/?page=${ this.state.currentPage }` : 'planets' }`)
      .then(planets => planets.map(planet => {
        const names = planet.residents.map(resident => 
          fetchItem(resident)
            .then(person => ({ name: person.name, id: uuidv4() })));
        return Promise.all(names)
          .then(names => {
            const card = ({ residentNames: names, ...planet, id: uuidv4(), type: 'planet', imgNum: Math.floor(Math.random() * 7) + 1 })
            const renderCards = [...this.state.renderCards, card]
            this.setState({ renderCards })
            return renderCards;
          })
      })).catch(error => console.log(error));

  fetchVehicles = (more) => 
    fetchCategory(`${ more ? `vehicles/?page=${ this.state.currentPage }` : 'vehicles' }`)
      .then(vehicles => vehicles.map(vehicle => {
        const vehicleCard = { ...vehicle, id: uuidv4(), type: 'vehicle' }
        const renderCards = [...this.state.renderCards, vehicleCard ]
        this.setState({ renderCards })
        return renderCards;
      })).catch(error => console.log(error));

  showMore = () => {
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      const category = this.state.categorySelected;
      category === 'people' && this.fetchPeople(true);
      category === 'planets' && this.fetchPlanets(true);
      category === 'vehicles' && this.fetchVehicles(true);
    })
  }

  showLess = () => {
    this.setState({ currentPage: this.state.currentPage - 1 }, () => {
      const reducedCards = [...this.state.renderCards].slice(0, this.state.renderCards.length - 10);
      this.setState({ renderCards: reducedCards })
    })
  }

  render() {
    return (
      <div className="App">
        < Header category={ this.state.categorySelected }/>
        < CardContainer 
          loading= { this.state.loading }
          movie = { this.state.selectedMovie }
          cards={ this.state.renderCards }
          updateFavoriteCount={ this.updateFavoriteCount } 
          category={ this.state.categorySelected } 
          showMore={ this.showMore } 
          showLess={ this.showLess }
          currentPage={ this.state.currentPage } />
        < CategoryBtnSection 
          currCategory={ this.state.categorySelected }
          changeCategory={ this.changeCategory }
          favoriteCount={ this.state.favoriteCount }
          updateFavoriteCount={ this.props.updateFavoriteCount } />
      </div>
    )
  }
}

export default App;
