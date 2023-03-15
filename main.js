console.log("yes!");

const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const menu_btn1 = document.querySelector('.hamburger1');

menu_btn.addEventListener('click', function() {
    // console.log("yes!");
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

menu_btn1.addEventListener('click', function() {
    console.log("yes!");
    menu_btn1.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});