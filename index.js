const addToDoButton = document.getElementById('add');
const toDoContainer = document.getElementById('topDiv');
let inputField = document.getElementById('myInput');



addToDoButton.addEventListener('click', function(){

    var paragraph = document.createElement('p');

    paragraph.classList.add('para-styling');

    paragraph.innerText = inputField.value;

    toDoContainer.appendChild(paragraph);

   
    paragraph.addEventListener('dblclick', function() {
        toDoContainer.removeChild(paragraph);

        
    });
    
});