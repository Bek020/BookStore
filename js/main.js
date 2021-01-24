let colosBalls = ['#F1D313', '#A85482', '#8FB783', '#F6C5C0', '#a94cc0'];
let changeColor = $('.card__ball');
let changeColorSecond = $('.card__ball-second');
let changeColorThird = $('.card__ball-third');
let changeColorFourth = $('.card__ball-fourth');

let randomColor = colosBalls[Math.floor(Math.random() * colosBalls.length)];
changeColor.css('background', randomColor); 

let randomColorSecond = colosBalls[Math.floor(Math.random() * colosBalls.length)];
changeColorSecond.css('background', randomColorSecond); 

let randomColorThird = colosBalls[Math.floor(Math.random() * colosBalls.length)];
changeColorThird.css('background', randomColorThird); 

let randomColorFourth = colosBalls[Math.floor(Math.random() * colosBalls.length)];
changeColorFourth.css('background', randomColorFourth); 


let topBalls = ['0px', '30px', '60px', '90px', '130px'];
let changeTop = $('.card__ball');
let changeTopSecond = $('.card__ball-second');
let changeTopThird = $('.card__ball-third');
let changeTopFourth = $('.card__ball-fourth');

let randomTop = topBalls[Math.floor(Math.random() * topBalls.length)];
changeTop.css('top', randomTop); 

let randomTopSecond = topBalls[Math.floor(Math.random() * topBalls.length)];
changeTopSecond.css('top', randomTopSecond); 

let randomTopThird = topBalls[Math.floor(Math.random() * topBalls.length)];
changeTopThird.css('top', randomTopThird); 

let randomTopFourth = topBalls[Math.floor(Math.random() * topBalls.length)];
changeTopFourth.css('top', randomTopFourth); 