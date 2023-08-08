import axios from "axios";
export default function styleifElseBanner() {
  const ifElseBanner = document.querySelectorAll("banner")[2];

  const ifElseItem = document.querySelectorAll("#ifElse-exercises");

  const heroSection = ifElseBanner.querySelectorAll("div")[1];
  heroSection.style.display = "flex";
  heroSection.style.gap = "75px";
  heroSection.style.alignItems = "center";
  // heroSection.style.marginTop = "200px";

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
}
