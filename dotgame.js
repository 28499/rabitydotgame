var canvas = document.getElementById('Canvas');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const dotMargin =25;
const numDots = 54;

window.addEventListener('resize',function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

var rabitDots = {
    dots: [
        {x: 7, y: 350},
		{x: 127, y: 232},
		{x: 187, y: 173}, 
		{x: 307,y: 55},
		{x:257,y: 173}, 
		{x:247,y: 232}, 
		{x:187,y: 291}, 
		{x:247,y: 257}, 
		{x:257,y: 187}, 
		{x:427,y: 55},
		{x:367,y: 173}, 
		{x:335,y: 232}, 
		{x:247,y: 291}, 
		{x:367,y: 257}, 
		{x:437,y: 187},	
		{x:487,y: 173}, 
		{x:547,y: 177}, 
		{x:607,y: 232}, 
		{x:667,y: 257}, 
	    {x:727,y: 291},
		{x:787,y: 350}, 
		{x:1000,y: 409}, 
		{x:1300,y: 468}, 
		{x:900,y: 527}, 
	    {x:667,y: 278}, 
		{x:607,y: 427},
		{x:547,y: 437},
		{x:487,y: 500}, 
		{x:437,y: 550}, 
		{x:397,y: 650}, 
		{x:437,y: 647}, 
		{x:457,y: 427},
        {x:487,y: 377}, 
		{x:447,y: 427}, 
        {x:437,y: 457}, 
        {x:357,y: 647}, 
        {x:427,y: 437}, 
        {x:457,y: 427}, 
        {x:437,y: 433}, 
        {x:357,y: 433}, 
        {x:257,y: 433}, 
        {x:237,y: 557}, 
        {x:157,y: 650}, 
        {x:237,y: 427}, 
        {x:257,y: 433}, 
        {x:237,y: 377}, 
        {x:67,y: 650}, 
        {x:237,y: 433}, 
        {x:247,y: 468}, 
        {x:157,y: 433},
        {x:137,y: 427}, 
        {x:127,y: 433}, 
        {x:97,y: 435},
        {x:67,y: 427},
        {x: 7, y: 350},
    ]
}

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(7, 350, 7, 0, 2 * Math.PI, true);
    ctx.arc(127, 232, 7, 0, 2 * Math.PI, true);
    ctx.arc(187, 173, 7, 0, 2 * Math.PI, true);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'yellow'; 
    ctx.fill();
    


    ctx.beginPath();
    ctx.arc(307, 55, 7, 0, 2 * Math.PI, true);
    ctx.arc(257, 173, 7, 0, 2 * Math.PI, true);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue'; 
    ctx.fill();
    
    ctx.beginPath();
    ctx.arc(247, 232, 7, 0, 2 * Math.PI);
    ctx.arc(187, 291, 7, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'red'; 
    ctx.fill();

    ctx.beginPath();
    ctx.arc(247, 257, 7, 0, 2 * Math.PI);
    ctx.arc(257, 187, 7, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    strokeStyle = 'yellow'; 
    ctx.fill();

ctx.beginPath();
ctx.arc(427, 55, 7, 0, 2 * Math.PI);
ctx.arc(367, 173, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'blue'; 
ctx.fill();

ctx.beginPath();
ctx.arc(335, 232, 7, 0, 2 * Math.PI);
ctx.arc(247, 291, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red'; 
ctx.fill();

ctx.beginPath();
ctx.arc(367, 257, 7, 0, 2 * Math.PI);
ctx.arc(437, 187, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'yellow'; 
ctx.fill();

ctx.beginPath();
ctx.arc(487, 173, 7, 0, 2 * Math.PI);
ctx.arc(547, 177, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'blue'; 
ctx.fill();

ctx.beginPath();
ctx.arc(607, 232, 7, 0, 2 * Math.PI);
ctx.arc(667, 257, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red'; 
ctx.fill();

ctx.beginPath();
ctx.arc(727, 291, 7, 0, 2 * Math.PI);
ctx.arc(787, 350, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'yellow'; 
ctx.fill();

ctx.beginPath();
ctx.arc(1000, 409, 7, 0, 2 * Math.PI);
ctx.arc(1300, 468, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'blue'; 
ctx.fill();

ctx.beginPath();
ctx.arc(900, 527, 7, 0, 2 * Math.PI);
ctx.arc(667, 278, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red'; 
ctx.fill();

ctx.beginPath();
ctx.arc(607, 427, 7, 0, 2 * Math.PI);
ctx.arc(547, 437, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'yellow'; 
ctx.fill();

ctx.beginPath();
ctx.arc(487, 500, 7, 0, 2 * Math.PI);
ctx.arc(437, 550, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'blue'; 
ctx.fill();

ctx.beginPath();
ctx.arc(397, 650, 7, 0, 2 * Math.PI);
ctx.arc(437, 647, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red'; 
ctx.fill();

ctx.beginPath();
ctx.arc(457, 427, 7, 0, 2 * Math.PI);
ctx.arc(487, 377, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'yellow'; 
ctx.fill();

ctx.beginPath();
ctx.arc(447, 427, 7, 0, 2 * Math.PI);
ctx.arc(437, 457, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'blue'; 
ctx.fill();

ctx.beginPath();
ctx.arc(357, 647, 7, 0, 2 * Math.PI);
ctx.arc(427, 437, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red'; 
ctx.fill();

ctx.beginPath();
ctx.arc(457, 427, 7, 0, 2 * Math.PI);
ctx.arc(437, 433, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'yellow'; 
ctx.fill();

ctx.beginPath();
ctx.arc(357, 433, 7, 0, 2 * Math.PI);
ctx.arc(257, 433, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'blue'; 
ctx.fill();

ctx.beginPath();
ctx.arc(237, 557, 7, 0, 2 * Math.PI);
ctx.arc(157, 650, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red'; 
ctx.fill();

ctx.beginPath();
ctx.arc(237, 427, 7, 0, 2 * Math.PI);
ctx.arc(257, 433, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'yellow'; 
ctx.fill();

ctx.beginPath();
ctx.arc(237, 377, 7, 0, 2 * Math.PI);
ctx.arc(67, 650, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'blue'; 
ctx.fill();

ctx.beginPath();
ctx.arc(237, 433, 7, 0, 2 * Math.PI);
ctx.arc(247, 468, 7, 0, 2 * Math.PI);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red'; 
ctx.fill();

    ctx.beginPath();
    ctx.arc(157, 433, 7, 0, 2 * Math.PI);
    ctx.arc(137, 427, 7, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'yellow'; 
    ctx.fill();

    ctx.beginPath();
    ctx.arc(127, 433, 7, 0, 2 * Math.PI);
    ctx.arc(97, 435, 7, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'blue'; 
    ctx.fill();

    ctx.beginPath();
    ctx.arc(67, 427, 7, 0, 2 * Math.PI);
    ctx.arc(7, 350, 7, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'red'; 
    ctx.fill();

    ctx.beginPath();
    ctx.arc(130, 300, 7, 0, 2 * Math.PI);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black'; 
    ctx.stroke();
}


function drawLine(beginX,beginY,endX,endY){
    ctx.moveTo(beginX, beginY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle= 'blue';
    ctx.stroke();
}

for (let index = 0; index < rabitDots.dots.length; index++) {
    const theDot = rabitDots.dots[index];
    drawCircle(theDot.x,theDot.y)
}


var i = 0
function DrawingLine(){
    const theDot = rabitDots.dots[i];
    const theNextDot = rabitDots.dots[i+1];
    drawLine(theDot.x,theDot.y,theNextDot.x,theNextDot.y)
    i++  
    
}

//waiting time 3sec (3000ms)
setInterval(DrawingLine , 3000);






