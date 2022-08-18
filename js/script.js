const myApp = document.getElementById('app');       //retrieving the element
const myHeading = document.createElement('h1');     //creating element

myHeading.innerText = 'hellow world';
myApp.appendChild(myHeading);                       //getting parent-element first then connects it with child-element in the ()

