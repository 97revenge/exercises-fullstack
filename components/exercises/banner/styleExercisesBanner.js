// import { forSection } from "../homepage/banner";

import axios from "axios";

export default function exercisesStyleBanner() {
  const forBanner = document.querySelectorAll("#for-exercises");
  const WhileBanner = document.querySelectorAll("#while-exercises");
  const ifElseBanner = document.querySelectorAll("#if-else-exercises");

  const div = document.querySelector("#banner-container");

  const allBanners = document.querySelectorAll("banner");

  const container = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        elem.style = data["container"];

        return data;
      });
  };

  container(div);

  const bannerElem = (elem, tag = "banner") => {
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        for (let i = 0; i < allBanners.length; i++) {
          elem[i].style = data["figma-banner"];
        }
        return data;
      });
  };

  bannerElem(allBanners);

  const forSection = (elem, tag = "banner") => {
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
  forSection(forBanner);

  const whileSection = (elem, tag = "banner") => {
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

  whileSection(WhileBanner);

  const ifSection = (elem, tag = "banner") => {
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

  ifSection(ifElseBanner);
}
