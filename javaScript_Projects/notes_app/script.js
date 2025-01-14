const notes_Container=document.querySelector(".notes-container");
const notes_Button=document.querySelector(".btn");
let notes_Inputbox=document.querySelectorAll('.input-box');


function showNotes(){
    notes_Container.innerHTML=localStorage.getItem("notes_content")
}
showNotes();

function updateStorage(){
    localStorage.setItem("notes_Inputbox",notes_Container.innerHTML)
}


notes_Button.addEventListener("click",()=>{
    let inputBox=document.createElement("p");
    const img=document.createElement("img");
    inputBox.className="input-box"
    inputBox.setAttribute("contenteditable","true");
    img.src="./images/delete.png";
    notes_Container.appendChild(inputBox).appendChild(img);
    
})

notes_Container.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }else if(e.target.tagName="P"){
        notes_content=document.querySelectorAll(".inputBox");
        notes_content.forEach((nc)=>{
            nc.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

document.addEventListener("keydown",event=>{
    if(event.key=== "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }

})