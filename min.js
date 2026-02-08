const value=[65,66,34,98,15];

const min=getMin(value);
console.log(min);

function getMin(value){
    let min=value[0];
    for(const val of value){
        if(val<min){
            min=val;
        }
    }
    return min;
}



//object

const phones=[
    {name:'samsung',price:2000,camera:'12mp',color:'black'},
        {name:'apple',price:4000,camera:'12mp',color:'black'},
            {name:'techno',price:450,camera:'12mp',color:'black'},
                {name:'opp',price:9000,camera:'12mp',color:'black'},
                    {name:'motarolla',price:500,camera:'12mp',color:'black'},
]
console.log('lowest phn price:',getCheapestPhone(phones));



function getCheapestPhone(phones){
    let min= phones[0];
    for(const phone of phones){
        if(phone.price<min.price){
            min=phone;
        }
    }
    return min;
}