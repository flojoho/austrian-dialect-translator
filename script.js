
const textarea = document.getElementById('textarea');
const outputDiv = document.getElementById('output-div');

textarea.addEventListener('focus', function() {
  this.select();
})

textarea.addEventListener('input', function() {
  outputDiv.innerText = this.value;
})