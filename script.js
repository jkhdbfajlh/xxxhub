const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnpopup = document.querySelector('.btnlogin-popup');
const iconclose = document.querySelector('.icon-close');



registerLink.addEventListener('click',()=> {
    wrapper.classList.add('activate');
});


loginLink.addEventListener('click',()=> {
    wrapper.classList.remove('activate');
});


btnpopup.addEventListener('click',()=> {
    wrapper.classList.add('activate-popup');
});

iconclose.addEventListener('click',()=> {
    wrapper.classList.remove('activate-popup');
});