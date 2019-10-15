const btns = document.querySelectorAll(".car-toggle-detail");


btns.forEach(function (el) {
    el.addEventListener("click", function (e) {
        if(el.getAttribute("data") === "close") {
            e.target.closest(".car").children[1].style.display = "flex";
            e.target.closest(".car").classList.add("car-show-detail");
            this.innerHTML = "schowaj detale";
            this.setAttribute("data", "open");
        }
        else{
            e.target.closest(".car").classList.remove("car-show-detail");
            e.target.closest(".car").children[1].style.display = "none";
            this.innerHTML = "pokaż detale";
            this.setAttribute("data", "close")
        }



    })
});

// const open = (e) => {
//     this.closest(".car").children[1].style.display = "flex";
//     this.closest(".car").classList.add("car-show-detail");
//     this.innerHTML = "schowaj detale";
//     this.setAttribute("data", "open");
// }
//
// const close = ()=> {
//     this.addEventListener("click", function () {
//         this.closest(".car").classList.remove("car-show-detail");
//         this.closest(".car").children[1].style.display = "none";
//         this.innerHTML = "pokaż detale";
//         this.setAttribute("data", "close")
//     })
// }






