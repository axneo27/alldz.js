//8
const textDiv = document.getElementById("textArea");
let keysPressed = new Set(); 
let isArea = false;
document.addEventListener("keydown", (e) => {
    console.log(keysPressed);
    if (e.altKey) keysPressed.add("Ctrl"); // ctrl doesnt work as intended (previous project) on mac
    if (e.key.toLowerCase() === "e") keysPressed.add("E");
    if (e.key.toLowerCase() === "s") keysPressed.add("S");

    if (keysPressed.has("Ctrl") && keysPressed.has("E") && !isArea){
        e.preventDefault();
        const textArea = document.createElement("textarea");
        textArea.style.width = "400px";
        textArea.style.height = "220px";
        textArea.value = document.getElementById("t").innerText;
        document.getElementById("t").innerText = "";
        textDiv.append(textArea);
        isArea = true;
    }
    else if (keysPressed.has("Ctrl") && keysPressed.has("S") && isArea){
        e.preventDefault();
        const textArea = document.getElementsByTagName("textarea")[0];
        document.getElementById("t").innerText = textArea.value;
        textDiv.removeChild(textArea);
        isArea = false;
    }
});

document.addEventListener("keyup", (e) => {
    if (!e.altKey) keysPressed.delete("Ctrl");
    if (e.key.toLowerCase() === "e") keysPressed.delete("E");
    if (e.key.toLowerCase() === "s") keysPressed.delete("S");
});
//9
const sortName = document.getElementById("Sname");
const sortLastName = document.getElementById("Slastname");
const sortAge = document.getElementById("Sage");
const sortCompany = document.getElementById("Scompany");
const table = document.getElementsByTagName("table")[0];

sortName.addEventListener("click", (e)=>{
    e.preventDefault();
    const namesArr = [];
    for (const i of table.children) {
        for (let j = 1; j < i.children.length; j++){
            namesArr.push(i.children[j].children[0].innerText);
        }                       //tr
    }
    namesArr.sort();
    for (const i of table.children) {
        for (let j = 0; j < i.children.length - 1; j++){
            let temp;
            if (i.children[j + 1].children[0].innerText != namesArr[j]){
                for (let k = 1; k < i.children.length; k++){
                    if (i.children[k].children[0].innerText == namesArr[j]){
                        temp = i.children[k].innerHTML;
                        i.children[k].innerHTML = i.children[j + 1].innerHTML;
                        i.children[j + 1].innerHTML = temp;
                    }
                } 
            }
            
        }
    }
    
});

sortLastName.addEventListener("click", (e)=>{
    e.preventDefault();
    const namesArr = [];
    for (const i of table.children) {
        for (let j = 1; j < i.children.length; j++){
            namesArr.push(i.children[j].children[1].innerText);
        }                       //tr
    }
    namesArr.sort();
    for (const i of table.children) {
        for (let j = 0; j < i.children.length - 1; j++){
            let temp;
            if (i.children[j + 1].children[1].innerText != namesArr[j]){
                for (let k = 1; k < i.children.length; k++){
                    if (i.children[k].children[1].innerText == namesArr[j]){
                        temp = i.children[k].innerHTML;
                        i.children[k].innerHTML = i.children[j + 1].innerHTML;
                        i.children[j + 1].innerHTML = temp;
                    }
                } 
            }
            
        }
    }
    
});

sortCompany.addEventListener("click", (e)=>{
    e.preventDefault();
    const namesArr = [];
    for (const i of table.children) {
        for (let j = 1; j < i.children.length; j++){
            namesArr.push(i.children[j].children[3].innerText);
        }                       //tr
    }
    namesArr.sort();
    for (const i of table.children) {
        for (let j = 0; j < i.children.length - 1; j++){
            let temp;
            if (i.children[j + 1].children[3].innerText != namesArr[j]){
                for (let k = 1; k < i.children.length; k++){
                    if (i.children[k].children[3].innerText == namesArr[j]){
                        temp = i.children[k].innerHTML;
                        i.children[k].innerHTML = i.children[j + 1].innerHTML;
                        i.children[j + 1].innerHTML = temp;
                    }
                } 
            }
            
        }
    }
    
});

sortAge.addEventListener("click", (e)=>{
    e.preventDefault();
    const namesArr = [];
    for (const i of table.children) {
        for (let j = 1; j < i.children.length; j++){
            namesArr.push(i.children[j].children[2].innerText);
        }                       //tr
    }
    namesArr.sort(function(a, b){return a-b});
    for (const i of table.children) {
        for (let j = 0; j < i.children.length - 1; j++){
            let temp;
            if (i.children[j + 1].children[2].innerText != namesArr[j]){
                for (let k = 1; k < i.children.length; k++){
                    if (i.children[k].children[2].innerText == namesArr[j]){
                        temp = i.children[k].innerHTML;
                        i.children[k].innerHTML = i.children[j + 1].innerHTML;
                        i.children[j + 1].innerHTML = temp;
                    }
                } 
            }
            
        }
    }
    
});