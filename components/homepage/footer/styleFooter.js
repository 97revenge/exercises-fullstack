import axios from "axios";

export default function styleFooter() {
  const footer = (tag = "footer") => {
    const footer = document.querySelector("footer");

    axios
      .get(`http://localhost:4000/${tag}`, {
        headers: {
          class: "footer-light-one-column",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[0];
        footer.style = String(value);
        return value;
      });
  };

  const footerElem = (tag = "footer") => {
    const div = document.querySelector("footer").querySelectorAll("div")[0];
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[1];
        div.style = value;
      });
  };

  const footerItem = (tag = "footer") => {
    const div = document.querySelector("footer").querySelectorAll("div")[1];
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[2];
        div.style = value;

        return value;
      });
  };

  footerItem();
  footerElem();
  footer();
}
