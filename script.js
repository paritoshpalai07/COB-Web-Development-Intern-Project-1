const addBtn = document.querySelector("#addBtn");
const inputBox = document.querySelector("#inputbox")
const listContainer = document.getElementById("list-container");

addBtn.addEventListener("click", ()=>{
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveTaskItems();
})

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveTaskItems();
},false);

showTaskItems();

function saveTaskItems(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTaskItems(){
    listContainer.innerHTML = localStorage.getItem("data");
}

let darkBtn = document.querySelector("#darkBtn");
let link = document.querySelector("#dark");

darkBtn.addEventListener("click", ()=>{
    if(link.toggleAttribute("href")){
        link.setAttribute("href","dark.css")
    }
})