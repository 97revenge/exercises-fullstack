export default function modelExercisesBanner(params) {
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

  const { div } = Component.prototype.constructor;

  const heroSection = div.cloneNode(false);

  console.log(heroSection);

  heroSection.id = "hero-section";

  document.body.appendChild(heroSection);
}
