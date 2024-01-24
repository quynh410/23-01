let but = document.getElementById("but");
let ipValue = document.getElementById("ipValue");
let list = document.getElementById("list");

but.addEventListener("click", function(){
    let value = ipValue.value;
    if(value !== ""){
        let li = document.createElement("li");
        li.textContent = value;
        list.appendChild(li);
        ipValue.value = "";
    }
});