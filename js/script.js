
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


function changeImage(){
    let myImage = document.querySelector('img');

    if(myImage.src == 'https://devsprouthosting.com/images/chicken.jpg'){
        myImage.setAttribute('src', 'https://devsprouthosting.com/images/egg.jpg');
    }else{
        myImage.setAttribute('src', 'https://devsprouthosting.com/images/chicken.jpg');
    }
}