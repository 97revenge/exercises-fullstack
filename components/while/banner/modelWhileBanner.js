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

  one.appendChild(bannerItem);
  console.log(bannerItem);
  bannerItem.class();
  bannerItem.appendChild(bannerTitle);

  const value = document.querySelectorAll("#while-exercises");

  value.forEach((item) => {
    item.innerHTML = `
    
    <div style="max-width: fit-content;
    border-radius: 0.5rem;
    background-color: #d5d5d5;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
    border-radius:7px;">
     <img  src="https://s3-sa-east-1.amazonaws.com/season-training/images/blog/blog-10.png"
      style="object-fit: cover;
     width: 100%;
     height: 90px;
     background-color: #4caf4f"></img>
     <div style="padding: 1.1rem;">    <a href="#">
     <span style="color: #111827;
     font-size: 1.125rem;
     line-height: 1.75rem;
     font-weight: 600;">
       Exercicicios {exercises.id}
     </span>
   </a>
   <span style="display:flex;
   color: #111827;
   font-size: 0.850rem;
   line-height: 1.75rem;
   font-weight: 600;">
   {exercises.name}
 </span>
    <span style="display:flex;
  
    color: #111827;
    font-size: 0.850rem;
    line-height: 1.75rem;
    font-weight: 600;">
   De: {user.id}
 </span>
   
   
 <p style="margin-top: 0.5rem;
 color: #6B7280;
 font-size: 0.750rem;
 line-height: 1.25rem; word-break: break-all;">
  <strong> Exercicios simples e faceis de fazer !!! </strong>
 </p>

 <a style="display: inline-flex;
 margin-top: 1rem;
 color: #ffffff;
 font-size: 0.875rem;
 line-height: 1.25rem;
 font-weight: 500;
 align-items: center;
 gap: 0.25rem;
 background-color: #2563EB;
 padding: 4px 8px;
 border-radius: 4px;
 transition: .3s ease;" href="#">
   Vamos Nessa 🚀
 </a>
   </div>
     </div>
    
    `;
  });
}
