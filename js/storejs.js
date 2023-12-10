function displayImage(images, currentIndex, direction, imgElementId) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    document.getElementById(imgElementId).src = images[currentIndex];
    return currentIndex;
}

var imagesCard1 = [
    "/images/imgstore2.jpg",
    "/images/imgstore3.jpg"
];
var currentIndexCard1 = 0;

function displayImageCard1(direction) {
    currentIndexCard1 = displayImage(imagesCard1, currentIndexCard1, direction, "imgCard1");
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
    "/images/imgstore5.jpg",
    "/images/imgstore6.jpg"
];
var currentIndexCard2 = 0;

function displayImageCard2(direction) {
    currentIndexCard2 = displayImage(imagesCard2, currentIndexCard2, direction, "imgCard2");
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
    "/images/imgstore8.jpg",
    "/images/imgstore9.jpg"
];
var currentIndexCard3 = 0;

function displayImageCard3(direction) {
    currentIndexCard3 = displayImage(imagesCard3, currentIndexCard3, direction, "imgCard3");
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
    "/images/cropped-eco3.png",
    "/images/cropped-eco4.png"
];
var currentIndexCard4 = 0;

function displayImageCard4(direction) {
    currentIndexCard4 = displayImage(imagesCard4, currentIndexCard4, direction, "imgCard4");
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
    "/images/imgstore11.jpg",
    "/images/imgstore12.jpg"
];
var currentIndexCard5 = 0;

function displayImageCard5(direction) {
    currentIndexCard5 = displayImage(imagesCard5, currentIndexCard5, direction, "imgCard5");
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
    "/images/cropped-cropped-christmas2.png",
    "/images/cropped-cropped-S168f07eee12d4f008b331c62cfd084b6j.png"
];
var currentIndexCard6 = 0;

function displayImageCard6(direction) {
    currentIndexCard6 = displayImage(imagesCard6, currentIndexCard6, direction, "imgCard6");
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
    "/images/cropped-cropped-minina2.png",
    "/images/cropped-cropped-minina1.png"
];
var currentIndexCard7 = 0;

function displayImageCard7(direction) {
    currentIndexCard7 = displayImage(imagesCard7, currentIndexCard7, direction, "imgCard7");
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
    "/images/cropped-cropped-oceanic1.png",
    "/images/cropped-cropped-oceanic2.png"
];
var currentIndexCard8 = 0;

function displayImageCard8(direction) {
    currentIndexCard8 = displayImage(imagesCard8, currentIndexCard8, direction, "imgCard8");
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
    "/images/imgstore14.jpg",
    "/images/imgstore15.jpg"
];
var currentIndexCard9 = 0;

function displayImageCard9(direction) {
    currentIndexCard9 = displayImage(imagesCard9, currentIndexCard9, direction, "imgCard9");
}

function openPopupCard9() {
    document.getElementById("popupOverlay-9").classList.remove('hidden');
    currentIndexCard9 = 0;
    document.getElementById("imgCard9").src = imagesCard9[currentIndexCard9];
}

function closePopupCard9() {
    document.getElementById("popupOverlay-9").classList.add('hidden');
}
