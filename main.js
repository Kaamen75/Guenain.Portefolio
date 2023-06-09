function showSection(sectionId) {
    var sections = document.querySelectorAll('#content section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.style.display = 'flex';  // Afficher la section sélectionnée

        } else {
            section.style.display = 'none';  // Cacher toutes les autres sections
        }
    });
}

// Afficher l'accueil par défaut
showSection('home');
function toggleMenu() {
    var sections = document.querySelectorAll('#content section');
    var menu = document.querySelector('.navbar');
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
        sections.forEach(function(section) {
            section.classList.add('marge');
        });
    } else {
        menu.style.display = "none";
        sections.forEach(function(section) {
            section.classList.remove('marge');
        });
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "70%" //opens side navbar by 70 percent
    document.getElementById('backdrop').style.display = "block" //displays overlay
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById('backdrop').style.display = "none"
}


let images = ['1.jpg', '2.jpg', '3.jpg'];
let i = 0;

function changeBackgroundImage() {
    document.documentElement.style.backgroundImage = `url(${images[0]})`;
    i = (i + 1) % images.length;
    setTimeout(changeBackgroundImage, 4000); // change every 4 seconds
}

window.onload = changeBackgroundImage;