"use strict";

let numbberOfFilms;

function start(){
    numbberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

    while(numbberOfFilms == '' || numbberOfFilms == null || isNaN(numbberOfFilms))
    {
        numbberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }

}

start();

const personalMovieDB = {
    count: numbberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};


function rememberMyFilms(){  
for(let i=0;i<2;i++)
{
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько его оцените?','');


    if(a != null && b != null && a != '' && b != '' && a.length < 50  )
    {
        personalMovieDB.movies[a] = b;
    }
    else
    {
        i--;
    }
    
}
}

rememberMyFilms();






function detectPersonalLevel(){
        if(personalMovieDB.count<10){
        console.log("Посмотренно довольно мало фильмов");
    }else if(personalMovieDB.count >=10 && personalMovieDB.count<30)
    {
        console.log("Вы классический зритель");
    }else if(personalMovieDB.count>=30)
    {
        console.log("Вы киноман");
    }else{
        console.log("ПРоизошла ошибка");
    }
}

detectPersonalLevel();


console.log(personalMovieDB);

function showMyDB(hidden){
    if(!hidden){   
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for(let i = 0; i<3;i++)
    {
        let genre = prompt(`Ваш любимый жанр под номером ${i+1}`);
        personalMovieDB.genres[i] = genre;
    }
}
writeYourGenres();