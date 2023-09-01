console.log("Welcome to Spotify")

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songItem')

let song = [
    {songName: "Salam-e-Ishq", filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "jay shree ram", filePath: "song/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Radhe Radhe ", filePath: "song/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Pata nhi kis Rup mai a kar", filePath: "song/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Hanuman Chalisha", filePath: "song/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Bum Bhole Bum", filePath: "song/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Shiv Tandav", filePath: "song/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Har Ghar Bhagwa", filePath: "song/8.mp3", coverPath: "cover/8.jpg"},

]

songItems.forEach((element, i)=>{
   element.getElementByTagName("img")[0].src = songs[i].coverPath;  
   lement.getElementByClassName("songName")[0].innerText = songs[i].songName;
})

// audioElement.play();

// Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove(' fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-Pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
        audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
 
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle'); 
        element.classList.add('fa-play-circle');
    })
} 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
           makeAllplays(); 
           index = parseInt(e.target.id);
           e.target.classList.remove('fa-play-circle');    
           e.target.classList.add('fa-pause-circle');  
           audioElement.src = 'songs/${index+1}.mp3';
           audioElement.currentTime = 0;
           audioElement.play();
           masterPlay.classList.remove('fa-Play-circle');
           masterPlay.classList.add('fa-pause-circle');
    })
})