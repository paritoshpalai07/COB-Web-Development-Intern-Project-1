let darkBtn = document.querySelector("#darkBtn");
let link = document.querySelector("#dark");

darkBtn.addEventListener("click", ()=>{
    if(link.toggleAttribute("href")){
        link.setAttribute("href","dark.css")
    }
})