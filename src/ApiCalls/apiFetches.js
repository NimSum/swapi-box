export const fetchRandomMovie = filmId =>
   fetch(`https://swapi.co/api/films/${filmId}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching movies')
      } else {
        return response.json();
      }
    })

export const fetchCategory = category => 
  fetch(`https://swapi.co/api/${category}/`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching category items')
      } else {
        return response.json()
      }
    })
    .then(result => result.results)

export const fetchItem = url => 
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching item')
      } else {
        return response.json()
      }
    })
