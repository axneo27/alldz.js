const blocks = document.getElementsByClassName("blocks")[0];
let o = false;

for (const child of blocks.children){
    let h3 = child.getElementsByTagName("h3")[0];
    h3.addEventListener('click', (e)=>{
        let p = child.getElementsByTagName("p")[0];
        if (o==false){
            p.style.display = "block";
            o = true;
        }
        else if (o==true && p.style.display === "block"){
            p.style.display = "none";
            o = false;
        }
    });
}