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
              const { ifelse: ie } = data;
              console.log(ie[index].img);
              item.setAttribute("src", ie[index].img);
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
}
