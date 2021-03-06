// Ejercicio 1: Lista de directores
function getAllDirectors(array) {
  //const directors = array.map(ele => ele.director)
  const directors = array.map(({ director }) => director);
  //console.table(directors);
  
  return directors;
}

function getDirectorsOnce(array){
  const directores = array.map(item =>{
    return [item.director,item]
  })
  const directorsMap = new Map(directores);
  const unicos =[...directorsMap.values()]
  const direcOrdenados = unicos.sort((a, b) => a.director.localeCompare(b.director))
  //console.table(unicos)
  return direcOrdenados
}
 
// Ejercicio 2: Peliculas de un director
// function getMoviesFromDirector(name,array) {
//   const films = array.filter(film => film.director === name);
//   //console.table(films)
//   return films;
// }

function getMoviesFromDirector(array,name){
  const films = array.filter( function(film){
    return film.director === name;
  })
  return films;
}

// Ejercicio 3: Score medio de las peliculas de un  director
function moviesAverage(array,director) {
  const films = getMoviesFromDirector(array,director);
  const scoreAverage = (
    films.reduce((acc, film) => (acc += film.score), 0) / films.length
  ).toFixed(2);
  //return scoreAverage;
  console.table(films);
  console.log(`The average score of ${director} is ${scoreAverage}`);
}
//Ejercicio 4: Ordenar las peliculas por orden alfabetico del titulo

function sortByTitle(lista, num) {
  const ordenado = lista
    //.sort((a, b) => a.title.localeCompare(b.title))
    .sort((a, b) => a.title < b.title ? -1:1 )
    .slice(0, num);
  return ordenado;
}

// Ejercicio 5: Ordenar las peliculas por año, y alfabeticamente en el mismo año');
 function sortByYearTitle(lista){
  const byYearTitle = lista
  .sort((a,b) => a.year - b.year ? -1 :1 )
  .sort((a,b) => a.title < b.title ? -1:1)

  return sortByYearTitle
  
}
function filmOfYear(lista, any) {
  // Get movies of the year
  const filmOfYear = lista
    .filter((film) => film.year === any)
    //.sort((a, b) => a.title.localeCompare(b.title));
     .sort((a,b) => a.title < b.title ? -1:1)
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
