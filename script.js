const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const myDiv = document.querySelector("#myDiv");
const posterImg = document.createElement("img");
const title = document.createElement("h3");


const apiKey = "5a76bde5";

console.log(searchInput);

function getValue() {
  let searchTerm = searchInput.value;
  let apiURL = `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`;
  console.log(apiURL);
  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      let dataObj = data;
      console.log(dataObj);
      console.log(dataObj.Director);
      posterImg.src = dataObj.Poster;
      title.textContent = `Title: ${dataObj.Title}`;
      myDiv.append(posterImg, title);
    });
}

searchBtn.addEventListener("click", getValue);
