function playSound(soundName) {
    var audio = new Audio(`./sounds/${soundName}.mp3`);
    audio.play();
}

window.addEventListener ('keypress',function(event){
    keypressed = event.key;
    if (keypressed == 'w') {
        playSound('crash');
    } else if (keypressed == 'a') {
        playSound('kick-bass');
    } else if (keypressed == 's') {
        playSound ('snare');
    } else if (keypressed == 'd') {
        playSound ('tom-1');
    } else if (keypressed == 'j') {
        playSound ('tom-2');
    } else if (keypressed == 'k') {
        playSound ('tom-3');
    } else if (keypressed == 'l') {
        playSound ('tom 4')
    }
    playAnimation(keypressed);
})

function playAnimation (keypressed) {
    document.getElementsByClassName(keypressed)[0].classList.add("pressed");
    setTimeout( function() {
        document.getElementsByClassName(keypressed)[0].classList.remove("pressed"),100;
    })
}
