// retain this original
function getRandomDeadline() {
  const now = new Date();
  const randomOffset = Math.floor(Math.random() * (60 + 60 + 1)) - 60; // -60 to +60 days
  const deadline = new Date();
  deadline.setDate(now.getDate() + randomOffset);
  deadline.setHours(
    Math.floor(Math.random() * 24),
    Math.floor(Math.random() * 60)
  );
  return deadline.toISOString();
}

// retain this original
// placeholder data for posts and notifications
const postData = [
  {
    id: 1,
    author: "celeste_stars",
    profilePicture:
      "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
    timestamp: "2 hours ago",
    title: "My Astrology Chart",
    deadline: getRandomDeadline(),
    tags: ["In Progress"],
    body: "This is my current progress on my astronomy map! please let me know how it is and what I need to change <3",
    images: [
      "https://i.pinimg.com/736x/2d/e6/d5/2de6d56a65b855d0c7caf064ba160920.jpg",
      "https://i.pinimg.com/736x/d4/af/fa/d4affaf621622faf7a9cf06a4ec20d57.jpg",
    ],
    actions: { upvotes: 0, downvotes: 0, comments: 0 },
  },
];

// retain this originals
const notificationData = [
  {
    id: 1,
    author: "celeste_stars",
    profilePicture:
      "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
    details: 'commented on your project "this is amazing!"',
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    author: "ray_m0nd",
    profilePicture:
      "https://i.pinimg.com/736x/b9/d9/cd/b9d9cdef53ec98bfaeebb66c3247e52c.jpg",
    details: "upvoted your post!",
    timestamp: "15 hours ago",
  },
  // add more notifs here
];

// post comments
const postComments = [
  {
    postID: 1,
    commentID: 1,
    userName: "sparky_fly",
    timestamp: "30 minutes ago",
    comment: "That looks nice. I can't wait for you to finish it. Keep it up!",
    actions: { upvotes: 0, downvotes: 0, comments: 0 },
  },
  {
    postID: 1,
    commentID: 2,
    userName: "art_lover99",
    timestamp: "25 minutes ago",
    comment: "Wow, this is amazing! The colors are so vibrant. Great job!",
    actions: { upvotes: 0, downvotes: 0, comments: 0 },
  },
  {
    postID: 1,
    commentID: 3,
    userName: "creative_soul",
    timestamp: "20 minutes ago",
    comment: "I love the details in this. Can't wait to see the final result!",
    actions: { upvotes: 0, downvotes: 0, comments: 0 },
  },
  {
    postID: 1,
    commentID: 4,
    userName: "design_guru",
    timestamp: "15 minutes ago",
    comment: "This is fantastic! The composition is spot on. Keep going!",
    actions: { upvotes: 0, downvotes: 0, comments: 0 },
  },
  {
    postID: 1,
    commentID: 5,
    userName: "artistic_mind",
    timestamp: "10 minutes ago",
    comment: "Incredible work! The shading is perfect. Can't wait to see more!",
    actions: { upvotes: 0, downvotes: 0, comments: 0 },
  },
];

// retain this original
function calculateDeadlineProgress(deadline) {
  const deadlineDate = new Date(deadline);
  const currentDate = new Date();
  const timeLeft = deadlineDate - currentDate;
  const totalDuration =
    deadlineDate - new Date(currentDate.setDate(currentDate.getDate() - 30)); // Assuming 30 days
  return timeLeft <= 0
    ? 100
    : Math.max(0, ((totalDuration - timeLeft) / totalDuration) * 100);
}

// retain this original
function formatDeadline(deadline) {
  const deadlineDate = new Date(deadline);
  return `<span>Deadline: </span>${deadlineDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  })}`;
}

function loadPosts() {
  const contentDiv = document.querySelector(".content");
  postData.forEach((post) => {
    const progress = calculateDeadlineProgress(post.deadline);
    const formattedDeadline = formatDeadline(post.deadline);

    const postElement = document.createElement("div");
    postElement.className = "post";

    let imageSection = post.images.length
      ? `
            <div class="post-images" onclick="alert('Feature not yet implemented!')">
                <img class="main-image" src="${
                  post.images[0]
                }" alt="Post Image">
                ${post.images
                  .slice(1, 3)
                  .map(
                    (img, index) =>
                      `<img class="stacked-image-${index}" src="${img}" alt="Stacked Image">`
                  )
                  .join("")}
                ${
                  post.images.length > 3
                    ? '<div class="ellipsis">...</div>'
                    : ""
                }
            </div>
        `
      : "";

    postElement.innerHTML = `

        `;
    contentDiv.appendChild(postElement);
  });
}

function loadNotifications() {
  const notificationPanel = document.querySelector(".notification-panel");
  notificationData.forEach((notification) => {
    const notificationElement = document.createElement("div");
    notificationElement.className = "notification-post";
    notificationElement.innerHTML = `
            <img src="${notification.profilePicture}" alt="Profile Picture">
            <div class="meta">
                <a href="#">${notification.author}</a>
                <span class="details">${notification.details}</span>
                <span class="timestamp">${notification.timestamp}</span>
            </div>
        `;
    notificationPanel.appendChild(notificationElement);
  });
}

function toggleNotificationPanel() {
  const panel = document.querySelector(".notification-panel");
  panel.classList.toggle("show");
}

document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
  loadNotifications();

  const leftSidebarToggle = document.querySelector(".left-sidebar-toggle");
  const leftSidebar = document.querySelector(".left-sidebar-panel");
  const rightSidebarToggle = document.querySelector(".account");
  const rightSidebar = document.querySelector(".right-sidebar-panel");
  const overlay = document.querySelector(".overlay");
  const accountPanel = document.querySelector(".account-panel");
  const BREAKPOINT_RIGHT_SIDEBAR = 850;

  function toggleSidebar(sidebar) {
    const otherSidebar = sidebar === leftSidebar ? rightSidebar : leftSidebar;
    otherSidebar.classList.remove("show");
    sidebar.classList.toggle("show");
    overlay.classList.toggle("active", sidebar.classList.contains("show"));
  }

  function toggleAccountPanelOrSidebar(e) {
    e.stopPropagation();
    if (window.innerWidth <= BREAKPOINT_RIGHT_SIDEBAR) {
      toggleSidebar(rightSidebar);
    } else {
      accountPanel.classList.toggle("show");
    }
  }

  function closeAllPanels() {
    leftSidebar.classList.remove("show");
    rightSidebar.classList.remove("show");
    accountPanel.classList.remove("show");
    overlay.classList.remove("active");
  }

  leftSidebarToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleSidebar(leftSidebar);
  });

  rightSidebarToggle.addEventListener("click", toggleAccountPanelOrSidebar);
  overlay.addEventListener("click", closeAllPanels);

  window.addEventListener("resize", () => {
    if (window.innerWidth > BREAKPOINT_RIGHT_SIDEBAR) {
      rightSidebar.classList.remove("show");
    }
    overlay.classList.remove("active");
  });
});
