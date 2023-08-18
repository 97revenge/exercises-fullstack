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

  const one = component.newElem(
    banner,
    "div",
    String(window.location.href.slice(-2))
  );
}
