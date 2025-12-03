const buttons = document.querySelectorAll("#bt-top button");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.textContent = btn.textContent === "Follow" ? "Unfollow" : "Follow";
    });
});
const likes = document.querySelectorAll(".icon .ri-heart-fill");
likes.forEach(like => {
    like.addEventListener("click", () => {
        // Agar current color red hai → white kar do, nahi to red
        like.style.color = like.style.color === "red" ? "white" : "red";
    });
});
