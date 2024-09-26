
// let bannerSelection = document.getElementById('banner');

// if(bannerSelection){
//     console.log(bannerSelection);
// }


// let image = document.getElementById('unicorn');
// let heading = document.getElementById('mainheading');


// console.log(image)
// console.log(heading)

// let doneTodos = document.querySelectorAll('.done');

// let checkbox = document.querySelector("input[type='checkbox']");


// console.log(doneTodos)
// console.log(checkbox)

// let myTextVar = document.querySelector('a');
//myTextVar.innerText = 'cucu vamos manipular coisas';
//myTextVar.innerHTML = 'cucu vamos manipular coisas e trocar elementos';

// myTextVar.href = 'www.cesaedigital.pt';

// let myVar = document.querySelector('span');
// myVar.innerText = 'yackk';


// function changeImage(){
//     let myImage = document.querySelector('img');

//     if(myImage.src == 'https://devsprouthosting.com/images/chicken.jpg'){
//         myImage.setAttribute('src', 'https://devsprouthosting.com/images/egg.jpg');
//     }else{
//         myImage.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
//     }
// }

// let myContainer = document.getElementById('container');
// myContainer.style.textAlign = 'center';

// let myImage = document.querySelector('img');
// myImage.style.width = '150px';
// myImage.style.borderRadius = '50%';

//pp25DOM
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// let spans = document.querySelectorAll('span');
// console.log(spans);

// for(let i=0;  i<spans.length; i++){
//     spans[i].style.color = colors[i];
// }

//pp27
// let lis = document.querySelectorAll('li');
//console.log(list);
// for(element of lis){
//     if( element.classList.contains('highlight')){
//         element.classList.remove('highlight');
//     }else{
//         element.classList.add('highlight');
//     }
// }

// let myliTest = document.querySelector('.toclevel-1');
// console.log(myliTest.children)

//pp32



for(let i=0; i<100; i++){
    const myBtn = document.createElement('button');
    const myDiv = document.querySelector('#container');
    
    myBtn.innerText = 'Sou um Botão';
    
    myDiv.appendChild(myBtn);
}
