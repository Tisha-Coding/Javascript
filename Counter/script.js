let decrement = document.getElementById('decrement');
let increment = document.getElementById('increment');
let reset = document.getElementById('reset');
let counter = document.getElementById('counter');

let count = 0;

function updatecounter()
{
    counter.textContent = count;
}

increment.addEventListener('click',() =>
{
    count++;
    updatecounter();
})

decrement.addEventListener('click',() =>
{
    count--;
    updatecounter();
})

reset.addEventListener('click',() =>
{
    count = 0;
    updatecounter();
});


