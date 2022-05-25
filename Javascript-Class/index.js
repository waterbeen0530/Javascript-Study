//map
const array = [1, 2, 3, 4, 5, 6, 7, 8];

//기존의 방법으로 값을 제곱하기
const squared = [];
for (let i = 0; i < array.length; i++) {
  squared.push(array[i] * array[i]);
}

console.log(squared);

//forEach 사용
const forSquared = [];

array.forEach(n => {
  forSquared.push(n * n);
});

console.log(forSquared);

//map 사용
const mapSquare = n => n * n;
const mapSquared = array.map(mapSquare);
console.log(mapSquare);

//map object
const students = [
  {id:1, name:"subin"},
  {id:2, name:"soyeon"},
  {id:1, name:"chaeyeon"},
  {id:1, name:"taerim"}
];

let names = students.map(student => student.name);
console.log(names);
