import axios from "axios";

export default function styleModelAplyer() {
  const gettingDocument = (element) => {
    const result = document.querySelector("#" + element);

    return result;
  };

  const gettingAxios = {
    get: function (tag) {
      const url = new URL(`http://localhost:4000/style/aplyer/${tag}`);
      const patchname = url.pathname.split("/")[3];
      const value = gettingDocument(patchname);

      axios
        .get(url)
        .then((response) => response.data)
        .then((data) => {
          value.style = data;
        });
    },
  };

  gettingAxios.get("aplyer");
  gettingAxios.get("div-elem-flex");
  gettingAxios.get("div-elem-starter");
  gettingAxios.get("div-starter");
  gettingAxios.get("svg-starter");
  gettingAxios.get("p-starter");
  gettingAxios.get("div-elem");
  gettingAxios.get("div-elem-head");
  gettingAxios.get("p-exercises-name");
  gettingAxios.get("div-elem-desc");
  gettingAxios.get("div-ease");
  gettingAxios.get("p-ease");
  gettingAxios.get("div-item-star-show");
  gettingAxios.get("div-elem-content");
  gettingAxios.get("div-content");
  gettingAxios.get("p-content-description");
  gettingAxios.get("img-carbon");
}
