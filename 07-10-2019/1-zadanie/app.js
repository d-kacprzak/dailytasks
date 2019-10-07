const tableGenerator = {
    randomNumber(min = 0, max){
        let randomNumber = '';
        randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        return randomNumber;
    },
    generateIncTable(lng){
        const newArray = new Array(lng);
        for(let i = 0; i < newArray.length; i++){
           newArray[i] = this.randomNumber(this.min, lng)
        }
       return newArray;
    },
    generateRandomTable(lng, min, max){
        const randomArray1 = new Array(lng);
        for(let i = 0; i < randomArray1.length; i++){
            randomArray1[i] = this.randomNumber(min, max)
        }
        return randomArray1;
    },
    generateTableFromText(str){
        const textArray = [];
        let text = str.split(" ").slice(0, );
        for(let i = 0; i < text.length; i++){
            textArray[i] = text[i];
        }
        return textArray;
    },
    getMaxFromTable(arr){
        const maxNumber = Math.max(...arr);
        return maxNumber;
    },
    getMinFromTable(arr){
        const minNumber = Math.min(...arr);
        return minNumber;
    },
    delete(arr, index){
        arr.splice(index,1);
        return arr;
    }


};


console.log(tableGenerator.randomNumber(10, 50));
console.log(tableGenerator.generateIncTable(20));
console.log(tableGenerator.generateRandomTable(5, 0, 20));
console.log(tableGenerator.generateTableFromText("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque."));

const minMaxTable = tableGenerator.generateIncTable(20);
console.log(tableGenerator.getMaxFromTable(minMaxTable));
console.log(tableGenerator.getMinFromTable(minMaxTable));
console.log(tableGenerator.delete(minMaxTable, 3));