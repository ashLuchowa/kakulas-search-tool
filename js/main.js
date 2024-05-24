class Products {
    constructor(title, description, image, price, tags, id) {
        this.title = title
        this.description = description
        this.image = image
        this.price = price
        this.tags = tags
        this.id = id
    }
}

// Generate each items
const chalkLicorice = new Products('Chalk Licorice', 'Licorice that looks like a white chalk', '', '18', 'confect', '1011' );
const glaceGinger = new Products('Glace Ginger', 'Ginger in syrup juice', '', '29', 'confect', '1012' );
const almondGrade1 = new Products('Almond Grade 1', 'First grade almond', '', '15.80', 'nuts', '1013' );
const limaBeans = new Products('Lima Beans', 'White looking beans', '', '28.85', 'beans', '1014' );

// Item Library
const items = [chalkLicorice, glaceGinger, almondGrade1, limaBeans];

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

    // Filter using texts
    const filteredItemsDescription = items.filter(item => item.title === searchContent);
    filteredItemsDescription.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.textContent = item.title;
        mainContainer.appendChild(itemContainer);
    });
}

// Search Event Listener
window.addEventListener('keyup', searchMain);