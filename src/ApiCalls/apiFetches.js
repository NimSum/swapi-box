export const fetchRandomMovie = filmId =>
   fetch(`https://swapi.co/api/films/${filmId}`)
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching movies')
      } else {
        return response.json();
      }
    })
    