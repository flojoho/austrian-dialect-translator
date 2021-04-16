import './tests.js';
import translateText from './translate.js';

const textarea = document.getElementById('textarea');
const outputDiv = document.getElementById('output-div');

textarea.addEventListener('focus', function() {
  this.select();
})

textarea.addEventListener('input', function() {
  displayTranslation(this.value);
})

function displayTranslation(text) {
  outputDiv.innerText = translateText(text);
}

displayTranslation(textarea.value);