document.addEventListener('DOMContentLoaded', function () {
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const sidebar = document.getElementById('sidebar');

    menuToggleBtn.addEventListener('click', function () {
        console.log("hello");
        // Toggle the sidebar display
        if (sidebar.style.display === 'block') {
            sidebar.style.display = 'none'; // Hide sidebar
        } else {
            sidebar.style.display = 'block'; // Show sidebar
        }
    });
});