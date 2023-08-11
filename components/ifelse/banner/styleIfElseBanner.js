import axios from "axios";
export default function styleifElseBanner() {
  const ifElseBanner = document.querySelectorAll("banner")[2];

  const ifElseItem = document.querySelectorAll("#ifElse-exercises");

  const heroSection = ifElseBanner.querySelectorAll("div")[1];
  heroSection.style.display = "flex";
  heroSection.style.gap = "75px";
  heroSection.style.alignItems = "center";
  // heroSection.style.marginTop = "200px";

  const elemcises = document.querySelectorAll("#elemcises");

  const imgcises = document.querySelectorAll("#imgcises");

  const valueises = document.querySelectorAll("#valueises");

  const titleises = document.querySelectorAll("#titleises");

  const authorises = document.querySelectorAll("#authorises");

  const descriptionises = document.querySelectorAll("#descriptionises");

  const buttonises = document.querySelectorAll("#buttonises");

  const bannerElem = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        elem.style = data["figma-banner"];
        elem.id = "ifElse-banner";
        return data;
      });
  };
  bannerElem(ifElseBanner);

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

  bannerItem(ifElseItem);

  const cardElem = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...elemcises];
        value.forEach((item) => (item.style = data["card"]));

        return data;
      });
  };
  cardElem();

  const imgItem = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...imgcises];
        value.forEach((item, index) => {
          item.setAttribute("style", data["image"]);
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { ifelse: ie } = data;
              item.setAttribute("src", ie[index].img);
            });
        });
      });
  };
  imgItem("image");

  const cardValue = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...valueises];
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
        const value = [...titleises];
        value.forEach((item, index) => {
          item.style = data["title"];
          axios
            .get("http://localhost:4000/exercises/")
            .then((response) => response.data)
            .then((data) => {
              const { ifelse } = data;
              item.innerHTML = `carregando...💭`;
              setTimeout(() => {
                item.innerHTML = ifelse[index].name;
              }, 1500);
              item.setAttribute("href", `/${ifelse[index].id}`); // dar uma olhada nisto !!!
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
        const value = [...authorises];
        value.forEach((item, index) => {
          item.style = data["desc"];
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { ifelse } = data;
              item.innerHTML = `Carregando...`;
              console.log(ifelse[index].author);
              setTimeout(() => {
                item.innerHTML = `<u>Author:   </u> ${ifelse[index].author}`;
              }, 1600);
            });
        });
        return data;
      });
  };
  cardAuthor();

  const cardDescription = () => {
    axios
      .get(`http://localhost:4000/exercises/banner/`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...descriptionises];
        value.forEach((item, index) => {
          item.style = data["description"];
          axios
            .get(`http://localhost:4000/exercises/`)
            .then((response) => response.data)
            .then((data) => {
              const { ifelse } = data;
              item.innerHTML = `carregando...`;
              setTimeout(() => {
                item.innerHTML = ifelse[index].description;
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
        const value = [...buttonises];
        value.forEach((item) => {
          item.style = data["action"];
          item.innerHTML = `Vamos nessa 🚀`;
          item.addEventListener("click", () => {
            alert("`voce clicou em algum exercicio !!!`");
          });
        });
      });
  };

  buttonAction();
}
