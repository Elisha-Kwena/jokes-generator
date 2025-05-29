const jokeBtn = document.querySelector('.jokebtn');
const jokeBox = document.querySelector('.joke');

const apiKey = "57t/PF7zHdmhlyfMAwUPiQ==vN5BCHKMaLK7U278";
const apiUrl = "https://api.api-ninjas.com/v1/jokes";

    
async function getJoke(){
    jokeBox.textContent = "Loading...";
    
    const response = await fetch(apiUrl,{headers:{'X-Api-Key':apiKey}});
    if (!response.ok){
        jokeBox.textContent = "Failed to fetch a joke. Please try again later.";
        return;
    }
    const data = await response.json();
    console.log(data);
    jokeBox.textContent = `"${data[0].joke}"` || `data[0].joke` || "No joke found. Please try again.";
}

jokeBtn.addEventListener('click',getJoke);
getJoke(); 