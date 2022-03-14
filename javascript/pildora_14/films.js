// Ejercicio 1: Lista de directores
function getAllDirectors(array) {
  //const directors = array.map(ele => ele.director)
  const directors = array.map(({ director }) => director);
  //console.table(directors);
  return directors;
}

// Ejercicio 2: Peliculas de un director
function getMoviesFromDirector(director) {
  const films = movies.filter((ele) => ele.director === director);
  //console.table(films)
  return films;
}

// Ejercicio 3: Score medio de las peliculas de un  director
function moviesAverage(director) {
  const films = getMoviesFromDirector(director);
  const scoreAverage = (
    films.reduce((acc, e) => (acc += e.score), 0) / films.length
  ).toFixed(2);
  console.table(films);
  console.log(`The average score of ${director} is ${scoreAverage}`);
}
//Ejercicio 4: Ordenar las peliculas por orden alfabetico del titulo
function sortByTitle(lista, num) {
  // const onlyTitle = lista
  //   .map(({ title }) => title)
  //   .sort()
  //   .slice(0, num);
  const ordenado = lista
    .sort((a, b) => a.title.localeCompare(b.title))
    .slice(0, num);
  return ordenado;
}

// Ejercicio 5: Ordenar las peliculas por año, y alfabeticamente en el mismo año');
// function sortByYear(lista,num){
//   //const byYear = lista.sort((a,b) => a.year - b.year).slice(0,num)
//   const byYearAndTitle = lista.sort((a,b)=>{
//     if(a.year < b.year) return -1
//     if(a.year > b.year) return 1
//     if(a.title < b.title) return -1
//     if(a.title > b.title) return 1
//     return 0
//   })
//   const shortList = byYearAndTitle.slice(0,num)
//   return shortList
// }
function filmOfYear(lista, any) {
  // Get movies of the year
  const filmOfYear = lista
    .filter((film) => film.year === any)
    .sort((a, b) => a.title.localeCompare(b.title));
  return filmOfYear;
}

// Ejercicio 6: Mejor pelicula del año
function bestOfYear(lista, any) {
  // Get movies of the year
  const filmOfYear = lista.filter((film) => film.year === any);

  // Compute de max score
  const max = filmOfYear.reduce((acc, e) => Math.max(acc, e.score), 0);

  //Get the movies whith the max score.
  const bestFilms = filmOfYear.filter((e) => e.score === max);
  //console.table(bestFilms);
  return bestFilms;
}
