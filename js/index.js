let span = document.createElement('span');
let phrasesIndex = 0, currentStringIndex = -1;

const phrases = ['Front-end developer', 'Technology enthusiast', 'Programmer', 'Coffee'];

span.classList = 'digits';

const digitsAnimation = () => {
  let firstInterval = setInterval(() => {
    if (span.textContent != phrases[phrasesIndex]) {
      span.textContent += phrases[phrasesIndex][currentStringIndex += 1];
    } else {
      clearInterval(firstInterval);

      phrasesIndex == phrases.length - 1 ? phrasesIndex = 0 : phrasesIndex += 1;

      currentStringIndex = -1;

      document.querySelectorAll('span')[1].classList = 'digits opacity-animation';

      setTimeout(() => {
        document.querySelectorAll('span')[1].classList = 'digits normal-opacity';

        let secondInterval = setInterval(() => {
          span.textContent = span.textContent.substring(0, span.textContent.length - 1);
          if (span.textContent == '') {
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