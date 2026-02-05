const form = document.getElementById('MyForm');
const radiusInput = document.getElementById('radius');
const volumeInput = document.getElementById('volume');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const r = parseFloat(radiusInput.value.trim());
  
  if (isNaN(r) || r <= 0) {
    volumeInput.value = '';
    alert('Please enter a valid positive number for the radius');
    return;
  }
  
  const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
  volumeInput.value = volume.toFixed(2);
});

radiusInput.addEventListener('input', function() {
  volumeInput.value = '';
});