const book = {
    users : [{name: "Klaudia", age: 30, phone: 514514514}],
    addUser(name, age, phone){
         this.name = name;
         this.age = age;
         this.phone = phone;
         this.users.push({name, age, phone})

    },
    
    showUsers(){
            return book["users"]
    },

    findByName(name) {

        if (this.users.find((x) => x.name.toLowerCase() === name.toLowerCase())){
            return name.charAt(0).toUpperCase() + name.substr(1);
        }else{
            return false;
        }
    },

    findByPhone(phone){
        if (this.users.find((x) => x.phone === phone)){
            return phone;
        }else{
            return false;
        }
    },
    getCount(){
        return `W tablicy jest: ${this.users.length} użytkowników.`

    }
};

book.addUser("Damian", 33, 530530560);
book.addUser("łata", 4, "brak numeru");
book.addUser("Róża", 11, 530432560);
book.addUser("Piti", 13, "Brak numeru");

console.log(book.getCount());

console.log(book.showUsers());
console.log(book.findByName("damian"));
console.log(book.findByPhone("513528467"));
