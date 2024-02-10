function toggleMenu() {
    const menu = document.querySelector(".mobile-nav-links");
    const icon = document.querySelector(".mobile-nav-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function initializeTyped(selector, delay, strings) {
    return new Typed(selector, {
        startDelay: delay,
        strings: strings,
        typeSpeed: 100,
        loop: false,
        preStringTyped: function(arrayPos, self) {
            showCursor(selector);
        },
        onComplete: function(self) {
            hideCursor(selector);
        }
    });
}

function showCursor(selector) {
    const cursor = document.querySelector(selector + ' + .typed-cursor');
    if (cursor) {
        cursor.style.opacity = 1;
    }
}

function hideCursor(selector) {
    const cursor = document.querySelector(selector + ' + .typed-cursor');
    if (cursor) {
        cursor.style.display = 'none';
    }
}

initializeTyped(".typing-name", 1500, ["Eric Fan"]);
initializeTyped(".typing-photographer", 3000, ["Photographer"]);
initializeTyped(".typing-swe", 4700, ["Software Engineer"]);

function expandPhoto(src) {
    const overlay = document.getElementById("photo-overlay");
    const expandedPhoto = document.getElementById("expanded-photo");
    expandedPhoto.src = src;
    overlay.style.display = "block";
}

function closeExpandedPhoto(event) {
    if (event.target.id === "photo-overlay") {
        document.getElementById("photo-overlay").style.display = "none";
    }
}

document.querySelectorAll(".photo").forEach(photo => {
    photo.addEventListener("click", function() {
        expandPhoto(this.src);
    });
});