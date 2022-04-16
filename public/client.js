const key = "1ccb732e-b55a-4404-ad3f-0f99c02fe44e"
const button = document.getElementById('apiButton');
button.addEventListener('click', function(e) {
    console.log('button was clicked');
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api.countapi.xyz/hit/${key}`);
    xhr.responseType = "json";
    xhr.onload = function() {
        document.getElementById('textField').innerHTML = `API hit count: ${this.response.value}`;
    }
    xhr.send();
});
