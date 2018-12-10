// const current = document.querySelector('#current');
// const imgs = document.querySelectorAll('.imgs img');

//using destructuring 

const [current, imgs] = [document.querySelector('#current'),document.querySelectorAll('.imgs img')];
const opacity = 0.4;
imgs.forEach(img => img.addEventListener('click',imgClick));

function imgClick(e) {
    
    //reset imgs opacity
    imgs.forEach(img => (img.style.opacity = 1));

    //change current img to src of clicked img
    current.src = e.target.src;

    //add fade in class
    current.classList.add('fadein');

    //remove fade in class after 0.5s 
    setTimeout(() => current.classList.remove('fadein'), 500);

    //change the opacity to opacity var
    e.target.style.opacity = opacity;

}