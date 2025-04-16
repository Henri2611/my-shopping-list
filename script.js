const li = document.querySelector("ul");
const inp = document.querySelector("input");
const btn = document.querySelector("button");

function addItem(){
  const input = inp.value.trim();
  if(input === "") return;
  inp.value = "";
  inp.focus();
  
const newLi = document.createElement("li");
const newSpn = document.createElement("span");
const newBtn = document.createElement("button");
  
newSpn.textContent = input;
newBtn.textContent = "Delete";
  
newLi.appendChild(newSpn);
newLi.appendChild(newBtn);
li.appendChild(newLi);
  
  newBtn.addEventListener("click", function(){
  li.removeChild(newLi);
});

}
btn.addEventListener("click", addItem);
inp.addEventListener("keydown", function(event){
  if(event.key === "Enter"){
    addItem();
}
})
  
  


