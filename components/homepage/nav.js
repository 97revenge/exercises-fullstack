import axios from "axios";

export function nav() {
  const header = document.querySelector("header");

  const p = document.createElement("p");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const input = document.createElement("input");

  const shearchParagragh = input.cloneNode(false);
  const imgShearch = img.cloneNode(false);
  const titleDashboard = p.cloneNode(false);
  const elemShearchBar = div.cloneNode(false);

  const imgMenu = img.cloneNode(false);
  const elemMenu = div.cloneNode(false);
  elemMenu.appendChild(imgMenu);

  elemShearchBar.appendChild(shearchParagragh);
  elemShearchBar.appendChild(imgShearch);

  header.appendChild(elemMenu);
  header.appendChild(elemShearchBar);
  header.appendChild(titleDashboard);

  // var senaiIMG = document.querySelectorAll("img")[2]; // REFATORAR !!!
  // senaiIMG.style = `height: 50px; width: auto;`;

  const headerNav = (tag = "nav") => {
    axios(`http://localhost:4000/${tag}`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[0];
        header.style = String(value);
      });
  };
  const elemShearch = (tag = "nav") => {
    axios
      .get(`http://localhost:4000/${tag}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[1];
        titleDashboard.style = String(value);
        titleDashboard.textContent = `Fullstack Exercises`;
      });
  };

  const itemNav = (tag = "nav") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[2];
        elemShearchBar.style = String(value);
      });
  };

  const itemImg = (tag = "db") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data);
        imgShearch.src = String(value);
        imgShearch.style = `

        
        `;
      });

    const elemImg = (tag = "nav") => {
      axios
        .get(`http://localhost:4000/${tag}`)
        .then((response) => response.data)
        .then((data) => {
          const value = Object.values(data)[3];
          imgShearch.style = String(value);
          return data;
        });
    };
    elemImg();
  };

  const itemShearch = (elem, tag = "nav") => {
    axios
      .get(`http://localhost:4000/${tag}`, {
        headers: {
          // hasAuthorization: false,
        },
      })
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[4];
        elem.style = String(value);
        elem.placeholder = `Procurar 👁‍🗨`;
        return data;
      });
  };

  const elemSideMenu = async (elem, tag = "nav") => {
    const fetch = await fetch(`http://localhost:4000/${tag}`);

    const response = await response.json();

    const value = await Object.values(response)[5];

    elem.style = string(value);

    return response;
  };

  const itemNotification = (elem, tag = "db") => {
    axios
      .get(`http://localhost:4000/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        const value = Object.values(data)[1];
        elem.src = String(value);
        return data;
      });

    const itemImg = function (tag = "nav") {
      axios
        .get(`http://localhost:4000/${tag}`)
        .then((response) => response.data)
        .then((data) => {
          const value = Object.values(data)[6];
          imgMenu.style = String(value);
          imgMenu.innerHTML = `
          
          
          `;
          return data;
        });

      itemImg();
    };
  };

  itemNotification(imgMenu);
  elemSideMenu(elemMenu);
  itemShearch(shearchParagragh);
  itemImg();
  itemNav();
  elemShearch();
  headerNav();
}
