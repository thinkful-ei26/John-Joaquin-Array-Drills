
//Functions as arguments (1)

function repeat(fn,n){
    for (let i=0; i<n; i++){
        fn();
    }
}

function hello(){
    console.log('Hello World')
}

function goodbye(){
    console.log('Goobye World')
}

repeat(hello,5);
repeat(goodbye,5);