const disha = 56;
const salman= 95;

if(disha> salman){
    console.log('disha will get the strawberries');
}
else{
    console.log('salman will get them');
}

//inside a function

const max1=getMax(65,21);//65
const max2=getMax(50,15);//50
console.log('final max:',getMax(max1,max2));//65
function getMax(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}