// const targetAnchor = document.querySelector(targetID);



function anchorLinkHandler(e) {
    const headerHeight = document.querySelector('header').offsetHeight + document.querySelector('.section-hero');
    console.log('AICI');
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);

    e.preventDefault();
    const targetID = this.getAttribute("data-target");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor) - 173;

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
}

// const linksToAnchors = document.querySelectorAll('.test-link');
// linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));







// this is a test

function scrollTest(element, offset = -173) { 
    // debugger;
    const headerHeight = document.querySelector('header').offsetHeight + document.querySelector('.section-hero');
    console.log('AICI');
    const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);


    const targetID = element.getAttribute("data-target");
    const targetAnchor = document.querySelector(targetID);
    if (!targetAnchor) return;
    const originalTop = distanceToTop(targetAnchor) + offset;

    window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });

    /*
    const checkIfDone = setInterval(function() {
        const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
        if (distanceToTop(targetAnchor) === 0 || atBottom) {
            targetAnchor.tabIndex = "-1";
            targetAnchor.focus();
            window.history.pushState("", "", targetID);
            clearInterval(checkIfDone);
        }
    }, 100);
    */
}











document.addEventListener('click', event => {
    
    if (event.target.classList.contains('test-link')) {
        event.preventDefault();
        scrollTest(event.target);
    }







    if (event.target.classList.contains('hamburger-menu')) {
        event.preventDefault();
        event.stopImmediatePropagation();
        document.querySelector('.navigation-bar__main').classList.toggle('nav-mobile');
        console.log('AICI');
    }

    // console.log(event.target);
});

