function loadScript(){
    const button = document.querySelector("button")
    const ul = document.querySelector("ul")

    function searchGifs(){
        //clear old results, if any
        Array.from(ul.children).forEach(child => child.remove());
        
        const li = document.createElement("li")
        li.textContent = "🚧site currently under  construction. check back l8r 🚧"
        ul.appendChild(li)
    }

    button.addEventListener("click", searchGifs)
}
document.addEventListener("DOMContentLoaded", loadScript)