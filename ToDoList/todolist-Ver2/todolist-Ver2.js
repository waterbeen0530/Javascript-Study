let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let list = document.querySelector('#list');
let el = document.getElementsByTagName('li');

function listAdd(){
  let txt = input.value;
  if(txt === ""){
    alert('공백은 입력할 수 없습니다.');
  }
  else{
    let li = document.createElement('li');
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value = '';
  }
}
  


list.addEventListener('click', evt =>{
  if(evt.target.tagName == 'LI'){
    evt.target.classList.toggle('checked');
  }
})


function enterkey(){
  if(window.event.keyCode == 13){
    listAdd();
  }
}