// Array of comments to load on page
let comments = [{
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
        comment: "I can 't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
]


/////// Form Container & Event Listener

// Grab the form as the Parent container
let form = document.querySelector(".commentsection__form");

// Add submit event listener so user can create new comment
form.addEventListener("submit", (e) => {
    // Remove refresh by default
    e.preventDefault();
    // Collect values from the form such as name, comment
    const form = e.target;
    const name = form.name.value;
    const comment = form.name.value;

    //  Add validation for the form when user does not type in correctly
    if (!name || !comment) {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("comment").style.border = "1px solid red";
        return;
    }

    // Create a function to append new comments
    // Grab parent element container
    const commentSection = document.querySelector(".commentsection__comments");

    // Create new element for the container
    const newComment = document.createElement("li");

    // Add classes to element


    // Append the child to parent
    commentSection.appendChild(newComment);
})


// ////// Original Comments
// Grab parent container
const commentSection = document.querySelector(".commentsection__comments");

// Loop over the comments 
for (let comment of comments) {
    createCommentItem(comment, commentSection);
}
  
// Create a comment item
function createCommentItem(comment, commentSection) {
    let commentItemList = document.createElement("li");
    commentItemList.classList.add("commentsection__list-item");

    // Append the name, date an comment
    appendComment(commentItemList, "name", comment.name);
    appendComment(commentItemList, "date", comment.date);
    appendComment(commentItemList, "comment", comment.comment);

    commentSection.appendChild(commentItemList);
}