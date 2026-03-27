function showContent(category) {
  const content = document.querySelectorAll(".content_div");

  content.forEach((content) => {
    content.classList.remove("show");
  });

  const activeContent = document.getElementById("content_" + category);

  if (activeContent) {
    activeContent.classList.add("show");
  }
}

// Unsere "Mini-Datenbank" (Simulation vom Backend)
const myStyles = [
    { name: "Neon Glow", type: "button", css: "background: #6450ff; box-shadow: 0 0 15px #6450ff; color: white; border: none; padding: 10px 20px; border-radius: 5px;" },
    { name: "Glass Button", type: "button", css: "background: rgba(255,255,255,0.1); backdrop-filter: blur(5px); border: 1px solid white; color: white; padding: 10px 20px; border-radius: 5px;" },
    { name: "Simple Input", type: "input", placeholder: "Input"}
];

// Die Funktion, die die Karten baut
function renderStyles() {
    myStyles.forEach(style => {
        // 1. Suche den richtigen Container (z.B. button_gallery)
        const container = document.getElementById(style.type + "_gallery");
        
        if (container) {
            // 2. Erstelle die Karte (style-card)
            const card = document.createElement("div");
            card.className = "style-card"; // Diese Klasse haben wir in der div.css besprochen
            
            // 3. Inhalt der Karte festlegen
            if (style.type === "button") {
                card.innerHTML = `<h4>${style.name}</h4><button style="${style.css}">Vorschau</button>`;
            } else if (style.type === "input") {
                card.innerHTML = `<h4>${style.name}</h4><input type="text" placeholder="${style.placeholder}">`;
            }
            
            // 4. Karte in den Container packen
            container.appendChild(card);
        }
    });
}

// Sobald die Seite fertig geladen ist, führen wir das aus
window.addEventListener("DOMContentLoaded", renderStyles);
