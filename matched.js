const numbers=[45,65,23,98,19]
for(let i=0;i<numbers.length;i++){
    const num= numbers[i];
    console.log(num);
}

//different way:array element looop through 

const products=[
    {id:1,name: 'xiomix Phone', price: 1000000},
    {id:2,name: 'apple phone ', price:20000},
    {id:3,name: 'oppo phone ', price:50000},
    {id:4,name: 'x1', price:50000},
    {id:5,name: 'x2', price:50000},
    {id:6,name: 'x3', price:50000},
    {id:7,name: 'x4', price:50000},
    {id:8,name: 'x5', price:50000},]


for(const product of products){
    console.log(product);
}

//2ta kei lowercase e neowa better
function matchedProducts(products,search){
    const matched=[];
    for(const product of products){
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            matched.push(product);
        }
    }
    return matched;
}
const result= matchedProducts(products,'phone');
console.log(result);