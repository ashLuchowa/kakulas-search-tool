class Products {
    constructor(title, description, image, price, tags) {
        this.title = title
        this.description = description
        this.image = image
        this.price = price
        this.tags = tags
    }
}

// Generate each items
const chalkLicorice = new Products('Chalk Licorice', 'Licorice that looks like a white chalk', '', '18', ['confect', 'chalk', 'licorice', 'white']);
const glaceGinger = new Products('Glace Ginger', 'Ginger in syrup juice', '', '29', ['confect', 'glace', 'ginger', 'syrup, yellow']);
const almondGrade1 = new Products('Almond Grade 1', 'First grade almond', '', '15.80', ['almond1', 'grade', '1', 'brown']);
const almondGrade2 = new Products('Almond Grade 2', 'Second grade almond', '', '11.50', ['almond2', 'glade', '2', 'brown']);
const limaBeans = new Products('Lima Beans', 'White looking beans', '', '28.85', ['beans', 'lima', 'white']);

// Item Library
const items = [chalkLicorice, glaceGinger, almondGrade1, almondGrade2, limaBeans];

// Search Functions
function searchMain() {
    const searchBar = document.querySelector('.search-bar');
    displayContent(searchBar.value);
}

// Display content using tags
function displayContent(searchContent) {
    const mainContainer = document.querySelector('.main-content');
    mainContainer.textContent = '';
    
    // Filter using tags
    const filteredItems = items.filter(item => item.tags === searchContent);
    filteredItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.textContent = item.title;
        mainContainer.appendChild(itemContainer);
    });

    // Filter using texts and Regex
    const regexPattern = new RegExp(searchContent, 'i');
    const filteredItemsDescription = items.filter(item => regexPattern.test(item.tags) || regexPattern.test(item.title));
    filteredItemsDescription.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.textContent = item.title;
        mainContainer.appendChild(itemContainer); 
    });
}

// Search Event Listener
window.addEventListener('keyup', searchMain);