/* =========== SKILLS TABS ========== */
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]');

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);

            tabContent.forEach(tabContents => {
                tabContents.classList.remove('skills__active');
            })

            target.classList.add('skills__active');

            tabs.forEach(tab => {
                tab.classList.remove('skills__active');
            })

            tab.classList.add('skills__active');
            
        })
    })

/*========= Filter job cards =========*/
document.addEventListener("DOMContentLoaded", () => {
    const filterItems = document.querySelectorAll(".work__item"); // Filter Buttons
    const workCards = document.querySelectorAll(".work__card");  // Job cards

    filterItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove the 'active-work' class from all buttons
            filterItems.forEach(filter => filter.classList.remove("active-work"));

            // Adds the 'active-work' class to the clicked button
            item.classList.add("active-work");

            const filter = item.dataset.filter; // Gets the data-filter value of the clicked button

            // Show or hide cards based on filter
            workCards.forEach(card => {
                if (filter === "all") {
                    card.classList.remove("hide"); // Show all cards
                } else if (card.classList.contains(filter.substring(1))) {
                    card.classList.remove("hide"); // Shows matching cards
                } else {
                    card.classList.add("hide");; // Hide unmatched cards
                }
            });
        });
    });
});

/*====== Work Popup =======*/
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
});

function togglePortfolioPopup() {
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title")
        .innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details")
        .innerHTML;
}

/*================== SERVICES MODAL =================== */
const modalViews = document.querySelectorAll('.services__modal'),
    modelBtns = document.querySelectorAll('.services__button'),
    modelcloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}

modelBtns.forEach((modelBtn, i) => {
    modelBtn.addEventListener("click", () => {
        modal(i);
    })
})

modelcloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        })
    })
})

/*=================== INPUT ANIMATION ======================= */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if(this.value == "") {
        let parent = this.parentNode;
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

/*================= SCROLL SECTIONS ACTIVE LINK =================*/
// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    // get current scroll position
    let scrollY = window.pageYOffset;

    // Now we loop through sections to get height, top and Id value for each
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // Adjust for offset
        const sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is,
        add active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while
        looping through sections as a selector
        */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link");
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link");
        }
    });
}
