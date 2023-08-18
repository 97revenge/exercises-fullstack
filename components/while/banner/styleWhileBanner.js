import axios from "axios";
export default function styleWhileBanner() {
  const whileBanner = document.querySelectorAll("banner")[0];

  const whileItem = document.querySelectorAll("#while-exercises");

  const heroSection = whileBanner.querySelectorAll("div")[1];
  heroSection.style.display = "flex";
  heroSection.style.gap = "75px";
  heroSection.style.alignItems = "center";
  // heroSection.style.marginTop = "200px";

  const elemWhile = document.querySelectorAll("#elemWhile");

  const imgWhile = document.querySelectorAll("#imgWhile");

  const valueWhile = document.querySelectorAll("#valueWhile");

  const titleWhile = document.querySelectorAll("#titleWhile");

  const authorWhile = document.querySelectorAll("#authorWhile");

  const descriptionWhile = document.querySelectorAll("#descriptionWhile");

  const buttonWhile = document.querySelectorAll("#buttonWhile");

  const bannerElem = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        elem.style = data["figma-banner"];
        elem.id = "while-banner";
        return data;
      });
  };
  bannerElem(whileBanner);

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

  bannerItem(whileItem);

  const cardElem = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...elemWhile];
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
        const value = [...imgWhile];
        value.forEach((item, index) => {
          item.setAttribute("style", data["image"]);
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { while: wl } = data;

              item.setAttribute("src", wl[index].img);
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
        const value = [...valueWhile];
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
        const value = [...titleWhile];
        value.forEach((item, index) => {
          item.style = data["title"];
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { while: wl } = data;
              item.innerHTML = `carregando...💭`;
              setTimeout(() => {
                item.innerHTML = wl[index].name;
              }, 1500);
              return data;
            });
        });
        return data;
      });
  };
  cardTitle();

  const cardAuthor = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...authorWhile];
        value.forEach((item, index) => {
          item.style = data["desc"];
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { while: wl } = data;
              item.innerHTML = `Carregando...💭`;
              setTimeout(() => {
                item.innerHTML = `<a>Author:</a>  ${wl[index].author}`;
              }, 1300);
            });
        });
      });
  };
  cardAuthor();

  const cardDescription = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...descriptionWhile];
        value.forEach((item, index) => {
          item.style = data["description"];
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { while: wl } = data;
              item.innerHTML = `Carregando...💭`;
              setTimeout(() => {
                item.innerHTML = wl[index].description;
              }, 1100);
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
        const value = [...buttonWhile];
        value.forEach((item, index) => {
          item.style = data["action"];
          item.innerHTML = `Vamos nessa 🚀`;
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { while: wl } = data;

              item.addEventListener("click", () => {
                window.location.href = `http://localhost:5173/${wl[index].id}`;
              });
            });
        });
      });
  };

  buttonAction();
}
