import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: '',
      loading: false
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(result => 
          this.setState({ selectedMovie: result.results
            .sort(() => Math.random() - 0.5).pop()
            }))
      .catch(error => console.log(error) )
  }

  render() {
    return (
      <div className="App">
        <p>HI</p>
      </div>
    )
  }
}




export default App;
