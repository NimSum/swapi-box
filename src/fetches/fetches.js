export const fetchRandomMovie = () =>
   fetch('https://swapi.co/api/films')
    .then(response => response.json())
    .then(films => films.results
      .sort(() => Math.random() - 0.5)
      .pop())
    .catch(error => console.log(error) )