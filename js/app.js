const reveals=document.querySelectorAll(".animate")

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        
        if (entry.isIntersecting){
            entry.target.classList.add("styled")
        }
    });
});
reveals.forEach(el => observer.observe(el));

const revealer=document.querySelectorAll(".animator")
console.log(revealer);
const observation=new IntersectionObserver((entryes)=>{
    entryes.forEach((entr)=>{
        if (entr.isIntersecting){
            entr.target.classList.add("style")
        }
    });
});
revealer.forEach(el => observation.observe(el));

let action=document.querySelectorAll(".btn-action");
action.forEach(action =>{
action.addEventListener("click",function(event){
    event.preventDefault();
document.getElementById("scroll").scrollIntoView({behaviour: "smooth"})
});
})

console.log(action);

const Today=new Date();
const yyyy=Today.getFullYear();
const mm=String(Today.getMonth() + 1).padStart(2,'0');
const dd=String(Today.getDate() + 1).padStart(2,'0');
const minDate=`${yyyy}-${mm}-${dd}`;
let getDate=document.getElementById('date-check').setAttribute('min',minDate);





