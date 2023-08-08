export default function modelSection() {
  // const section = document.querySelectorAll("div section");

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

  const component = Object.assign(Component.prototype.constructor);
  // const { div, p } = component;
}
