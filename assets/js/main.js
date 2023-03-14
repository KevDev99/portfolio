let activeTheme = 'dark';


const themeSwitch = document.getElementById("themeSwitch");
const showMobileMenu = document.getElementById("showMobileMenu");
const closeModal = document.getElementById("closeModal");

themeSwitch.addEventListener("click", toggleTheme)
showMobileMenu.addEventListener("click", dropMenu)
closeModal.addEventListener("click", dropMenu);

function toggleTheme(e) {
    const body = document.body;
  
    if(activeTheme == 'dark') {
        activeTheme = 'light'
        themeSwitch.innerHTML = '<i class="fa fa-moon-o"></i>'
    } else {
        activeTheme = 'dark'
        themeSwitch.innerHTML = '<i class="fa fa-sun-o"></i>'
    }

    body.classList.toggle("light-mode");
}

function dropMenu() {
    var mobileMenu = document.querySelector(".mobile-nav");
    if (mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove('active');
    } else {
        mobileMenu.classList.add('active');
    }
}