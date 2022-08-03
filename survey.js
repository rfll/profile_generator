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

  rl.question('What is an activity you like doing? ', (activity) => { 
    answers.activity = activity;

    rl.question('What do you like to listen to while doing that? ', (audio) => { 
      answers.audio = audio;

      rl.question('What meal is your favourite? (e.g. dinner, brunch etc.) ', (meal) => { 
        answers.meal = meal;

        rl.close();

        console.log(`${name} ${activity} ${audio} ${meal}`);
    
      });
  
    });

  });


});

