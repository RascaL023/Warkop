let currLoc = window.location.pathname;
let navContents = document.querySelectorAll('header > ul > li > a');
navContents.forEach(link => {
    if('/' + link.getAttribute('href') === currLoc) link.classList.add('active');
})

const navBtn = document.getElementById('navBtn');
const navMenu = navBtn.previousElementSibling;
navBtn.addEventListener('click', ((e)=> {
    navMenu.classList.toggle('active');
    e.target.style.transform = 'rotateZ(-90deg)';
    e.target.style.color = 'gray';
}));

document.addEventListener('click', function(e){
    if(!navBtn.contains(e.target) && !navMenu.contains(e.target)){
        navMenu.classList.remove('active');
    }
    if(!navMenu.classList.contains('active')){
        navBtn.style.color = 'white';
        navBtn.style.transform = 'rotateZ(0deg)';
    }
})