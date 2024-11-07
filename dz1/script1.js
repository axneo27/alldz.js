//1
function takeName(){
    let name = prompt("What is your name?");
    alert(`Hello, ${name}`);
}
//2
const year = 2024;
function countAge(){
    let b_year = +prompt("Enter year of birth");
    alert(`Age: ${year - b_year}`)
}
//3
function countPer(){
    let side = +prompt("Enter length of the side");
    alert(`Perimeter: ${side*4}`)
}
//4
function countCircleS(){
    let r = +prompt("Enter radius");
    alert(`S: ${3.14*r**2}`)
}
//5
function countVel(){
    let s = +prompt("Enter distance (km)");
    let t = +prompt("Enter time (h)");
    alert(`Velocity: minimum ${s/t} km/h`)
}
//6
const doInEu = 0.93;
function Converter(){
    let d = +prompt("Enter dollars");
    alert(`Euro: ${d*doInEu}`)
}
//7
const NeedM = 820;
function ex7(){
    let gb = +prompt("Enter size (in gb)");
    alert(`Possible 820mb files: ${Math.floor(gb*1000/NeedM)}`)
}
//8
function ex8(){
    let g = +prompt("Enter sum in the pocket $");
    let s = +prompt("Enter the price of one bar of chocolate");
    alert(`You can buy ${Math.floor(g/s)} bars of chocolates and the rest is ${g - s*Math.floor(g/s)}$`)
}
//9
function ex9(){
    let n = +prompt("Enter a 3 digit number");
    
    let newN = 0;
    let d = 100;
    for (let i = 0; i < 3; i++){
        let nn = Math.floor((n/d)%10);
        newN+=nn*100/d;
        d/=10;
    }
    alert(newN);
}
//10
function ex10(){
    let n = +prompt("Enter a number");
    n%2==0 ? alert("Even") : alert("Odd");
}