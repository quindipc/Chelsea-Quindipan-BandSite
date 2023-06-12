// Array of predefined comments to load on page
const comments = [{
        name: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    }, {
        name: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        name: "Miles Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

// Grab the form as the Parent container
const form = document.querySelector(".commentsection__form");

// Add submit event listener so user can create new comment
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const comment = form.comment.value;

    if (!name || !comment) {
        document.getElementById("name").classList.add("commentsection__error");
        document.getElementById("comment").classList.add("commentsection__error");
        return;
    }



    removeError();

    const commentSection = document.querySelector(".commentsection__comments");

    // New comment list 
    const newComment = document.createElement("li");
    newComment.classList.add("commentsection__list-item");

    // Comment Content Container
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("commentsection__content-container");
    newComment.appendChild(contentContainer);

    // Divider Line
    const dividerLine = document.createElement("hr");
    dividerLine.classList.add("commentsection__divider");
    contentContainer.appendChild(dividerLine);

    // Avatar Container
    const avatarContainer = document.createElement("div");
    avatarContainer.classList.add("commentsection__avatar-container");
    contentContainer.appendChild(avatarContainer);

    // Avatar 
    const avatar = document.createElement("img");
    avatar.classList.add("commentsection__avatar");
    avatarContainer.appendChild(avatar);

    // Name
    const nameElement = document.createElement("p");
    nameElement.classList.add("commentsection__name");
    nameElement.textContent = name;
    contentContainer.appendChild(nameElement);

    // Date
    const dateElement = document.createElement("p");
    dateElement.classList.add("commentsection__date");
    dateElement.textContent = getCurrentDate();
    contentContainer.appendChild(dateElement);

    // Comment
    const commentElement = document.createElement("p");
    commentElement.classList.add("commentsection__comment");
    commentElement.textContent = comment;
    newComment.appendChild(commentElement);

    // Divider (bottom)
    const dividerLineBottom = document.createElement("hr");
    dividerLineBottom.classList.add("commentsection__divider");
    newComment.appendChild(dividerLineBottom);

    commentSection.insertBefore(newComment, commentSection.firstChild);

    form.reset();
});

// Get the current date in the format of MM/DD/YYYY
function getCurrentDate() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Timestamps ago
    if (hours < 60) {
        return `${day}/${month}/${year} - Posted ${seconds} seconds ago`;
      } else if (minutes < 60){
        return `${day}/${month}/${year} - Posted ${minutes} minutes ago`;
    } else {
        return `${day}/${month}/${year} - Posted ${hours} hours ago`;
    }

}

// Handles removing error styles
function removeError() {
    document.getElementById("name").classList.remove("commentsection__error");
    document.getElementById("comment").classList.remove("commentsection__error");
}

// Grab comment section for the parent container
const commentSection = document.querySelector(".commentsection__comments");

// Loop over the comments 
for (let comment of comments) {
    displayComment(comment, commentSection);
}

// Display comment item
function displayComment(comment, commentSection) {
    const commentItemList = document.createElement("li");
    commentItemList.classList.add("commentsection__list-item");

    // Comment Content Container
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("commentsection__content-container");
    commentItemList.appendChild(contentContainer);

    // Divider Line
    const dividerLine = document.createElement("hr");
    dividerLine.classList.add("commentsection__divider");
    contentContainer.appendChild(dividerLine);

    // Avatar Container
    const avatarContainer = document.createElement("div");
    avatarContainer.classList.add("commentsection__avatar-container");
    contentContainer.appendChild(avatarContainer);

    // Avatar 
    const avatar = document.createElement("img");
    avatar.classList.add("commentsection__avatar");
    avatarContainer.appendChild(avatar);

    // Name
    const nameElement = document.createElement("p");
    nameElement.classList.add("commentsection__name");
    nameElement.textContent = comment.name;
    contentContainer.appendChild(nameElement);

    // Date
    const dateElement = document.createElement("p");
    dateElement.classList.add("commentsection__date");
    dateElement.textContent = comment.date;
    contentContainer.appendChild(dateElement);

    // Comment
    const commentElement = document.createElement("p");
    commentElement.classList.add("commentsection__comment");
    commentElement.textContent = comment.comment;
    commentItemList.appendChild(commentElement);

    // Divider (bottom)
    const dividerLineBottom = document.createElement("hr");
    dividerLineBottom.classList.add("commentsection__divider");
    commentItemList.appendChild(dividerLineBottom);

    commentSection.appendChild(commentItemList);
}