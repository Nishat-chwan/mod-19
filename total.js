const products=[
    {name: 'shampoo',price:400},
    
    {name: 'comb',price:150},
    
    {name: 'shirt',price:1600},
    
    {name: 'pant',price:2500},
]
function getShoppingTotal(products){
    let sum=0;
    for(const product of products){
        sum=sum+ product.price;
    }
    return sum;
}
const total= getShoppingTotal(products);
console.log('total cost:',total);



//quantity 


const products1=[
    {name: 'shampoo',price:400,quantity:4},
    
    {name: 'comb',price:150,quantity:1},
    
    {name: 'shirt',price:1600,quantity:2},
    
    {name: 'pant',price:2500,quantity:3},
]
function getShoppingTotal1(products){
    let sum=0;
    let price=0;
    for(const product of products){
        price= product.price*product.quantity;
        sum=sum+price;
    }
    return sum;
}
const total1= getShoppingTotal1(products1);
console.log('total:',total1);