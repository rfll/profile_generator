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
    answers.activity = activity.toLowerCase();

    rl.question('What do you like to listen to while doing that? ', (audio) => { 
      answers.audio = audio.toLowerCase();

      rl.question('What meal is your favourite? (e.g. dinner, brunch etc.) ', (meal) => { 
        answers.meal = meal.toLowerCase();

        rl.question('What is your favourite thing to eat for that meal? ', (food) => { 
          answers.food = food.toLowerCase();

          rl.question('Which sport is your absolute favourite? ', (sport) => { 
            answers.sport = sport.toLowerCase();

            rl.question('What is your superpower? In a few words tell us what you are amazing at! ', (superpower) => { 
              answers.superpower = superpower.toLowerCase();
      
              rl.close();
              console.log(`${answers.name} loves listening to ${answers.audio} while ${answers.activity}, devouring ${answers.food} for ${answers.meal}, loves ${answers.sport} and is amazing at ${answers.superpower}!`);
          
            });
          });
        });
      });
    });
  });
});

