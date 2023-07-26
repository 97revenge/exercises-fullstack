import exercisesBanner from "./components/exercises/exercisesBanner";
import { banner } from "./components/homepage/banner";
import modelFooter from "./components/homepage/footer/modelFooter";
import styleFooter from "./components/homepage/footer/styleFooter";
import { nav } from "./components/homepage/nav";
import section from "./components/homepage/section";

import "./style.css";

window.onload = () => {
  const routes = {
    "/": () => {
      nav();

      banner();

      section();

      modelFooter();
      styleFooter();
    },
    "/exercises": () => {
      nav();
      exercisesBanner();
      modelFooter();
    },

    "/while": () => {
      nav();
      modelFooter();
    },
    "/for": () => {
      nav();
      modelFooter();
    },
    "/ifelse": () => {
      nav: {
        nav();
      }
      footer: {
        modelFooter();
      }
    },
  };

  const path = window.location.pathname;
  return routes[path]();
};
