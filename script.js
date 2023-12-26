const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const movieBox = document.querySelector("#movieBox")
async function getMoveiData(apiurl) {
    const response = await fetch(apiurl)
    const data = await response.json()
    console.log(data);
    creataCard(data)

}
getMoveiData(APIURL)

function creataCard(data) {
    movieBox.innerHTML =""
    data.results.forEach(element => {
        const div = document.createElement("div")
        div.className = "card";
        div.innerHTML =
            `
        <img src="${IMGPATH + element.poster_path}" alt="">
        <div class="overlay">
            <h1>${element.title}</h1>
            <label for="">Overview
                <p>${element.overview}</p>
            </label>
        </div>
    `
        movieBox.appendChild(div)
    });
}

const search = document.querySelector("#search")

search.addEventListener("keyup",(e)=>{
    e.preventDefault()
        if(e.target.value === ""){
            console.log("kaushal");
            getMoveiData(APIURL)
        }else{
            getMoveiData(`${SEARCHAPI + e.target.value}`)
            console.log(`${SEARCHAPI + e.target.value}`)
        }
       
})

