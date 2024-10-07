let myBtn = document.getElementById('myBtn');
let btnHello = document.getElementById('hello');
let btnGoodbye = document.getElementById('goodbye');
let changeColor = document.getElementById('change-color');
let newColor = document.getElementById('new-color');

let login = true;

function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

function hello(message){
    alert(message)
}

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

btnGoodbye.addEventListener('mouseover', ()=>{
    hello('goodbye')
});

btnHello.addEventListener('mouseover', ()=>{
    hello('hello')
});

changeColor.addEventListener('click', 
    function(){
        let myBg = document.querySelector('#container');
        let myGeneratedColor = 'rgb('+getRandomInt()+','+getRandomInt()+','+getRandomInt()+')'
        myBg.style.backgroundColor = myGeneratedColor;
        newColor.innerText = myGeneratedColor;


    }
)



