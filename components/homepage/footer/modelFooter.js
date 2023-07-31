export default function modelFooter() {
  const footer = document.querySelector("footer");

  function Component() {
    return {};
  }

  Component.prototype.constructor = new Object({
    div: document.createElement("div"),
    p: document.createElement("p"),
    img: document.createElement("img"),
    a: document.createElement("a"),
    title: document.createElement("title"),
  });

  const component = Object.assign(Component.prototype.constructor, {
    brand: document.createElement("brand"),
  });

  const appendElement = (appender, attach) => appender.appendChild(attach);

  const newElement = (appender, elemType) => {
    const element = component[elemType].cloneNode(false);
    return appendElement(appender, element);
  };

  newElement(footer, "div");

  for (let i = 0; i <= 10; i++) {
    newElement(footer.querySelectorAll("div")[i], "div");
  }
}
