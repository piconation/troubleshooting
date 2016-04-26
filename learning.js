/**
 * Created by mattpowell on 4/25/16.
 */

//circle
var radius = 100;
var pi = Math.PI
var circum = 2 * pi * radius;

//triangle
var side1 = 34;
var side2 = 45;
var side3 = 45;
var triangle = side1 + side2 + side3

//square
var length = 34;
var square = length * 4

//gravity
var mass = 67;
var planet = 'earth';

//earth gravity
var earthGrav = 9.8

//moon gravity
var moonGrav = 1.622

//jupiter gravity
var jupiterGrav = 24.79

planet = planet.toLowerCase()

var result;

if (planet === 'earth') {
    result = earthGrav * mass;
}

else if(planet === 'moon') {
    result = moonGrav * mass;
}

else {
    result = jupiterGrav * mass;
}