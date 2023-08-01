export default function modelExercisesBanner() {
  const whileBanner = document.querySelectorAll("banner")[0];
  const forBanner = document.querySelectorAll("banner")[1];
  const ifElseBanner = document.querySelectorAll("banner")[2];

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

  // const { div } = Component.prototype.constructor;
  // const heroSection = div.cloneNode(false);
  // heroSection.id = "hero-section";

  const appendElement = (appender, attach) => appender.appendChild(attach);

  const newElement = (appender, elemType, idType) => {
    const elem = component[elemType].cloneNode(false);
    elem.id = idType;

    return appendElement(appender, elem);
  };

  newElement(whileBanner, "div", "for-exercises");
  newElement(whileBanner, "div", "for-exercises");
  newElement(whileBanner, "div", "for-exercises");
  newElement(forBanner, "div", "while-exercises");
  newElement(ifElseBanner, "div", "if-else-exercises");

  // banner.appendChild(heroSection);
}
