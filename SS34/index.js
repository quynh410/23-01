    // console.log(document);
    // console.dir(document);

//1. document.getElementById()


// document.getElementById("demo-id");
// let h1 = document.getElementById("demo-id");
// console.log(h1);

// document.getElementById("div-id");
// let div = document.getElementById("div-id");
// console.log(div);

//2. document.getElementsByClassName()

// let lis = document.getElementsByClassName("list-item"); //HTMLCollection 
// console.log(lis);

// console.log("First li", lis[0]);
// console.log("Last li", lis[lis.length - 1]);

// for(let i = 0; i < lis.length; i++){
//     console.log("Từng thẻ ", lis[i]);
// }

//3. document.getElementsByTagName()

// let liCollection = document.getElementsByTagName("li");
// console.log("Tập hợp thẻ li", liCollection);

let h1 = document.getElementById("demo-id");
// console.dir(h1);


// console.log(h1.innerHTML);
// console.log(h1.innerText);
// console.log(h1.textContent);

// h1.innerHTML = "<ul><li>Hello mới được update</li></ul>"
// h1.innerText = "hehehehehe"
// h1.textContent = "hohohohoho"


// console.log(h1.id);
// if(h1.id === "demo-id") {
//     alert("Kiểm tra id");
// }

// // classList
// h1.classList // danh sách class
// console.log("Class đầu tiên", h1.classList[0]);
// console.log("Class cuối cùng",h1.classList[h1.classList.length-1]);

// h1.classList.add("class-4");
// h1.classList.remove("class-1");
// console.log(h1.classList.contains("class-5"));

// console.log(h1.style);

// h1.style.backgroundColor = 'red';
// h1.style.width = '200px';
// h1.style.height = '200px';
// h1.style.textAlign ='center';
// h1.style.lineHeight = '200px';
// h1.style.fontSize = '20px';
// h1.style.fontWeight = 'bold';
// h1.style.color = 'white';
// h1.style.borderRadius = '50%';
// h1.style.border = '10px solid black';

// let b =document.getElementById("child-b");
// console.log(b.parentElement.parentElement.children[2].children[0]);


// let input = document.getElementById("input");
// console.log("Đây là giá trị của input tại thời điểm hiẹn tại", input.value);
// input.value = "hello world";


// let li = document.createElement("li");
// let ul = document.getElementById("list")
// li.innerHTML = "<i>Đây là thẻ li mới</i>";
// li.classList.add("List-item")
// ul.appendChild(li);
// li.remove();
// console.log(li);

let btn = document.getElementById("btn");

btn.onclick = function() {
    alert("Hello world");
};