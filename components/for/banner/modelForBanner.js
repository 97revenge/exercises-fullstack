export default function modelForBanner() {
  const forBanner = document.querySelectorAll("banner")[1];

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
  const { div, p } = component;

  const bannerElem = div.cloneNode(false);

  div.class = function () {
    this.style.width = "fit-content";
    this.style.height = "fit-content";
    this.style.marginLeft = "-100px";
    this.style.display = "flex";
    this.style.alignItems = "center";
    this.style.justifyContent = "space-between";
    this.style.top = "0px";
    this.style.borderRadius = "7px";
    this.style.backgroundColor = "#4caf4f";
  };

  p.class = function () {
    this.style.fontSize = "25px";
    this.style.padding = "25px 25px";
  };

  p.innerHTML = "<code>for</code>";

  div.appendChild(p);
  p.class();

  forBanner.appendChild(div);
  div.class();

  const appendElement = (appender, attach) => appender.appendChild(attach);
  appendElement(forBanner, bannerElem);

  const newElement = (appender, elemType, idType) => {
    const elem = component[elemType].cloneNode(false);
    elem.id = idType;
    return appendElement(appender, elem);
  };

  const one = newElement(bannerElem, "div", "for-exercises");
  newElement(bannerElem, "div", "for-exercises");
  newElement(bannerElem, "div", "for-exercises");

  const bannerItem = document.createElement("div");
  bannerItem.class = function () {
    this.style.marginTop = "100px";
  };

  const bannerTitle = document.createElement("p");

  bannerItem.class();
  bannerItem.appendChild(bannerTitle);

  const containerCard = document.querySelectorAll("#for-exercises");

  const cardElem = [...containerCard].map((item) => {
    return newElement(item, "div", "elemFor");
  });

  const elemFor = document.querySelectorAll("#elemFor");

  const cardItem = [...elemFor].map((item) => {
    return newElement(item, "img", "imgFor");
  });

  const contentValue = [...elemFor].map((item) => {
    return newElement(item, "div", "valueFor");
  });

  const valueFor = document.querySelectorAll("#valueFor");

  return {
    cardElem,
    cardItem,
    contentValue,
  };
}
