// import { elemSection } from "../homepage/banner";

import axios from "axios";

export default function exercisesStyleBanner() {
  const div = document.getElementById("hero-section");

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

  elemSection(div);
}
