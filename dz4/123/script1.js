//1
const trackbar = document.getElementsByClassName("trackbar")[0];
const button = document.getElementsByClassName("tbutton")[0];
const line = document.getElementsByClassName("tline")[0];

const trackbarWidth = trackbar.offsetWidth;
const buttonWidth = button.offsetWidth;

let t = false;
let clickOffset = 0;

button.addEventListener('mousedown', (e)=>{
    e.preventDefault();
    clickOffset = (e.pageX - button.offsetLeft - 8) - (buttonWidth / 2);
    t = true;
});
document.body.addEventListener('mouseup', (e)=>{
    e.preventDefault();
    t = false;
});
document.body.addEventListener('mousemove', (e)=>{
    e.preventDefault();
    if (t==true){
        let pos = (e.pageX - button.offsetLeft - 8)- (buttonWidth / 2);
        let bpos = parseInt(window.getComputedStyle(button).getPropertyValue('left'));

        let npos = pos + bpos - clickOffset;
        if (npos < 0) npos = 0;
        if (npos >= trackbarWidth - buttonWidth) npos = trackbarWidth - buttonWidth;

        npos = npos + 'px';
        button.style.left = npos;
    }
});

document.body.addEventListener('mouseleave', () => {
    t = false;
});