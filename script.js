function submitLocation() {
  const city = document.getElementById('city').value.trim();
  const country = document.getElementById('country').value.trim().toLowerCase();

  if (!city || !country) {
    alert('Please enter both city and country code (e.g. "in", "us").');
    return;
  }

  localStorage.setItem('city', city);
  localStorage.setItem('country', country);
  window.location.href = 'news.html';
}
