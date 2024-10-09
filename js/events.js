

// let login = true;



// function hello(message){
//     alert(message)
// }

// function hello(){


//     alert('cucu');
//     login = false;
  
// }

// function goodbye(){
//     alert('goodbye');
  
// }

// myBtn.addEventListener('click', hello);
// myBtn.addEventListener('click', goodbye);



// myBtn.addEventListener('click', function(){

//     login ? hello() : goodbye();

//     // if(login){
//     //     hello();
//     // }else{
//     //     goodbye()
//     // }

// });

// btnGoodbye.addEventListener('mouseover', ()=>{
//     hello('goodbye')
// });

// btnHello.addEventListener('mouseover', ()=>{
//     hello('hello')
// });
// let myBtn = document.getElementById('myBtn');
let btnHello = document.getElementById('hello');
let btnGoodbye = document.getElementById('goodbye');
let changeColor = document.getElementById('change-color');
let newColor = document.getElementById('new-color');
let myBg = document.querySelector('#container');

function changeColorF(){
    this.style.backgroundColor = generateColor();
}

function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

function generateColor(){
    let myGeneratedColor = 'rgb('+getRandomInt()+','+getRandomInt()+','+getRandomInt()+')'
    return myGeneratedColor;
}


// // btnHello.addEventListener('click', )

btnHello.addEventListener('click', changeColorF);
myBg.addEventListener('click', changeColorF);
btnGoodbye.addEventListener('click', changeColorF);
changeColor.addEventListener('click', changeColorF);

window.addEventListener('keydown', function(event){
    console.log(event.code);
});
