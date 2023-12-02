var imagesCard1 = [
    "https://cannonkeys.com/cdn/shop/products/88.jpg?v=1699889055",
    "https://geekboards.de/web/image/product.image/3895/image_1920?unique=d49ab93"
];
var currentIndexCard1 = 0;

function displayImageCard1(direction) {
    currentIndexCard1 += direction;

    if (currentIndexCard1 < 0) {
        currentIndexCard1 = imagesCard1.length - 1;
    } else if (currentIndexCard1 >= imagesCard1.length) {
        currentIndexCard1 = 0;
    }

    document.getElementById("imgCard1").src = imagesCard1[currentIndexCard1];
}

function openPopupCard1() {
    document.getElementById("popupOverlay-1").classList.remove('hidden');
    currentIndexCard1 = 0;
    document.getElementById("imgCard1").src = imagesCard1[currentIndexCard1];
}

function closePopupCard1() {
    document.getElementById("popupOverlay-1").classList.add('hidden');
}

var imagesCard2 = [
    "https://en.zfrontier.com/cdn/shop/products/WasabiPetrichor2_d584ad4e-47c8-4250-83f9-f88b29eab730.jpg?v=1674027235&width=1920",
    "https://spaceholdings.net/cdn/shop/files/GMK-Wasabi-V2-Keycaps-Mechanical-Keyboard-14.jpg?v=1691516210"
];
var currentIndexCard2 = 0;

function displayImageCard2(direction) {
    currentIndexCard2 += direction;

    if (currentIndexCard2 < 0) {
        currentIndexCard2 = imagesCard2.length - 2;
    } else if (currentIndexCard2 >= imagesCard2.length) {
        currentIndexCard2 = 0;
    }

    document.getElementById("imgCard2").src = imagesCard2[currentIndexCard2];
}

function openPopupCard2() {
    document.getElementById("popupOverlay-2").classList.remove('hidden');
    currentIndexCard2 = 0;
    document.getElementById("imgCard2").src = imagesCard2[currentIndexCard2];
}

function closePopupCard2() {
    document.getElementById("popupOverlay-2").classList.add('hidden');
}

var imagesCard3 = [
    "https://en.zfrontier.com/cdn/shop/products/WasabiPetrichor3_5f1ea283-8489-4cc0-a3be-fd9af4f8b04e.jpg?v=1674027235&width=2048",
    "https://i0.wp.com/cdn.mos.cms.futurecdn.net/jYV6zQZqvLyVLmMBnmVBMZ.jpg?ssl=1"
];
var currentIndexCard3 = 0;

function displayImageCard3(direction) {
    currentIndexCard3 += direction;

    if (currentIndexCard3 < 0) {
        currentIndexCard3 = imagesCard3.length - 3;
    } else if (currentIndexCard3 >= imagesCard3.length) {
        currentIndexCard3 = 0;
    }

    document.getElementById("imgCard3").src = imagesCard3[currentIndexCard3];
}

function openPopupCard3() {
    document.getElementById("popupOverlay-3").classList.remove('hidden');
    currentIndexCard3 = 0;
    document.getElementById("imgCard3").src = imagesCard3[currentIndexCard3];
}

function closePopupCard3() {
    document.getElementById("popupOverlay-3").classList.add('hidden');
}

var imagesCard4 = [
    "https://cdn.mos.cms.futurecdn.net/roX3vMtGKVojAPERHL6UAY.jpeg",
    "https://cdn.mos.cms.futurecdn.net/AWjsWukNZDteWaCvCR6SDQ.jpg"
];
var currentIndexCard4 = 0;

function displayImageCard4(direction) {
    currentIndexCard4 += direction;

    if (currentIndexCard4 < 0) {
        currentIndexCard4 = imagesCard4.length - 4;
    } else if (currentIndexCard4 >= imagesCard4.length) {
        currentIndexCard4 = 0;
    }

    document.getElementById("imgCard4").src = imagesCard4[currentIndexCard4];
}

function openPopupCard4() {
    document.getElementById("popupOverlay-4").classList.remove('hidden');
    currentIndexCard4 = 0;
    document.getElementById("imgCard4").src = imagesCard4[currentIndexCard4];
}

function closePopupCard4() {
    document.getElementById("popupOverlay-4").classList.add('hidden');
}

var imagesCard5 = [
    "https://meletrix.com/cdn/shop/files/4_3faf8410-ce37-428a-9577-95db5c14d1e2.jpg?v=1689946983&width=2048",
    "https://cannonkeys.com/cdn/shop/products/222.jpg?v=1699889055"
];
var currentIndexCard5 = 0;

