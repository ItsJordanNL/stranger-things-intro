const audio = document.getElementById("audio");

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) { // 32 is the key code for the spacebar
        location.reload();
        audio.play();
    }
});

document.addEventListener("keydown", function (event) {
    if (event.keyCode === 77) { // 77 is the key code for the m key
        audio.pause();
    }
});