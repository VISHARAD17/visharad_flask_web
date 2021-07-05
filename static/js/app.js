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
const texts = ['Student. ', 'Developer. ', 'Freelancer. '];
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

const skills_array = ["HTML", "CSS", "JavaScript", "Data Science", "OpenMP", "C++", "Python", "Fortran", "Deep Learning", "MPI"];
const skills_percentange = ["90", "80", "60", "70", "60", "90", "95", "70", "60", "60"];


// for css property for perticular class 
for(let i=0; i<skills_array.length; i++){
    var x = document.getElementsByClassName("skill-name");
    var num = i+1;
    var num_str = num.toString();
    var temp = "progress";
    var z = temp.concat(num_str);
    var y = document.getElementById(z.toString());
    y.style.width = skills_percentange[skills_array.indexOf(x[i].getInnerHTML())] + "%";
}

// for navigation bar transition upon scrolling
// function is triggered upon scrolling

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar-id").style.background = "#272626";
        document.getElementById("navbar-id").style.transitionDuration = "0.5s";
    } else {
        document.getElementById("navbar-id").style.background = 'transparent';
        document.getElementById("navbar-id").style.transitionDuration = "0.5s";
    }
}