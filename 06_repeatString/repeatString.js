const repeatString = ((word, num) => {
    if(num <= -1){
        return word = "ERROR"
    }
    let i = 0;
    word1 = ""
    if(num == 0){return word1;}
    while (i < num){
        word1 += word;
        i++;
    }
    return word1;
});



// Do not edit below this line
module.exports = repeatString;
