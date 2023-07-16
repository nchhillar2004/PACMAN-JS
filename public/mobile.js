const okay = document.getElementById("okayButton");
const cancel = document.getElementById("cancelButton");
const card = document.getElementById("mobile-main");

function myOkay() {
    window.close();
}

function myCancel() {
    card.style.cssText = 'display : none';
}