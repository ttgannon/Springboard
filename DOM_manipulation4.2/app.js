/* First */

const container = document.getElementById("container");

/* Second */

const container2 = document.querySelector("#container");

/* Third */

const second = document.getElementsByClassName("second");

/* Fourth */
const third = document.querySelector("ol");
const third1 = third.lastElementChild;

/* Fifth 
const hello = document.querySelector('#container');
hello.innerText = "Hello!"; */

/* Sixth */
let footer = document.querySelector('.footer');
footer.classList.add("main");


/* Seventh */
footer.classList.remove("main");


/* Eigth */
const newli = document.createElement("li");

/* Ninth */
newli.innerText = 'four';

/* Tenth */
let ulElement = document.querySelector("ul");
ulElement.appendChild(newli);

/* Eleventh */
let olitem = document.querySelectorAll("ol li");
    for (let i = 0; i < olitem.length; i++) {
        olitem[i].style.backgroundColor = "green";
    }

/* Twelfth */
footer.remove();


