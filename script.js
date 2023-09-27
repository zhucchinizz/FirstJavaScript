const button=document.querySelector(".button1");
button.addEventListener("click", updateName);
function updateName(){
    const name = prompt("Enter new name");
    button.textContent=`Player 1: ${name}`;
}
const button2=document.querySelector(".button2");
button2.addEventListener("click", updateName2);
function updateName2(){
    const name1 = prompt("Enter new name");
    button2.textContent=`Player 2: ${name1}`;
}
