const arr = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]; // should sum to 24?


//console.log(arr.filter(n => !(n[0] < 0 || n[1] < 0))); //filter method;


/*function map(array){
    let output = 0;
    for(let i = 0; i < array.length; i ++){
        for(let j = 0; j < array[i].length; j ++){
            output += Math.abs(array[i][j]);
        }
       
    };
    return output;
};*/

//console.log(map(arr));

function hangaBanga(array){
    for(let i = 0; i < array.length; i ++){
        console.log(Math.abs(arr[i][0]) + Math.abs(arr[i][1])); 
    }
}

//console.log(hangaBanga(arr));

console.log(arr.forEach(element => console.log(Math.abs(element[0]) + Math.abs(element[1]))));



