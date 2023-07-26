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

  Global.prototype.elem = function (appender) {
    const { div } = Global.prototype.constructor;
    const elem = div.cloneNode(true);
    appender.div = elem;
    appender.appendChild(elem);
    // console.log(appender);
  };

  Global.prototype.item = function (appender) {
    const { div } = Global.prototype.constructor;
    const elem = div.cloneNode(true);
    appender.appendChild(elem);
  };

  Global.prototype.value = function (appender) {
    const { div } = Global.prototype.constructor;
    const elem = div.cloneNode(true);
    appender.appendChild(elem);
  };

  const generateInstance = () => (instance = Global.prototype);
  var instance = generateInstance(instance);

  instance.elem(footer);
  instance.elem(footer.div);
  instance.elem(footer.div.div);
  instance.elem(footer.div.div.div);

  console.log(footer);
}
