var h1 = document.querySelector('h1')
h1.style.color = 'black';

var inc = document.getElementById('inc');
var des = document.getElementById('des');
var btn = document.querySelectorAll('button');
var count = 0;
var h2 = document.querySelector('h2');


inc.addEventListener('click', function(){
    count++;
    h2.innerHTML = count;
});

des.addEventListener('click', function(){
    count--;
    h2.innerHTML = count;
});

