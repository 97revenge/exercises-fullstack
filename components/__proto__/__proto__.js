export default Object.prototype.constructor = new Object({
  div: document.createElement("div"),
  p: document.createElement("p"),
  img: document.createElement("img"),
  a: document.createElement("a"),
  title: document.createElement("title"),
  button: document.createElement("button"),
});
