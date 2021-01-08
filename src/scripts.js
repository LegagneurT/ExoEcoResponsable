const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'studio-ghibli-logo.svg';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

const request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);
request.onload = function () {

  // Begin accessing JSON data here
  const data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    let i = 0;
    for (i ;i < data.length; ++i) {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = data[i].title;

      const p = document.createElement('p');
      data[i].description = data[i].description.substring(0, 300);
      p.textContent = `${data[i].description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    }
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
