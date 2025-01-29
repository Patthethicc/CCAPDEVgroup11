function getRandomDeadline() {
    const now = new Date();
    const randomOffset = Math.floor(Math.random() * (60 + 60 + 1)) - 60; // -60 to +60 days
    const deadline = new Date();
    deadline.setDate(now.getDate() + randomOffset);
    deadline.setHours(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
    return deadline.toISOString();
}

// placeholder data for posts and notifications
const postData = [
    {
        id: 1,
        author: "celeste_stars",
        profilePicture: "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
        timestamp: "2 hours ago",
        title: "My Astrology Chart",
        deadline: getRandomDeadline(),
        tags: ["In Progress"],
        body: "This is my current progress on my astronomy map! please let me know how it is and what I need to change <3",
        images: ["https://i.pinimg.com/736x/2d/e6/d5/2de6d56a65b855d0c7caf064ba160920.jpg", "https://i.pinimg.com/736x/d4/af/fa/d4affaf621622faf7a9cf06a4ec20d57.jpg"],
        actions: { upvotes: 0, downvotes: 0, comments: 0 }
    },
    {
        id: 2,
        author: "tom_n00k",
        profilePicture: "https://i.pinimg.com/736x/dc/9f/f6/dc9ff6bfce06bd402d16edb127cfbc6f.jpg",
        timestamp: "1 day ago",
        title: "Building the Perfect Island",
        deadline: getRandomDeadline(),
        tags: ["Planning"],
        body: "Planning the layout for my dream island in Animal Crossing. Any suggestions for organizing villager homes?",
        images: ["https://i.pinimg.com/736x/89/cd/8b/89cd8b5e1d319f850e98333cc930e64a.jpg"],
        actions: { upvotes: 25, downvotes: 3, comments: 12 }
    },
    {
        id: 3,
        author: "isabelle_smiles",
        profilePicture: "https://i.pinimg.com/736x/c6/8c/e6/c68ce664ae649625c13190e68aa954ac.jpg",
        timestamp: "5 hours ago",
        title: "Flower Breeding Tips",
        deadline: getRandomDeadline(),
        tags: ["Tips"],
        body: "Trying to get blue roses for my island. What are the best ways to breed them? Any help would be appreciated!",
        images: ["https://i.pinimg.com/736x/d2/c8/0b/d2c80bc998e1a5cdd55832ec376c1938.jpg", "https://i.pinimg.com/736x/ce/56/5e/ce565ee20e7f0677c98672bf42d95df1.jpg", "https://i.pinimg.com/736x/86/36/85/86368592e498d7215494042327c9e007.jpg", "https://i.pinimg.com/736x/c0/a2/55/c0a2552db282b8dd9a27be84b45d271f.jpg"],
        actions: { upvotes: 43, downvotes: 1, comments: 8 }
    },
    {
        id: 4,
        author: "blathers_wisdom",
        profilePicture: "https://i.pinimg.com/736x/13/72/23/1372237fdb09478e355314a75ae4c62b.jpg",
        timestamp: "3 days ago",
        title: "Museum Expansion Plans",
        deadline: getRandomDeadline(),
        tags: ["Ideas"],
        body: "Thinking of ways to improve my museum setup. Should I focus on fossils or fish exhibits first?",
        images: ["https://i.pinimg.com/736x/22/05/0c/22050cf90ca0d70c09944618dd0ff1fb.jpg", "https://i.pinimg.com/736x/ef/c1/03/efc103500211c2cfb7d521490f61c880.jpg"],
        actions: { upvotes: 32, downvotes: 5, comments: 10 }
    },
    {
        id: 5,
        author: "kkslider_tunes",
        profilePicture: "https://i.pinimg.com/736x/53/37/db/5337db5e4560e5f8d6633359f63d53f9.jpg",
        timestamp: "12 hours ago",
        title: "Creating Custom Songs",
        deadline: getRandomDeadline(),
        tags: ["Music"],
        body: "Started composing some custom songs for my villagers. Anyone interested in sharing theirs?",
        images: [],
        actions: { upvotes: 40, downvotes: 2, comments: 14 }
    },
    {
        id: 6,
        author: "leafy_lief",
        profilePicture: "https://i.pinimg.com/736x/2a/e5/e1/2ae5e1e0d16f5ba30c5200007e560d86.jpg",
        timestamp: "8 hours ago",
        title: "Perfect Garden Setup",
        deadline: getRandomDeadline(),
        tags: ["Gardening"],
        body: "Trying to create a relaxing garden space. Any tips for integrating different flower types and furniture?",
        images: ["https://i.pinimg.com/736x/ad/6c/29/ad6c293c97f4e2a008e1f67566f20b4b.jpg", "https://i.pinimg.com/736x/43/14/92/43149289294262fa445b7f4f481326d5.jpg", "https://i.pinimg.com/736x/8a/d1/72/8ad172d5dfdeb2f89392d80905457f7d.jpg"],
        actions: { upvotes: 50, downvotes: 0, comments: 20 }
    }
];


const notificationData = [
    {
        id: 1,
        author: "celeste_stars",
        profilePicture: "https://i.pinimg.com/736x/fb/d6/d2/fbd6d2545b2dbd0328d7c50581519da1.jpg",
        details: "commented on your project \"this is amazing!\"",
        timestamp: "2 hours ago"
    },
    {
        id: 2,
        author: "ray_m0nd",
        profilePicture: "https://i.pinimg.com/736x/b9/d9/cd/b9d9cdef53ec98bfaeebb66c3247e52c.jpg",
        details: "upvoted your post!",
        timestamp: "15 hours ago"
    }
    // add more notifs here
];

function calculateDeadlineProgress(deadline) {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();
    const timeLeft = deadlineDate - currentDate;
    const totalDuration = deadlineDate - new Date(currentDate.setDate(currentDate.getDate() - 30)); // Assuming 30 days
    return timeLeft <= 0 ? 100 : Math.max(0, ((totalDuration - timeLeft) / totalDuration) * 100);
}

function formatDeadline(deadline) {
    const deadlineDate = new Date(deadline);
    return `<span>Deadline: </span>${deadlineDate.toLocaleString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    })}`;
}

function loadPosts() {
    const contentDiv = document.querySelector('.content');
    postData.forEach(post => {
        const progress = calculateDeadlineProgress(post.deadline);
        const formattedDeadline = formatDeadline(post.deadline);

        const postElement = document.createElement('div');
        postElement.className = 'post';

        let imageSection = post.images.length ? `
            <div class="post-images" onclick="alert('Feature not yet implemented!')">
                <img class="main-image" src="${post.images[0]}" alt="Post Image">
                ${post.images.slice(1, 3).map((img, index) => `<img class="stacked-image-${index}" src="${img}" alt="Stacked Image">`).join('')}
                ${post.images.length > 3 ? '<div class="ellipsis">...</div>' : ''}
            </div>
        ` : '';

        postElement.innerHTML = `
            <div class="post-meta">
                <img src="${post.profilePicture}" alt="Profile Picture">
                <a href="#">${post.author}</a> • ${post.timestamp}
            </div>
            <div class="post-header">
                <div class="post-title">${post.title}</div>
                <div class="deadline-bar-container">
                    <div class="deadline-text">${formattedDeadline}</div>
                    <div class="deadline-bar"><div class="progress" style="width: ${progress}%;"></div></div>
                </div>
            </div>
            <div class="post-tags">${post.tags.map(tag => `<span class="in-progress-tag">${tag}</span>`).join('')}</div>
            <div class="post-content">
                <div class="post-body">${post.body}</div>
                ${imageSection}
            </div>
            <div class="post-actions">
                <button><i class="fa fa-arrow-up"></i> ${post.actions.upvotes}</button>
                <button><i class="fa fa-arrow-down"></i> ${post.actions.downvotes}</button>
                <button><i class="fa fa-comments"></i> ${post.actions.comments}</button>
                <button><i class="fa fa-share"></i></button>
            </div>
        `;
        contentDiv.appendChild(postElement);
    });
}


function loadNotifications() {
    const notificationPanel = document.querySelector('.notification-panel');
    notificationData.forEach(notification => {
        const notificationElement = document.createElement('div');
        notificationElement.className = 'notification-post';
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
    const panel = document.querySelector('.notification-panel');
    panel.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
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
