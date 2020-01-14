canvas=document.getElementById('mycanvas')
ctx=canvas.getContext('2d')

// //fill rect
// ctx.fillStyle='red'
// ctx.fillRect(20,20,150,100)
// ctx.fillStyle='green'
// ctx.fillRect(200,20,150,100)

// //stroke rect
// ctx.lineWidth=5
// ctx.strokeStyle='green'
// ctx.strokeRect(20,200,150,100)

// //clear rect
// ctx.clearRect(25,25,140,90)

// //fill text
// ctx.font='30px Arial'
// ctx.fillStyle='purpose'
// ctx.fillText('hello game',400,50)

// //stroke text
// ctx.lineWidth=1
// ctx.strokeStyle='red'
// ctx.strokeText('hello game',400,150)

//Paths

// //triangle
// ctx.beginPath()
// ctx.moveTo(50,50)
// ctx.lineTo(150,50)
// ctx.lineTo(100,200)
// //ctx.lineTo(50,50)
// ctx.closePath()
// ctx.stroke()

// ctx.fillStyle='coral'
// ctx.fill()


// //reactangle
// ctx.beginPath()
// ctx.rect(200,200,150,100)
// ctx.stroke()
// ctx.fillStyle='blue'
// ctx.fill()

// //arc
// ctx.beginPath()
// ctx.arc(50,50,30,0,Math.PI*0.5,false)
// // ctx.stroke()

// // ctx.beginPath()

// ctx.moveTo(180,150)
// ctx.arc(150,150,30,0,Math.PI*0.5,false)
// ctx.stroke()


//draw animation (bound ball)
circle={
    x:250,
    y:150,
    size:50,
    dx:5,
    dy:3
}

function drawCircle(){
    ctx.beginPath()
    ctx.arc(circle.x,circle.y,circle.size,0,Math.PI*2,false)
    // ctx.fillStyle='black'
    // ctx.fill()
    ctx.stroke()

}

function update(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    drawCircle()

    //rule of movement
    circle.x+=circle.dx
    circle.y+=circle.dy
    
    //bound
    if((circle.x+circle.size)>canvas.width || (circle.x-circle.size)<0 ){
        circle.dx=(-1)*circle.dx
    }
    if((circle.y+circle.size)>canvas.height || (circle.y-circle.size)<0 ){
        circle.dy=(-1)*circle.dy
    }
    
    //console.log(circle.x)
    
    requestAnimationFrame(update)
}
update()