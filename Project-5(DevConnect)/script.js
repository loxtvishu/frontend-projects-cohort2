// ==========================================
// PART 1: DATA (20 Users Information) 📂
// ==========================================
const userProfiles = [
    { name: "Aarav Sharma", role: "UI/UX Designer", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { name: "Priya Reddy", role: "Senior QA Engineer", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { name: "Vikram Singh", role: "Frontend Developer", image: "https://randomuser.me/api/portraits/men/10.jpg" },
    { name: "Sarah Jenkins", role: "Technical Writer", image: "https://randomuser.me/api/portraits/women/12.jpg" },
    { name: "Rohan Gupta", role: "Backend Engineer", image: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: "Neha Verma", role: "AI/ML Engineer", image: "https://randomuser.me/api/portraits/women/24.jpg" },
    { name: "James Anderson", role: "Product Manager", image: "https://randomuser.me/api/portraits/men/33.jpg" },
    { name: "Emily Clark", role: "Game Developer", image: "https://randomuser.me/api/portraits/women/35.jpg" },
    { name: "Michael Chen", role: "DevOps Engineer", image: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: "Anjali Das", role: "System Administrator", image: "https://randomuser.me/api/portraits/women/42.jpg" },
    { name: "Arjun Nair", role: "Mobile App Dev (iOS)", image: "https://randomuser.me/api/portraits/men/56.jpg" },
    { name: "Jessica Wong", role: "Marketing Lead", image: "https://randomuser.me/api/portraits/women/55.jpg" },
    { name: "David Miller", role: "Data Scientist", image: "https://randomuser.me/api/portraits/men/62.jpg" },
    { name: "Sophia Wilson", role: "Full Stack Developer", image: "https://randomuser.me/api/portraits/women/66.jpg" },
    { name: "Rahul Malhotra", role: "Cloud Architect", image: "https://randomuser.me/api/portraits/men/75.jpg" },
    { name: "Olivia Davis", role: "Graphic Designer", image: "https://randomuser.me/api/portraits/women/72.jpg" },
    { name: "Robert Fox", role: "Cyber Security Analyst", image: "https://randomuser.me/api/portraits/men/86.jpg" },
    { name: "Zara Khan", role: "Database Admin", image: "https://randomuser.me/api/portraits/women/84.jpg" },
    { name: "Karan Kumar", role: "Blockchain Developer", image: "https://randomuser.me/api/portraits/men/91.jpg" },
    { name: "Ishita Patel", role: "SRE (Site Reliability)", image: "https://randomuser.me/api/portraits/women/90.jpg" }
];

// ==========================================
// PART 2: HTML GENERATION (Cards Banana) 🏗️
// ==========================================
const container = document.querySelector('.main-container');

// Purana content saaf karo (Optional safety)
container.innerHTML = '';

userProfiles.forEach(user => {
    // Har user ke liye HTML structure
    const cardHTML = `
        <article class="profile-card">
            <div class="profile-image-wrapper">
                <img src="${user.image}" alt="${user.name}" class="profile-img">
            </div>

            <div class="profile-content">
                <h2 class="profile-name">${user.name}</h2>
                <p class="profile-role">${user.role}</p>
                
                <div class="profile-stats">
                    <span class="stat-count"></span> <span class="stat-label">Followers</span>
                </div>
                
                <div class="action-buttons">
                    <button class="btn btn--primary">Follow</button>
                </div>
            </div>
        </article>
    `;

    // Container mein jod do
    container.innerHTML += cardHTML;
});


// ==========================================
// PART 3: TUMHARA LOGIC (Action Time) ⚡
// ==========================================

// NOTE: Ye code yahan isliye hai kyunki upar HTML banne ke baad hi
// hum buttons ko select kar sakte hain.

let btns = document.querySelectorAll('.btn--primary');

btns.forEach((btn) => {

    const card = btn.closest('.profile-card');
    const currentFollowerCount = card.querySelector('.stat-count');

    let count = 0; // 0 = Stranger, 1 = Request Sent/Friend
    // Har card ke liye alag random number
    let followState = Math.floor(Math.random() * (901 - 300 + 1)) + 300;
    let timer;

    // Initial random number set karna
    currentFollowerCount.innerHTML = `${followState}`;

    btn.addEventListener("click", function () {

        if (count === 0) {
            btn.innerHTML = "Request Sent";
            btn.style.backgroundColor = "#4F5152";
            count = 1;

            timer = setTimeout(function () {
                btn.innerHTML = "Following";
                btn.style.backgroundColor = "red";

                followState += 1;
                currentFollowerCount.innerHTML = `${followState}`;
            }, Math.floor(Math.random() * 3000) + 1000); // 1-4 seconds random time

        } else {
            clearTimeout(timer); // Kill switch

            if (btn.innerHTML === "Following") {
                followState -= 1;
                currentFollowerCount.innerHTML = `${followState}`;
            }

            btn.innerHTML = "Follow";
            btn.style.backgroundColor = "#1d4ed8";
            count = 0;
        }
    });
});