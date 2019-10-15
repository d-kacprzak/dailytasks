const list = document.querySelector(".nav");
const li = list.querySelectorAll("li");
console.log(li)

list.addEventListener("click", e =>{
    e.preventDefault();
    li.forEach(el =>{ el.classList.contains("nav-el-active")
        ? el.classList.toggle("nav-el-active")
        : e.target.parentNode.classList.toggle("nav-el-active");
    })
});









