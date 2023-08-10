export default function modelWhileBanner() {
  const whileBanner = document.querySelectorAll("banner")[0];

  function Component() {
    return {};
  }

  Component.prototype.constructor = new Object({
    div: document.createElement("div"),
    p: document.createElement("p"),
    img: document.createElement("img"),
    a: document.createElement("a"),
    title: document.createElement("title"),
    button: document.createElement("button"),
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

  p.innerHTML = "<code>WHILE</code>";

  div.appendChild(p);
  p.class();

  whileBanner.appendChild(div);
  div.class();

  const appendElement = (appender, attach) => appender.appendChild(attach);
  appendElement(whileBanner, bannerElem);

  const newElement = (appender, elemType, idType) => {
    const elem = component[elemType].cloneNode(false);
    elem.id = idType;
    return appendElement(appender, elem);
  };

  const one = newElement(bannerElem, "div", "while-exercises");
  newElement(bannerElem, "div", "while-exercises");
  newElement(bannerElem, "div", "while-exercises");

  const bannerItem = document.createElement("div");
  bannerItem.class = function () {
    this.style.marginTop = "100px";
  };

  const bannerTitle = document.createElement("p");

  console.log(bannerItem);
  bannerItem.class();
  bannerItem.appendChild(bannerTitle);

  const containerCard = document.querySelectorAll("#while-exercises");

  const cardElem = [...containerCard].map((item) => {
    return newElement(item, "div", `elemWhile`);
  });
  const elemWhile = document.querySelectorAll("#elemWhile");

  const cardItem = [...elemWhile].map((item) => {
    return newElement(item, "img", "imgWhile");
  });

  const contentValue = [...elemWhile].map((item) => {
    return newElement(item, "div", `valueWhile`);
  });

  const valueWhile = document.querySelectorAll("#valueWhile");

  const contentTitle = [...valueWhile].map((item) => {
    return newElement(item, "a", `titleWhile`);
  });

  const contentAuthor = [...valueWhile].map((item) => {
    return newElement(item, "a", `authorWhile`);
  });

  const contentDescription = [...valueWhile].map((item) => {
    return newElement(item, "a", `descriptionWhile`);
  });

  const buttonAction = [...valueWhile].map((item) => {
    return newElement(item, "button", `buttonWhile`);
  });

  return {
    cardElem,
    cardItem,
    contentValue,
    contentTitle,
    contentAuthor,
    contentDescription,
    buttonAction,
  };
}
