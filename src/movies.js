// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.

const movies = require("./data");


// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (movies) {               //esto es una funcion que toma como parametro array movies 
  let allDir = movies.map((elemDir) => {         //acá armo otra funcion con el .map 
return elemDir.director;                        //"invoco" el elemento director del array movies 
  })
  return allDir;                               //devuelvo la variable en donde guardé todos los directors en forma de array
 }

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  let dramaSpiel = movies.filter((elem) => {      //.filter va a devolver el elemento si la condicion es true
   return elem.genre.includes ("Drama") && elem.director === "Steven Spielberg" //condiciones
  });
  return dramaSpiel.length
}
// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  let scoresVar= movies.reduce ((acc, elemSc) => {    //.reduce acumula. acá acumulo las series para sacar el average
    if (movies.length === 0) {                        //decl e inic una var para meter lo que acumulo, en este caso element score
      return 0;                                 //esto de devolver 0 no me lo está registrando.
    } else {
      return acc + elemSc.score                      //acá le digo que lo que quiero acumular es elem score..creo  
    }
  },0)
let scoresAv = scoresVar / movies.length;            //uso lo acumulado para sacar el average
return Number (scoresAv.toFixed(2));                //toFixed para redondear. el number para que no sea una str.
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) { 

  // let searchingDramas = movies.filter((elem) => {      
  //   return elem.genre.includes ("Drama") 
  //  });
  //  return elem.length;       // no me da un array entonces no sirve?

    let dramaMov = movies.map((element) => {         
       if ( element.genre === "Drama") {
        return element; 
         }
         });                           //se supone que me debería devolver un array con los elements drama?
  if (movies.genre !==  "Drama") {
     return 0;                    
   };
 let scoreDramasMov = dramaMov.reduce ((accu,elem) => {   
  return accu + elem.score
 }, 0);
 let averDraMov = scoreDramasMov / movies.length;
 return Number (averDraMov.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) { 
  let orderCopy = JSON.parse( JSON.stringify(movies))
   let moviesYears = orderCopy.sort ((first, second) =>{
 if (first > second) {
     return  1
   } else {
     return - 1
   }
 });
 return moviesYears;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
  let orCopy = JSON.parse(JSON.stringify(movies));
  for (let i = 0; i < 20; i++){
    let orderMovies = movies[i].sort((first, second) => {
      if (first > second) {return 1} else {return -1}
    })
    return orderMovies;
  }
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
