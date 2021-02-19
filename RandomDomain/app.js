let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let ext = ['com','net', 'io', 'us','onion'];

function sentence() {
  var randp = Math.floor(Math.random() * pronoun.length);
  var randa = Math.floor(Math.random() * adj.length);
  var randn = Math.floor(Math.random() * noun.length);
  var rande = Math.floor(Math.random() * ext.length);
 
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var random_url = pronoun[randp] + adj[randa] + noun[randn]+ ext[rande]+"."  + ext[rande];

  return random_url;
};


function finder (name){
//comments
  var pos1 = name.search(/\./);
  //console.log();
  let str = name.slice(0, pos1);
  
    for (j=0;j<ext.length;j++){
      try {
         let pos_true= str.search(ext[j]);
         if (pos_true == -1){
           //pass
         }else{
          let end_domain = str.substring(pos_true,str.length);
          let domain_ready = str.substring(0, pos_true);
          console.log(domain_ready+'.'+end_domain);
         }
        
      } catch (SyntaxError) {
      //pass error
    }
    }
    }
  
finder(sentence());