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
translateButton = document.querySelector(".translate-button");
translateButton.addEventListener("click", translate);
function translate() {
   const inputText = document.getElementById('inputText').value.toLowerCase();
   const outputASL = document.getElementById('outputASL');


   const words = inputText.split(" ");
   words.forEach(wordToImage);
}


//


function wordToImage(word) {
   const characters = word.split("");
   const arrayOfImageLinks = [];
  
   for (let i = 0; i < characters.length; i++) {
       arrayOfImageLinks.push(characterToImageLink(characters[i]));
   }


   console.log(arrayOfImageLinks);




   var images = linksToImages(arrayOfImageLinks);
   console.log(images);


   let card = document.createElement("div");
   card.classList.add("card-wrapper");


   var wordBox = document.createElement("div");
   wordBox.classList.add("word-wrapper");


   let title = document.createElement("p");
   title.innerHTML = word;
   wordBox.classList.add("translate-word");
   wordBox.appendChild(title);


   card.appendChild(wordBox);


   let imageWrapper = document.createElement("div");
   imageWrapper.classList.add("asl-image");


  
   // Append the div to the body of the document
   for (let i = 0; i < images.length; i++) {
       imageWrapper.appendChild(images[i]);
   }
      
   card.appendChild(imageWrapper);


   const outputASL = document.getElementById("outputASL");
   outputASL.appendChild(card);
}
function linksToImages(links) {
   let arrayOfImages = [];
   for (let i = 0; i < links.length; i++) {
       imgTag = document.createElement("img");
       imgTag.src = links[i];
       imgTag.classList.add("translate-character");
       arrayOfImages.push(imgTag);
   }
   return arrayOfImages;
}
function characterToImageLink(letter) {
   imageLink = aslDictionary[letter.toLowerCase()];
   return imageLink;
};
// function to convert image link to img html
//  function outputImage(image) {
//     const div = document.createElement("div");
//     div.classList
//  }
