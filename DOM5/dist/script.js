let img = document.querySelector('img')
let love = document.querySelector('#love')

img.addEventListener('dblclick', function() {

    love.style.opacity = 1
    love.style.transform = 'scale(1) rotate(0deg)'
    setTimeout(function(){
        love.style.transform = 'translate(-0%,-300%) scale(1) rotate(60deg)'
        
    },600)
    setTimeout(function(){
        love.style.opacity = 0
        

    },800)
    setTimeout(function(){
        love.style.transform = ' scale(1) rotate(-60deg)'

    },1000)
})
