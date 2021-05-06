const span = document.createElement('span');
const phrases = ['Front-end developer', 'Technology enthusiast', 'Programmer', 'Coffee'];

let phrasesIndex = 0;
let currentStringIndex = -1;

span.classList = 'digits';

const digitsAnimation = () => {
  const firstInterval = setInterval(() => {
    span.textContent = phrases[phrasesIndex].substring(0, currentStringIndex += 1);
    if (span.textContent === phrases[phrasesIndex]) {
      clearInterval(firstInterval);

      phrasesIndex === phrases.length - 1 ? phrasesIndex = 0 : phrasesIndex += 1;

      currentStringIndex = -1;

      document.querySelectorAll('span')[1].classList = 'digits opacity-animation';

      setTimeout(() => {
        document.querySelectorAll('span')[1].classList = 'digits normal-opacity';

        const secondInterval = setInterval(() => {
          span.textContent = span.textContent.substring(0, span.textContent.length - 1);
          if (!span.textContent) {
            clearInterval(secondInterval);

            digitsAnimation();
          }
        }, 100);
      }, 3000);
    }
  }, 100);

  if (document.querySelectorAll('span').length < 5) {
    document.querySelector('span').before(span);
  }
};

digitsAnimation();
