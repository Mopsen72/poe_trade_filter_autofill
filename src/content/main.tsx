import {createRoot} from 'react-dom/client';
import Parser from "../components/parser/parser.tsx";
import React from "react";

console.log('[CRXJS] Hello world from content script!')


function initAdditionalFields() {

    console.log("initAdditionalFields")

    const container = document.createElement("div")
    container.id = "poe-trade-parser-autofill-container"

    const containerTarget = document.getElementById("app")

    containerTarget!.appendChild(container)

    const root = createRoot(container);
    root.render(<Parser/>)

}

if (document.readyState === "complete") {
    initAdditionalFields()

} else {
    window.addEventListener("load", initAdditionalFields)
}
