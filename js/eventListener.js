
// =============================== MAIN CLICK EVENT LISTENER =================================

document.addEventListener('click', event => {
    const bagIcon = document.getElementById('bag');
    const bagButton = document.querySelector('.navigation-bar__bag-button');
    const minicart = document.querySelector('.minicart');
    const searchIcon = document.querySelector('.icon-search-blue');
    const searchButton = document.querySelector('.navigation-bar__search-button');
    const searchDropdown = document.querySelector('.search-dropdown');
    const searchResults = document.querySelector('.search-dropdown__results');
    const languageMenuNav = document.getElementById('language-menu');
    const languageDropdown = document.getElementById('language-dropdown');
    const languageArrow = document.querySelector('.icon-down-open');
    const mobileDarkOverlay = document.querySelector('.mobile-overlay');
    const infoMainContainer = document.querySelector('.info-modal__container');

    
    // --- Desktop Navigation Animation ---
    if (event.target.classList.contains('navigation-bar__link')) {
        event.preventDefault();
        const offset = event.target.getAttribute("data-offset");
        scrollToAnchor(event.target, offset);
    }

    // --- Info Modal ---
    if (event.target.classList.contains('utility-bar__help')) {
        event.preventDefault();
        infoMainContainer.classList.toggle('show');
    }
    if (event.target.classList.contains('info-modal__overlay') || event.target.classList.contains('info-modal__close')) {
        event.preventDefault();
        infoMainContainer.classList.remove('show');
    }



    // --- Hamburger Nav Menu ---
    if (event.target.classList.contains('hamburger-menu')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        document.querySelector('.navigation-bar__main').classList.toggle('nav-mobile');
        mobileDarkOverlay.classList.toggle('show');
    }
    if (event.target.closest('.navigation-bar__main') === null && !event.target.classList.contains('hamburger-menu')) {
        document.querySelector('.navigation-bar__main').classList.remove('nav-mobile');
        mobileDarkOverlay.classList.remove('show');
    }
    if (event.target.classList.contains('navigation-bar__link')) {
        document.querySelector('.navigation-bar__main').classList.remove('nav-mobile');
        mobileDarkOverlay.classList.remove('show');
    }


    // --- Product Wishlist Toggle ---
    if (event.target.classList.contains('icon-heart-empty-1')) {
        event.target.classList.toggle('active');
    }



    // --- Nav Bag Icon ---
    if (event.target === bagIcon || event.target === bagButton) {
        event.preventDefault();
        minicart.classList.toggle('show');
        bagIcon.classList.toggle('close');
    }
    if (minicart.classList.contains('show')) {
        if (event.target.closest('.minicart') === null && event.target != bagIcon && event.target != bagButton && !event.target.classList.contains('product__button')) {
            minicart.classList.remove('show');
            bagIcon.classList.remove('close');
        } 
    }



    // --- Nav Search Icon ---
    if (event.target === searchIcon || event.target === searchButton) {
        event.preventDefault();
        searchDropdown.classList.toggle('show');
        searchIcon.classList.toggle('close');
        searchResults.classList.remove('show');
        document.querySelector('.search-dropdown__no-results').classList.remove('show');
        resetSearch();
    }
    if (searchDropdown.classList.contains('show')) {
        if (event.target.closest('.search-dropdown') === null && event.target != searchIcon && event.target != searchButton) {
            searchDropdown.classList.remove('show');
            searchIcon.classList.remove('close');
            searchResults.classList.remove('show');
            document.querySelector('.search-dropdown__no-results').classList.remove('show');
        }
    }


    // --- Nav Language Dropdown ---
    if (event.target.classList.contains('utility-bar__country') || event.target.classList.contains('icon-down-open')) {
        event.preventDefault();

        languageDropdown.classList.toggle('show');
        languageArrow.classList.toggle('active');
    }
    if (languageDropdown.classList.contains('show')) {
        if (event.target.closest('.language__menu') === null && event.target != languageMenuNav && event.target != languageArrow) {
            languageDropdown.classList.remove('show');
            languageArrow.classList.remove('active');
        }
    }
    if (event.target.classList.contains('language__link')) {
        event.preventDefault();
        languageDropdown.classList.remove('show');
        languageMenuNav.innerHTML = `
            ${event.target.innerText} <i class="icon-down-open"></i>
        `;
    }





    // --- Add Product to Minicart ---
    if (event.target.classList.contains('btn-product')) {
        const productId = event.target.getAttribute('data-id');

        event.preventDefault();
        if (!Store.checkIfPresent(productId) === true) {
            localProducts.forEach(product => {
                if (product.id == productId) {
                    let finalProduct = new Product(product.id, product.name, product.price, product.price, product.src, 1);
                    Store.addItem(finalProduct);
                    UI.addProduct(finalProduct);
                    UI.displayMinicart();
                }
            });
        } else {
            Store.updateItem(productId);
            UI.updateProduct(productId);
            UI.displayMinicart();
        }

        if (Store.getItems().length === 1) {
            UI.displayVisibleMinicart();
        }

        minicart.classList.add('show');
        bagIcon.classList.add('close');
    }



    // --- Delete Product from Minicart ---
    if (event.target.classList.contains('minicart-product__remove')) {
        const productId = event.target.getAttribute('data-id');

        event.preventDefault();
        Store.removeItem(productId);
        UI.removeProduct(event.target);
        UI.displayMinicart();

        if (Store.getItems().length === 0) {
            UI.displayEmptyMinicart();
        }
    }



    // --- Increase / Decrease QTY from minicart ---
    if (event.target.classList.contains('minicart-qty-change')) {
        const productId = event.target.getAttribute('data-id');

        if (event.target.classList.contains('minicart-product__plus-sign')) {
            Store.updateItem(productId);
            UI.updateProduct(productId);
            UI.displayMinicart();

        } else if (event.target.classList.contains('minicart-product__minus-sign')) {
            Store.decreaseQty(productId);
            UI.updateProduct(productId);
            UI.displayMinicart();
        }
    }



    if (event.target.classList.contains('utility-bar__login')) {
        event.preventDefault();
    }

    if (event.target.classList.contains('utility-bar__consultant')) {
        event.preventDefault();
    }

    

    // -- DEBUG CONSOLE LOG --
    if (event.target.classList.contains('minicart__view-button')) {
        console.log(localStorage);
    }


});





