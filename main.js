
// JavaScript to toggle the active class for the h2 element
document.addEventListener("DOMContentLoaded", () => {
    const titleContainer = document.querySelector(".title-container h2");
    if (titleContainer) {
        // Add the active class after a delay to trigger the animation
        setTimeout(() => {
            titleContainer.classList.add("active");
        }, 500); // Adjust the delay as needed
    }
});
