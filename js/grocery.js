let list = document.getElementById('list');
let form = document.querySelector('form');
let item = document.getElementById('item');
let qt = document.getElementById('qt');

form.addEventListener('submit', function(e){
    e.preventDefault();

    let myLi = document.createElement('li');
    myLi.innerText = qt.value + ' - '+ item.value;
    list.appendChild(myLi);
    qt.value = '';
    item.value = '';
});

item.addEventListener('input', function(){
    console.log(item.value);
})