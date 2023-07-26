// import { elemSection } from "../homepage/banner";

import axios from "axios";

export default function exercisesBanner() {
  //   const value = Object.create(banner());
  const div = document.createElement("div");

  const heroSection = div.cloneNode(true);

  document.body.appendChild(heroSection);

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

  elemSection(heroSection);

  console.log(value);
}
