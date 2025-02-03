'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20;00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and  ${this.mainMenu[mainIndex]}, to be delivered at ${time} to this location: ${address}.`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}.`
    );
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Property Names

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// Property Values

const values = Object.values(openingHours);
console.log(values);

// Entire object

const entries = Object.entries(openingHours);
console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(
    `On ${day.toUpperCase()} we open at ${open} and close at ${close}.`
  );
}

/* for of loop
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log('this is the whole menu: ' + menu);

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}. ${el}`);
}
*/
/*
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Dan San Pedro',
};

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon.open);

// with optional chaining

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}.`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.order2?.(0, 1) ?? 'Method does not exist');

// Arrays

const users = [{ name: 'dan', email: 'dan@me.com' }];

console.log(users[0]?.name ?? 'user array empty');

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// nullish assignment operator:
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS'
// rest2.owner = rest2.owner && '<ANONYMOUS'

rest1.owner &&= '<ANONYMOUS';
rest2.owner &&= '<ANONYMOUS';

/*
// use any data taype, return any data type, short circuiting or short circuit evaluation

console.log(3 || 'Dan');

console.log('' || 'Dan');

console.log(true || 0);

console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
restaurant.numGuests = 50;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log('guests1', guests1);

const guests2 = restaurant.numGuests || 10;
console.log('guests2', guests2);

console.log('---- AND ----');

console.log(0 && 'Dan');

console.log('Ann' && 'Dan');

console.log(23 && 'Ann' && null && 'Simon');

if (restaurant.orderPizza) {
  restaurant.orderPizza('chicken', 'mushrooms', 'cheese', 'onions');
}

restaurant.orderPizza && restaurant.orderPizza('chicken', 'mushrooms');

/*
//Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// REST has to be last element... one REST in any destructuring assignment
const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherfood);

//Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];

  console.log(numbers);
  console.log(sum);
};

add(2, 3);
add(5, 10, 15);
add(5, 6, 7, 3, 4);
add(-5, 10, 25);

const x = [25, 30, 45];

add(...x);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

restaurant.orderPizza('mushrooms');

/*
// the spread operator (...)
const arr = [7,8,9];

const newArray = [1,2,...arr];

console.log(newArray);
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'gnocchi','lasagne'];
console.log(newMenu);

// Copy array

const mainMenuCopy = [...restaurant.mainMenu];

//Join 2 arrays

const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
console.log(menu);


//Iterables: arrays, strings, maps, sets. NOT objects

const str = 'Daniel';

const letters = [...str,'', 'S','P'];
console.log(letters);

// const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

//Objects

const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Dan San Pedro'}

console.log(newRestaurant);

const restaurantCopy = {...restaurant};

restaurantCopy.name = 'Italian Dan';

console.log(restaurantCopy.name);
console.log(restaurant.name);

console.log(restaurantCopy);

//Destructuring Objects
/*
restaurant.orderDelivery({
  time: '22:30',
  address: '2441 Ploughshare Crt',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: '2441 Ploughshare Crt',
  starterIndex: 3,
})


const { name, categories, openingHours } = restaurant
console.log( name, categories, openingHours );

const { name: restaurantName, openingHours: hours, categories: tags} = restaurant
console.log(restaurantName, hours, tags);
// default values
const {menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters);

// mutating variables

let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({ a, b } = obj);
console.log(a,b);

// NEsted objects

const { fri: {open: o, close: c} } = openingHours;
console.log(o, c);

const arr = [1, 2, 3];

const a = arr [0];
const b = arr [1];
const c = arr [2];

const [x,y,z]  = arr
console.log(x,y,z);
console.log(arr);

let [main, ,secondary] = restaurant.categories;

console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary)

[main, secondary] = [secondary, main]
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2,0);
console.log(starter,mainCourse);

// nested destructuring
const nested = [2, 4, [5, 6]]
// const [i, ,j] = nested
// console.log(nested);
// console.log(i,j)
const[i, ,[j,k]] = nested;
console.log(i,j,k);

// default values
const [p = 1, q = 1, r = 1] = [8,9];
console.log(p,q,r);

*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀


const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

const [gk, ...fieldplayers] = players1;

const allPlayers = [...players1, ...players2];

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(players1);
console.log(players2);

console.log(gk, fieldplayers);
console.log(allPlayers);
console.log(players1Final);

console.log(team1, draw, team2);

const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to Win`);
team2 < team1 && console.log(`Team 2 is more likely to Win`);
*/
