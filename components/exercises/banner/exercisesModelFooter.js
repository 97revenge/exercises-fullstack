export default function exercisesModelFooter() {
  function Global() {
    return {};
  }

  Global.prototype.constructor = new Object({
    div: document.createElement("test"),
  });

  Global.prototype.elem = function (appender) {
    const { div } = Global.prototype.constructor;
    const element = div.cloneNode(true);
    element.setAttribute("id", "test");
    console.log(element);

    appender.appendChild(element);
  };

  const generateInstance = () => (instance = Global.prototype);
  var instance = generateInstance(instance);

  //   instance.elem(document.body);
}
