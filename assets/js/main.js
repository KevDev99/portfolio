let activeTheme = 'dark';


const themeSwitch = document.getElementById("themeSwitch");


themeSwitch.addEventListener("click", toggleTheme)

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