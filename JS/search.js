// JavaScript
// Function to handle the search functionality
function search() {
    // Get the input element and convert the search query to uppercase for case-insensitive search
    var input = document.getElementById("searchInput");
    var filter = input.value.toUpperCase();

    // Get all FAQ items
    var faqItems = document.getElementsByClassName("faq-item");

    // Loop through each FAQ item
    for (var i = 0; i < faqItems.length; i++) {
        var faqItem = faqItems[i];
        var faqTitle = faqItem.getElementsByClassName("faq-title")[0]; // Get the question title

        // Get the text content of the question title
        var titleText = faqTitle.textContent || faqTitle.innerText;

        // Check if the search query matches the question title
        if (titleText.toUpperCase().indexOf(filter) > -1) {
            // If the search query matches, display the FAQ item
            faqItem.style.display = "";
        } else {
            // If the search query does not match, hide the FAQ item
            faqItem.style.display = "none";
        }
    }
}

// Function to handle keydown event
function handleKeyDown(event) {
    if (event.keyCode === 13) { // Check if Enter key is pressed
        event.preventDefault(); // Prevent default form submission behavior
        search(); // Call the search function
    }
}
