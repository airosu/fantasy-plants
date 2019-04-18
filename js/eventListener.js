
// =============================== MAIN CLICK EVENT LISTENER =================================

document.addEventListener('click', event => {
    const searchButton = document.querySelector('.navigation-bar__search-button');
    const searchIcon = document.querySelector('.icon-search-blue');
    const searchDropdown = document.querySelector('.search-dropdown');
    const searchResults = document.querySelector('.search-dropdown__results');

    console.log(event.target);
    
    // desktop nav
    if (event.target.classList.contains('navigation-bar__link')) {
        event.preventDefault();
        const offset = event.target.getAttribute("data-offset");
        scrollToAnchor(event.target, offset);
    }


    // mobile burger nav
    if (event.target.classList.contains('hamburger-menu')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        document.querySelector('.navigation-bar__main').classList.toggle('nav-mobile');
        console.log('AICI');
    }

    // products wishlist
    if (event.target.classList.contains('icon-heart-empty-1')) {
        event.target.classList.toggle('active');
    }



    // search desktop
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


