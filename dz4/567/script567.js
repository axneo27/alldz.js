//5
const month = document.getElementById("month");
const year = document.getElementById("year");
const date = document.getElementById("date");
const btn = document.getElementById("btn");
const table = document.getElementById("table1");
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
btn.addEventListener("click", () => {
    for (let i = 1; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
            table.rows[i].cells[j].innerText = "";
        }
    }
    date.innerText = `${monthNames[month.value - 1]}, ${year.value}`;
    const days = daysInMonth(month.value, year.value);

    let fdayWeek = new Date(year.value, month.value - 1, 1).getDay();
    if (fdayWeek == 0) {
        fdayWeek = 7;
    }
    let firstcol = fdayWeek - 1;
    let row = 1;
    for (let i = 0; i < days; i++) {
        table.rows[row].cells[firstcol].innerText = i + 1;
        firstcol++;
        if (firstcol == 7) {
            firstcol = 0;
            row++;
        }
    }
});
//6
function checkPart(text){
    let t1 = "https://";
    let t2 = "http://";
    const t3 = text.slice(0, t1.length);
    return t3 === t1 || t3 === t2;
}
function checkLinks() {
    const links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        if (checkPart(links[i].href)) {
            links[i].style.textDecorationStyle = "dotted";
        }
    }
}
let isCtrlDown = false;
let isShift = false;
document.addEventListener("keydown", (e) => {
    if (e.altKey) isCtrlDown = true;
});
document.addEventListener("keyup", (e) => {
    if (!e.altKey) isCtrlDown = false; // alt because with ctrl it doesn't work as intended on mac 
});
document.addEventListener("keydown", (e) => {
    if (e.shiftKey) isShift = true;
});
document.addEventListener("keyup", (e) => {
    if (!e.shiftKey) isShift = false;
});
function e7() {
    const bookList = document.getElementById("bookList");
    const items = bookList.querySelectorAll("li");

    bookList.addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
            const item = e.target;

            if (!isCtrlDown && !isShift) {
                items.forEach((el) => {
                    el.style.backgroundColor = "white";
                    el.className = "";
                });
            }
            if (isShift) {
                let start = 0;
                const currentIndex = parseInt(item.id) - 1;
            
                for (let i = 0; i < items.length; i++) {
                    if (items[i].className === "active") {
                        start = i;
                        break;
                    }
                }
                console.log(start, currentIndex);
                for (let i = start; i < currentIndex ; i++) {
                    items[i].style.backgroundColor = "orange";
                    items[i].className = "active";
                }
            }            
            if (item.className === "active") {
                item.style.backgroundColor = "white";
                item.className = "";
            } else {
                item.style.backgroundColor = "orange";
                item.className = "active";
            }
            e.preventDefault();
        }
    });
}
e7();