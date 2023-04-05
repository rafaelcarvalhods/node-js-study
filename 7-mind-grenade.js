// This module was required at '3-modules.js', line 8
/*(The mind grenade is in the fact that when I require a module I actually invoke it
  So when I require '7-mind-grenade', the function addValues will be executed
  */
const num1 = 20;
const num2 = 10;

function addValues() {
  console.log(`The sum of ${num1} and ${num2} is: ${num1 + num2}.`)
}

addValues()