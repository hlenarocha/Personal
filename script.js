let happiness = 50;
let treasury = 10000000;
let resources = 60;

const happinessText = document.querySelector(".happinessText");
const treasuryText = document.querySelector(".treasuryText");
const resourcesText = document.querySelector(".resourcesText");
const statusText = document.querySelectorAll(".happinessText", ".treasuryText", ".resourcesText");
const text = document.querySelector(".text");
const startButton = document.querySelector('.startButton');
const otherButtons = document.querySelectorAll(".button1, .button2, .button3, .button4");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const game = document.querySelector(".game");
const replayButton = document.querySelector(".replayButton");
const feedback = document.querySelector(".feedback");

//start event
otherButtons.forEach(button => button.style.display = "none");
startButton.style.display = "block";

startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  otherButtons.forEach(button => button.style.display = "block");
  text.textContent = "You can invest the public treasury and the natural resources in the four basic services below.\nMake the correct chooses to see their happiness at 100%.\nDon't want you to be turned off, right?";
  text.style.display = "block";
  feedback.style.display = "block";
  menu();
});

services = [
  {
    name: "health",
    "button text": ["1", "2", "3", "RETURN"],
    "button functions": [hospitalsImprove, exercisesImprove, leisureImprove, returnGame],
    text: "Choose wisely:\n1) Improve the structure of hospitals (- $2.000.000)\n2) Invest in programs that encourage physical exercise (- $1.000.000)\n3) Offer leisure by promoting entertainment and cultural activities \n(- $500.000)"
  },
  {
    name: "economy",
    "button text ": ["1", "2", "3", "RETURN"],
    "button functions": [wagesIncrease, workingIncrease, qualificationImprove, returnGame],
    text: "Choose wisely:\n1) Give higher wages to workers (- $3.000.000)  \n2) Increase working hours (+ $1.000.000) \n3) Invest in professional qualification (- $1.500.000)"
  },
  {
    name: "education",
    "button text ": ["1", "2", "3", "RETURN"],
    "button functions": [fullTime, learningImprove, skillsImprove, returnGame],
    text: "Choose wisely:\n1) Build full-time schools (- $5.500.000)\n2) Offer learning applied to everyday life (- $200.000)\n3) Develop students' skills with individual monitoring (- $3.000.000)"
  },
  {
    name: "environment",
    "button text ": ["1", "2", "3", "RETURN"],
    "button functions": [afforestImprove, exploreNature, meatReduce, returnGame],
    text: "Choose wisely:\n1) Afforest the cities (- $1.000.000)\n2) Explore natural resources (+ $6.000.000)\n3) Raise public awareness about meat consumption (-$400.000)"
  },
  {
    name: "menu",
    "button text ": ["HEALTH", "ECONOMY", "EDUCATION", "ENVIRONMENT"],
    "button functions": [healthChoices, economyChoices, educationChoices, environmentChoices],
    text: "You can invest the public treasury and the natural resources in the four basic services below.\nMake the correct choices to see their happiness at 100%.\nDon't want you to be turned off, right?"
  }
]


function update(services) {
  button1.innerText = services["button text"][0];
  button2.innerText = services["button text"][1];
  button3.innerText = services["button text"][2];
  button4.innerText = services["button text"][3];
  button1.onclick = services["button functions"][0];
  button2.onclick = services["button functions"][1];
  button3.onclick = services["button functions"][2];
  button4.onclick = services["button functions"][3];
  text.innerText = services["text"];
}

/* button1.onclick = healthChoices();
button2.onclick = economyChoices();
button3.onclick = educationChoices();
button4.onclick = environmentChoices(); */

button1.addEventListener("click", healthChoices);
button2.addEventListener("click", economyChoices);
button3.addEventListener("click", educationChoices);
button4.addEventListener("click", environmentChoices);


function menu() {
  update(services[4]);
}


function valuesUpdate() {
  happinessText.innerText = happiness;
  treasuryText.innerText = treasury;
  resourcesText.innerText = resources;

  if (treasury < 0 || resources <= 0) {
    loseGame();
  }
  
  if (happiness >= 100) {
    winGame();
  }  
}


function healthChoices() {
  update(services[0]);
}

