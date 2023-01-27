var sentence = 'Down by the river there is a man that quiver and shiver, but he needs to deliver a packet that he think is a big racket and a packet of of gum.'
var sentence2 = 'Project codeX is a super awesome JavaScript programme in Cape Town.'
mostWordsEndWith = function(item){
    var list = item.split(' ');
    var e = {};
    for (var i =0;i<list.length;i++){
      if (e[list[i].charAt(list[i].length-1)]===undefined){
        e[list[i].charAt(list[i].length-1)]=[list[i]];
      }else{
        e[list[i].charAt(list[i].length-1)].push(list[i]);
      }
    }
    var ee ={name:'', len:0};
    for ( i in e){
      //console.log(e[i]);
      if(e[i].length>ee.len){
        ee.name=i;
        ee.len=e[i].length
      }
    }
    console.log(ee)
    return { 
    letter: ee.name, 
    words : e[ee.name]
  }
    }

    assert.deepEqual(mostWordsEndWith(sentence), { letter: 't', words : ['that', 'but', 'packet', 'that', 'racket', 'packet']});
    assert.deepEqual(mostWordsEndWith(sentence2), {letter : 'e', words : ['awesome', 'programme', 'Cape']});
    