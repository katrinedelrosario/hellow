const myApp = document.getElementById('app');       //retrieving the element
const myHeading = document.createElement('h1');     //creating element

myHeading.innerText = 'hellow world';
myApp.appendChild(myHeading);                       //getting parent-element first then connects it with child-element in the ()


const myFig = document.createElement('figure');
const myH = document.createElement('h2');
const myImg = document.createElement('img');
const myP = document.createElement('p');

myApp.appendChild(myFig);
myFig.appendChild(myH);
myFig.appendChild(myImg);
myFig.appendChild(myP);
myImg.src = 'js/assets/images/little-me.jpg';

myH.innerText = 'mellow me';
myP.innerText = 'this is me n im cool actually';

