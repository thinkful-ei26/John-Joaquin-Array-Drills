
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
    for (let i=0; i< array.length; i++){
         if (array[i].length ===3){
        output.push(' ');
        }else {
    output.push(array[i][array[i].length-1].toUpperCase());
 }
 
};
console.log(output);
};

reduce(input);
// console.log(reduce(input));
// No_NEED_To_SHout
