let rect = document.querySelector("#Rectangle");
rect.addEventListener("mousemove", function (details) {
    let RectangleLocation = rect.getBoundingClientRect(); // Rectangle ki location nikalne ke lie . 
    let insideRectval = details.clientX - RectangleLocation.left;  // Rectangle ke andar ki value nikalne ke lie. 


    if (insideRectval < RectangleLocation.width / 2) {
        console.log("Mouse left mai hai");
        let redcolor = gsap.utils.mapRange(0, (RectangleLocation.width / 2), 255, 0, insideRectval)
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor},0,0)`,
            ease: Power4,
        })

    } else {
        console.log("Mouse Right mai hai");
        let bluecolor = gsap.utils.mapRange((RectangleLocation.width / 2),RectangleLocation.width , 0, 255, insideRectval)
        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4,
        })
    }

})
rect.addEventListener("mouseleave",function (params) {
    gsap.to(rect,{
        backgroundColor:"white",
        ease: Power4,
    })
})