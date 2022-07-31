// Init Advice
const http = new HTTP();

const generateBtn = document.getElementById('generate-btn');
const quoteContainer = document.querySelector('.quote-container');

const getRandomQuote = () => {
  fetch('https://api.adviceslip.com/advice')
    .then((data) => console.log(data.json()))
    .then((data) => console.log(data));
};

generateBtn.addEventListener('click', getRandomQuote);
