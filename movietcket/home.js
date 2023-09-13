// Sample data for featured events (you can load this dynamically from a server)
const featuredEvents = [
    { name: "Concert 1", location: "City 1" },
    { name: "Theater Show 1", location: "City 2" },
    // Add more featured events here
];

const searchForm = document.getElementById("search-form");
const featuredEventsSection = document.querySelector(".featured-events");

// Populate the featured events section
featuredEvents.forEach(event => {
    const eventDiv = document.createElement("div");
    eventDiv.classList.add("event");
    eventDiv.innerHTML = `<h3>${event.name}</h3><p>Location: ${event.location}</p>`;
    featuredEventsSection.appendChild(eventDiv);
});

// Handle form submission (you can add functionality for event search)
searchForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const eventName = document.getElementById("event-name").value;
    const location = document.getElementById("location").value;

    // Implement event search logic here, e.g., redirect to search results page
    // For simplicity, we'll just display a message
    alert(`Searching for '${eventName}' in '${location}'...`);
});
