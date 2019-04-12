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




