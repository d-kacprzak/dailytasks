const spaceShip = {
    name: "Enterprise",
    currentLocation: "Earth",
    flyDistance: 0,
    speed: 2000,
    flyTo(place = this.currentLocation, distance = this.flyDistance) {
        this.currentLocation = place;
        this.flyDistance = distance;
        return [place, distance]

    },
    showInfo() {
        console.log(`
        Statek ${this.name} lecący z szybkością ${this.speed}
        doleciał do miejsca ${shipPlace}
        Statek przeleciał już całkowity dystans ${shipDistance}
            `)
    },
    meetClingon() {
        const numbersOfShots = 1000;
        let hit = [];
        let shot = [];
        for (let i = 0; i < numbersOfShots; i++) {
            shot[i] = Math.round(Math.random());
            (shot[i]) ? hit.push(shot[i]) : '';
        }
        if(hit.length >= 50){
             console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation}a został pokonany przez Klingonów`)
        }else{
            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation}a zwycięsko wyszedł ze spotkania z Klingonami`)
        }
        console.log(`Został trafiony: ${hit.length} razy na ${numbersOfShots} strzałów`)
    },
};

const ship =  spaceShip.flyTo("mars", 155);
const shipPlace = ship[0];
const shipDistance = ship[1];

spaceShip.showInfo();
spaceShip.meetClingon();