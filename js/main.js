class Products {
    constructor(title, description, image, price, tags) {
        this.title = title
        this.description = description
        this.image = image
        this.price = price
        this.tags = tags
    }
    titleColor() {
        return `${this.tags[1]} ${this.tags[0]}`;
    }
}

// Generate each items
const chalkLicorice = new Products('Chalk Licorice', 'Licorice that looks like a white chalk', '', '18', ['confect', 'white', 'licorice', 'chalk']);
const glaceGinger = new Products('Glace Ginger', 'Ginger in syrup juice', '', '29', ['confect', 'yellow', 'ginger', 'glace', 'syrup']);
const almondGrade1 = new Products('Almond Grade 1', 'First grade almond', '', '15.80', ['almond1', 'brown', '1', 'grade']);
const almondGrade2 = new Products('Almond Grade 2', 'Second grade almond', '', '11.50', ['almond2', 'brown', '2', 'grade']);
const limaBeans = new Products('Lima Beans', 'White looking beans', '', '28.85', ['beans', 'white', 'lima']);

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

    // Filter using texts and Regex
    const regexPattern = new RegExp(searchContent, 'i');
    const filteredItemsDescription = items.filter(item => regexPattern.test(item.tags) || regexPattern.test(item.title) || regexPattern.test(item.titleColor()));
    filteredItemsDescription.forEach(item => {
        generateItem(item, mainContainer);
    });
}

// DOM for each items
function generateItem(item, mainContainer) {
    // Main Container
    const itemContainer = document.createElement('div');
    itemContainer.classList.add('item-container');

    // Generate each item data content
    generateItemData(itemContainer, 'h1', item.title);
    generateItemData(itemContainer, 'p', item.description);
    generateItemData(itemContainer, 'h2', item.price);

    // Main container append child container
    mainContainer.appendChild(itemContainer);
}

// Item data function
function generateItemData(itemContainer, contentType, itemType) {
    const elementContainer = document.createElement('div');
    const contentContainer = document.createElement(`${contentType}`);
    contentContainer.textContent = itemType;
    elementContainer.appendChild(contentContainer);
    itemContainer.appendChild(elementContainer);
}

// Search Event Listener
window.addEventListener('keyup', searchMain);