let hello = "Hello World";
alert(hello);

let folat1 = 3.14;
alert(folat1);

let str1 = 'JavaScriptを覚えよう';
alert(str1);

alert(4 + 3);

let str2 = 'Hello';
let str3 = 'World!!';
alert(str2 + str3);

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がりんごより安い');
} else if(orange == apple){
  alert('みかんとりんごが同じ値段');
} else{
  alert('みかんの値段がりんごより高い');
}

let max =100;
let num = 1;
let count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');

let i;
let nom = 0;

for(i = 1; i < 11; i++){
  nom = nom + i
}

alert("1から１０まで足し算した結果は" + nom + "です");



alert(4 * 3)
alert(5 - 2)

let folat2 = 27
let folat3 = 16

alert("足し算をします" + folat2 + "と" + folat3 + "足したら" + (folat2+folat3) + "です")


let alertString;
alertString = addString("WebCamp");

alert(alertString);


function addString(strA) {
  let addStr = "Hello" + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください。');
alert(promptStr);
