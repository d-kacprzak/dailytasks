const list = document.querySelectorAll(".list li");
console.log(list);

for(const el of list){
    if(el.dataset.status === "up") {
        el.lastChild.innerText = "dodatni";
        el.lastChild.style.color = "green"
    }else if(el.dataset.status === "no-change"){
        el.lastChild.innerText = "bez zmian";
        el.lastChild.style.color = "blue"
    }else if(el.dataset.status === "down"){
        el.lastChild.innerText = "ujemny";
        el.lastChild.style.color = "red"
    }
}








// listLiUP.forEach((el)=>{
//
//     if(el.dataset.status === "up"){
//         el.innerText = "dodatni";
//         el.style.color = "green"
//     }
//
// });