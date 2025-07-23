// Window Navigation
let currLoc = window.location.pathname.split("/").pop();

if(currLoc != "admin.html"){ // Non Admin
    let navContents = document.querySelectorAll('header > ul > li > a');
    navContents.forEach(link => {
        if(link.getAttribute('href') === currLoc) link.classList.add('active');
    });

    const navBtn = document.getElementById('navBtn');
    const navMenu = navBtn.previousElementSibling;
    const navMobile = navBtn.nextElementSibling;

    navBtn.addEventListener('click', ((e) => {
        navMenu.classList.toggle('active');
        e.target.style.transform = 'rotateZ(-90deg)';
        e.target.style.color = 'gray';
    }));

    navMobile.addEventListener('click', ((e) => {
        navMenu.classList.toggle('active');
    }));

    document.addEventListener('click', function(e){
        if(!navBtn.contains(e.target) && !navMenu.contains(e.target) && !navMobile.contains(e.target)){
            navMenu.classList.remove('active');
        }
        if(!navMenu.classList.contains('active')){
            navBtn.style.color = 'white';
            navBtn.style.transform = 'rotateZ(0deg)';
        }
    });
}else{ // API Access
    fetch('../../api/get_menu.php')
        .then(res => res.json())
        .then(data => {
            const ul = document.getElementById('menu');
            data.forEach(menu => {
                const li = document.createElement('li');
                li.textContent = `${menu.menu} - Rp${menu.harga.toLocaleString()}`;
                ul.appendChild(li);
            });
        })
    .catch(err => console.error('Gagal menu : '), err);
}