
const text = {
    check(text, word) {
        const checkTextWord = text.includes(word);
        return checkTextWord;
    },

    getCountText(text){
        const countChars =  text.split("").length;
        return countChars;
    },
    getWordsCount(text){
        const countWords =  text.split(" ").length;
        return countWords;
    },
    setCapitalize(text){
       const splitText = text.split(" ");
       console.log(splitText[0]);
       const  capitalizeFirstWord = [];

       for(let i = 0; i < splitText.length; i++){
           capitalizeFirstWord[i] = splitText[i][0].toUpperCase() + splitText[i].slice(1);
       }
       return capitalizeFirstWord;
    },
    setMix(text){
        const splitTextMix = text.split("");
        let  chars = [];
        for(const key in splitTextMix){
            if(key % 2 === 0){
                chars += splitTextMix[key].toUpperCase();
            }else{
                chars += splitTextMix[key].toLowerCase();
            }
        }
        return chars
    },
    generateRandom(lng){
        const randomCharsTable = ["a","b","c","d","e","f","g","h", "i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
        let generateRandomText = '';
        for(let i = 0; i < lng; i++){
             generateRandomText += randomCharsTable[Math.floor(Math.random() * randomCharsTable.length)];
        }
        return generateRandomText
    }

};
const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis.";

console.log(text.check(paragraph, "amet" ));

console.log(text.getCountText(paragraph));
console.log(text.getWordsCount(paragraph));
console.log(text.setCapitalize(paragraph));
console.log(text.setMix(paragraph));

console.log(text.generateRandom(10));