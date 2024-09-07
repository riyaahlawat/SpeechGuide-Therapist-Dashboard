
document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');
    const homeSection = document.querySelector('home');
    const patientsSection = document.querySelector('patients');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'active' class from all links
            sidebarLinks.forEach(link => link.classList.remove('active'));

            // Hide all sections
            homeSection.style.opacity = '0';
            patientsSection.style.opacity = '0';
            homeSection.style.display = 'none';
            patientsSection.style.display = 'none';

            // Add 'active' class to clicked link
            this.classList.add('active');

            // Show the corresponding section
            if (this.textContent.trim() === 'Patients') {
                patientsSection.style.opacity = '1';
                patientsSection.style.display = 'block';
            } else {
                homeSection.style.opacity = '1';
                homeSection.style.display = 'block';
            }
        });
    });
});
