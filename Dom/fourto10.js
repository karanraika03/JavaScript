//4
const hoverDiv = document.getElementById("hoverDiv");
hoverDiv.addEventListener("mouseover", () => {
    hoverDiv.innerText = "You are hovering over me 😄";
    hoverDiv.style.background = "#bbf7d0";
});
hoverDiv.addEventListener("mouseout", () => {
    hoverDiv.innerText = "Hover over me!";
    hoverDiv.style.background = "#e0f2fe";
});

//5
const students = document.querySelectorAll("#students p");
students.forEach(stu => {
    const marks = parseInt(stu.innerText.split("-")[1]);
    if (marks >= 80) stu.style.background = "#86efac";  
    else if (marks >= 50) stu.style.background = "#fde68a"; 
    else stu.style.background = "#fca5a5"; 
});

//6
let count = 0;
function increase() {
    count++;
    document.getElementById("counterValue").innerText = count;
}
function decrease() {
    count--;
    document.getElementById("counterValue").innerText = count;
}

//7
function displayText() {
    const value = document.getElementById("userInput").value;
    document.getElementById("displayPara").innerText = value;
}

//8
let fontSize = 18;
function increaseFont() {
    fontSize += 2;
    document.getElementById("fontPara").style.fontSize = fontSize + "px";
}
function decreaseFont() {
    fontSize -= 2;
    document.getElementById("fontPara").style.fontSize = fontSize + "px";
}

//9
function changeHeadingColor() {
    const colors = ["green", "blue", "red", "orange", "purple"];
    const random = Math.floor(Math.random() * colors.length);
    document.getElementById("heading").style.color = colors[random];
}

//10
const items = document.querySelectorAll("#itemList li");
items.forEach(li => {
    li.addEventListener("click", () => {
        items.forEach(item => item.style.background = ""); 
        li.style.background = "#93c5fd"; 
    });
});