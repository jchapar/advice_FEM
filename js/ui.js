class UI {
  constructor() {
    this.quoteContainer = document.querySelector('.quote-container');
  }

  showAdvice(quote) {
    this.quoteContainer.innerHTML = `
    <blockquote class="text-lightCyan text-center text-3xl font-bold">"${quote.slip.advice}"</blockquote>
    `;
    console.log(quote.slip.advice);
  }
}
