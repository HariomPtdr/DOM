 
// const main = document.querySelector('main')
// const btn = document.querySelector('button')
// btn.addEventListener('click', ()=>{
//     const h1 = document.createElement('h1')
//     const x = Math.random()*100
//     const y = Math.random()*100
//     const r = Math.random()*100
//     const c1  = Math.floor(Math.random()*256)
//     const c2  = Math.floor(Math.random()*256)
//     const c3  = Math.floor(Math.random()*256)
//     h1.style.height = '50px'
//     h1.style.width = '50px'
//     h1.style.position = "absolute"
//     h1.style.backgroundColor = `rgb(${c1},${c2},${c3})`
//     h1.style.left = x+'%'
//     h1.style.top = y+'%'
//     h1.style.rotate = r+'deg'

//     main.appendChild(h1)
// })

const main = document.querySelector('main')
const btn = document.querySelector('button')

const arr = ['Hey I am Hariom ','Sheriyans is the best ', 'Learning Js with Sarthak Bhaiya','random quote generater ', 'Harsh Bhaiya ki jai', 'Js is love']
btn.addEventListener('click', function(){

    
    const a = Math.floor(Math.random()*arr.length)

    const h1 = document.createElement('h1')
    const x = Math.random()*80
    const y = Math.random()*80
    const scl = Math.random()*3
    const r = Math.random()*360

    h1.innerHTML = arr[a]

    h1.style.position = "absolute"
    h1.style.left = x+'%'
    h1.style.top = y+'%'
    h1.style.color = 'white'
    h1.style.rotate = r+'deg'
    h1.style.scale = scl


    main.appendChild(h1)
    
})