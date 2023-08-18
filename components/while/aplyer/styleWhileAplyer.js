import axios from "axios";

export default function styleModelAplyer() {
  const banner = document.querySelector("#banner-container");

  banner.styleQuery = (data, query) => {
    banner.style = data[query];
  };

  const bannerElem = () => {
    axios
      .get(``)
      .then((response) => response.data)
      .then((data) => banner.styleQuery(data, "blablaba"));
  };

  bannerElem();
}
