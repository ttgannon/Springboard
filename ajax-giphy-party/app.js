console.log("Let's get this party started!");

let userInput = document.getElementById("userInput");
let deleteBtn = document.getElementById("deleteBtn")
let submitBtn = document.getElementById("submitBtn");

async function getGiphy (search) {
    const giphy = await axios.get(`http://api.giphy.com/v1/gifs/random?tag=${search}&api_key=2MeN1NMCzou5mDxLo3x7z7yTYJleckBM`);
    let displayGiphy = document.createElement("img");
    displayGiphy.src = giphy.data.data.images.original.url;
    document.body.appendChild(displayGiphy);
}

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    getGiphy(userInput.value);
    userInput.value = '';
})


deleteBtn.addEventListener("click", function () {
    let allImages = document.querySelectorAll("img");
    for (let image of allImages) {
        image.remove();
    }
})

