class UI {
  constructor() {
    this.quoteContainer = document.querySelector('.quote-container');
    this.id = document.querySelector('#id-container');
  }

  showAdvice(quote) {
    console.log(quote.slip.advice);
    console.log(quote.slip.id);
    this.quoteContainer.innerHTML = `
    <blockquote class="text-lightCyan text-center text-3xl font-bold">"${quote.slip.advice}"</blockquote>
    `;
    this.id.innerHTML = `
    <p class="text-neonGreen uppercase font-bold tracking-widest">Advice #${quote.slip.id}</p>
    
    `;
  }
}
