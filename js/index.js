let span = document.createElement('span');
let currentString = '';
let phrasesIndex = 0, currentStringIndex = 0;

const phrases = ['Front-end developer', 'Technology enthusiast', 'Programmer', 'Coffee'];

span.classList = 'digits';

const digitsAnimation = () => {
  currentString = phrases[phrasesIndex].split('');
  let firstInterval = setInterval(() => {
    if (span.textContent != currentString.join('')) {
      span.textContent += currentString[currentStringIndex];
      currentStringIndex += 1;
    } else {
      clearInterval(firstInterval);
      phrasesIndex == phrases.length - 1 ? phrasesIndex = 0 : phrasesIndex += 1;
      currentStringIndex = 0;
      document.querySelectorAll('span')[1].classList = 'digits opacity-animation';
      setTimeout(() => {
        document.querySelectorAll('span')[1].classList = 'digits normal-opacity';
        let secondInterval = setInterval(() => {
          if (span.textContent != '') {
            span.textContent = span.textContent.substring(0, span.textContent.length - 1);
          } else {
            clearInterval(secondInterval);
            digitsAnimation();
          };
        }, 100);
      }, 3000);
    };
    if (document.querySelectorAll('span').length < 5) {
      document.querySelector('span').before(span);
    };
  }, 100);
};

digitsAnimation();