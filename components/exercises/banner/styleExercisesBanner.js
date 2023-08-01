// import { forSection } from "../homepage/banner";

import axios from "axios";

export default function exercisesStyleBanner() {
  const forBanner = document.querySelectorAll("#for-exercises")[0];
  const test = document.querySelectorAll("#for-exercises");
  console.log(test);

  const WhileBanner = document.getElementById("while-exercises");
  const ifElseBanner = document.getElementById("if-else-exercises");
  const banner = document.querySelector("banner");

  const bannerElem = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = data["figma-banner"];
        elem.id = "figma-banner";
        elem.style = value;

        return data;
      });
  };

  bannerElem(banner);

  const forSection = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        test[0].style = data["hero-section"];
        test[1].style = data["hero-section"];
        test[2].style = data["hero-section"];

        // const value = data["hero-section"];
        // elem.style = value;
        return data;
      });
  };
  forSection(forBanner);

  const whileSection = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = data["hero-section"];
        elem.style = value;
        return data;
      });
  };

  whileSection(WhileBanner);

  const ifSection = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = data["hero-section"];
        elem.style = value;
        return data;
      });
  };

  ifSection(ifElseBanner);
}
