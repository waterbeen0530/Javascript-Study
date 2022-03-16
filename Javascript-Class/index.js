//forEach
const array = ['일', '이', '삼', '사'];

//for문의 기존 방법
for(let i = 0; i < array.length; i++)  {
  console.log(array[i]);
}

//forEach문을 통해 개선
array.forEach(hero => {
  console.log(hero);
});

//예제1 - 배열 값 합산
let sum = 0;
const nums = [10, 20, 30, 40];
nums.forEach(plus);

function plus(item) {
  sum += item;
  document.getElementById("result1").innerHTML = sum;
}

//예제2 - 각 배열값을 10배로 수정
const number = [10, 20, 30, 40];
number.forEach(multiple)

function multiple(value, index, arr) {
  arr[index] = value * 10;
}

document.getElementById("result2").innerHTML = number;