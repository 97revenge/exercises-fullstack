import axios from "axios";

export default function styleModelAplyer() {
  const aplyer = document.querySelector("#aplyer");

  const gettingDocument = (element) => {
    const result = aplyer.querySelector("#" + element);

    return result;
  };

  const gettingAxios = (tag) => {
    const url = new URL(`http://localhost:4000/style/aplyer/${tag}`);

    axios
      .get(url)
      .then((response) => response.data)
      .then((data) => {
        const value = gettingDocument(url.pathname.split("/")[3].trim());

        value.style = data;
      });
  };

  gettingAxios("aplyer");
  gettingAxios("div-elem-flex");

  gettingAxios("div-elem-starter");
  gettingAxios("div-starter");
}
