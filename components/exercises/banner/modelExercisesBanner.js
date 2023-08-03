export default function modelExercisesBanner() {
  const whileBanner = document.querySelectorAll("banner")[0];
  const forBanner = document.querySelectorAll("banner")[1];
  const ifElseBanner = document.querySelectorAll("banner")[2];

  const p = document.createElement("p");

  const all = p.cloneNode(true);
  const footer = document.querySelector("footer");

  all.innerHTML = `${String(window.location.href).concat("🚀")}`;
  all.style.display = "flex";
  all.style.flexDirection = "row";
  all.style.alignItems = "center";
  all.style.justifyContent = "center";

  const categories = {
    while: document.createElement("p"),
    for: document.createElement("p"),
    ifElse: document.createElement("p"),
    banner: document.querySelector("#banner-container"),
    generateWhile() {
      this.while.innerHTML = `<code>FOR</code>`;
      this.while.style.backgroundColor = "green";
      this.while.style.width = "fit-content";
      this.while.style.fontSize = "23px";
      this.while.style.position = "absolute";
      this.while.style.top = "75px";
      // this.banner.style.padding = "5px 530px";
    },
    generateFor() {
      this.for.innerHTML = `<code>WHILE</code>`;
      this.for.style.display = "flex";
      this.for.style.backgroundColor = "green";
      this.for.style.width = "fit-content";
      this.for.style.fontSize = "23px";
      this.for.style.position = "absolute";
      this.for.style.top = "250px";
      this.for.style.alignItems = "center";
      this.for.style.justifyContent = "center";
    },
    generateIfElse() {
      this.ifElse.innerHTML = `<code>IF/ELSE</code>`;
      this.ifElse.style.backgroundColor = "green";
      this.ifElse.style.width = "fit-content";
      this.ifElse.style.fontSize = "23px";
      this.ifElse.style.position = "absolute";
      this.ifElse.style.top = "450px";
    },
  };

  whileBanner.appendChild(categories["while"]);
  forBanner.appendChild(categories["for"]);
  ifElseBanner.appendChild(categories["ifElse"]);

  categories.generateWhile();
  categories.generateFor();
  categories.generateIfElse();

  footer.appendChild(all);

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
  newElement(forBanner, "div", "while-exercises");
  newElement(forBanner, "div", "while-exercises");
  newElement(ifElseBanner, "div", "if-else-exercises");
  newElement(ifElseBanner, "div", "if-else-exercises");
  newElement(ifElseBanner, "div", "if-else-exercises");
}
