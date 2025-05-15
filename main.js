document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    console.log('Elements found:', {
        hamburger: !!hamburger,
        sidebar: !!sidebar,
        closeBtn: !!closeBtn
    });

    // Toggle sidebar when hamburger is clicked
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            console.log('Hamburger clicked');
            hamburger.classList.toggle('active');
            if (sidebar) {
                sidebar.classList.toggle('active');
            }
        });
    }

    // Close sidebar when close button is clicked
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            console.log('Close button clicked');
            if (sidebar) {
                sidebar.classList.remove('active');
            }
            if (hamburger) {
                hamburger.classList.remove('active');
            }
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (sidebar && hamburger) {
            if (!sidebar.contains(e.target) && !hamburger.contains(e.target) && sidebar.classList.contains('active')) {
                console.log('Clicked outside sidebar');
                sidebar.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    });

    // Audio Control
    const btn = document.getElementById('playPauseBtn');
    const icon = document.getElementById('playPauseIcon');
    const audio = document.getElementById('bgMusic');

    if (btn && icon && audio) {
        audio.volume = 0.5;
        let isPlaying = false;

        btn.addEventListener('click', function() {
            if (isPlaying) {
                audio.pause();
                icon.classList.remove('fa-pause');
                icon.classList.add('fa-play');
            } else {
                audio.play();
                icon.classList.remove('fa-play');
                icon.classList.add('fa-pause');
            }
            isPlaying = !isPlaying;
        });

        audio.addEventListener('ended', function() {
            isPlaying = false;
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        });
    } else {
        console.log("Some audio elements not found:", {
            btn: !!btn,
            icon: !!icon,
            audio: !!audio
        });
    }
}); 