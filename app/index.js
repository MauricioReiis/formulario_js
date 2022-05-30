import sheet from "./index.css" assert { type: "css" };
import button from "./scripts/button.js";
import exemplo from "./scripts/exemplo.js";

button();
exemplo();

document.adoptedStyleSheets = [sheet];
shadowRoot.adoptedStyleSheets = [sheet];
