function getRandomInt(max) {
      return Math.floor(Math.random() * max);
}
const button = document.getElementById('apiButton');
button.addEventListener('click', function(e) {
    x = getRandomInt(64)
    document.getElementById('textField').innerHTML = `API hit count: ${x}`;
    console.log('button was clicked');
});
