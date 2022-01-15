function FizzBuzz(n){
    for (let j = 0; j<= n; j++ ){
        if (j % 3 == 0 && j % 5 == 0 && j != 0){
            console.log('Fizz Buzz');
        }
        else if (j % 5 == 0 && j != 0){
            console.log('Buzz');
        }
        else if (j % 3 == 0 && j != 0){
            console.log('Fizz');
        }
        else {
            console.log(j);
        }
    }
    
}

var n = 10

FizzBuzz(n);

