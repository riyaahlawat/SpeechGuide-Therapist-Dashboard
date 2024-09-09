document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar .nav-link');
    const homeSection = document.querySelector('home');
    const patientsSection = document.querySelector('patients');
    const supervisorSection = document.querySelector('supervisor');
    const exercisesSection = document.querySelector('exercises');
    const docsSection = document.querySelector('documentations');
    const chatsSection = document.querySelector('chats');
    const openWorkTable = document.querySelector('#open-work-table tbody');
    const closedWorkTable = document.querySelector('#closed-work-table tbody');

    // Function to show the correct section based on the clicked sidebar link
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Remove 'active' class from all links
            sidebarLinks.forEach(link => link.classList.remove('active'));

            // Hide all sections
            homeSection.style.opacity = '0';
            exercisesSection.style.opacity = '0';
            patientsSection.style.opacity = '0';
            supervisorSection.style.opacity = '0';
            docsSection.style.opacity = '0';
            chatsSection.style.opacity = '0';
            homeSection.style.display = 'none';
            patientsSection.style.display = 'none';
            supervisorSection.style.display = 'none';
            exercisesSection.style.display = 'none';
            docsSection.style.display = 'none';
            chatsSection.style.display = 'none';

            // Add 'active' class to clicked link
            this.classList.add('active');

            // Show the corresponding section
            const linkText = this.textContent.trim();
            if (linkText === 'Patients') {
                patientsSection.style.opacity = '1';
                patientsSection.style.display = 'block';
            } else if (linkText === 'Supervisor') {
                supervisorSection.style.opacity = '1';
                supervisorSection.style.display = 'block';
            } else if (linkText === 'Speech Exercises') {
                exercisesSection.style.opacity = '1';
                exercisesSection.style.display = 'block';
            } else if (linkText === 'Documentations') {
                docsSection.style.opacity = '1';
                docsSection.style.display = 'block';
            }else if (linkText === 'Chats') {
                chatsSection.style.opacity = '1';
                chatsSection.style.display = 'block';
            } else {
                homeSection.style.opacity = '1';
                homeSection.style.display = 'block';
            }
        });
    });

    // Function to update S.No. in a table
    function updateSerialNumbers(table) {
        const rows = table.querySelectorAll('tr');
        rows.forEach((row, index) => {
            row.querySelector('td').textContent = index + 1;
        });
    }

    // Function to move row between tables and maintain S.No.
    function moveRow(checkbox) {
        const row = checkbox.closest('tr');
        if (checkbox.checked) {
            closedWorkTable.appendChild(row);
        } else {
            openWorkTable.appendChild(row);
        }
        // Update S.No. after moving the row
        updateSerialNumbers(openWorkTable);
        updateSerialNumbers(closedWorkTable);
    }

    // Function to attach event listeners to checkboxes
    function attachCheckboxListeners(tableId) {
        const table = document.querySelector(tableId);
        const checkboxes = table.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                moveRow(this);
            });
        });
    }

    // Attach event listeners to all checkboxes in both tables
    attachCheckboxListeners('#open-work-table');
    attachCheckboxListeners('#closed-work-table');
});

const scrollContainer = document.querySelector('.review-container');
const scrollLeftButton = document.getElementById('scrollLeft');
const scrollRightButton = document.getElementById('scrollRight');

scrollLeftButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -200, // adjust the value as needed
        behavior: 'smooth'
    });
});

scrollRightButton.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 200, // adjust the value as needed
        behavior: 'smooth'
    });
});


const fileInput = document.getElementById('prescriptionUpload');
const fileNameDisplay = document.getElementById('fileName');

fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
        fileNameDisplay.textContent = `Selected file: ${fileInput.files[0].name}`;
    }
});

function toggleChat() {
    var chatWindow = document.getElementById("chat-window");
    if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
        chatWindow.style.display = "flex";
    } else {
        chatWindow.style.display = "none";
    }
}

