

// ================================= SCROLL ANIMATION ==========================

let scrollToAnchor = function(element, offset=0) {
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    const targetID = element.getAttribute("data-target");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    if (offset === null) {
        offset = 0;
    }
    const originalTop = distanceToTop(targetAnchor) + parseInt(offset);

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
}









// ================================= SEARCH DROPDOWN ==========================

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');


let resetSearch = function() {
    document.querySelector('.product-1').classList.add('hide');
    document.querySelector('.product-2').classList.add('hide');
    document.querySelector('.product-3').classList.add('hide');
    document.querySelector('.product-4').classList.add('hide');
};


// --- Search Results Function ---
let searchResults = function(input) {
    let searchArray = [];
    for (let i=0; i<localProducts.length; i++) {
        if (localProducts[i].name.toLowerCase().includes(input.toLowerCase()) || localProducts[i].tags.toLowerCase().includes(input.toLowerCase())) {
            searchArray.push(localProducts[i]);
        }
    }
    if (searchArray.length != 0) {
        document.querySelector('.search-dropdown__no-results').classList.remove('show');
        for (let d=0; d<searchArray.length; d++) {
            if (d<4) {
                document.getElementById('product-' + (d+1)).classList.remove('hide');
                document.querySelector('#product-' + (d+1) + ' .product__image-container img').src = searchArray[d].src;
                document.querySelector('#product-' + (d+1) + ' .product__image-container img').classList = '';
                document.querySelector('#product-' + (d+1) + ' .product__image-container img').classList.add('product__image');
                document.querySelector('#product-' + (d+1) + ' .product__image-container img').classList.add(searchArray[d].cls);
                document.querySelector('#product-' + (d+1) + ' .product__title-container a').innerText = searchArray[d].name;
                document.querySelector('#product-' + (d+1) + ' .product__price-container p').innerText = searchArray[d].price + ' $';  
            }
        }
    } else {
        document.querySelector('.search-dropdown__results').classList.remove('show');
        document.querySelector('.search-dropdown__no-results-text').innerHTML = `No resutls found for "${input}".`;
        document.querySelector('.search-dropdown__no-results').classList.add('show');
    }
}



// --- Search Event Listener ---
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();
    let searchValue = searchInput.value;
    document.querySelector('.search-dropdown__results').classList.add('show');
    resetSearch();
    searchResults(searchValue);
    searchInput.value = '';
});




// --- Generating Homepage Products Info ---

let updateHomepageProducts = function() {
    const productTitles = document.querySelectorAll('.product.best-product .product__title');
    const productPrices = document.querySelectorAll('.product.best-product .product__price');

    for (let t of productTitles) {
        for (let i of localProducts) {
            if (t.getAttribute('data-id') == i.id) {
                t.innerText = i.name;
                break;
            }
        }
    }


    for (let p of productPrices) {
        for (let i of localProducts) {
            if (p.getAttribute('data-id') == i.id) {
                p.innerText = `${i.price} $`;
                break;
            }
        }
    }
}

updateHomepageProducts();


