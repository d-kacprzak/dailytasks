const obj = {
    time: 1000,
    pets: ["łata1","piti1", "gruby1"],
    print(){
        const self = this;
        setTimeout(function () {
            console.log(self.pets)
        }, this.time);
    },
};

obj.print();

const obj2 = {
    time: 1000,
    pets: ["łata2","piti2", "gruby2"],
    print(){
        setTimeout(() => {
            console.log(this.pets)
        }, this.time);
    },
};

obj2.print();

const obj3 = {
    time: 1000,
    pets: ["łata3","piti3", "gruby3"],
    print(){
        setTimeout(function () {
            console.log(this.pets)
        }.bind(this), this.time);
    },
};

obj3.print();


// Zadanie 2
const ob = {
    name : "Kwiatek",

    init() {
        console.log("Nazywam się " + this.name);

        const showText = function () {
            console.log("Nazywam się " + this.name);
        }.bind(this);

        showText();

    }
};

ob.init();




