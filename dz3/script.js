class Marker{
    ink = 100;
    color = 'black';
    constructor(color, ink = 100){
        this.color = color;
        this.ink = ink;
    }
    print(str){
        let nColored = 0;
        for (let i = 0; i < str.length; i++){
            if (this.ink > 0 && str[i] != ' '){
                nColored++;
                this.ink-=0.5;
            }
        }
        console.log(`%c${str.substring(0, nColored)}`, `color: ${this.color}`);
    }
}

class UltraMarker extends Marker{
    constructor(color, ink){
        super(color, ink)
    }
    addInk(ink){
        if (this.ink+ink <= 100)
            this.ink+=ink;
    }
}

// let m = new UltraMarker('red', 80);
// m.print('asddsa a');
// m.addInk(23.5);
// console.log(m.ink);

class ExtendedDate extends Date{
    constructor(value = Date.now()){
        super(value)
    }
    ShowDate(){
        console.log(`${this.toLocaleDateString('eng', { month: 'long' })}, ${this.getDate()}`);
    }
    IsFuture(date){
        return this.getTime() <= date.getTime();
    }
    IsLeap(){
        return this.getFullYear() % 4 === 0 && this.getFullYear() % 400 === 0? true : false;
    }
    daysinMonth(){
        return new Date(this.getFullYear(), this.getMonth(), 0).getDate();
    }
    getNextDate(){
        let y = this.getFullYear(), m = this.getMonth(), d = this.getDate();
        if (d === this.daysinMonth()){
            d = 1;
            m++;
            if (m > 11){
                m = 0;
                y++;
            }
        }else d++;
        return new Date(y, m, d);
    }
}
class Employee{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

let e1 = new Employee('Oleksii', "Trofymchuk");
let e2 = new Employee('Michael', "Jordan");
let e3 = new Employee('John', "Jordan");

class EmpTable{
    constructor(emp){
        this.emp = emp;
    }
    generateTable(){
        const table = document.getElementById("table");
        const tbody = table.querySelector("tbody");
        for (let i = 0; i < this.emp.length; i++){
            const newRow = document.createElement('tr');
    
            const cell1 = document.createElement('td');
            const cell2 = document.createElement('td');
    
            cell1.textContent = this.emp[i].name;
            cell2.textContent = this.emp[i].surname;
            newRow.appendChild(cell1);
            newRow.appendChild(cell2);
            
            tbody.appendChild(newRow);
        }
    }
    getHTML(){
        let t = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><body><div class="container"><table id="table">
            <thead><tr><th>Name</th><th>Surname</th></tr></thead><tbody>`
        for (let i = 0; i < this.emp.length; i++){
            t+=`<tr><td>${this.emp[i].name}</td><td>${this.emp[i].surname}</td></tr>`
        }
        t+=`</tbody></table></div></body></html>`
        return t;
    }
}

let t = new EmpTable([e1, e2, e3]);
t.getHTML();

class StyledEmpTable extends EmpTable{
    constructor(emp, bgcolor){
        super(emp);
        this.bgcolor = bgcolor;
    }

    getStyles(){
        let st = `<style>`;
        st+=`tr{background-color: ${this.bgcolor};}`
        st+=`</style>`;
    }
    getHTML(){
        let t = `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head>${this.getStyles()}><body><div class="container"><table id="table">
            <thead><tr><th>Name</th><th>Surname</th></tr></thead><tbody>`
        for (let i = 0; i < this.emp.length; i++){
            t+=`<tr><td>${this.emp[i].name}</td><td>${this.emp[i].surname}</td></tr>`
        }
        t+=`</tbody></table></div></body></html>`
        return t;
    }
}