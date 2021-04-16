
const textarea = document.getElementById('textarea');
const outputDiv = document.getElementById('output-div');

textarea.addEventListener('focus', function() {
  this.select();
})

textarea.addEventListener('input', function() {
  outputDiv.innerText = this.value;
  console.log(translateText(this.value))
})

function translateText(text) {
  // https://stackoverflow.com/questions/11704182/regex-with-extended-latin-alphabet-%c3%a4-%c3%b6-%c3%bc-%c3%a8-%c3%9f
  return text.match(/[\p{L}]+|[^\p{L}]+/giu)
}