const { name } = require('commander');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Object to store all the answers
const answers = {};

// Nest the questions to print the answers within the local scope
rl.question('What is your name? Nicknames are also acceptable. ', (name) => { 
  answers.name = name;

  rl.question('What is your age ', (age) => { 
    answers.age = age;

    rl.close();

    console.log(`${name} and ${age}`)

  });


});


