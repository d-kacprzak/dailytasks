// Zadanie 1
const users = [
    //id, name, surname, email, age, value
    [  1, "Shauna", "Bradnocke", "sbradnocke0@altervista.org", 20, 108.28] ,
    [  2, "Mela", "Redman", "mredman1@nps.gov", 24, 267.37] ,
    [  3, "Othelia", "Lemon", "olemon2@slashdot.org", 15, 748.06] ,
    [  4, "Meier", "Cockell", "mcockell3@icio.us", 32, 1951.64] ,
    [  5, "Shellysheldon", "Gronowe", "sgronowe4@cnbc.com", 16, 1040.54] ,
    [  6, "Francisca", "Tofanini", "ftofanini5@gnu.org", 21, 1544.08] ,
    [  7, "Cliff", "Underwood", "cunderwood6@addtoany.com", 10, 451.21] ,
    [  8, "Caron", "Falshaw", "cfalshaw7@hugedomains.com", 27, 1968.72] ,
    [  9, "Anitra", "Warters", "awarters8@intel.com", 12, 380.68] ,
    [ 10, "Caitrin", "Baudrey", "cbaudrey9@ihg.com", 13, 1385.44] ,
    [ 11, "Reginald", "Beavers", "rbeaversa@elegantthemes.com", 15, 1205.52] ,
    [ 12, "Marleen", "Aickin", "maickinb@purevolume.com", 20, 1434.10] ,
    [ 13, "Lisa", "MacSorley", "lmacsorleyc@ocn.ne.jp", 17, 1567.07] ,
    [ 14, "Kimberli", "Berkeley", "kberkeleyd@merriam-webster.com", 19, 1994.97] ,
    [ 15, "Tawnya", "Illingworth", "tillingworthe@quantcast.com", 23, 1742.64]
];
const fixedArray = [];
function fixData(arrayToFix) {

    for (let i = 0; i < arrayToFix.length; i++) {
        for (let j = 0; j < arrayToFix[i].length; j++) {
            const user = {
                id: arrayToFix[i][0],
                name: arrayToFix[i][1],
                surname: arrayToFix[i][2],
                email: arrayToFix[i][3],
                age: arrayToFix[i][4],
                cash: arrayToFix[i][5]
            };
            fixedArray[i] = user;
        }
    }
    return fixedArray;
}
console.log("Nowa tablica: ")
console.table(fixData(users));

// Zadanie 2
let howManyMoney = 0;
let average = 0;
let mailArray = [];
for (const key of fixedArray) {
    howManyMoney += key["cash"];
    average += key["age"] / fixedArray.length;
    mailArray.push(key["email"])
}



console.log(`Ilość pieniędzy użytkowników : ${howManyMoney.toFixed(2)} $`);
console.log(`Średni wiek użytkowników: ${average.toFixed(2)} lat`);

console.log('Tablica maili użytkowników:');
console.table(mailArray);

