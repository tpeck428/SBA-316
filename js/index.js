//cache at least one element using selectElementById
let lastName = document.getElementById('last-name');
console.log(lastName);

//Cache at least one element with query.Selector
let btn = document.querySelector('.btn'); //calling by id use # calling by class use .
console.log(btn);

//Event Listener for Button
btn.addEventListener('click', handleClick);
function handleClick(evt) {
    alert(evt.value);
}

//Centering the Header using .style
let h1 = document.querySelector('h1');
console.log(h1);
h1.style.textAlign = 'center';

//create element, append child
const h3 = document.createElement("h3");
console.log(h3);
h3.innerText = 'Venture into a new world of dice!'
document.querySelector("#form1").appendChild(h3);

//Use the parent-child-sibling relationship to navigate between elements at least once 
//(firstChild, lastChild, parentNode, nextElementSibling, etc.).
const lastEl = document.querySelector('#last-name').parentNode
console.log(lastEl);


//iterate over a collection of elements
const inputEl = document.querySelectorAll('.wrapper');
inputEl.forEach(wrapper => {
    console.log(wrapper)
})


//non working code, trying to add required attribute ask for help
// let form1El = document.getElementById('form1');
// // console.log(form1El);

// form1El.addEventListener("submit", (evt) =>{
//         evt.preventDefault();
//         // alert(`You submitted:
//         // ${btn.querySelector(input.value)}`);
//         // return 'nothing submitted'
//     })