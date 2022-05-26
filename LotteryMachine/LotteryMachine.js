let candidates = new Set();

while ([...candidates].length < 7) {
  const num = Math.floor(Math.random() * 44) + 1;
  candidates.add(num);
}

candidates = [...candidates];

candidates.sort(function (a, b) {
  return a - b;
});

const lotto = document.querySelector("#lotto");
const addLotto = document.querySelector("#addLotto");
lotto.innerHTML = candidates
  .slice(0, 6)
  .map((num) => {
    let id = ["yellow", "blue", "red", "gray", "green"][Math.floor(num / 10)];

    return `<p id=${id}> ${num} </p>`;
  })
  .join("");

let id = ["yellow", "blue", "red", "gray", "green"][
  Math.floor(candidates[6] / 10)
];

addLotto.innerHTML += `<p id=${id}> ${candidates[6]} </p>`;
