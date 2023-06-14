// API
const BASE_URL = "https://project-1-api.herokuapp.com";
const API_KEY = "34dbda0f-4c31-43b8-90aa-1eda3e3f88a4";

// // Get /register -- only use once
// function fetchAPI() {
//     axios.get(`https://project-1-api.herokuapp.com/register`)
//         .then((response) => {
//             console.log(response);
//         }).catch(
//             (error) => {
//                 console.error(error);
//             }
//             );
//         }
//         fetchAPI();

///////////////// COMMENTS /////////////////
// Get /comments
function fetchComments() {
    axios
        .get(`${BASE_URL}/comments?api_key=${API_KEY}`)
        .then((response) => {
            console.log(response);
            const comments = response.data;

            // Grab comment section for the parent container
            const commentSection = document.querySelector(
                ".commentsection__comments"
            );

            // Loop over the comments
            for (let i = comments.length - 1; i >= 0; i--) {
                const comment = comments[i];
                displayComment(comment, commentSection);
            }
        })
        .catch((error) => {
            console.error(error);
        });
}

// Display comment item
function displayComment(comment, commentSection) {
    const commentItemList = document.createElement("li");
    commentItemList.classList.add("commentsection__list-item");

    // Comment Content Container
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("commentsection__content-container");
    commentItemList.appendChild(contentContainer);

    // Avatar Container
    const avatarContainer = document.createElement("div");
    avatarContainer.classList.add("commentsection__avatar-container");
    contentContainer.appendChild(avatarContainer);

    // Avatar
    const avatar = document.createElement("div");
    avatar.classList.add("commentsection__avatar");
    avatarContainer.appendChild(avatar);

    // Name
    const nameElement = document.createElement("p");
    nameElement.classList.add("commentsection__name");
    nameElement.textContent = comment.name;
    contentContainer.appendChild(nameElement);

    // Convert timestamp to Date object
    const timestamp = new Date(comment.timestamp);

    // Date
    const dateElement = document.createElement("p");
    dateElement.classList.add("commentsection__date");
    dateElement.textContent = formatDate(timestamp);
    contentContainer.appendChild(dateElement);

    // Comment
    const commentElement = document.createElement("p");
    commentElement.classList.add("commentsection__comment");
    commentElement.textContent = comment.comment;
    commentItemList.appendChild(commentElement);

    // Actions Container
    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("commentsection__actions-container");
    commentItemList.appendChild(actionsContainer);

    // ID linked to individual comment for likes
    commentItemList.dataset.commentId = comment.id;

    // Like
    const likeButton = document.createElement("div");
    likeButton.classList.add("commentsection__like");
    actionsContainer.appendChild(likeButton);

    // Like Counter
    const likeCounter = document.createElement("p");
    likeCounter.classList.add("commentsection__like-counter");
    likeCounter.textContent = `${comment.likes}`;
    likeCounter.setAttribute("data-comment-id", comment.id);
    actionsContainer.appendChild(likeCounter);

    //Delete
    const deleteButton = document.createElement("div");
    deleteButton.classList.add("commentsection__delete");
    actionsContainer.appendChild(deleteButton);

    // Divider (bottom)
    const dividerLineBottom = document.createElement("hr");
    dividerLineBottom.classList.add("commentsection__divider");
    commentItemList.appendChild(dividerLineBottom);


    commentSection.appendChild(commentItemList);
}

// Add likes counter and append to like button
function updateLikeCounter(commentId, likes) {
    const likeCounter = document.querySelector(`.commentsection__like-counter[data-comment-id="${commentId}"]`);
    likeCounter.textContent = `${likes} likes`;
}

// Add delete function to delete the comment
function updateDelete(commentId) {
    const commentItem = document.querySelector(
        `.commentsection__list-item[data-comment-id="${commentId}"]`
    );

    // Show confirmation alert
    const confirmDelete = confirm("Are you sure you want to delete this comment?");

    if (confirmDelete) {
        // Perform delete action
        commentItem.remove();

        // Add /Delete request
        axios
            .delete(`${BASE_URL}/comments/${commentId}/?api_key=${API_KEY}`)
            .then((response) => {
                console.log("Comment deleted successfully.");
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

// Post /comments
function postComments(name, comment) {
    axios
        .post(`${BASE_URL}/comments?api_key=${API_KEY}`, {
            name: name,
            comment: comment,
            // likes: likes,
        })
        .then(() => {
            const commentSection = document.querySelector(".commentsection__comments");
            const newComment = document.querySelector(".commentsection__list-item");

            displayComment(newComment, commentSection);
        })
        .catch((error) => {
            console.log(error);
        });
}

///////////////// FORMAT /////////////////
// Formats the timestamp to a readable format
function formatDate(date) {
    const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "America/Toronto",
    };

    return date.toLocaleString("en-CA", options);
}

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
    } else if (minutes < 60) {
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

fetchComments();

///////////////// LISTENERS /////////////////
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

    // Actions Container
    const actionsContainer = document.createElement("div");
    actionsContainer.classList.add("commentsection__actions-container");
    newComment.appendChild(actionsContainer);

    // Like
    const likeButton = document.createElement("div");
    likeButton.classList.add("commentsection__like");
    actionsContainer.appendChild(likeButton);

    // Like Counter
    const likeCounter = document.createElement("p");
    likeCounter.classList.add("commentsection__like-counter");
    likeCounter.textContent = `${comment.likes}`;
    likeCounter.setAttribute("data-comment-id", comment.id);
    actionsContainer.appendChild(likeCounter);

    //Delete
    const deleteButton = document.createElement("div");
    deleteButton.classList.add("commentsection__delete");
    actionsContainer.appendChild(deleteButton);

    // Divider (bottom)
    const dividerLineBottom = document.createElement("hr");
    dividerLineBottom.classList.add("commentsection__divider");
    newComment.appendChild(dividerLineBottom);

    commentSection.insertBefore(newComment, commentSection.firstChild);

    postComments(name, comment);

    form.reset();
});


//Add click event listener for the likes counter
const commentSection = document.querySelector(".commentsection__comments");

commentSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("commentsection__like")) {
        const likeButton = event.target;
        const commentItem = likeButton.closest(".commentsection__list-item");
        const commentId = commentItem.dataset.commentId;

        // Add /Put request
        axios
            .put(`${BASE_URL}/comments/${commentId}/like?api_key=${API_KEY}`)
            .then((response) => {
                const updatedComment = response.data;
                updateLikeCounter(commentId, updatedComment.likes);
            })
            .catch((error) => {
                console.error(error);
            });
    }
});


// Add click event listener for the delete button
commentSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("commentsection__delete")) {
        const deleteButton = event.target;
        const commentItem = deleteButton.closest(".commentsection__list-item");
        const commentId = commentItem.dataset.commentId;

        updateDelete(commentId);
    }
});