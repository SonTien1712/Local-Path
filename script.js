function upDate(previewPic) {
    console.log("Event triggered!"); // Confirm event is firing
    console.log("Source: " + previewPic.src); // Log image source
    console.log("Alt text: " + previewPic.alt); // Log alt text

    let imageDiv = document.getElementById("image");

    // Update the background image and text
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    let imageDiv = document.getElementById("image");

    // Reset the background image and text
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
