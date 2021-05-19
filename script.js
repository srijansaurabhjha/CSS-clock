    setInterval(()=>{
let d = new Date();
h=d.getHours();
m=d.getMinutes();
s=d.getSeconds();

hRotate = 30*h + m/2 + s/120;
mRotate = 6*m + s/10;
sRotate = 6*s;

let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let second = document.getElementById('second');

hour.style.transform = `rotate(${hRotate}deg)`;
minute.style.transform = `rotate(${mRotate}deg)`;
second.style.transform = `rotate(${sRotate}deg)`;
},1000);
