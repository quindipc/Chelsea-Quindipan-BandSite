// Hero


//  Shows
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



// Parent Container for Shows
let showsContainer = document.querySelector(".shows");

let headerTitle = document.createElement("h2");
headerTitle.classList.add("shows__title");
headerTitle.textContent = showsHeader;

showsContainer.appendChild(headerTitle);

// Loop to iterate over the shows
for (let show of shows) {
    displayShows(show);
}

function displayShows(show) {
    let showsItemList = document.createElement("div");
    showsItemList.classList.add("shows__list--item");


    // Date
    let showsDateHeader = document.createElement("h3");
    showsDateHeader.classList.add("shows__subheader");
    showsDateHeader.textContent = "Date";
    showsItemList.appendChild(showsDateHeader);

    let showsDate = document.createElement("p");
    showsDate.classList.add("shows__info");
    showsDate.textContent = show.date;
    showsItemList.appendChild(showsDate);

    // Venue
    let showsVenueHeader = document.createElement("h3");
    showsVenueHeader.classList.add("shows__subheader");
    showsVenueHeader.textContent = "Venue";
    showsItemList.appendChild(showsVenueHeader);

    let showsVenue = document.createElement("p");
    showsVenue.classList.add("shows__info");
    showsVenue.textContent = show.venue;
    showsItemList.appendChild(showsVenue);

    // Location
    let showsLocationHeader = document.createElement("h3");
    showsLocationHeader.classList.add("shows__subheader");
    showsLocationHeader.textContent = "Location";
    showsItemList.appendChild(showsLocationHeader);

    let showsLocation = document.createElement("p");
    showsLocation.classList.add("shows__info");
    showsLocation.textContent = show.location;
    showsItemList.appendChild(showsLocation);

    // Button
    let showsButton = document.createElement("button");
    showsButton.classList.add("shows__Button");
    showsButton.textContent = "Buy Tickets";
    showsItemList.appendChild(showsButton);

    // Divider
    let dividerLine = document.createElement("hr");
    dividerLine.classList.add("shows__divider");
    showsItemList.appendChild(dividerLine);


    showsContainer.appendChild(showsItemList);
}