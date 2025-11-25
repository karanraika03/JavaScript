
let lastTds = document.querySelectorAll("tr > td:last-child");
console.log(`${lastTds}`);

for (const element of lastTds) {
    console.log(+(element.innerHTML));

    if (+(element.innerHTML) > 300000) {
        element.style.backgroundColor = 'orange';
        element.style.color = 'white';
    }
    else if (+(element.innerHTML) > 100000) {
        element.style.backgroundColor = 'green';
        element.style.color = 'white';
    }
    else {
        element.style.backgroundColor = 'red';
        element.style.color = 'white';
    }
}

