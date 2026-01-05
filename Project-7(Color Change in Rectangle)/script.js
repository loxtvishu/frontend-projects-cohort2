const rect = document.querySelector("#Rectangle");
const rectWidth = rect.getBoundingClientRect().width;
const rectHeight = rect.getBoundingClientRect().height;

const padding = 175;

window.addEventListener("mousemove", function (details) {
    
    let xval = gsap.utils.mapRange(
        0, window.innerWidth, 
        padding, window.innerWidth - padding, 
        details.clientX
    );

    let yval = gsap.utils.mapRange(
        0, window.innerHeight, 
        padding, window.innerHeight - padding,
        details.clientY
    );

    gsap.to(rect, {
        top: yval,
        left: xval,
        ease: Power4
    });
});

// --- PART 2: COLOR LOGIC (Rectangle Listener) ---
rect.addEventListener("mousemove", function (details) {
    
    let rectangleLocation = rect.getBoundingClientRect();
    let insideRectval = details.clientX - rectangleLocation.left;

    if (insideRectval < rectWidth / 2) {
        // LEFT SIDE -> RED
        let redcolor = gsap.utils.mapRange(0, rectWidth / 2, 255, 0, insideRectval);
        
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4
        });

    } else {
        // RIGHT SIDE -> BLUE
        let bluecolor = gsap.utils.mapRange(rectWidth / 2, rectWidth, 0, 255, insideRectval);
        
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: Power4
        });
    }
});

// --- PART 3: RESET LOGIC ---
rect.addEventListener("mouseleave", function () {
    gsap.to(rect, {
        backgroundColor: "white",
        ease: Power4,
    });
});