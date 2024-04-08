let colourPicker;
let thicknessSlider;
let isDrawing = false;
let currentColor= 0;
let strokeThickness= 4;

function setup() {
    let canvas = createCanvas(800, 500);
    canvas.position(windowWidth / 2 - 400, windowHeight / 2 - 400); // Position canvas in the center of the screen
    canvas.style('border', '4px double black'); // Set canvas border style
    canvas.style('margin-top', '150px'); // Set canvas border style
    canvas.style('background-color', '#ffffff')

    // Create a colour picker
    colorPicker = createInput();
    colorPicker.attribute("type", "color");
    colorPicker.position(10, height + 10);

    // Thickness slider
    thicknessSlider = createSlider(1, 10, strokeThickness, 1);
    thicknessSlider.position(10, height + 40);

    // Button to clear the canvas
    let clearButton = createButton('Clear');
    clearButton.position(10, height + 70);
    clearButton.mousePressed(clearCanvas);

    // Stroke colour
    stroke(0);
    strokeWeight(strokeThickness);
}

function draw() {
    if (isDrawing) {
        let newColor = colorPicker.value();
        if (newColor !== currentColor) {
            stroke(color(newColor));
            currentColor = newColor;
        }
        strokeWeight(thicknessSlider.value());
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}

function mousePressed() {
    isDrawing = true;
}

function mouseReleased() {
    isDrawing = false;
}

function clearCanvas() {
    background(255);
}

// Audio functions

// Automatically start audio-1.pm3
function startSong1() {
    // Play song1 automatically when the page loads
    playAudio('audio1');
}

function playAudio(audioId) {
    // Pause any currently playing song
    stopAllAudio();

    // Play the selected song
    let audio = document.getElementById(audioId);
    audio.play();
}

function stopAllAudio() {
    // Pause all audio elements
    let audios = document.getElementsByTagName('audio');
    for (let audio of audios) {
        audio.pause();
    }
}



