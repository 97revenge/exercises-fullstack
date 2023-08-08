import { banner } from "./components/homepage/banner"; // refactor alert !!!
import controllerFooter from "./components/homepage/footer/controllerFooter";
import { nav } from "./components/homepage/nav"; // refactor alert !!!
import section from "./components/homepage/section/styleSection"; // refactor alert !!!
/homepage/;
import controllerSection from "./components/homepage/section/controllerSection";

import controllerExercisesBanner from "./components/exercises/banner/controllerExercisesBanner";

/while/;
import controllerWhileBanner from "./components/while/banner/controllerWhileBanner";

/for/;
import controllerForBanner from "./components/for/banner/controllerForBanner";

/ifelse/;
import controllerIfElseBanner from "./components/ifelse/banner/controllerIfElseBanner";

import "./style.css";

window.onload = () => {
  const routes = {
    "/": () => {
      nav();
      banner();
      controllerSection();
      controllerFooter();
    },
    "/exercises": () => {
      nav();
      controllerExercisesBanner();

      controllerWhileBanner();
      controllerForBanner();
      controllerIfElseBanner();
      controllerFooter();

      // controllerExercisesBanner(); // "esse funciona como o bloco total ...
      //  ele precisa ser despedacado para while, for , e ifelse por enquanto,
      // até o momento que essas relacoes forem declarativas."
    },

    "/while": () => {
      nav();
      controllerWhileBanner();
    },
    "/for": () => {
      nav();
      controllerForBanner();
    },
    "/ifelse": () => {
      nav();
      controllerIfElseBanner();
    },

    "/ifelse/exercise#1": () => {
      nav();
    },
  };

  // routes precisa receber uma requisicao com um nome criado, e assim
  // trazer isso para um valor que ainda será construido ...

  const path = window.location.pathname;
  return routes[path]();
};
