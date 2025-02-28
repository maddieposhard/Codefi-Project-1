
const data = JSON.parse(localStorage.getItem('data'))
//need to fixxxxxx ahhhhhhhhhhhhhhhh
const affirmationContainer = document.querySelector('.affirmations-container');
function displayAll() {
    affirmationContainer.innerHTML= '';
    if (!data) {
        affirmationContainer.innerHTML = "<p>No affirmations available.</p>";
    } else {
    const list = document.createElement("ul");
    data.forEach((affirmation, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = affirmation;
        list.appendChild(listItem);
        let eraseBtn = document.createElement('button');
        eraseBtn.textContent = 'x';
        eraseBtn.addEventListener('click', () => {
            deleteAffirmation(index);
        });
        listItem.appendChild(eraseBtn);
        list.appendChild(listItem);
    });
    affirmationContainer.appendChild(list);
    
    
}}

displayAll();

function deleteAffirmation(index) {
    let data = JSON.parse(localStorage.getItem('data'));
    if (index >=0 && index < data.length) {
        data.splice(index, 1); 
        localStorage.setItem('data', JSON.stringify(data)); 
        displayAll(); 
}}

