// selecting elements with id
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
// the link contains API which is fetch API to random jokes
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";

// Arrow funtion to Evaluate
let getJoke = () => {
    jokeContainer.classList.remove("fade");    // remove the fade class in the container
    fetch(url)    // fetch url of API
    .then(data => data.json())  // Received in json format to javascript
    .then(item =>{    // parsed json objectstored in the item
        jokeContainer.textContent = `${item.joke}`;    // update the item.joke
        jokeContainer.classList.add("fade");     // add the class fade back to the container
    });
}
btn.addEventListener("click",getJoke);   // Added an Event Listener when click the btn it gives an new output
getJoke();  // calls the output
