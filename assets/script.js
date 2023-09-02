const loadingMessage = document.getElementById('loading');
function fetchData() {
  fetch('https://the-lazy-media-api.vercel.app/api/tech?page=1')
    .then(response => response.json())
    .then(data => {
  
      const dataContainer = document.getElementById('content');
      dataContainer.innerHTML = ''; 
      loadingMessage.style.display = 'none';
      const limit = 4; 
      for (let i = 0; i < limit && i < data.length; i++) {
        const item = data[i];
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');
        itemElement.innerHTML = `
          <h2>${item.title}</h2>
          <img src="${item.thumb}" alt="${item.title}">
          <p>${item.desc}</p>
         
          <a class="read-more" href="https://thelazy.media/${item.key}">Read More</a>
         
        `;
        dataContainer.appendChild(itemElement);
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}


fetchData();

    document.querySelector('.nav-button').addEventListener('click', function () {
        document.querySelector('.nav').classList.toggle('active');
    });