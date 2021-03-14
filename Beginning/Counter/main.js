var count = 0;

document.getElementById('demo').innerHTML = count;

const lbut = document.querySelector('#lower')
const abut = document.querySelector('#add')


lbut.addEventListener('click', function() {
    count--;
    document.getElementById('demo').innerHTML = count;
    
});

abut.addEventListener('click', function() {
    count++;
    document.getElementById('demo').innerHTML = count;
});


