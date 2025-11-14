var btn = document.querySelector('button');
var circle = document.querySelector('#circle');

btn.addEventListener('click', function () {
    if (btn.innerText === 'OFF') {
        circle.style.backgroundColor = 'black';
        btn.innerText = 'ON';
    } else {
        circle.style.backgroundColor = 'gold'; 
        btn.innerText = 'OFF';
    }
});
