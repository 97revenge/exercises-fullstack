import { banner } from "./components/homepage/banner"; // refactor alert !!!
import controllerFooter from "./components/homepage/footer/controllerFooter";

import { nav } from "./components/homepage/nav"; // refactor alert !!!

import * as whileFlow from "./components/__proto__/flow-exercises/__while__";
import * as forFlow from "./components/__proto__/flow-exercises/__for__";
import * as ifElseFlow from "./components/__proto__/flow-exercises/__ifelse__";

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
import controllerWhileAplyer from "./components/while/aplyer/controllerWhileAplyer";

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

      controllerFooter();

      // controllerExercisesBanner(); // "esse funciona como o bloco total ...
      //  ele precisa ser despedacado para while, for , e ifelse por enquanto,
      // até o momento que essas relacoes forem declarativas."
    },

    "/while": () => {
      nav();
      controllerWhileBanner();
      controllerFooter();
    },
    "/for": () => {
      nav();
      controllerForBanner();
      controllerFooter();
    },
    "/ifelse": () => {
      nav();
      controllerIfElseBanner();
      controllerFooter();
    },

    "/1": () => {
      const { whileFirst: wf } = whileFlow.default;
      nav();
      controllerWhileAplyer({
        title: wf,
        dificulty: "Bem Fácil 🎃",
      });
      controllerFooter();
    },
    "/2": () => {
      const { whileSecond: ws } = whileFlow.default;

      nav();
      controllerWhileAplyer({
        title: ws,
        dificulty: "Bem Fácil 🧨",
      });
      controllerFooter();
    },
    "/3": () => {
      const { whileThird: wt } = whileFlow.default;
      nav();
      controllerWhileAplyer("Liberado", wt);

      controllerFooter();
    },
    "/4": () => {
      const { forFirst: ff } = forFlow.default;
      nav();
      controllerWhileAplyer("Verifica", ff);
      controllerFooter();
    },
    "/5": () => {
      const { forSecond: fs } = forFlow.default;
      nav();
      controllerWhileAplyer("Liberado", fs);
      controllerFooter();
    },
    "/6": () => {
      const { forThird: ft } = forFlow.default;
      nav();
      controllerWhileAplyer("Liberado", ft);
      controllerFooter();
    },
    "/7": () => {
      nav();
      controllerWhileAplyer("Liberado", ifElseFlow.default["ifElseFirst"]);
      controllerFooter();
    },
    "/8": () => {
      nav();
      controllerWhileAplyer("Liberado", ifElseFlow.default["ifElseSecond"]);
      controllerFooter();
    },
    "/9": () => {
      nav();
      controllerWhileAplyer("Liberado", ifElseFlow.default["ifElseThird"]);
      controllerFooter();
    },
  };

  // routes precisa receber uma requisicao com um nome criado, e assim
  // trazer isso para um valor que ainda será construido ...

  const path = window.location.pathname;
  return routes[path]();
};
