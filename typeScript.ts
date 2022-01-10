class Movie {
  //field
  title: string;
  studio: string;
  rating: string;

  //constructor
  constructor(t: string='', s: string='', r: string=`PG13`) {
    this.title = t;
    this.studio = s;
    this.rating = r;
  }

  //methods
  getPG() {
    if (this.rating == `PG13`) {
      return `
             Title:  ${this.title}
             Studio: ${this.studio}
             Rating: ${this.rating}
            `;
    }
  }
}

const movies: Movie[] = [];

const filmOne = new Movie('Casino Royale', 'Eon Production', 'PG13');
const filmTwo = new Movie('Bond 007', 'Eon Production', 'A++');
const filmThree = new Movie('X-Men', 'Marvel Production', 'PG13');
const filmFour = new Movie('Avengers', 'Marvel Production', 'PG13');
const filmFive = new Movie('The girl on the Train', 'Annapurna Production', 'R');
const filmSix = new Movie('Thor', 'Black Entertainment', '');



movies.push(filmOne);
movies.push(filmTwo);
movies.push(filmThree);
movies.push(filmFour);
movies.push(filmFive);
movies.push(filmSix);

console.log(movies);

console.log('******************************');


movies.forEach((mov) => {
  console.log(mov.getPG());
});




/*PERSON CLASS*/

console.log('******************************');


class Profile{
      //fields
      name:string;
      age:number;
      email:string;
      location:string;

      //constructor
      constructor(nm:string, age:number, eml:string,loc:string){
            this.name=nm;
            this.age=age;
            this.email=eml;
            this.location=loc;

      }
      per(){
            return`
            Name: ${this.name}
            Age: ${this.age}
            Email: ${this.email}
            `
      }

}

const portfolio: Profile[]=[];

const persOne = new Profile('Shashi',24,'Shashi@mail.com','Noida')
const persTwo = new Profile('Bhushan',21,'bhushan@mail.com','Varanasi')
const persThree = new Profile('Bhardwaj',23,'bhardwaj@mail.com','Dhanbad')

portfolio.push(persOne);
portfolio.push(persTwo);
portfolio.push(persThree);

portfolio.map(el=>{
      console.log(el.per());
})


console.log('******************************');
/*UBER PRICE*/

class Uber{
      //fields
      distance:number;
      factor:number;
      startPoint:string;
      endPoint:string;

      //constructor
      constructor(d:number,start:string,end:string,f:number=11){
            this.distance=d;
            this.factor=f;
            this.startPoint=start;
            this.endPoint=end;
      }
      price(){
            return`
            Thank you for choosing us, you uber ride bill for ${this.distance} km, from ${this.startPoint} to ${this.endPoint} is Rs. ${this.factor * this.distance}
            `
      }
}

const calc: Uber[]=[];

const ride1 = new Uber(29,'Noida','Ghaziabd');
calc.push(ride1);

calc.forEach(cl=>{
      console.log(cl.price());
      
})
