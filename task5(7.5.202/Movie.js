class Movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }
   static getPG(Movie){
      return Movie.filter(Movie=>Movie.rating==="PG");
   }
    toString(){
        console.log(`Titile: ${this.title},\nStudio:${this.studio},\nRating:${this.rating}`);
    }
}
const MovieTime=new Movie("Casino Royale","Eon Productions","PG­13");
console.log(MovieTime.toString());

const Moviepg=[
    new Movie("LEO","Seven Screen studio","PG"),
    new Movie("The Spiderman"," Walt Disney","PG"),
    new Movie("HULK","Marvel",'PG'),
    new Movie("2012","Sony Pictures","PG-13")
]

const MovieResult=Movie.getPG(Moviepg);
console.log("The result",MovieResult);




