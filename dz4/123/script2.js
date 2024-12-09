const img1 = 'imgs/head_photo.png';
const img2 = 'imgs/mars_picture.jpeg';
const img3 = 'imgs/you.svg';
const imgarr = [img1, img2, img3];

const bleft = document.getElementById("left");
const bright = document.getElementById("right");
const im = document.getElementById("img1");
let curimg = 0;

bleft.addEventListener('click', (e)=>{
    e.preventDefault();
    if (curimg != 0){
        curimg-=1;
        im.src = imgarr[curimg];
    }
});

bright.addEventListener('click', (e)=>{
    e.preventDefault();
    if (curimg != imgarr.length - 1){
        curimg+=1;
        im.src = imgarr[curimg];
    }
});