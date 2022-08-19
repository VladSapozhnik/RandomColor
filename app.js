let h1 = document.querySelectorAll('.h1 span');

//random color
function randomColor(min = 0, max = 255) {
    let rand = 0;
    let rgb = [0, 0, 0];

    for (let key in rgb) {
        rand = Math.floor(min + Math.random() * (max + 1 - min));
        rgb[key] = rand;
    }

    return rgb.join();
}

function textColor() {
    h1.forEach(element => {
        element.style.color = `rgb(${randomColor()})`;
    });
}

let subtitle = document.querySelector('.subtitle');

function test(element) {
    let text = element.textContent.toUpperCase();
    for (let key in text) {
        element.innerHTML = element.innerHTML.replace(text[key], `<span style="color: rgb(${randomColor()})";">${text[key]}</span>`);
    };
}

document.querySelector('.h1').addEventListener('click', function () {
    setInterval(textColor, 1000);
    // setInterval(() => {
    //     textColor()
    //     test(subtitle)
    // }, 1000);
    // document.querySelector('.subtitle').classList.add('active');
});




