let btnAdd = null;
let userList = null;
let form = null;

function addNewUser(name, tel) {

    // nowy element listy
    const newUser = document.createElement('li');
    newUser.classList.add("user");

    const userData = document.createElement("div");
    userData.classList.add("user-data");

    const userNameDiv = document.createElement("div");
    userNameDiv.classList.add("user-name");
    userNameDiv.innerText = name;

    const userNameTel = document.createElement("div");
    userNameTel.classList.add("user-phone");
    userNameTel.innerText = tel;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "user-delete");
    deleteBtn.setAttribute("type", "button");

    newUser.appendChild(userData);
    newUser.appendChild(deleteBtn);
    userData.appendChild(userNameDiv);
    userData.appendChild(userNameTel);
    userList.append(newUser);
}

document.addEventListener("DOMContentLoaded", function () {
    btnAdd = document.querySelector("button[type=submit]");
    userList = document.querySelector(".user-list");
    form = document.querySelector(".form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let inputName = document.getElementById("name").value;
        let inputTel = document.getElementById("phone").value;

        if(inputName && inputTel !== ''){
            addNewUser(inputName, inputTel);
            inputName.value = '';
            inputTel.value = '';
        }
    });

    userList.addEventListener("click", function (e) {
        e.preventDefault();
        if(e.target.closest('.btn.user-delete')){
            e.target.closest(".user").remove()
        }
    })
});