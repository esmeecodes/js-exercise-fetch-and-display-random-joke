// const sayHello = (name) => {
//   console.log("Hello " + name + "!");
// };

// sayHello("Esmée");

const jokeContainer = document.querySelector("#joke-container");
jokeContainer.innerHTML = "TEST";

async function fetchJokes() {
  return fetch("https://official-joke-api.appspot.com/random_joke");
}

async function displayJokes() {
  const json = await fetchJokes();
  const jokes = await json.json();
  const jokeSetup = jokes.setup;
  const jokePunchline = jokes.punchline;
  const titleP = document.createElement("p");
  const descP = document.createElement("p");
  jokeContainer.append(titleP, descP);
  titleP.innerHTML = jokeSetup;
  descP.innerHTML = jokePunchline;
}

displayJokes();

// NOTE Roept eerst de functie fetchJokes aan, await zorgt ervoor dat de functie wacht tot de fetchJokes() functie klaar is met het ophalen van de data, daarna modificeren we de data in de fetch tot leesbare objecten met de json() functie.

// Daarna wordt de data opgeslagen in de const jokes en is deze klaar om te gebruiken in de displayJokes() functie.

// Daarna worden de delen van de joke in twee consts gestopt, zodat we deze in de DOM kunnen toevoegen.

// Daarna maken we twee p elementen aan en voegen we deze toe aan de jokeContainer.

// Tot slot voegen we de jokeSetup en jokePunchline toe aan de innerHTML van deze twee gemaakte p elementen en roepen we de functie aan.
