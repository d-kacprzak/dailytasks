const mapTooltip = document.createElement('div');
mapTooltip.classList.add("map-tooltip");
mapTooltip.style.left = "-9999" + "px";
mapTooltip.style.top = "-9999" + "px";

document.addEventListener("DOMContentLoaded", function () {
    const maptct = document.querySelector(".map");

    for(const city of cities) {

        const link = document.createElement("a");
        link.classList.add("map-marker");
        link.setAttribute("href", city.href);
        link.setAttribute("data-name", city.name);
        link.setAttribute("data-population", city.population);
        link.style.left = city.map_x + "px";
        link.style.top = city.map_y + "px";

        maptct.append(link);
    }
    const mapMarkers = document.querySelectorAll(".map-marker");
    mapMarkers.forEach((el, index) =>{
        el.addEventListener("mouseover", function () {
            mapTooltip.style.display = "inline-block";
            const titleTooltip = document.createElement("h2");
            titleTooltip.innerText = cities[index].name;
            const divTooltip = document.createElement("div");
            divTooltip.innerText = "Popilation: "
            const strongInTooltip = document.createElement("strong");
            strongInTooltip.innerText = `${cities[index].population}`;
            divTooltip.appendChild(strongInTooltip);
            mapTooltip.style.left = 0 + "px";
            mapTooltip.style.top = 0 + "px";
            mapTooltip.style.left =  cities[index].map_x + 30 + "px";
            mapTooltip.style.top =  cities[index].map_y + 30 + "px";
            mapTooltip.append(titleTooltip);
            mapTooltip.append(divTooltip);
            maptct.appendChild(mapTooltip);
        })
        el.addEventListener("mousemove", function (e) {
            mapTooltip.style.left =  e.pageX - innerWidth/2 + 350 + "px";

            mapTooltip.style.top =  e.pageY - innerHeight/2 + 200 + "px"

        });
        el.addEventListener("mouseout", function () {
            mapTooltip.style.display = "none";
            mapTooltip.innerHTML = '';
        })
    })






});


