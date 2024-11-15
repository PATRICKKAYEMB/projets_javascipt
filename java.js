const button=document.getElementById("button");
const input_box= document.getElementById("input_box");
const list_box=document.getElementById("list_box")

button.addEventListener( "click",function () {
    if (input_box==="") {
        alert("ne laisser pas vide")
    }
    else{
        let li=document.createElement("li");
       li.innerHTML=input_box.value;
       list_box.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span)
        saveData()
       
    }
    input_box.value="";
    saveData()


})

list_box.addEventListener("click",function (e) {
        if (e.target.tagName==="LI") {
            e.target.classList.toggle("checked") 
            saveData()
        }
        else if (e.target.tagName==="SPAN"){
            e.target.parentElement.remove()
            
            saveData()
        }
})


// une fonction qui permet de sauvegarder les donnees

function saveData() {
    localStorage.setItem("data",list_box.innerHTML)
}
function ShowList() {
    list_box.innerHTML=localStorage.getItem("data")
}
ShowList()