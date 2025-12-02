window.addEventListener("keydown", function (dets) {

    var soundKey = dets.key.toUpperCase();

    var audio = document.querySelector(`audio[data-sound="${soundKey}"]`);
    
    var keyDiv = document.querySelector(`.key[data-sound="${soundKey}"]`);

    if (!audio) return; 

    audio.currentTime = 0; 
    audio.play();          

    keyDiv.classList.add("active"); // Class chipka di

    setTimeout(function() {
        keyDiv.classList.remove("active");
    }, 100);

});