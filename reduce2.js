
// function decode(word){
//     if (word.length ===3){
//         return ' ';
//     }else {
//     return word[word.length-1].toUpperCase()
// }
// }

// function decodeSentence(sentence){
//     const newArray= sentence.split(' ');
//     return newArray.reduce(function(message,word){
//         message += decode(word);
//         return message;
//     }, ' ');

// let input = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
// console.log(decodeSentence(input);


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
// console.log(reduce(input));
// No_NEED_To_SHout
