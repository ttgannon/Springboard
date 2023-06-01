//Listen to generate meme
let form = document.getElementById("form");
form.addEventListener("submit", generateMeme);



function generateMeme(e) {
    e.preventDefault();

    //ensure form fields are filled out
    if (!document.getElementById("urllink").value || !document.getElementById("topline").value || !document.getElementById("bottomline").value) {
        alert("Please fill out all forms.")
        return;
    }

    /* start code modified from https://stackoverflow.com/questions/17049455/javascript-how-do-i-make-a-javascript-image-link-to-a-page */
    var img = new Image();
    img.src = document.getElementById("urllink").value;
    /* end code modified from stackoverflow */

    //Retrieve top line of form info
    topLine = document.getElementById("topline");
    topLine.setAttribute("class", "memeTopLine");
    topText = document.getElementById("topline").value;
    
    //Retrieve bottom line of form info
    bottomLine = document.getElementById("bottomline");
    bottomLine.setAttribute("class", "memeBottomLine");
    bottomText = document.getElementById("bottomline").value;
    
    //Display image//
    let newDiv = document.createElement("div");
    newDiv.setAttribute("class", "parentDiv");
    document.body.appendChild(newDiv);
    img.setAttribute("class", "memeImgClass")
    newDiv.appendChild(img);

    //Add delete button to image, modified from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_display_element_hover
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class","hide");
    deleteBtn.setAttribute("value","Click to delete this meme");
    deleteBtn.innerText = "Click to delete this meme";
    deleteBtn.addEventListener("click", deleteMeme)
    newDiv.appendChild(deleteBtn);

    //Display top text line
    topTextDiv = document.createElement("p");
    newDiv.appendChild(topTextDiv);
    topTextDiv.innerText = topText;
    topTextDiv.setAttribute("class","topText");
    
    //Display bottom text line
    bottomTextDiv = document.createElement("p");
    newDiv.appendChild(bottomTextDiv);
    bottomTextDiv.innerText = bottomText;
    bottomTextDiv.setAttribute("class","bottomText");
    
    //Clear the form fields
    form.reset();
    console.log(document);    
    
}


//Delete the meme
function deleteMeme(e) {
    e.target.parentElement.remove();
    e.target.remove();
    return;
}
