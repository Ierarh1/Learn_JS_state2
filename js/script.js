"use strict";

const numbberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numbberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};



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





console.log(personalMovieDB);