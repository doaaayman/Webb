document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
        });
function search() {
var input = document.getElementById("searchInput");
var filter = input.value.toUpperCase();
var faqItems = document.querySelectorAll(".faq-list li");
faqItems.forEach(function(faqItem) {
    var faqTitle = faqItem.querySelector(".faq-title");
    var titleText = faqTitle.textContent || faqTitle.innerText;
    if (titleText.toUpperCase().indexOf(filter) > -1) {
        faqItem.style.display = "";
    } else {
        faqItem.style.display = "none";
    }
});
}

document.getElementById("searchInput").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
    event.preventDefault();
    search();
}
});

document.getElementById("searchButton").addEventListener("click", function(event) {
event.preventDefault();
search();
});
