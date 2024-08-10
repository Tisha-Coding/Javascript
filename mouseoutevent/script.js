const colorBox = document.getElementById('colorBox');
let interval;

const changeColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorBox.style.backgroundColor = randomColor;
};

const startChangingColor = () => {
    interval = setInterval(changeColor, 1000);
};

colorBox.addEventListener('mouseover', () => {
    clearInterval(interval);
});

colorBox.addEventListener('mouseout', startChangingColor);

startChangingColor();