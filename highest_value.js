const value=[65,66,34,98,15];
const max=getMax(value);
const min=getMin(value);
console.log(max);
console.log(min);

function getMax(value){
    let max=value[0];
    for(const val of value){
        if(val>max){
            max=val;
        }
    }
    return max;
}



function getMin(value){
    let min=value[0];
    for(const val of value){
        if(val<min){
            min=val;
        }
    }
    return min;
}