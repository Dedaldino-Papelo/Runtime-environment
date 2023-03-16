const btn = document.querySelector(".btn")
const result1 = document.querySelector("#result1")
const result2 = document.querySelector("#result2")
const result3 = document.querySelector("#result3")

btn.addEventListener("click", () => {
    let text = "Runtime environment"

      // Check if the runtime environment is Node.js
    if(typeof process  === "object" && typeof require === "function"){
        result1.innerHTML = text + " is node.js"
    }

        // Check if the runtime environment is a Service worker
        if(typeof importScripts === "function"){
            result2.innerHTML = text + " is Service Worker"
        }

        // Check if the runtime environment is Browser
        if(typeof window === "object"){
            result3.innerHTML = text + " is Browser"
        }
})