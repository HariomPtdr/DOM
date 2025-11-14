var arr = [{
    team : 'CSK',
    primaryColor : 'yellow',
    secondaryColor : 'blue',
    fullName : 'Chennai Super Kings',
    captian : 'MS Dhoni',
    titels : '5 Titels',
    background1 : 'url(https://i.pinimg.com/736x/1c/72/ba/1c72ba450110575fb8c700b9bd7f44b2.jpg)',
    background2 : 'url(https://i.pinimg.com/1200x/97/fe/de/97fedecb5fb9ec759aea69e593b571d0.jpg)'

},
{
    team : 'MI',
    primaryColor : 'blue',
    secondaryColor : 'gold',
    fullName : 'Mumbai Indians',
    captian : 'Hardik Pandya',
    titels : '5 Titels',
    background1 : 'url(https://i.pinimg.com/736x/85/cc/6c/85cc6c7f4d052852a3243b0e30028590.jpg)',
    background2 : 'url(https://i.pinimg.com/1200x/56/85/2f/56852f5efcddb448087207e5b2d8e6ed.jpg)'
},
{
    team : 'KKR',
    primaryColor : 'purple',
    secondaryColor : 'gold',
    fullName : 'Kolkata Knight Riders',
    captian : 'Ajinkya Rahane',
    titels : '3 Titels',
    background1 : 'url(https://i.pinimg.com/1200x/1b/72/19/1b72196133e6f5e946e94de03d1f34bc.jpg)',
    background2 : 'url(https://i.pinimg.com/736x/8c/b6/24/8cb6248235daaf03f585e0b80e1c9257.jpg)'
},
{
    team : 'SRH',
    primaryColor : 'orange',
    secondaryColor : 'black',
    fullName : 'Sunrisers Hyderabad',
    captian : 'Pat Cummins',
    titels : '1 Titels',
    background1 : 'url(https://i.pinimg.com/736x/dd/f4/8a/ddf48af7e7957a4e192a714d2a27131f.jpg)',
    background2 : 'url(https://i.pinimg.com/736x/38/a5/5f/38a55f8497a9b5f43404cd6888b343b3.jpg)'
},
{
    team : 'RCB',
    primaryColor : 'red',
    secondaryColor : 'black',
    fullName : 'Royal Challengers Bengaluru',
    captian : 'Rajat Patidar',
    titels : '1 Titels',
    background1 : 'url(https://i.pinimg.com/736x/dc/f2/b2/dcf2b29dbecb45ca55f20ea94c8edcef.jpg)',
    background2 : 'url(https://i.pinimg.com/736x/e3/e7/0d/e3e70d7986bba72532a2903c39eda516.jpg)'
},
{
    team : 'DC',
    primaryColor : 'blue',
    secondaryColor : 'red',
    fullName : 'Delhi Capitals',
    captian : 'Axar Patel',
    titels : '0 Titels',
    background1 : 'url(https://i.pinimg.com/736x/9a/2b/84/9a2b84a7f7bb32c454045715b1a3a2b7.jpg)',
    background2 : 'url(https://i.pinimg.com/736x/6b/d6/db/6bd6db027a3327c61967b3315d756625.jpg)'
},
{
    team : 'RR',
    primaryColor : 'blue',
    secondaryColor : 'gold',
    fullName : 'Rajasthan Royals',
    captian : 'Sanju Samson',
    titels : '1 Titels',
    background1 : 'url(https://i.pinimg.com/1200x/bc/26/de/bc26dea4ac81c65d038fa352d363e3cc.jpg)',
    background2 : 'url(https://i.pinimg.com/1200x/39/71/eb/3971ebe0e49baf47acd1c3fe1e61e2ec.jpg)'
},
{
    team : 'PBKS',
    primaryColor : 'red',
    secondaryColor : 'gray',
    fullName : 'Punjab Kings',
    captian : 'Shreyas Iyer',
    titels : '0 Titels',
    background1 : 'url(https://i.pinimg.com/1200x/6a/90/75/6a9075c90746ca7d0f9de928546ef285.jpg)',
    background2 :'url(https://i.pinimg.com/1200x/be/d5/17/bed5170ea5b4d377811f45fdbcdc46a5.jpg)'
},
{
    team : 'LSG',
    primaryColor : 'blue',
    secondaryColor : 'orange',
    fullName : 'Lucknow Super Giants',
    captian : 'Rishabh Pant',
    titels : '0 Titels',
    background1 : 'url(https://i.pinimg.com/736x/8c/84/c3/8c84c3eb01f4d5b34957e37f12f103ef.jpg)',
    background2 : 'url(https://i.pinimg.com/1200x/0f/8a/74/0f8a746a5568aed23eaab27b4c363688.jpg)'

},
{
    team : 'GT',
    primaryColor : 'teal',
    secondaryColor : 'yellow',
    fullName : 'Gujarat Titans',
    captian : 'Shubman Gill',
    titels : '1 Titels',
    background1 : 'url(https://i.pinimg.com/1200x/58/02/8f/58028f9b9f76cd7cd1dbd16e4706fe4c.jpg)',
    background2 : 'url(https://i.pinimg.com/736x/20/11/49/2011491109c16ffb98930b19328d86ff.jpg)'
},
]
var body = document.querySelector('body') 
var main = document.querySelector('main')
var btn = document.querySelector('button')
var h1 = document.querySelector('#h1')
var h2 = document.querySelector('#h2')
var h3 = document.querySelector('#h3')
var h4 = document.querySelector('#h4')
btn.addEventListener('click',function(){

var winner = arr[Math.floor(Math.random()*arr.length)]

h1.innerHTML = winner.team
main.style.backgroundImage = winner.background1
body.style.backgroundImage = winner.background2
h1.style.color = winner.primaryColor 
h2.style.color = winner.primaryColor
h3.style.color = winner.primaryColor 
h4.style.color = winner.primaryColor
btn.style.color = winner.secondaryColor
h2.innerHTML = winner.fullName
h3.innerHTML = winner.titels
h4.innerHTML = winner.captian
})


