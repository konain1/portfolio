const power = document.querySelector('.power');

const section_one = document.querySelector('.section-one');

const section_two = document.querySelector('.section-2');

const section_three = document.querySelector('.section-3');












power.addEventListener('click',()=>{
    console.log("power on");
    section_one.style.display="none";
    section_two.classList.remove('section-2');
    section_three.classList.remove('section-3');
    
    
})