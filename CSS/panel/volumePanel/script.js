const slider = document.getElementById('sound-value');
const display = document.getElementById('no');
const icon = document.getElementById('icon');

function updateVolume() {
   const val = parseInt(slider.value);
   display.textContent = val;
   if (val === 0) {
      icon.src = 'icon/Volume-Mute.png';
      icon.alt = 'Muted';
   } else if (val <= 60) {
      icon.src = 'icon/Volume-Min.png';
      icon.alt = 'Low volume';
   } else {
      icon.src = 'icon/Volume-Max.png';
      icon.alt = 'High volume';
   }
}

updateVolume();