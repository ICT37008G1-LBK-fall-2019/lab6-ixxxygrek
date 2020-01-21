var ol = document.querySelector('#student-list');
let names = prompt('შეიყვანეთ სასურველი სიტყვა');

while (names.length !== 0) {
  
    let li = document.createElement('li');
    li.innerHTML = names;
    ol.appendChild(li);
    names = prompt('შეიყვანეთ სასურველი სიტყვა');
}


