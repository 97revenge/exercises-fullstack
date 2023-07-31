import exercisesModelFooter from "./components/exercises/banner/exercisesModelFooter";
import exercisesStyleBanner from "./components/exercises/banner/exercisesStyleBanner";

import { banner } from "./components/homepage/banner";
import controllerFooter from "./components/homepage/footer/controllerFooter";
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

      controllerFooter();
    },
    "/exercises": () => {
      nav();
      exercisesStyleBanner();
      exercisesModelFooter();
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
      nav();
      modelFooter();
    },
  };

  // routes precisa receber uma requisicao com um nome criado, e assim
  // trazer isso para um valor que ainda será construido ...

  const path = window.location.pathname;
  return routes[path]();
};
