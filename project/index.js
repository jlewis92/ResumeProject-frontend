var footerContainer = document.querySelector(".footer-counter");

fetch('https://hwce96n5ve.execute-api.eu-west-2.amazonaws.com/prod/visitor', {
    method: "POST"
})
.then((response) => response.text())
.then((text) => {
    footerContainer.innerHTML = text.replaceAll('"', '');
});