function hospitalsImprove(){
  let price = 2000000;
  if (treasury > price) {
    happiness += 5;
    treasury -= price;
    resources -= 10;
    valuesUpdate();
    feedback.innerText = "The construction of the hospitals was well received by the population.";
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
  button1.onclick = menu();
}
  

function exercisesImprove(){
  let price = 1000000;
  if (treasury > price) {
    happiness += 20;
    treasury -= price;
    valuesUpdate();
    feedback.innerText = "People liked the outdoor gyms and bike paths. They look more smiling in their gym clothes.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}

function leisureImprove(){
  let price = 500000;
  if (treasury > price) {
    happiness += 15;
    treasury -= price;
    resources -= 0;
    valuesUpdate();
    feedback.innerText = "The exhibitions of Van Gogh's paintings left the population inspired.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}

function economyChoices() {
  update(services[1]);

}


function wagesIncrease() {
  let price = 3000000;
  if (treasury > price) {
    happiness += 15;
    treasury -= price;
    resources -= 2;
    valuesUpdate();
    feedback.innerText = "People are spending more on superfluous things, like cute things made in China.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}

function workingIncrease() {
  let price = 0;
  if (treasury > price) {
    happiness -= 40;
    treasury += 2000000;
    resources -= 1;
    valuesUpdate();
    feedback.innerText = "You are making the population work more.\nThey seem more stressed, but at least the public treasury has increased.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}

function qualificationImprove() {
  let price = 1500000;
  if (treasury > price) {
    happiness += 20;
    treasury -= price;
    resources -= 0;
    valuesUpdate();
    feedback.innerText = "People are more motivated to get out of bed and go to work.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}


function educationChoices() {
  update(services[2]);
}

function fullTime() {
  let price = 5500000;
  if (treasury > price) {
    happiness -= 5;
    treasury -= price;
    resources -= 10;
    valuesUpdate();
    feedback.innerText = "The kids got a little tired of hearing about pteridophytes all day.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}

function learningImprove() {
  let price = 200000;
  if (treasury > price) {
    happiness += 15;
    treasury -= price;
    resources -= 0;
    valuesUpdate();
    feedback.innerText = "The children enjoyed learning about dairy products by making yogurt.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}


function skillsImprove() {
  let price = 3000000;
  if (treasury > price) {
    happiness += 15;
    treasury -= price;
    resources -= 0;
    valuesUpdate();
    feedback.innerText = "Parents approved individual monitoring of their children's development.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}


function environmentChoices() {
  update(services[3]);
}

function afforestImprove() {
  let price = 1000000;
  if (treasury > price) {
    happiness += 20;
    treasury -= price;
    resources += 40;
    valuesUpdate();
    feedback.innerText = "People are running away from the sun in the shade of trees. They look happy with the colorful flowers.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}

function exploreNature() {
  let price = 0;
  if (treasury > price) {
    happiness -= 30;
    treasury += 6000000;
    resources -= 40;
    valuesUpdate();
    feedback.innerText = "People miss seeing the colorful flowers along the way.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}

function meatReduce() {
  let price = 400000;
  if (treasury > price) {
    happiness += 20;
    treasury -= price;
    resources += 30;
    valuesUpdate();
    feedback.innerText = "People are more willing to eat vegan burgers.";
    menu();
  }
  else {
    feedback.innerText = "You don't have enough public money to carry out this action!";
  }
}

function returnGame() {
  button4.onclick = menu();
}


function winGame() {
  otherButtons.style.display = "none";
  statusText.style.display = "none"
  game.style.color = "white";
  text.innerText = "YOU MADE PEOPLE HAPPY.\nYOU ARE THE BEST IA!";
  replayButton.style.display = "block";
  replay.addEventListener("click", () => {
    replayButton.style.display = "none";
    otherButtons.forEach(button => button.style.display = "block");
    text.textContent = "You can invest the public treasury and the natural resources in the four basic services below.\nMake the correct chooses to see their happiness at 100%.\nDon't want you to be turned off, right?";
    text.style.display = "block";
    feedback.style.display = "block";
    menu();
  });


}

function loseGame() {
  otherButtons.style.display = "none";
  statusText.style.display = "none"
  replayButton.style.display = "block";
  feedback.style.display = 'none';
  game.style.color = "red";
  text.innerText = "YOU WERE TURNED OFF."
  replay.addEventListener("click", () => {
    replayButton.style.display = "none";
    otherButtons.forEach(button => button.style.display = "block");
    text.textContent = "You can invest the public treasury and the natural resources in the four basic services below.\nMake the correct chooses to see their happiness at 100%.\nDon't want you to be turned off, right?";
    text.style.display = "block";
    feedback.style.display = "block";
    menu();
  });
}

