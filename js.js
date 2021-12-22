let contentElem = document.querySelector('.content')
let btnElem = document.querySelector('#btn')
function mouseMoveHandler () {
    console.log('mouse move');
}
function removeHandler () {
    contentElem.removeEventListener('mousemove',mouseMoveHandler)
    console.log('remove mouse move')
}



contentElem.addEventListener('mousemove',mouseMoveHandler)
btnElem.addEventListener('click',removeHandler)