function isPrime(number)
{

  if (number ===1)
  {
    return false;
  }
  else if(number === 2)
  {
    return true;
  }
  else
  {
    for(let x = 2; x < number; x++)
    {
      if(number % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

document.addEventListener("DOMContentLoaded", function() {
    let canvas = document.querySelector("#board");
    let ctx = canvas.getContext("2d");
    let number = 1;
    let x = 0;
    let y = 0;
    let check;
    let dim=5;
    let inter = setInterval(()=> {
      check = isPrime(number);
      if (check == false) {
          if (x == y) {
            ctx.fillStyle = "red";
          }
          else
          {
            number++;
            x+=dim;
            if (x == 600) {
              x=0
              y+=dim;
            }
          }
            
      }
      else {
          ctx.fillStyle = "lime";
          ctx.fillRect(x,y,dim,dim);
          number++;
          x+=dim;
          if (x == canvas.width) {
            x=0
            y+=dim;
          }
      }
      if (y == canvas.height) {
        clearInterval(inter);
        console.log("done");
      }
        
  }, 5);
})
