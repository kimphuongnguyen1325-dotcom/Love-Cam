const lines = [
"Chị à...",
"Có những điều Em giữ trong lòng rất lâu...",
"Em thích được nhìn Chị cười 😊",
"Thích được quan tâm Chị mỗi ngày ❤️",
"Và hôm nay...",
"Em muốn hỏi Chị một điều..."
];

const typing = document.getElementById("typing");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const finalMessage = document.getElementById("finalMessage");

let line = 0;
let char = 0;

function typeWriter(){

if(line>=lines.length) return;

if(char<lines[line].length){

typing.innerHTML+=lines[line].charAt(char);

char++;

setTimeout(typeWriter,70);

}else{

typing.innerHTML+="<br><br>";

line++;

char=0;

setTimeout(typeWriter,500);

}

}

typeWriter();

function createStar(){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top="-10px";

star.style.animationDuration=
4+Math.random()*6+"s";

star.style.opacity=Math.random();

document.getElementById("stars").appendChild(star);

setTimeout(()=>{
star.remove();
},10000);

}

setInterval(createStar,120);

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML=Math.random()>0.5?"🌸":"💖";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=
5+Math.random()*5+"s";

petal.style.fontSize=
16+Math.random()*18+"px";

document.getElementById("petals").appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

}

setInterval(createPetal,350);

noBtn.addEventListener("mouseover",moveButton);
noBtn.addEventListener("click",moveButton);

function moveButton(){

const x=Math.random()*250-120;

const y=Math.random()*180-90;

noBtn.style.transform=
`translate(${x}px,${y}px)`;

}

yesBtn.addEventListener("click",()=>{

document.querySelector(".container").style.display="none";

finalMessage.classList.remove("hidden");

for(let i=0;i<120;i++){

setTimeout(createLove,i*60);

}

});

function createLove(){

const heart=document.createElement("div");

heart.className="heartFloat";

heart.innerHTML="💗";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=
20+Math.random()*35+"px";

heart.style.animationDuration=
3+Math.random()*2+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},6000);

}

