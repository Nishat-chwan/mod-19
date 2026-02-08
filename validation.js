function mul(num1,num2){
    if(typeof num1 !== 'number'||typeof num2 !== 'number'){
        return 'please provide valid one';
    }
    else{
    const mul = num1*num2;
    return mul;
    }
}
const result = mul (5,5);
const result1 = mul (5,'7');//auto convert string to integer
const result2 = mul (5,'eight');
const result3= mul (5 +7 );
console.log('result:',result,'result1:',result1,'result2:',result2,'result3:',result3);



function fullName (first,second){
    if(typeof first !=='string' || typeof second !== 'string'){ return 'provide valid string';}
    const full = first + ' ' + second;
    return full;
}
const full = fullName('nishat',7);
console.log(full);


function getPrice (product){
    console.log(typeof product);
    if (typeof product !== 'object'){
        return 'provide object';
    }
    const price = product.price;
    return price;
}
const price=
    getPrice(
        {
            name: 'wasi',
            price: 2000,
            color: 'black' 
        }
    )
const price1= getPrice(5);
console.log(price, 'second one:',price1);




function getSecond(numbers){
    console.log(typeof numbers);
    console.log (Array.isArray(numbers));  // checks if array or not
    if(Array.isArray(numbers) === false){
        return 'provide array';
    }
   
    const second = numbers[1];
    return second;
}
const second = getSecond ([1,5,10]); // array ===>>> type of object
console.log(second);


const second1 = getSecond (5);
console.log (second1);
