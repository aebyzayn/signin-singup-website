let singupSingin = document.querySelector('.singup-singin');
let singupSinginWrapper = document.querySelector('.singup-singin-wrapper');
let singinlink = document.querySelector('.singin-link');
let singuplink = document.querySelector('.singup-link');
let singinButton = document.querySelector('.singin-button');
let singinsingupFormcloser = document.querySelector('.Formclose');

singuplink.addEventListener('click',()=>{
    singupSinginWrapper.classList.add('singup-active');
});

singinlink.addEventListener('click',()=>{
    singupSinginWrapper.classList.remove('singup-active');
});

singinButton.addEventListener('click',()=>{
    singupSingin.style.transform = 'translate(-50%,-50%) scale(1)'
 
});

singinsingupFormcloser.addEventListener('click',()=>{
    singupSingin.style.transform = 'translate(-50%,-50%) scale(0)'
})