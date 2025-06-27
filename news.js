const city = localStorage.getItem('city');
const country = localStorage.getItem('country');

const API_KEY = 'pub_fc960b0813fe46a7aa6fb6236dec1c28';

const apiUrl = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&language=en`;

fetch(apiUrl)
  .then(response => {
    if (!response.ok) throw new Error("API error");
    return response.json();
  })
  .then(data => {
    const results = document.getElementById('news-results');
    results.innerHTML = '';

    if (!data.results || data.results.length === 0) {
      results.innerHTML = '<p>No news found.</p>';
      return;
    }

    data.results.forEach(article => {
      const div = document.createElement('div');
      div.className = 'news-item';
      div.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.description || 'No description available.'}</p>
        <a href="${article.link}" target="_blank">Read more</a>
      `;
      results.appendChild(div);
    });
  })
  .catch(error => {
    document.getElementById('news-results').innerHTML = '<p>Error loading news.</p>';
    console.error(error);
  });
