import {createRoot} from 'react-dom/client';
import Parser from "../components/parser/parser.tsx";
import React from "react";
import {checkForUpdates} from "../components/utils/checkUpdate.ts";

console.log('[CRXJS] Hello world from content script!')


async function initAdditionalFields() {

    console.log("initAdditionalFields")

    const container = document.createElement("div")
    container.id = "poe-trade-parser-autofill-container"

    const containerTarget = document.getElementById("app")

    containerTarget!.appendChild(container)

    const haveUpdate = await checkForUpdates()

    console.log("check update", haveUpdate)

    const root = createRoot(container);
    root.render(<Parser haveUpdate={haveUpdate}/>)

}

if (document.readyState === "complete") {
    initAdditionalFields()

} else {
    window.addEventListener("load", initAdditionalFields)
}
