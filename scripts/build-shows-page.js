//  Shows info
let showsHeader = "Shows";

let shows = [{
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
let showsContainer = document.querySelector(".shows__list");

// Create a header for the shows container
let headerTitle = document.createElement("h2");
headerTitle.classList.add("shows__title");
headerTitle.textContent = showsHeader;
showsContainer.appendChild(headerTitle);

// Loop to iterate over the shows array
for (let show of shows) {
    createShowItem(show);
}

// Creates a show item
function createShowItem(show) {
    let showsItemList = document.createElement("div");
    showsItemList.classList.add("shows__list-item");

    // Appends the date, venue, location, and button
    appendSubheader(showsItemList, "Date", show.date);
    appendSubheader(showsItemList, "Venue", show.venue);
    appendSubheader(showsItemList, "Location", show.location);
    appendButton(showsItemList, "Buy Tickets");

    // Append to the shows container
    showsContainer.appendChild(showsItemList);
    appendDividerLine();
}

// Function to add the shows subheader and shows info to the parent
function appendSubheader(parent, label, text) {
    let subheader = document.createElement("h3");
    subheader.classList.add("shows__subheader");
    subheader.textContent = label;

    let info = document.createElement("p");
    info.classList.add("shows__info");
    info.textContent = text;

    parent.appendChild(subheader);
    parent.appendChild(info);
}

// Function for the button to append to parent
function appendButton(parent, text) {
    let button = document.createElement("button");
    button.classList.add("shows__button");
    button.textContent = text;
    parent.appendChild(button);
}

// Create a function to append a divider line in the shows container
function appendDividerLine() {
    let dividerLine = document.createElement("hr");
    dividerLine.classList.add("shows__divider");
    showsContainer.appendChild(dividerLine);
}