import axios from "axios";
export default function styleForBanner() {
  const forBanner = document.querySelectorAll("banner")[1];

  const forItem = document.querySelectorAll("#for-exercises");

  const heroSection = forBanner.querySelectorAll("div")[1];
  heroSection.style.display = "flex";
  heroSection.style.gap = "75px";
  heroSection.style.alignItems = "center";
  // heroSection.style.marginTop = "200px";

  const elemFor = document.querySelectorAll("#elemFor");

  const imgFor = document.querySelectorAll("#imgFor");

  const valueFor = document.querySelectorAll("#valueFor");

  const titleFor = document.querySelectorAll("#titleFor");

  const authorFor = document.querySelectorAll("#authorFor");

  const descriptionFor = document.querySelectorAll("#descriptionFor");

  const buttonFor = document.querySelectorAll("#buttonFor");

  const bannerElem = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        elem.style = data["figma-banner"];
        elem.style.gap = "100px";
        elem.id = "for-banner";
        return data;
      });
  };
  bannerElem(forBanner);

  const bannerItem = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        elem[0].style = data["hero-section"];
        elem[1].style = data["hero-section"];
        elem[2].style = data["hero-section"];
        return data;
      });
  };

  bannerItem(forItem);

  const cardElem = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...elemFor];
        value.forEach((item) => {
          item.style = data["card"];
        });
      });
  };
  cardElem();

  const imgItem = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...imgFor];
        value.forEach((item, index) => {
          item.setAttribute("style", data["image"]);
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { for: fr } = data;
              console.log(fr[index].img);
              item.setAttribute("src", fr[index].img);
            });
        });
      });
  };
  imgItem();

  const cardValue = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...valueFor];
        value.forEach((item) => {
          item.style = data["content"];
        });
      });
  };
  cardValue();

  const cardTitle = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...titleFor];
        value.forEach((item, index) => {
          item.style = data["title"];
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { ifelse: ie } = data;
              item.innerHTML = `carregando...💭`;
              setTimeout(() => {
                item.innerHTML = ie[index].name;
              }, 1500);
            });
        });
      });
  };
  cardTitle();

  const cardAutor = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...authorFor];
        value.forEach((item, index) => {
          item.style = data["desc"];
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { for: fr } = data;
              item.innerHTML = `carregando...💭`;
              setTimeout(() => {
                item.innerHTML = `<u>Author: </u> ${fr[index].author}`;
              }, 1600);
            });
        });
      });
  };
  cardAutor();

  const cardDescription = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...descriptionFor];
        value.forEach((item, index) => {
          item.style = data["description"];
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { for: fr } = data;
              item.innerHTML = `carregando...💭`;
              setTimeout(() => {
                item.innerHTML = fr[index].description;
              }, 1700);
            });
        });
      });
  };
  cardDescription();

  const buttonAction = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...buttonFor];
        value.forEach((item) => {
          item.style = data["action"];
          item.innerHTML = `Vamos nessa 🚀`;
          item.addEventListener("click", () => {
            alert("voce clicou em algum exercicio !!!");
          });
        });
      });
  };
  buttonAction();
}
