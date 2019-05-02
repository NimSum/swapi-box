export const fetchRandomMovie = filmId =>
   fetch(`https://swapi.co/api/films/${filmId}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching movies')
      } else {
        return response.json();
      }
    })

export const fetchPeople = () => 
  fetch(`https://swapi.co/api/people/`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching movies')
      } else {
        return response.json()
      }
    })
    .then(characters => characters.results)

export const fetchItem = url => 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching movies')
      } else {
        return response.json()
      }
    })