function displayImageCard5(direction) {
    currentIndexCard5 += direction;

    if (currentIndexCard5 < 0) {
        currentIndexCard5 = imagesCard5.length - 5;
    } else if (currentIndexCard5 >= imagesCard5.length) {
        currentIndexCard5 = 0;
    }

    document.getElementById("imgCard5").src = imagesCard5[currentIndexCard5];
}

function openPopupCard5() {
    document.getElementById("popupOverlay-5").classList.remove('hidden');
    currentIndexCard5 = 0;
    document.getElementById("imgCard5").src = imagesCard5[currentIndexCard5];
}

function closePopupCard5() {
    document.getElementById("popupOverlay-5").classList.add('hidden');
}


var imagesCard6 = [
    "https://dangkeebs.com/cdn/shop/files/DSC03395.jpg?v=1690087004&width=1946",
    "https://dangkeebs.com/cdn/shop/files/DSC03412_9ba18c22-1b1b-4c2a-a98b-7fd9f98aed20.jpg?v=1692570778&width=1946"
];
var currentIndexCard6 = 0;

function displayImageCard6(direction) {
    currentIndexCard6 += direction;

    if (currentIndexCard6 < 0) {
        currentIndexCard6 = imagesCard6.length - 6;
    } else if (currentIndexCard6 >= imagesCard6.length) {
        currentIndexCard6 = 0;
    }

    document.getElementById("imgCard6").src = imagesCard6[currentIndexCard6];
}

function openPopupCard6() {
    document.getElementById("popupOverlay-6").classList.remove('hidden');
    currentIndexCard6 = 0;
    document.getElementById("imgCard6").src = imagesCard6[currentIndexCard6];
}

function closePopupCard6() {
    document.getElementById("popupOverlay-6").classList.add('hidden');
}


var imagesCard7 = [
    "https://www.tech-critter.com/wp-content/uploads/2021/10/1STPLAYER-LANG-MK980-09.png",
    "https://fancycustoms.com/cdn/shop/products/4_f94de244-0f5b-44e9-88de-0e17b20aa356.jpg?v=1681247001"
];
var currentIndexCard7 = 0;

function displayImageCard7(direction) {
    currentIndexCard7 += direction;

    if (currentIndexCard7 < 0) {
        currentIndexCard7 = imagesCard7.length - 7;
    } else if (currentIndexCard7 >= imagesCard7.length) {
        currentIndexCard7 = 0;
    }

    document.getElementById("imgCard7").src = imagesCard7[currentIndexCard7];
}

function openPopupCard7() {
    document.getElementById("popupOverlay-7").classList.remove('hidden');
    currentIndexCard7 = 0;
    document.getElementById("imgCard7").src = imagesCard7[currentIndexCard7];
}

function closePopupCard7() {
    document.getElementById("popupOverlay-7").classList.add('hidden');
}

var imagesCard8 = [
    "https://cannonkeys.com/cdn/shop/products/2_1.jpg?v=1699889055",
    "https://en.zfrontier.com/cdn/shop/products/GMKHAKU-Fuji65_4.webp?v=1672830962&width=1920"
];
var currentIndexCard8 = 0;

function displayImageCard8(direction) {
    currentIndexCard8 += direction;

    if (currentIndexCard8 < 0) {
        currentIndexCard8 = imagesCard8.length - 8;
    } else if (currentIndexCard8 >= imagesCard8.length) {
        currentIndexCard8 = 0;
    }

    document.getElementById("imgCard8").src = imagesCard8[currentIndexCard8];
}

function openPopupCard8() {
    document.getElementById("popupOverlay-8").classList.remove('hidden');
    currentIndexCard8 = 0;
    document.getElementById("imgCard8").src = imagesCard8[currentIndexCard8];
}

function closePopupCard8() {
    document.getElementById("popupOverlay-8").classList.add('hidden');
}


var imagesCard9 = [
    "https://cdn.mos.cms.futurecdn.net/RjmD8ewfJgAp6WuBZtdCtJ.jpg",
    "https://media.sketchfab.com/models/6de394853eca459689f2ef043367a22a/thumbnails/9ad0a12bc4be440a8df075f90df677fa/f775a5a8707f4e8f9c62809a00c20194.jpeg"
];
var currentIndexCard9 = 0;

function displayImageCard9(direction) {
    currentIndexCard9 += direction;

    if (currentIndexCard9 < 0) {
        currentIndexCard9 = imagesCard9.length - 9;
    } else if (currentIndexCard9 >= imagesCard9.length) {
        currentIndexCard9 = 0;
    }

    document.getElementById("imgCard9").src = imagesCard9[currentIndexCard9];
}

function openPopupCard9() {
    document.getElementById("popupOverlay-9").classList.remove('hidden');
    currentIndexCard9 = 0;
    document.getElementById("imgCard9").src = imagesCard9[currentIndexCard9];
}

function closePopupCard9() {
    document.getElementById("popupOverlay-9").classList.add('hidden');
}



