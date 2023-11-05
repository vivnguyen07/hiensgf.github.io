const novelText = document.getElementById('novel-text');
const choice1 = document.getElementById('choice-1');
const choice2 = document.getElementById('choice-2');

// Initial game state
let storyIndex = 0;

const story = [
    { text: "Page 1 text", choices: ["Choice 1", "Choice 2"] },
    { text: "Page 2 text", choices: ["Choice 3", "Choice 4"] },
    // Add more pages and choices as needed
];

story.push({
    text: "This is the text for page 3",
    choices: ["Choice A", "Choice B"]
});


function updatePage() {
    if (storyIndex < story.length) {
        novelText.textContent = story[storyIndex].text;
        choice1.textContent = story[storyIndex].choices[0];
        choice2.textContent = story[storyIndex].choices[1];
    } else {
      print(I love you Happy Anniversary)
        // End of the story, you can add a "The End" message or link to restart.
    }
}

choice1.addEventListener('click', () => {
    storyIndex++;
    updatePage();
});

choice2.addEventListener('click', () => {
    storyIndex++;
    updatePage();
});

// Start the visual novel
updatePage();
