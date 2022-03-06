let input = document.querySelector('#bookName');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

function listAdd(){
  let titleText = input.value;
  if(titleText === ""){
    alert('공백은 입력할 수 없습니다.');
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = titleText;
    list.insertBefore(li, list.childNodes[0]);
    input.value = '';
  }
}