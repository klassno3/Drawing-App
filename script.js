const canvas = document.getElementById( "canvas" );
const ctx = canvas.getContext( "2d" );
const decreaseBtn=document.getElementById("decrease")
const increaseBtn = document.getElementById( "increase" )
const eraserBtn = document.getElementById('eraser');
const colorEl = document.getElementById( 'color' );
const sizeEL=document.getElementById("size")
const clearEl = document.getElementById( 'clear' );
const toolbar=document.querySelector(".toolbox")


let size = 20
isPressed=false
colorEl.value= "black"
let color=colorEl.value
let x
let y
function drawAll () {
  
  
  canvas.addEventListener( "mousedown", (e) => {
    isPressed = true
    
    x=e.offsetX
    y = e.offsetY
  } )
  
  
  canvas.addEventListener( "mouseup", (e) => {
    isPressed = false
    
    x=undefined
    y = undefined
  })
  canvas.addEventListener( "mousemove", (e) => {
  if(isPressed) {
          const x2 = e.offsetX
          const y2 = e.offsetY
          
          drawCircle(x2, y2)
          drawLine(x, y, x2, y2)
          
          x = x2
          y = y2
        }
      })
    }
    drawAll()
    
    function drawCircle ( x, y ) {
      ctx.beginPath();
      ctx.arc( x, y, size, 0, Math.PI * 2 )
      ctx.fillStyle = color
      ctx.fill()
    }
    
    function drawLine (x1,y1,x2,y2) {
      ctx.beginPath();
      ctx.moveTo( x1, y1 )
      ctx.lineTo( x2, y2 )
      ctx.strokeStyle = color
      ctx.lineWidth = size*2
      ctx.stroke()
    }

function updateSizeOnScreen () {
  sizeEL.innerText=size
}

increaseBtn.addEventListener( "click", ( e ) => {
  
  
  size += 5
  
  if ( size > 50 ) {
    size=50
  }
  updateSizeOnScreen();

} )

decreaseBtn.addEventListener( "click", (e) => {
  
 
  
  size -= 5
  
  if ( size < 5 ) {
    size=5
  }
  updateSizeOnScreen();
} )


eraserBtn.addEventListener( "click", ( e ) => {

  
  color = "white"

  drawAll()
    
})
colorEl.addEventListener( "change", ( e ) => color = e.target.value )
clearEl.addEventListener( 'click', () => ctx.clearRect( 0, 0, canvas.width, canvas.height ) )


toolbar.addEventListener( "click", ( e ) => {
  console.log(e.target)

  if ( e.target.innerText === "+" ) {
    increaseBtn.classList.add( "on" )
    
  } else {
    increaseBtn.classList.remove("on")

    
  }
  if ( e.target.innerText === "-" ) {
    decreaseBtn.classList.add( "on" )
    
  } else {
    decreaseBtn.classList.remove("on")

    
  }
  if ( e.target.classList.contains("eraser")|| e.target.classList.contains("fa-eraser")) {
    eraserBtn.classList.add( "on" )
    
  } else {
    eraserBtn.classList.remove("on")

    
  }
  if ( e.target.classList.contains("color") ) {
    colorEl.classList.add( "on" )
    
  } else {
    colorEl.classList.remove("on")

    
  }
  if ( e.target.classList.contains("clear") || e.target.classList.contains("fa-sharp") ) {
    clearEl.classList.add( "on" )
    
  } else {
    clearEl.classList.remove("on")

    
  }
 

} )
