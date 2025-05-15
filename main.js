document.addEventListener('DOMContentLoaded', function() {
    // Sidebar functionality
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    if (hamburger && sidebar) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            sidebar.classList.toggle('active');
        });
    }

    if (closeBtn && sidebar && hamburger) {
        closeBtn.addEventListener('click', function() {
            sidebar.classList.remove('active');
            hamburger.classList.remove('active');
        });

        // Close sidebar when clicking outside
        document.addEventListener('click', function(e) {
            if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Audio Control
    const playPauseBtn = document.getElementById('playPauseBtn');
    const playPauseIcon = document.getElementById('playPauseIcon');
    const bgMusic = document.getElementById('bgMusic');

    if (playPauseBtn && playPauseIcon && bgMusic) {
        console.log("Audio elements found");
        
        bgMusic.volume = 0.5;
        
        playPauseBtn.onclick = function() {
            console.log("Button clicked");
            if (bgMusic.paused) {
                console.log("Playing audio");
                bgMusic.play();
                playPauseIcon.className = 'fa fa-pause';
            } else {
                console.log("Pausing audio");
                bgMusic.pause();
                playPauseIcon.className = 'fa fa-play';
            }
        };
    } else {
        console.log("Some audio elements not found:", {
            playPauseBtn: !!playPauseBtn,
            playPauseIcon: !!playPauseIcon,
            bgMusic: !!bgMusic
        });
    }
}); 