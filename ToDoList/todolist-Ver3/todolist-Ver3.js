"use strict";
let itemList = [];

let inputButotn = document.getElementById("input_btn");
input_btn.addEventListener("click", addItem);

function addItem() {
  let item = document.getElementById("item").value;
  if (item === "") {
    alert("내용을 입력해주세요.");
  } else if (item !== null) {
    itemList.push(item);
    document.getElementById("item").value = "";
    document.getElementById("item").focus;
    saveList();
  }
  showList();
}

function showList() {
  let list = "<ul>";
  for (let i = 0; i < itemList.length; i++) {
    list +=
      "<li>" +
      itemList[i] +
      "<span class='close' id=" +
      i +
      ">" +
      "🗑️" +
      "</span></li>";
  }
  list += "</ul>";
  document.querySelector("#item_list").innerHTML = list;

  let deleteButtons = document.querySelectorAll(".close");
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteItem);
  }
}

function deleteItem() {
  let id = this.getAttribute("id");
  itemList.splice(id, 1);
  showList();
}

function handleEnter(event) {
  if (event.keyCode === 13) {
    addItem();
  }
}
item.addEventListener("keydown", handleEnter);

function saveList() {
  console.log("dsjfl");
  localStorage.setItem("itemList", JSON.stringify);
}
