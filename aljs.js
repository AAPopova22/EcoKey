function openPopup(popupId) {
    var popupOverlay = document.getElementById("popupOverlay-" + popupId);
    var popup = document.getElementById("popup-" + popupId);
    popupOverlay.classList.toggle("hidden");
    popupOverlay.classList.toggle("visible");
    popup.classList.toggle("hidden");
    popup.classList.toggle("visible");
}

function closePopup(popupId) {
    var popupOverlay = document.getElementById("popupOverlay-" + popupId);
    var popup = document.getElementById("popup-" + popupId);
    popupOverlay.classList.add("hidden");
    popupOverlay.classList.remove("visible");
    popup.classList.add("hidden");
    popup.classList.remove("visible");
}