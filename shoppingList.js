var shoppingList1 = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

var shoppingList2 = [
    { itemName : 'Apples', price : 7.50 },
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 23.00 },
    { itemName : 'Bread', price : 9.50 }
];

shoppingList = function(item){
    var total_price = 0;
    for(var i=0;i<item.length;i++){
      total_price=total_price+item[i].price;
      
    }
    return total_price;
  }

  assert.equal(37.50, shoppingList(shoppingList1));
  assert.equal(58, shoppingList(shoppingList2));