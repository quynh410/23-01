// let lis = document.getElementsByClassName("list-item");
// console.log(lis);

// function createName(){
//     let nameList = document.getElementById("nameList");
//     console.log(nameList);
// }
let names = ["Nguyễn Văn A", "Vũ thị B", "Nguyễn Minh C", "Lò Văn D"];

let list = document.getElementById("nameList");
for (let i = 0; i < names.length; i++) {
  let name = names[i];

  let listItem = document.createElement("li");

  listItem.innerText = name;
  
  list.appendChild(listItem); 
}