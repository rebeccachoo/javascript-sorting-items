// Fetch all list from the JSON file, we are going to show all the list to the HTML page
function fetchAll() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}
// Create Code into the HTML page
function create(item){ 
    const sourceCode = `<li class='item' data-type='${item.type}' data-color='${item.color}'><i class="btn ${item.className} ${item.color}"></i><span>${item.type}, ${item.size}</span><li>`; 
    return sourceCode;
}
// When a button is clicked, call updateItems function to change the screen
function onButtonClick(event) {
    const target = event.target;
    const key = target.dataset.key;
    const value = target.dataset.value;
    if (key == null || value == null) {
        return;
    } 
    // items are the list of all items in JSON file
    updateItems(key, value);
}
function showAll(event) {
    const buttons = document.querySelectorAll('.item'); 
    buttons.forEach(button => { 
        button.classList.remove('invisible'); 
    });
}
// Update items according to the selection
function updateItems(key, value) {  
    // get all JSON file items to sort
    const buttons = document.querySelectorAll('.item'); 
    // when key and value are matched with the selection, it will remove the invisible class
    buttons.forEach(button => {
        if(button.dataset[key] === value) {
            button.classList.remove('invisible');
        }else {
            button.classList.add('invisible');
        }
    });
}
// Execute this code
fetchAll()
    .then(items => {   
    const elements = items.map(create); 
    const container = document.querySelector('.items');
    container.innerHTML = elements.join('');
    const buttons = document.querySelectorAll('i.fruit-btn, button.fruit-btn'); 
    buttons.forEach(button => {  
        button.addEventListener('click', event => onButtonClick(event));
    });
    const logo = document.querySelector('.reset__btn');
    logo.addEventListener('click', event => showAll(event));
});