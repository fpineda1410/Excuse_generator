var who, action, what, when;
who = ['The dog','My grandma','His turtle','My bird'];
action = ['ate','peed','crushed','broke'];
what = ['my homework', 'the keys', 'the car'];
when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function randGen() {
  return Math.floor(Math.random() * 5);
}

function sentence() {
  var rand1 = Math.floor(Math.random() * 4);
  var rand2 = Math.floor(Math.random() * 4);
  var rand3 = Math.floor(Math.random() * 3);
  var rand4 = Math.floor(Math.random() * 5);
 
  //                var randCol = [rand1,rand2,rand3,rand4,rand5];
  //                var i = randGen();
  var content = who[rand1] + " " + action[rand2] + " " + what[rand3] + " " + when[rand4];

  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;";
};
sentence();