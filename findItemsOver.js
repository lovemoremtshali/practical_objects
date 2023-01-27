var itemList = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
    {name : 'apples', qty : 3},
];

var results = [
    {name : 'pears', qty : 37},
    {name : 'bananas', qty : 27},
];

var itemList2 = [
    {name : 'apples', qty : 10},
    {name : 'pears', qty : 19},
    {name : 'bananas', qty : 17},
    {name : 'apples', qty : 3},
];

var results2 = [];

var itemList3 = [
    {name : 'apples', qty : 40},
    {name : 'pears', qty : 20},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];

var results3 = [
    {name : 'apples', qty : 40},
    {name : 'bananas', qty : 23},
    {name : 'apples', qty : 37}
];


findItemsOver = function(item, qty_p){
    var item2 =[];
    for (var i=0;i<item.length;i++){
      if (item[i].qty>qty_p){
        item2.push(item[i]);
      }
    }
    return item2;
  }

  assert.deepEqual(results, findItemsOver(itemList, 20));
  assert.deepEqual(results2, findItemsOver(itemList2, 20));
  assert.deepEqual(results3, findItemsOver(itemList3, 20));
  
  console.log('findItemsOver passed!');