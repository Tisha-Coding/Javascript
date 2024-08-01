let a = [10,15,30,45,50];

let b = [];

for(let i=0; i< a.length; i++)
{
    if(a[i] % 2 == 0)
        continue;

    if(a[i]%3==0)
    {
        b.push(a[i]);
    }
}

console.log(b);