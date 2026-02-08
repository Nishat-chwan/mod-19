function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood= 3;
    const perTableWood=10;
    const perBedWood= 50;

    const chairTotalWood = chairQuantity* perChairWood;
    const tableTotalWood = tableQuantity*perTableWood;
    const bedTotalWood= bedQuantity*perBedWood;
    const totalWood = bedTotalWood+chairTotalWood+tableTotalWood;
    return totalWood;
}

const wood= woodQuantity(0,0,1);
console.log('wood needed',wood);



//5ta shirt ; 3ta pant; 2 ta shoe=============> 500 300 900 tk each

function totalCost(shirt_quantity,pant_quantity,shoe_quantity){
    const shirtPerPiece= 500;
    const pantPerPiece=300;
    const shoePerPiece=900;

    const shirtPrice= shirtPerPiece*shirt_quantity;
    const pantPrice = pantPerPiece*pant_quantity;
    const shoePrice = shoePerPiece*shoe_quantity;

    const totalPrice = shirtPrice+shoePrice+pantPrice;
    return totalPrice;
}

console.log('total cost:',totalCost(5,3,2));