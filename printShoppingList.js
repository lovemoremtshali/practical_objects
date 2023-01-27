var shoppingList = [
    { itemName : 'Bread', price : 11.00 },
    { itemName : 'Milk', price : 7.00 },
    { itemName : 'Cheese', price : 19.50 }
];

printShoppingList = function(item){
console.log('Shopping list:');
for(var i=0;i<item.length;i++){
  console.log('* '+item[i].itemName+' @ R'+item[i].price.toFixed(2));
}
}

assert.equal('Shopping list:', logList[0]);
assert.equal('* Bread @ R11.00', logList[1]);
assert.equal('* Milk @ R7.00', logList[2]);
assert.equal('* Cheese @ R19.50', logList[3]);