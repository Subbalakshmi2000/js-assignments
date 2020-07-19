var shoppingList = ["detergent", "shampoo", "sugar", "honey", "oil", "salt", "bread" ];
var shoppingBasket = shoppingList.copyWithin(0, 0, shoppingList.length); //copying elements from array shoppingList 
shoppingBasket.push("toothpaste");
shoppingBasket.push("kissanJam");
shoppingBasket.push("soaps");
shoppingBasket.push("rice");
console.log(shoppingBasket); //after adding some new products