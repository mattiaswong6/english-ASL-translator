// Simple ASL dictionary (replace with a more comprehensive one)
const aslDictionary = {
    'a': "images/a.png",
    'b': "images/b.png",
    'c': "images/c.png",
    'd': "images/d.png",
    'e': "images/e.png",
    'f': "images/f.png",
    'g': "images/g.png",
    'h': "images/h.png",
    'i': "images/i.png",
    'j': "images/j.png",
    'k': "images/k.png",
    'l': "images/l.png",
    'm': "images/m.png",
    'n': "images/n.png",
    'o': "images/o.png",
    'p': "images/p.png",
    'q': "images/q.png",
    'r': "images/r.png",
    's': "images/s.png",
    't': "images/t.png",
    'u': "images/u.png",
    'v': "images/v.png",
    'w': "images/w.png",
    'x': "images/x.png",
    'y': "images/y.png",
    'z': "images/z.png",
 
 
    // Add more ASL translations as needed
 };
 
 
 
 
 function translate() {
    console.log("translate()");
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const outputASL = document.getElementById('outputASL');
    const aslDiagram = document.getElementById('aslDiagram');
 
 
    // Clear previous translations and diagrams
    outputASL.textContent = '';
    aslDiagram.innerHTML = '';
 
 
    // Check if the input text exists in the ASL dictionary
    if (aslDictionary.hasOwnProperty(inputText)) {
        const aslTranslation = aslDictionary[inputText];
 
 
        // Display the ASL translation
        img = document.createElement("img")
        img.src =
        outputASL.textContent = 'ASL: ${aslTranslation}';
 
 
        // Display a simple visual representation (replace with actual animations)
 //        aslDiagram.innerHTML = "<p>ASL Diagram:</p><div>${aslTranslation}</div>";
    } else {
        outputASL.textContent = 'Translation not found. Please try another phrase.';
    }
 }
 
 
 translateButton = document.getElementById("translate-button");
 translateButton.addEventListener("click", translate);
 
 
 function alphabetToImage(letter) {
    imageLink = aslDictionary.get(letter.toLowerCase());
    return imageLink;
 };
 
 
 console.log(aslDictionary["a"]);
 
 
 
 
 
 
 // function to convert image link to img html
 
 
 function outputImage(image) {
    const div = document.createElement("div");
    div.classList
 }
 
 