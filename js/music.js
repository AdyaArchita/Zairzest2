let isPlaying = false;
const audio = document.getElementById('bgMusic');
const icon = document.getElementById('playPauseIcon');

function togglePlay() {
    if (!isPlaying) {
        audio.play();
        icon.className = 'fa fa-pause';
        isPlaying = true;
    } else {
        audio.pause();
        icon.className = 'fa fa-play';
        isPlaying = false;
    }
}

audio.onended = function() {
    isPlaying = false;
    icon.className = 'fa fa-play';
};

// Set initial volume
audio.volume = 0.5; 