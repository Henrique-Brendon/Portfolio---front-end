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
