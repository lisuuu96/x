function equation (num1,num2){
    let sum = num1 +num2;
    if (sum>0){
    console.log('Wynik dodawania wynosi ' + sum);
    } else{
        console.log('Wynik jest nieprawidlowy')
    }
    let substract = num1 - num2;
    if(substract>0){
    console.log('wynik odejmowania '+ substract);
    }else{
        console.log('Wynik jest nieprawidlowy')
    }
    let multiply = num1 * num2;
    if(multiply>0){
    console.log('wynik mnozenia wynosi ' + multiply);
    }else{
        console.log('Wynik jest nieprawidlowy')
    }
    
}
equation(7,9)
