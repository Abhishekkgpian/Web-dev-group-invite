let navbar=document.getElementById('nav-bar');
let hamburger=document.getElementById('hamburger');
hamburger.addEventListener('click', function run(){
    if (navbar.style.display!='none') {
        navbar.style.display='none';
    } else {
        navbar.style.display='flex';
    }
    });
