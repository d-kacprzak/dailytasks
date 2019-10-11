let checkbox = document.querySelectorAll("input[type=checkbox]");

checkbox.forEach((el) =>{
    el.addEventListener('change', (e) => {
        if(e.target.checked){
            el.parentNode.parentNode.classList.add("confirm");
            el.parentNode.nextElementSibling.children[1].setAttribute("disabled", "disabled");
            el.parentNode.nextElementSibling.nextElementSibling.lastElementChild.setAttribute("disabled", "disabled")
        }else{
            el.parentNode.parentNode.classList.remove("confirm");
            el.parentNode.nextElementSibling.children[1].removeAttribute("disabled", "disabled");
            el.parentNode.nextElementSibling.nextElementSibling.lastElementChild.removeAttribute("disabled", "disabled")
        }
})

    
});