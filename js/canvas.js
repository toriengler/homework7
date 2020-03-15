// Variables!
var color ="red";
var radius = 15;
var drawing=true
//You will want to add more
var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d"); 


document.querySelector('#clr').addEventListener("input", function(e) {
    ctx.fillStyle = e.target.value;
})  


//Listeners!!
//Add a listener for loading the window
window.addEventListener("load", function (e) {
    ctx.canvas.width = window.innerWidth * .75
    ctx.canvas.height = window.innerHeight * .75
    ctx.fillStyle = color;
})
//Add a listener for the mouse movement


canvas.addEventListener(
    'mousemove', function (e){
        console.log(e); 
        if (drawing==true){
        draw(e.pageX- radius/2,e.pageY-radius/2);}
    })

//Add a listener for the touch move

//Add a listener for the keydown
window.addEventListener(
    'keydown', function(e){
        console.log(e);
        if (e.keyCode==66){
            ctx.fillStyle = "blue";
        }
        if (e.keyCode==82){
            ctx.fillStyle='red';
        }
        if (e.keyCode==71){
            ctx.fillStyle='green';
        }
        if (e.keyCode==89){
            ctx.fillStyle='yellow';
        }
        if (e.keyCode==32){
            ctx.clearRect(0,0,canvas.width, canvas.height);
            ctx.fillStyle=color
        }
        if (e.keyCode==38){
            console.log('Lift Pen')
            drawing=false
        }
        if (e.keyCode==40){
            console.log('Pen Down')
            drawing=true
        }
    }
)


// Functions!
// I would add a function for draw



function draw (x,y) {
    ctx.beginPath();
    ctx.arc(x,y,radius,0,2 * Math.PI);
    
    ctx.fill();
}