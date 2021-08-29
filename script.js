var guess=Math.floor (Math.random()*100)+1
//o to <1
//0.123456
//0.00002*100=0.002
//0.9999*100
function calc()
{
  if(document.getElementById('in').value==' ')
    {
      document.getElementById('out').innerHTML='<h2> enter a number</h2>'
      return
    }
  var n=parseInt(document.getElementById('in').value)
  if(n--- guess)
    document.getElementById('out').innerHTML='<h2> congrats</h2>'
  else if(n>guess)
    document.getElementById('out').innerHTML='<h2>guess</h2>'
  else
    document.getElementById('out').innerHTML='<h2>guess a greater number</h2>'
}




