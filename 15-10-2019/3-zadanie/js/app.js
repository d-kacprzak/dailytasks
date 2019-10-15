let list = document.querySelector(".list");
let counter = 0;

document.addEventListener("DOMContentLoaded", function () {
    const btns = document.querySelector(".buttons");
    btns.addEventListener("click", function (e) {
        e.preventDefault();
        addElement();
    });

    list.addEventListener("click", function (e) {
        e.preventDefault();
        if(e.target.closest('.delete')){
            e.target.closest(".element").remove()
            if(list.children.length === 0){
                counter = 0;
            }
        }
    });

    list.addEventListener("click", function (e) {
       e.preventDefault();

       //clone the item from list and  i put him at the end of the list
       if(e.target.closest(".clone")){
           let cloneElement = e.target.closest(".element").cloneNode(true);
           list.append(cloneElement);
       }
    })
});

function addElement() {

    // create div element and add class
    const element = document.createElement("div");
    element.classList.add("element");

    // Add element title
    const title = document.createElement('h3');
    title.classList.add("element-title");
    title.innerText = "Element numer ";
    const spanTitle = document.createElement("span");
    spanTitle.classList.add("nr");
    spanTitle.innerText = ++counter;
    title.appendChild(spanTitle);

    //Add button clone
    const newBtnClone = document.createElement("button");
    newBtnClone.classList.add("clone");
    newBtnClone.innerText = "Clone";

    //Add button delete
    const newBtnDelete = document.createElement("button");
    newBtnDelete.classList.add("delete");
    newBtnDelete.innerText = "Delete";

    element.appendChild(title);
    element.appendChild(newBtnClone);
    element.appendChild(newBtnDelete);

    // I link everything together
    list.append(element);
}






