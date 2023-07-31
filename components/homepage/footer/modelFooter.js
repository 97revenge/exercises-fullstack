export default function modelFooter() {
  const footer = document.querySelector("footer");

  function Global() {
    return {};
  }

  Global.prototype.constructor = new Object({
    div: document.createElement("div"),
    p: document.createElement("p"),
    img: document.createElement("img"),
    a: document.createElement("a"),
    title: document.createElement("title"),
  });

  const { div } = Global.prototype.constructor;

  const appender = (appender, attach) => {
    return appender.appendChild(attach);
  };

  var instance = function (app, elemType) {
    const elem = Object.create(Object.prototype.constructor);

    return appender(app, div);
  };

  instance(footer, div);
  instance(footer, div);

  // Global.prototype.elem = function (appender) {
  //   const elem = div.cloneNode(true);
  //   appender.div = elem;
  //   appender.appendChild(elem);

  //   // console.log(appender);
  // };

  console.log(Object.prototype.constructor);
}
