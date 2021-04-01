// hamburger menu
const menuBtn = document.querySelector('.menu-btn');
const navListContainer = document.getElementById('nav__list__container');
const mainContainer = document.getElementById('main-container');
let menuOpen = false;

menuBtn.addEventListener('click', () =>{
        if(!menuOpen){
                menuBtn.classList.add('open');
                navListContainer.classList.add('show');
                mainContainer.classList.add('make-grey');
                menuOpen = true;
        }else{
                menuBtn.classList.remove('open');
                navListContainer.classList.remove('show');
                mainContainer.classList.remove('make-grey');
                menuOpen = false;
        }
})

// get current year
const time = document.getElementById('time');
const d = new Date().getFullYear();
time.textContent = d;

