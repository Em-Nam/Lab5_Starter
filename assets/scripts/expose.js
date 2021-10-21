// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
    var hornSelect = document.getElementById('horn-select');
    hornSelect.addEventListener('change', function(event){
        var img = document.querySelector("[src^='assets/images']");
        img.src = 'assets/images/' + event.target.value + '.svg';

        console.log(event.target.value);
        console.log(img);
        
        var audio = document.querySelector('audio');
        audio.src = 'assets/audio/' + event.target.value + '.mp3';
        console.log(audio);
    })
}