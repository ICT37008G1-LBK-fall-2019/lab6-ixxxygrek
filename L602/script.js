let mainDiv = document.querySelector('#container');
let firstDiv = mainDiv.children[0];
let secDiv = mainDiv.children[1];
mainDiv.insertBefore(secDiv,firstDiv);

let myP = document.getElementById('myP');
myP.outerHTML = "outer HTML"
let body = document.getElementsByTagName('BODY')[0].getComments();
alert(body);