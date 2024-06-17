// Import Functions & Modules
import { JokeSection } from '../components/JokeSection/JokeSection.js';
import { Joke } from '../components/Joke/Joke.js';

// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

function renderJoke(joke) {
  // Clear the joke section
  jokeSection.innerHTML = '';

  // Create a new joke DOM element and append it to joke section
  const newJoke = Joke(joke);

  jokeSection.append(newJoke);
}

//console.log(fetch('https://example-apis.vercel.app/api/bad-jokes/random'));
const url = 'https://example-apis.vercel.app/api/bad-jokes/random';

async function getRandomJoke() {
  // something to do

  const response = await fetch(url);

  const joke = await response.json();

  renderJoke(joke.joke);

  console.log('THE RANDOM JOKE', joke);
}

console.log('A');
getRandomJoke();
console.log('B');
