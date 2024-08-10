let paragraph = document.getElementById("para");

let text = paragraph.innerText;

let words = text.split(' ');

let htext = words.map(word => {

    let textcleaning = word.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '');

    if(textcleaning.length>8)
    {
        return `<span class = "bgcyellow">${word}</span>`;
    }
    else{
        return word;
    }
}).join(' ');

paragraph.innerHTML = htext;


