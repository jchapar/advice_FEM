// Init Advice
const http = new HTTP();
// Init UI
const ui = new UI();

const generateBtn = document.getElementById('generate-btn');

generateBtn.addEventListener('click', () => {
  http.getAdvice().then((data) => {
    ui.showAdvice(data);
  });
});
