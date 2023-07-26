import axios from "axios";

const div = document.createElement("div");
export const heroSection = div.cloneNode(true);

function banner() {
  const banner = document.querySelector("banner");

  const p = document.createElement("p");
  const btn = document.createElement("a");
  const img = document.createElement("img");

  const frameOne = div.cloneNode(false);
  const text = div.cloneNode(false);
  const lessonsAndInsights = p.cloneNode(false);
  const whereToGrow = p.cloneNode(false);
  const button = btn.cloneNode(false);
  const illustration = img.cloneNode(false);

  text.appendChild(lessonsAndInsights);
  text.appendChild(whereToGrow);
  text.appendChild(button);

  frameOne.appendChild(text);
  heroSection.appendChild(illustration);
  heroSection.appendChild(frameOne);

  banner.appendChild(heroSection);

  const elemSection = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[0];
        elem.style = value;
        return data;
      });
  };

  const itemFrame = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[1];
        elem.style = value;
        return data;
      });
  };

  const itemText = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[2];
        elem.style = value;
        return data;
      });
  };

  const itemParagraph = (elemOne, elemTwo, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const valueOne = Object.values(data)[3];
        const valueTwo = Object.values(data)[4];

        elemOne.style = valueOne;
        elemOne.innerHTML = `Aprenda os blocos de construção básicos do <code style="font-size: 55px; background-color:#4caf4f;"><u>Javascript</u></code> com exercícios divertidos!`;
        elemTwo.style = valueTwo;
        elemTwo.innerHTML = `Em meus exercícios do Senai, 
        explorei o poder das instruções <code style="font-size: 25px;" onmouseover="this.style.backgroundColor='#4caf4f';" onmouseout="this.style.backgroundColor='transparent';"><u>for</u></code>,
         <code style="font-size: 25px;" onmouseover="this.style.backgroundColor='#4caf4f';" onmouseout="this.style.backgroundColor='transparent';"><u>while</u></code> e <code style="font-size: 25px;" onmouseover="this.style.backgroundColor='#4caf4f';" onmouseout="this.style.backgroundColor='transparent';"><u>if</u></code> do 
         JavaScript, desbloqueando a capacidade de iterar, controlar o fluxo e tomar decisões, capacitando-me a criar 
         códigos dinâmicos e eficientes 🤖💭`;

        return data;
      });
  };

  const itemButton = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[5];
        elem.style = value;
        elem.setAttribute("href", "/exercises");
        elem.innerHTML = "Vamos Iniciar 🚀";
      });
  };

  const elemImg = (tag = "db") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[2];
        illustration.src = value;
      });

    const elemStyle = (tag = "banner") => {
      axios
        .get(`http://localhost:4000/${tag}`)
        .then((response) => response.data)
        .then((data) => {
          const value = Object.values(data)[6];
          illustration.style = value;
        });
    };

    elemStyle();
  };
  elemImg();
  itemButton(button);
  itemParagraph(lessonsAndInsights, whereToGrow);
  itemText(text);
  itemFrame(frameOne);
  elemSection(heroSection);
}

export { banner };
