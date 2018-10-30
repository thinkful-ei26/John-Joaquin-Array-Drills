
const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
function reduce(array){
    let output = [];
    let newArr = array.split(' ');
    for (let i=0; i< newArr.length; i++){
         if(newArr[i].length === 3){
        output[i] = ' ';
        }else {
        output[i] = newArr[i][newArr[i].length-1].toUpperCase();
 }
};
return output.join(' ');
};

console.log(reduce(input));

function decode(word){
    if (word.length ===3){
        return ' ';
    }else {
    return word[word.length-1].toUpperCase()
}
}

function decodeSentence(sentence){
    const newArray= sentence.split(' ');
    return newArray.reduce(function(hiddenmessage,word){
        hiddenmessage += decode(word);
        return hiddenmessage;
    }, '');
}




let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
console.log(decodeSentence(input));












///////////////////////////
// const input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
// function reduce(array){
//     let output = [];
//     for (let i=0; i< array.length; i++){
//          if (array[i].length ===3){
//         output.push(' ');
//         }else {
//     output.push(array[i][array[i].length-1].toUpperCase());
//  }
 
// };
// console.log(output);
// };

// reduce(input);
>>>>>>> fb06485cc07c30a1495d20a7bbfcd33b9478ab12
// console.log(reduce(input));
// No_NEED_To_SHout
