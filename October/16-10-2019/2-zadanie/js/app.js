const navList = document.querySelector(".nav");
const nav = document.querySelectorAll(".nav-el")


navList.addEventListener("click", e =>{
    e.preventDefault();
    nav.forEach(el =>{
        if(el.classList.contains("nav-el-active")){
            el.classList.toggle("nav-el-active")
        }else{
            e.target.parentNode.classList.toggle("nav-el-active");
            switch (e.target.href.slice(22)){

                case '#section1':
                    let s1 = document.querySelector("#section1");
                    s1.scrollIntoView();
                    break;
                case '#section2':
                    let s2 = document.querySelector("#section2");
                    s2.scrollIntoView();
                    break;
                case '#section3':
                    let s3 = document.querySelector("#section2");
                    s3.scrollIntoView();
                    break;
                case '#section4':
                    let s4 = document.querySelector("#section4");
                    s4.scrollIntoView();
                    break;
                case '#section5':
                    let s5 = document.querySelector("#section5");
                    s5.scrollIntoView();
                    break;
                case '#section6':
                    let s6 = document.querySelector("#section6");
                    s6.scrollIntoView();
                    break;
                default:
                    console.log("nie działa")
            }
        }
    })
});

