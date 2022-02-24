const base_url = './api/';
var isPlayed = false;

document.addEventListener("DOMContentLoaded", () => {
    getPesan();
    const links = document.querySelectorAll('.nav-link');
    for (const link of links) {
        link.addEventListener("click", clickHandler);
    }
})

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const elementPosition = document.querySelector(href).offsetTop;
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    const offset = (width < 975) ? 362 : 74;
    const offsetTop = elementPosition - offset
    
    scroll({
    top: offsetTop,
    behavior: "smooth"
    });
}

function play() {
    var btn = document.getElementById("btn-play");
    var audio = document.getElementById("audio");
    if(isPlayed) {
        console.log("Menghentikan lagu");
        audio.pause();
        isPlayed = false;
        btn.innerHTML = '<i class="material-icons">play_arrow</i>';
    }
    else {
        console.log("Memulai lagu");
        audio.play();
        isPlayed = true;
        btn.innerHTML = '<i class="material-icons">stop</i>';
    }
}

function postPesan() {
  console.log("A");
  var d = document.getElementById("kerabat");

  var nama = document.getElementById("nama").value;
  var kerabat = d.options[d.selectedIndex].value;
  var pesan =  document.getElementById("pesana").value;
  var data = new FormData();
  data.append('nama', nama);
  data.append('kerabat', kerabat);
  data.append('pesan', pesan);
  for (var value of data.values()) {
    console.log(value);
 }

  if(kerabat !== "" && nama !== "" && pesan !== "") {
      fetch(base_url+'post.php', {
      method: 'POST',
      body: data
      })
      .then(response => {
          console.log(response);
      })
      .then(getPesan)
      .then(pesanSent)
      .catch(err => {
          console.log(err)
      })
  } else {
      alert('Data tidak lengkap');
  }
}

function getPesan() {
  fetch(base_url+'get.php')
  .then(res => res.json())
  .then(addPesan)
  .catch(err => console.log(err))
}

function pesanSent() {
  alert('Pesan Terkirim!');
  document.getElementById('nama').value = '';
  document.getElementById('pesana').value = '';
}

function addPesan(datas) {
  let html = '';
  datas.forEach((dt) => {
    html += `
      <div class="pesan">
      <h4 class="pesan-text">${dt.nama}</h4>
      <p class="pesan-text"><b>${dt.kerabat}</b></p>
      <p class="pesan-text">"${dt.pesan}"</p>
      </div>
    `;
  })
  document.getElementById('pesan').innerHTML = html;
}

function bukaMap() {
  window.open("https://goo.gl/maps/j3c3F1mYnfVtts8E8"); //Link Lokasi di Google Maps
}
