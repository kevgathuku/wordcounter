function countWords() {
  var text = document.getElementById('count-area').value;
  var count = text.match(/\S+/g).length;
  var results = document.getElementById('results');
  results.innerHTML = 'I spot ' + count + ' words';
}
