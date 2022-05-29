// const music = new Audio('music/both-of-us.mp3');
const music = document.querySelector("audio");
const img = document.querySelector(".rotate");
const play = document.getElementById("play");
const artist = document.getElementById("artist");
const title = document.getElementById("title");
const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
let myRange = document.getElementById('myRange');

music.addEventListener('timeupdate', () => {
    //console.log('timeupdate');
    progress = parseInt((music.currentTime / music.duration) * 100);
    //console.log(progress);
    myRange.value = progress;
});

myRange.addEventListener('change', () => {
    music.currentTime = (myRange.value * music.duration) / 100;
});

let playing = false;
const playMusic = () => {
    playing = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

const pauseMusic = () => {
    playing = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () => {
    if (playing) {
        pauseMusic();
    } else {
        playMusic();
    }
});

const songlist = [{
        name: "both-of-us",
        title: "Both of us",
        artist: "Beat1",
    },
    {
        name: "electronic-rock-king-around-here",
        title: "Electronic rock king around here",
        artist: "Beat2",
    },

    {
        name: "into-the-night",
        title: "Into the night",
        artist: "Beat3",
    },

    {
        name: "jazzy-abstract-beat",
        title: "Jazzy abstract beat",
        artist: "Beat4",
    },

    {
        name: "let-it-go",
        title: "Let it go",
        artist: "Beat5",
    },

    {
        name: "order",
        title: "Order",
        artist: "Beat6",
    },

    {
        name: "spirit-blossom",
        title: "Spirit Blossom",
        artist: "Beat7",
    },

    {
        name: "the-future-bass",
        title: "The future Bass",
        artist: "Beat8",
    },

    {
        name: "trailer-sport-stylish",
        title: "Trailer Sport Stylish",
        artist: "Beat9",
    },

    {
        name: "wish",
        title: "Wish",
        artist: "Beat10",
    },
];


//changing music data

const loadsong = (songlist) => {
    title.textContent = songlist.title;
    artist.textContent = songlist.artist;
    music.src = "music/" + songlist.name + ".mp3";
};

songindex = 0;
const nextSong = () => {
    songindex = (songindex + 1) % songlist.length;
    loadsong(songlist[songindex]);
    playing = true;
};

const prevSong = () => {
    songindex = (songindex - 1 + songlist.length) % songlist.length;
    loadsong(songlist[songindex]);
    playing = true;
};

forward.addEventListener("click", nextSong);
backward.addEventListener("click", prevSong);