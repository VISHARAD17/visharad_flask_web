/*const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .nav-bar-items a');

window.addEventListener('scroll', ()=>{
    let current = "";
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >=(sectionTop-sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })

    navLi.forEach(a =>{
        a.classList.remove('active');
        if(a.classList.contains(current)){
            a.classList.add('active')
        }
    })
})*/
// for typing animation
const texts = ['Student', 'Developer', 'Freelancer'];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 350);

}());