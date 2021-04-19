var span = document.createElement('span');
var Phrases = ['Front-end developer', 'Technology enthusiast', 'Programmer', 'Coffee'];
var CurrentString = '';
var PhrasesIndex = 0, CurrentStringIndex = 0;

span.classList = 'digits';

const DigitsAnimation = () => {
  CurrentString = Phrases[PhrasesIndex].split('');
  var FirstInterval = setInterval(function AddDigits() {
    if (span.textContent != CurrentString.join('')) {
      span.textContent += CurrentString[CurrentStringIndex];
      CurrentStringIndex += 1;
    } else {
      clearInterval(FirstInterval);
      PhrasesIndex == Phrases.length - 1 ? PhrasesIndex = 0 : PhrasesIndex += 1;
      CurrentStringIndex = 0;
      document.querySelectorAll('span')[1].classList = 'digits opacity-animation';
      setTimeout(function () {
        document.querySelectorAll('span')[1].classList = 'digits normal-opacity';
        var SecondInterval = setInterval(function RemoveDigits() {
          if (span.textContent != '') {
            span.textContent = span.textContent.substring(0, span.textContent.length - 1);
          } else {
            clearInterval(SecondInterval);
            DigitsAnimation();
          };
        }, 100);
      }, 3000);
    };
    if (document.querySelector('header').querySelectorAll('span').length < 2) {
      document.querySelector('span').before(span);
    };
  }, 100);
};

DigitsAnimation();