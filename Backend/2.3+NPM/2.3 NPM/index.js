//using common js
// const generateName = require("sillyname");
// var sillyName = generateName();
// console.log(sillyName);

//using esm
import {randomSuperhero} from 'superheroes';
var name = randomSuperhero();
console.log(`I am ${name}!`);