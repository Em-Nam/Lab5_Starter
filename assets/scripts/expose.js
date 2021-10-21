// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

    const LEVEL_ONE_VOLUME_LIMIT = 33;
    const LEVEL_TWO_VOLUME_LIMIT = 67;

    var isParty = false;    //parameter passing in event handlers without global variables

    //functionality when select new horn
    var hornSelect = document.getElementById('horn-select');
    hornSelect.addEventListener('change', function(event){
        var hornType = event.target.value;
        var img = document.querySelector("[src^='assets/images']");
        img.src = 'assets/images/' + hornType + '.svg';
        img.alt = hornType + ' image selected';

        console.log(event.target.value);
        console.log(img);
        
        var audio = document.querySelector('audio');
        audio.src = 'assets/audio/' + hornType + '.mp3';
        console.log(audio);

        isParty = (hornType == 'party-horn');

    })


    //functionality when slide volume
    var volumeSelect = document.getElementById('volume');
    console.log(volumeSelect);

    volumeSelect.addEventListener('input', function(event){
        console.log(event.target.value);
        let volumeValue = event.target.value;
        var icon = 0;
        if (volumeValue <= 0){
            icon = 0;
        } else if (volumeValue < LEVEL_ONE_VOLUME_LIMIT){
            icon = 1;
        } else if (volumeValue < LEVEL_TWO_VOLUME_LIMIT){
            icon = 2;
        } else {
            icon = 3
        }

        var img = document.querySelector("[src^='assets/icons']");
        img.src = 'assets/icons/volume-level-' + String(icon) + '.svg';
        img.alt = 'Volume level ' + String(icon);

        var audio = document.querySelector('audio');
        audio.volume = volumeValue / 100;
        console.log(audio.volume);
    })



    //functionality when play sound button
    var playSoundBtn = document.querySelector('button');
    const jsConfetti = new JSConfetti('canvas');
    

    playSoundBtn.addEventListener('click', function(){
        
        console.log(playSoundBtn);

        var audio = document.querySelector('audio');
        audio.load();
        audio.play();

        // var hornType = document.querySelector('[')
        console.log(isParty);
        if (isParty){
            jsConfetti.addConfetti();
        }
        

    })



}