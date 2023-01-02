$(document).ready(function () {
    $('#toggle').click(function () {
        $('.navbar').slideToggle()
    })
})

function grow(w) {
    if (w > 580)
        document.getElementById('navbar').style.display = 'flex'
    else {
        document.getElementById('navbar').style.display = 'none'
    }
}

let w = document.getElementById('website').clientWidth
grow(w)
$(document).ready(function () {
    $(window).resize(function () {
        w = document.getElementById('website').clientWidth
        grow(w)
        tele(w)
    })
})

let add = document.getElementsByClassName('add')
let storage = []
for (let i = 0; i < add.length; i++)
    storage[i] = add[i].innerHTML
function tele(w) {
    for (let i = 0; i < add.length; i++) {
        if (w <= 580)
            add[i].innerHTML = 'Số lượng: ' + storage[i] + ' sản phẩm'
        else
            add[i].innerHTML = storage[i];
    }
}
tele(w)

var buocnhay = 0;
var arr = [
    'Anh/c3.png',
    'Anh/c2.png',
    'Anh/c1.png',
    'Anh/c4.jpg',
    'Anh/c5.jpg',
    'Anh/c6.jpg',
];


function prev() {
    document.getElementById('t').src = arr[buocnhay];
    buocnhay--;
    if (buocnhay < 0) {
        buocnhay = 5;
    }
}


function next() {
    document.getElementById('t').src = arr[buocnhay];
    buocnhay++;
    if (buocnhay == arr.length) {
        buocnhay = 0;
    }
}

function slideshow() {
    document.getElementById('t').src = arr[buocnhay];
    buocnhay++;
    if (buocnhay == arr.length) {
        buocnhay = 0;
    }
    setTimeout("slideshow()", 2000);
}
slideshow();

function myfunction() {
    var fullImg = document.getElementById("imgBox");
    fullImg.src = '/NongNghiep-main/Anh/riceJS.png'

}
function myfunction1() {
    var fullImg = document.getElementById("imgBox");
    fullImg.src = '/NongNghiep-main/Anh/appleJS.png'
}
function myfunction2() {
    var fullImg = document.getElementById("imgBox");
    fullImg.src = '/NongNghiep-main/Anh/tomatoJS.png'
}