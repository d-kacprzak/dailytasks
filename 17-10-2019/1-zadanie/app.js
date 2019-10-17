const header = document.querySelector(".header");
document.addEventListener("scroll", function () {
    const media = window.matchMedia('(min-device-width: 600px)');

    function checkMedia(media) {
        console.log(media.matches)
        if(media.matches){
            if(window.scrollY >= 100){
                if(!header.classList.contains("sticky"))
                    header.classList.add("sticky")
            }else{
                header.classList.remove("sticky")
            }
        }else{
            header.classList.remove("sticky")
        }
    }
    checkMedia(media);
    media.addListener(checkMedia)
});

