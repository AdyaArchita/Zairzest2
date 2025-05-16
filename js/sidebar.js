document.addEventListener('DOMContentLoaded', function() {
    // Sidebar Elements
    const menuButton = document.querySelector('.navbar__menu');
    const sidebar = document.getElementById('sidebar');
    const closeSidebarButton = document.getElementById('closeSidebar');

    // Toggle sidebar when menu button is clicked
    if (menuButton) {
        menuButton.addEventListener('click', function(e) {
            e.stopPropagation();
            menuButton.classList.toggle('active');
            if (sidebar) {
                sidebar.classList.toggle('active');
            }
        });
    }

    // Close sidebar when close button is clicked
    if (closeSidebarButton) {
        closeSidebarButton.addEventListener('click', function(e) {
            e.stopPropagation();
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
                sidebar.classList.remove('active');
                menuButton.classList.remove('active');
            }
        }
    });
}); 