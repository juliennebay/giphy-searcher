const API_KEY = "Qg1q7Rp8iVTA1TtX45hmK0ESU21X3cA0"

function loadScript(){
    const button = document.querySelector("button")
    const ul = document.querySelector("ul")
    const input = document.querySelector("input")

    function searchGifs(){
        //clear old results, if any
        Array.from(ul.children).forEach(child => child.remove());

        const li = document.createElement("li")
        li.textContent = "🚧site currently under  construction. check back l8r 🚧"
        ul.appendChild(li)

        const queryUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${input.value}&limit=2`

        fetch(queryUrl).then(response => response.json())
                       .then(result => {
                           const gifs = result.data //data is an array
                           gifs.forEach(gif => {
                            const li = document.createElement("li")
                            li.textContent = "gif slug :" + gif.slug
                            ul.appendChild(li)
                           })
                       })
    }

    button.addEventListener("click", searchGifs)
}
document.addEventListener("DOMContentLoaded", loadScript)