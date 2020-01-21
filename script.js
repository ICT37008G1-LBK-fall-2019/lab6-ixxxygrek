let elementFound = false;
while (!elementFound) {
    let id = prompt('შეიყვანეთ სტუდენტის ID');
    let datas = document.querySelectorAll('div');
    let i;
    for (i = 0; i < datas.length; i++) {
        let result = datas[i].getAttribute(['data-student-id']);
        if (id === result) {
            elementFound = true;
            datas[i].style.backgroundColor = 'red';
        }
    }
    if (!elementFound) {
        alert('ID არასწორია');
    }
}