//Cache at least one element with query.Selector
let btn = document.querySelector('button'); //calling by id use # calling by class use .
console.log(btn);

//Event Listener for Button
btn.addEventListener('click', handleClick);
function handleClick(evt) {
    alert(evt.target);
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


//non working code
// btn.addEventListener('register', (evt) =>{
//         evt.preventDefault();
//         // alert(`You submitted:
//         // ${btn.querySelector(input.value)}`);
//         // return 'nothing submitted'
//     })