document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Elements
    const menuButton = document.querySelector('.navbar__menu');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');

    console.log('Elements found:', {
        menuButton: !!menuButton,
        sidebar: !!sidebar,
        closeSidebarButton: !!closeSidebarButton
    });

    // Toggle sidebar when menu button is clicked
    if (menuButton) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            console.log('Menu button clicked');
            menuButton.classList.toggle('active');
            if (sidebar) {
                sidebar.classList.toggle('active');
            }
        });
    }

    // Close sidebar when close button is clicked
    if (closeSidebarButton) {
        closeSidebarButton.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            console.log('Close button clicked');
            if (sidebar) {
                sidebar.classList.remove('active');
            }
            if (menuButton) {
                menuButton.classList.remove('active');
            }
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
        if (sidebar && menuButton) {
            if (!sidebar.contains(e.target) && !menuButton.contains(e.target) && sidebar.classList.contains('active')) {
                console.log('Clicked outside sidebar');
                sidebar.classList.remove('active');
                menuButton.classList.remove('active');
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