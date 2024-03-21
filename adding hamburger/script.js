// (document).ready(function(){
//     ('.hambuger-menu').click(function(){
//         ('.nav-links').slideToggle();
//     });
// });

document.addEventListener(
    'DOMContentLoaded',
    function() {
        var hamburgerMenu= document.querySelector('.hamburger-menu');
        var navLinks= document.querySelector('.nav-links');
        hamburgerMenu.addEventListener('click',function() {
            navLinks.classList.toggle('active');
        });
    });
