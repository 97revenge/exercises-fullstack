import axios from "axios";

export default function styleFooter() {
  const footer = (tag = "footer") => {
    const footer = document.querySelector("footer");
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = data["footer-light-one-column"];
        footer.style = value;
        return value;
      });

    return footer;
  };
  footer();

  const itemFooter = (tag = "footer") => {
    const footer = document.querySelector("footer");
    const div = footer.querySelectorAll("div")[0];

    axios(`http://localhost:4000/style/${tag}`, {
      method: "GET",
    })
      .then((response) => response.data)
      .then((data) => {
        const value = data["group-755"];
        div.style = value;
        return value;
      });
  };
  itemFooter();

  const valueFooter = (tag = "footer") => {
    const footer = document.querySelector("footer");
    const div = footer.querySelectorAll("div")[1];

    axios(`http://localhost:4000/style/${tag}`, {
      method: "GET",
    })
      .then((response) => response.data)
      .then((data) => {
        const value = data["group-1079"];
        div.style = value;
        return value;
      });
  };
  valueFooter();

  const headerText = (tag = "footer") => {
    const footer = document.querySelector("footer");
    const div = footer.querySelectorAll("div")[2];
    console.log(div);

    axios(`http://localhost:4000/style/${tag}`, {
      method: "GET",
    })
      .then((response) => response.data)
      .then((data) => {
        const value = data["header-text"];
        div.style = value;
        const pItem = () => {
          const { p } = Object.prototype.constructor;
          div.appendChild(p);
          p.innerHTML = `
          <strong>🆕</strong>
          `;
        };
        pItem();
        return value;
      });
  };
  headerText();

  const valueHeader = (tag = "footer") => {
    const footer = document.querySelector("footer");
    const div = footer.querySelectorAll("div")[3];
    console.log(div);

    axios(`http://localhost:4000/style/${tag}`, {
      method: "GET",
    })
      .then((response) => response.data)
      .then((data) => {
        const value = data["header-text-1"];
        div.style = value;
        const pItem = () => {
          const p = Object.prototype.constructor.p;
          const instance = p.cloneNode(false);
          div.appendChild(instance);
          instance.style = data["header-2"];
          instance.innerHTML = `
          <strong>${String(window.location.href).toLocaleUpperCase()}</strong>
          `;
        };
        pItem();
        return value;
      });
  };
  valueHeader();

  const valueItem = (tag = "footer") => {
    const footer = document.querySelector("footer");
    const div = footer.querySelectorAll("div")[4];

    axios(`http://localhost:4000/${tag}`, {
      method: "GET",
    })
      .then((response) => response.data)
      .then((data) => {
        const value = data["body"];
        div.style = value;
        return value;
      });
  };

  valueItem();
}
