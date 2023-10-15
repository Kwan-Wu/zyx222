//document.querySelectorAll('.s_button')[1].onclick = () => {
//    let lists = document.querySelectorAll('.item');
//   document.querySelector('#slide').appendChild(lists[0]);
//}
//document.querySelectorAll('.s_button')[0].onclick = () => {
//    let lists = document.querySelectorAll('item');
//    document.querySelector('#slide').prepend(lists[lists.length-1]);
//}

let _direction = true;
let _move = () => {
    let lists = document.querySelectorAll('.item');
    if (_direction) {
        document.querySelector('#slide').appendChild(lists[0]);
    }else{
        document.querySelector('#slide').prepend(lists[lists.length-1]);
    }
}

let timer = setInterval(_move, 1500);
document.querySelector('.box').addEventListener('mouseover', () => {
    clearInterval(timer);
});
document.querySelector('.box').addEventListener('mouseout', () => {
    timer = setInterval(_move, 1500);
});

document.querySelectorAll('.s_button')[1].onclick = () => {
    _direction = true;
   _move();
}
document.querySelectorAll('.s_button')[0].onclick = () => {
    _direction = false;
    _move();
}