const btn = document.querySelector(".delete");
const btnTwo = document.querySelector("#deletetwo");
const btnThree = document.querySelector("#deletethree");
const listLi = document.querySelectorAll("li");
const list = document.querySelector(".list");

btn.addEventListener("click", ()=>{
    listLi.forEach((el)=>{
        el.remove();
    });
});
btnTwo.addEventListener("click", ()=>{
     while(list.hasChildNodes()){
         list.removeChild(list.firstChild)
     }
});

btnThree.addEventListener("click", ()=>{
    list.innerHTML = '';
});

