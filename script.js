let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');
let songInfo = document.getElementsByClassName('songInfo');
// let songItems = array.from(document.getElementsByClassName('poster'));
let songs = [
    {songName:"O Bedardeya", filepath:"music/1.mp3", coverpath:"img/1.jpg"},
    {songName:"Humnava", filepath:"music/2.mp3", coverpath:"img/2.jpg"},
    {songName:"Hum Mar Jayenge", filepath:"music/3.mp3", coverpath:"img/3.jpg"},
    {songName:"Humdard", filepath:"music/4.mp3", coverpath:"img/4.jpg"},
    {songName:"Bandeya Rey Bandeya", filepath:"music/5.mp3", coverpath:"img/5.jpg"},
    {songName:"Maiya-Mainu", filepath:"music/6.mp3", coverpath:"img/6.jpg"},
    {songName:"Phir Kabhi", filepath:"music/7.mp3", coverpath:"img/7.jpg"},
] 
//audioElement.play();

// songItems.forEach((element, i) => {
//     element.getElementsByTagName("img")[0].src = songs[i].coverpath;
// });

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.src = "img/pause-solid.svg";
    }
    else{
        audioElement.pause();
        masterPlay.src = "img/play-solid.svg"; 
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change' || 'click', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.src = "img/play-solid.svg";
        })
}
Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.src = "img/pause-solid.svg";
            audioElement.src = "music/"+songIndex+".mp3";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.src = "img/pause-solid.svg";
            document.getElementById('playImage').src = "img/"+songIndex+".jpg";
            document.getElementById('playText').innerText = songs[songIndex-1].songName;
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex = 1;
    }
    else{
        songIndex += 1;
    }
    makeAllPlays();
    console.log(songIndex);

    audioElement.src = "music/"+(songIndex)+".mp3";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.src = "img/pause-solid.svg";
            document.getElementById('playImage').src = "img/"+songIndex+".jpg";
            document.getElementById('playText').innerText = songs[songIndex-1].songName;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex = 7;
    }
    else{
        songIndex -= 1;
    }
    makeAllPlays();
    console.log(songIndex);
    audioElement.src = "music/"+(songIndex)+".mp3";
            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.src = "img/pause-solid.svg";
            document.getElementById('playImage').src = "img/"+songIndex+".jpg";
            document.getElementById('playText').innerText = songs[songIndex-1].songName;
})