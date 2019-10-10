document.querySelector(".list").classList.add("pretty");
document.querySelector(".list>li:first-child").classList.add("first");
document.querySelector(".list>li:last-child").classList.add("last");
document.querySelector('.list>li:nth-child(3n)').classList.add("active");
document.querySelector('.list>li:nth-child(3n)').style.color = "#fff";


const listLi = document.querySelectorAll(".list>li");
listLi.forEach((el)=>{

    el.setAttribute("href", "#");
    el.setAttribute("title", `Przejdz na stronę`);



});


