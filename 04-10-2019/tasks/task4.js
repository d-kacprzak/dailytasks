// 1. zrób pętle po 2 wymiarowej tablicy "tab"
// 2. Każdą pobraną wartość z tablicy dodawaj do tekstu za pomocą instrukcji:
//     `text += '<div style="background:' + pobranyKolor + '"></div>'`;
// gdzie pobranyKolor pobieraj z tablicy colors. Indeks koloru pobierzesz z danego miejsca w tablicy tab np: *tab[0][0] = 0*; czyli *pobranyKolor = #ffffff*
// 3. Po zakończeniu każdej pętli po tablicy 2 wymiaru, do tekstu dodawaj `<br>`
// 4. W rezultacie powinieneś otrzymać rysunek


//zmiennych colors i tab w tym zadaniu nie zmieniaj
const colors = ['#ffffff', '#F8AA00', '#7E1C03', '#DB0F3B', '#0026FF']
const tab = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,3,3,3,3,3,0,0,0,0,0],[0,0,0,3,3,3,3,3,3,3,3,0,0,0],[0,0,0,2,2,2,1,1,2,1,0,0,0,0],[0,0,2,1,2,1,1,1,2,1,1,1,0,0],[0,0,2,1,2,2,1,1,1,2,1,1,1,0],[0,0,2,2,1,1,1,1,2,2,2,2,0,0],[0,0,0,0,1,1,1,1,1,1,0,0,0,0],[0,0,0,3,3,4,3,3,3,0,0,0,0,0],[0,0,3,3,3,4,3,3,4,3,3,3,0,0],[0,3,3,3,3,4,4,4,4,3,3,3,3,0],[0,1,1,3,4,1,4,4,1,4,3,1,1,0],[0,1,1,1,4,4,4,4,4,4,1,1,1,0],[0,1,1,4,4,4,4,4,4,4,4,1,1,0],[0,0,0,4,4,4,0,0,4,4,4,0,0,0],[0,0,2,2,2,0,0,0,0,2,2,2,0,0],[0,2,2,2,2,0,0,0,0,2,2,2,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

//-----------------------------------------
//START
//-----------------------------------------

let text = '';
//tutaj zrób zadanie za pomocą pętli

console.log(tab.length);
console.log(tab[0].length);


for(let i = 0; i < tab.length; i++){
    for(let j = 0; j < tab[j].length; j++ ){

        if(tab[i][j] === 0){
            text += `<div style="background: ${colors[0]}">${tab[i][j]}</div>`;
        }
        if(tab[i][j] === 1){
            text += `<div style="background: ${colors[1]}">${tab[i][j]}</div>`;
        }
        if(tab[i][j] === 2){
            text += `<div style="background: ${colors[2]}">${tab[i][j]}</div>`;
        }
        if(tab[i][j] === 3){
            text += `<div style="background: ${colors[3]}">${tab[i][j]}</div>`;
        }
        if(tab[i][j] === 4){
            text += `<div style="background: ${colors[4]}">${tab[i][j]}</div>`;
        }
    }
    text += '<br>'

}

//tutaj wstawiamy do div wygenerowany html - nie ruszaj poniższej linijki
document.querySelector('.canvas').innerHTML = text;