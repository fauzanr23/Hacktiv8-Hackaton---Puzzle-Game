// Function Kondisi saat Musik On and Off.

let music = document.getElementById("audio");
let musicOn = false;

function btnControlMusic() {
  let bgMusic = document.querySelector(".btnMusic");
  if (!musicOn) {
    music.play();
    musicOn = true;
    bgMusic.classList.add("bgMusic");
  } else {
    music.pause();
    musicOn = false;
    bgMusic.classList.remove("bgMusic");
  }
}

// Function Kondisi untuk dark and light Mode

function btnControlMode() {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }
}

// Function untuk input nama

function btnInputName() {
  const name = document.getElementById("nameInput").value;

  if (name === "") {
    Swal.fire({
      icon: "warning",
      title: "Oops...",
      text: "Masukkan nama dulu ya",
    });
    return;
  }
  window.location.href = "game.html"
}


// Fungsi untuk memulai game
function startGame() {
  const container = document.getElementById('mainContainer');
  container.classList.add('fade-out');
}

// Easter egg: tekan spasi untuk start
document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    startGame();
  }
});


//Database gambar kartu

let dbGambar = [
  { id: 1, gambar: "apple", src: "Asset/Images/Kartu/apple.png" },
  { id: 2, gambar: "apple", src: "Asset/Images/Kartu/apple.png" },
  { id: 3, gambar: "bananas", src: "Asset/Images/Kartu/bananas.png" },
  { id: 4, gambar: "bananas", src: "Asset/Images/Kartu/bananas.png" },
  { id: 5, gambar: "cherries", src: "Asset/Images/Kartu/cherries.png" },
  { id: 6, gambar: "cherries", src: "Asset/Images/Kartu/cherries.png" },
  { id: 7, gambar: "dragon fruit", src: "Asset/Images/Kartu/dragon-fruit.png" },
  { id: 8, gambar: "dragon fruit", src: "Asset/Images/Kartu/dragon-fruit.png" },
  { id: 9, gambar: "grapes", src: "Asset/Images/Kartu/grapes.png" },
  { id: 10, gambar: "grapes", src: "Asset/Images/Kartu/grapes.png" },
  { id: 11, gambar: "orange", src: "Asset/Images/Kartu/orange.png" },
  { id: 12, gambar: "orange", src: "Asset/Images/Kartu/orange.png" },
  { id: 13, gambar: "passion fruit", src: "Asset/Images/Kartu/passion-fruit.png" },
  { id: 14, gambar: "passion fruit", src: "Asset/Images/Kartu/passion-fruit.png" },
  { id: 15, gambar: "pineapple", src: "Asset/Images/Kartu/pineapple.png" },
  { id: 16, gambar: "pineapple", src: "Asset/Images/Kartu/pineapple.png" },
  { id: 17, gambar: "strawberry", src: "Asset/Images/Kartu/strawberry.png" },
  { id: 18, gambar: "strawberry", src: "Asset/Images/Kartu/strawberry.png" },
  { id: 19, gambar: "watermelon", src: "Asset/Images/Kartu/watermelon.png" },
  { id: 20, gambar: "watermelon", src: "Asset/Images/Kartu/watermelon.png" }
]


//function display gambar di kartu

let dbTemp = []

function randomGambar() {

  if (dbTemp.length === dbGambar.length) {
    return
  }
  let random = Math.floor(Math.random() * 20)
  let object = dbGambar[random]

  let validasi = validasiGambar(object) //

  if (validasi === false) {
    return object.src
  } else {
    return randomGambar()
  }
}


function validasiGambar(object) {

  for (let i = 0; i < dbTemp.length; i++) {
    let perObj = dbTemp[i]

    if (object.id === perObj.id) {
      return true
    }
  }

    dbTemp.push(object)
    return false
}

let cards = document.getElementsByClassName("cardImg")
for (let i = 0; i < cards.length; i++) {
  let perCard = cards[i] //object
  let Gambar = randomGambar()
  if (Gambar) {
    perCard.src = Gambar
  }

}




