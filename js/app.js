// Init Advice
const http = new HTTP();
// Init UI
const ui = new UI();

const generateBtn = document.getElementById('generate-btn');
const quoteContainer = document.querySelector('.quote-container');

generateBtn.addEventListener('click', () => {
  http.getAdvice().then((data) => {
    ui.showAdvice(data);
  });
});
