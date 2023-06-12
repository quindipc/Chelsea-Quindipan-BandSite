//  Shows info
const showsHeader = "Shows";

const shows = [{
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    },
]

// Parent Container for shows
const showsContainer = document.querySelector(".shows__list");

// Header for the shows container
const headerTitle = document.createElement("h2");
headerTitle.classList.add("shows__title");
headerTitle.textContent = showsHeader;
showsContainer.appendChild(headerTitle);

// List Container
const showsListContainer = document.createElement("div");
showsListContainer.classList.add("shows__list-container");
showsContainer.appendChild(showsListContainer);

// Div to hold the tablet header
const tabletHeader = document.createElement("div");
tabletHeader.classList.add("shows__list-header");

// Create separate elements for Date, Venue, and Location
const dateSubheader = document.createElement("h3");
dateSubheader.classList.add("shows__subheader--tablet");
dateSubheader.textContent = "Date";

const venueSubheader = document.createElement("h3");
venueSubheader.classList.add("shows__subheader--tablet");
venueSubheader.textContent = "Venue";

const locationSubheader = document.createElement("h3");
locationSubheader.classList.add("shows__subheader--tablet");
locationSubheader.textContent = "Location";

const spaceSubheader = document.createElement("h3");
spaceSubheader.classList.add("shows__subheader--tablet");
spaceSubheader.textContent = "";

// Append the Date, Venue, and Location elements to the tablet header
tabletHeader.appendChild(dateSubheader);
tabletHeader.appendChild(venueSubheader);
tabletHeader.appendChild(locationSubheader);
tabletHeader.appendChild(spaceSubheader);

// Append the tablet header to the shows container
showsListContainer.appendChild(tabletHeader);

// Loop to iterate over the shows array
for (let i = 0; i < shows.length; i++) {
    const show = shows[i];
    createShowItem(show);

    if (i !== shows.length - 1) {
        appendDividerLine(showsListContainer);
    }
}


// Creates a show item
function createShowItem(show) {
    const showsItemList = document.createElement("div");
    showsItemList.classList.add("shows__list-item");

    // Add click event to toggle background color
    showsItemList.addEventListener("click", () => {
        toggleBackgroundColor(showsItemList);
    });

    // Appends the date, venue, location, and button
    appendSubheader(showsItemList, "Date", show.date);
    appendSubheader(showsItemList, "Venue", show.venue);
    appendSubheader(showsItemList, "Location", show.location);

    // Button Container
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("shows__button-container");

    // Button element
    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.classList.add("shows__button");
    buyTicketsButton.textContent = "Buy Tickets";

    // Append the button to the button container
    buttonContainer.appendChild(buyTicketsButton);

    // Append the button container to the show item
    showsItemList.appendChild(buttonContainer);


    // Append to the shows container
    showsListContainer.appendChild(showsItemList);
}

// Function to toggle background color
function toggleBackgroundColor(element) {
    const backgroundColor = element.style.backgroundColor;
    if (backgroundColor && backgroundColor === "rgb(225, 225, 225)") {
        element.style.backgroundColor = "";
    } else {
        element.style.backgroundColor = "#e1e1e1";
    }
}

// Function to add the shows subheader and shows info to the parent
function appendSubheader(parent, label, text) {
    const subheader = document.createElement("h3");
    subheader.classList.add("shows__subheader");
    subheader.textContent = label;

    const info = document.createElement("p");
    info.classList.add("shows__info");
    info.textContent = text;

    parent.appendChild(subheader);
    parent.appendChild(info);
}

// Function to append a divider line in the shows container
function appendDividerLine(parent) {
    const dividerLine = document.createElement("hr");
    dividerLine.classList.add("shows__divider");
    parent.appendChild(dividerLine);
}