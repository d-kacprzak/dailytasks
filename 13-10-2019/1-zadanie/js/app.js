const el1 = document.querySelectorAll(".first-attempt");
const el2 = document.querySelectorAll("[data-border]");
const el3 = document.querySelectorAll(".hack");
const el4 = document.querySelectorAll(".hijack");
const el5 = document.querySelectorAll(".st1.st2");
const el6 = document.querySelectorAll(".del");
const el7 = document.querySelectorAll(".last-attempt span");


el1.forEach(el =>{
    el.classList.add("active");
});

for(const el of el2){
    el.dataset.elActive = "";
}

el3.forEach(el =>{
    el.setAttribute("title","hacking");
});

el4.forEach(el =>{
    el.removeAttribute("title");
});

for(const el of el5){
    el.style.color = "red";
    el.style.fontSize = "15px";
}
el6.forEach(el =>{
    el.dataset.hackActive = "";
    el.removeAttribute("data-hack-inactive");
});

el7.forEach(el =>{
   el.style.visibility = "hidden";
});




