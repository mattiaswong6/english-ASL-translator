// Simple ASL dictionary (replace with a more comprehensive one)
const aslDictionary = {
    'HELLO': '👋',
    'GOOD MORNING': '☀️👋',
    'GOOD AFTERNOON': '🌞👋',
    'GOOD EVENING': '🌙👋',
    // Add more ASL translations as needed
};

function translate() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    const outputASL = document.getElementById('outputASL');
    const aslDiagram = document.getElementById('aslDiagram');

    // Clear previous translations and diagrams
    outputASL.textContent = '';
    aslDiagram.innerHTML = '';

    // Check if the input text exists in the ASL dictionary
    if (aslDictionary.hasOwnProperty(inputText)) {
        const aslTranslation = aslDictionary[inputText];

        // Display the ASL translation
        outputASL.textContent = 'ASL: ${aslTranslation}';

        // Display a simple visual representation (replace with actual animations)
        aslDiagram.innerHTML = "<p>ASL Diagram:</p><div>${aslTranslation}</div>";
    } else {
        outputASL.textContent = 'Translation not found. Please try another phrase.';
    }
}