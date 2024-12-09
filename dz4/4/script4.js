const container = document.getElementsByClassName("container")[0];
const button = document.getElementById("but");
const arrnew = [["news 1", "jklasdhfjkhslfjhasldfhlsajdhflakjsdhf"], 
                ["news 2", "laksdhfjkalshfkashdfkla;sfjk"], 
                ["news 3", "kalsjdflkajsfljhdflkjsahlkfhskjhfa"]]

let nnn = 0;


button.addEventListener("click", (e)=>{
    e.preventDefault();
    if (nnn != arrnew.length){
        let n = document.createElement("div");
        let h2 = document.createElement("h2");
        let p = document.createElement("p");
        n.className = "newsblock";
        h2.innerText = arrnew[nnn][0];
        p.innerHTML = arrnew[nnn][1];
        n.append(h2);
        n.append(p);
    
        container.append(n);
        nnn++;
    }
});