// Yükleme animasyonu
let progressBar = document.getElementById("progress-bar");
let percentageText = document.getElementById("percentage-text");
let progress = 0;

function simulateLoading() {
  if (progress < 100) {
    progress++;
    progressBar.style.width = progress + "%";
    percentageText.innerText = progress + "%";
    setTimeout(simulateLoading, 50); // Hızı ayarlamak için süreyi değiştirebilirsiniz.
  }
}

simulateLoading();

// Ses kontrolü
let video = document.getElementById("background-video");
video.muted = true; // Başlangıçta sessiz

function toggleSound() {
  video.muted = !video.muted;
  document.querySelector(".sound-toggle").innerText = video.muted ? "🔇" : "🔊";
}

// Code By Ardelys