import * as proto from "../../__proto__/__proto__";

export default function modelWhileAplyer() {
  const banner = document.querySelector("#banner-container");

  const component = Object.setPrototypeOf({}, proto);

  component.appendElem = function (appender, attach) {
    return appender.appendChild(attach);
  };
  component.newElem = function (appender, elemType, idType) {
    const elem = component.default[elemType].cloneNode(false);
    elem.id = idType;
    const { appendElem } = component;
    return appendElem(appender, elem);
  };

  const { newElem } = component;

  newElem(banner, "div", "aplyer");

  const newAplyer = document.querySelector("#aplyer");

  newElem(newAplyer, "div", "div-elem-flex");

  const divElemFlex = document.querySelector("#div-elem-flex");

  newElem(divElemFlex, "div", "div-elem-starter");

  const divElemStarter = document.querySelector("#div-elem-starter");

  newElem(divElemStarter, "div", "div-starter");
}
