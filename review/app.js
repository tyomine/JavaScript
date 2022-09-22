let hello = 'Hello World';
alert(hello);

let int1 = 1;
alert(int1);
let int2 = -10;
alert(int2);
let float = 3.14;
alert(float);
let str1 = 'JavaScriptを覚えよう';
alert(str1);

alert(4+3);
alert(8-5);
alert(2*6);
alert(10/2);

alert('Hello' + 'World');

let str2 = 'Hello';
let str3 = 'World!!';
alert(str2 + str3);

let orange = 100;
let apple = 100;

if(orange < apple){
  alert('みかんの値段がリンゴより安い');
} else if(orange == apple){
  alert('みかんとリンゴが同じ値段');
} else{
  alert('みかんの値段がリンゴより高い');
}

let max = 300;
let num = 1;
let count = 0;

while(num < max){
  num = num*2;
  count = count + 1;
}

alert('2をかけて'+ max +'を超えるのに必要だった回数は' + count +'回です');

let i;
let nom = 0;

for(i=1;i<11;i++){
  nom = nom+i;
}
alert('1から10まで足した結果は'+ nom +'です')

alert(6+4);
alert(19-6);
alert(24*14);
alert(30/2);