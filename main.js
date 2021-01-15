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
// 
function onButtonClick(event, items) {
    console.log(items);
}
//
function updateItems(items, key, value) {

}
// Execute this code
fetchAll()
    .then(items => {   
    const elements = items.map(create); 
    const container = document.querySelector('.items');
    container.innerHTML = elements.join('');
    const buttons = document.querySelectorAll('i.fruit-btn'); 
    buttons.forEach(button => {
        console.log(button);
        button.addEventListener('click', event => onButtonClick(event, elements));
    });
});