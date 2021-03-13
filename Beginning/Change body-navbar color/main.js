const body = document.querySelector('body')
const navbr = document.getElementById('navID')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

navButtons.style.color = 'green'

function changeBackground(){
    const colorIndex= parseInt(Math.random()*colors.length)
    navbr.style.backgroundColor = colors[colorIndex]
    const text = navbr.style.backgroundColor
    body.style.backgroundColor = colors[colorIndex-1]
    if(body.style.backgroundColor==text){
        document.getElementById('demo').innerHTML = "Navbar and Body colors are same!"
    }
     else document.getElementById('demo').innerHTML = "Navbar Color is "+ text + "<br>"+ 
   " Body Color is " + body.style.backgroundColor; 
}

