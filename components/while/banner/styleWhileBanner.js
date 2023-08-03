import axios from "axios";
export default function styleWhileBanner() {
  const whileBanner = document.querySelectorAll("banner")[0];

  const whileContainer = document.querySelector("#banner-container");

  const div = document.createElement("div");

  console.log(whileBanner);

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

  const forSection = (tag = "banner") => {
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        for (let i = 0; i <= 2; i++) {
          const index = div.cloneNode(true);
          index.style = data["hero-section"];
          index.id = "while-item";
        }

        return data;
      });
  };
  forSection(whileBanner);
}
