let number = prompt('Enter a number');

function table(number){
    if (number < 0){
        console.log('Enter a numner greater than 0: ')
    }
    else{
        for (let i =1;i<=10;i++){
            console.log(number*i)
        }
    }
}



console.log(table(number))