// =============================== SUBSCRIBE EVENT LISTENER ================================

document.querySelector('.subscribe__email-input').addEventListener('blur', function(event) {
    let errorLabel = document.querySelector('.subscribe__email-label');
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(event.target.value).toLowerCase()) === false) {
        if (event.target.value == '') {
            errorLabel.innerText = 'This field is required.';
            document.querySelector('.subscribe__email-input').classList.add('error');
        } else {
            errorLabel.innerText = 'Please enter a valid email address.';
            document.querySelector('.subscribe__email-input').classList.add('error');
        }
    } else {
        errorLabel.innerText = '';
        document.querySelector('.subscribe__email-input').classList.remove('error');
    }
});



document.querySelector('.subscribe__email-container').addEventListener('submit', function(event) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let inputValue = document.querySelector('.subscribe__email-input').value;
    let errorLabel = document.querySelector('.subscribe__email-label');
    
    event.preventDefault();
    if (re.test(String(inputValue).toLowerCase()) === false) {
        if (inputValue == '') {
            errorLabel.innerText = 'This field is required.';
            document.querySelector('.subscribe__email-input').classList.add('error');
        } else {
            errorLabel.innerText = 'Please enter a valid email address.';
            document.querySelector('.subscribe__email-input').classList.add('error');
        }
    } else {
        document.querySelector('.subscribe__email-input').blur();
        document.querySelector('.subscribe__email-input').value = '';
        errorLabel.innerText = '';
    }
});


