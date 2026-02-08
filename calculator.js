function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return num1/num2;
}
function calc(a,b,operation){
    if(operation === 'add'){
        const result = add (a,b);
        return result;
    }
    else if(operation === 'sub'){
        const result = sub(a,b);
        return result;
    }
    else if(operation === 'mul'){
        const result = mul (a,b);
        return result;
    }
    else if(operation === 'div'){
        const result = div (a,b);
        return result;
    }
    else {
        return "only 4 specific operations available";
    }
}
const result= calc(3,4,'mul');
const result1= calc(5,6,'mod');
console.log(result,result1);