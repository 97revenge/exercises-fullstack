export default function modelifElseBanner() {
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

  p.innerHTML = "<code>ifElse</code>";

  div.appendChild(p);
  p.class();

  ifElseBanner.appendChild(div);
  div.class();

  const appendElement = (appender, attach) => appender.appendChild(attach);
  appendElement(ifElseBanner, bannerElem);

  const newElement = (appender, elemType, idType) => {
    const elem = component[elemType].cloneNode(false);
    elem.id = idType;
    return appendElement(appender, elem);
  };

  newElement(bannerElem, "div", "ifElse-exercises");
  newElement(bannerElem, "div", "ifElse-exercises");
  newElement(bannerElem, "div", "ifElse-exercises");

  const bannerItem = document.createElement("div");
  bannerItem.class = function () {
    this.style.marginTop = "100px";
  };

  const bannerTitle = document.createElement("p");

  console.log(bannerItem);
  bannerItem.class();
  bannerItem.appendChild(bannerTitle);

  const containerCard = document.querySelectorAll("#ifElse-exercises");

  const cardElem = [...containerCard].map((item) =>
    newElement(item, "div", `elem${item.id.slice(-5)}`)
  );
  const elemcises = document.querySelectorAll("#elemcises");
  // 👆🏻 elemwhile

  const cardItem = [...elemcises].map((item) => {
    return newElement(item, "img", `img${item.id.slice(-5)}`);
  });

  const contentValue = [...elemcises].map((item) => {
    return newElement(item, "div", `value${item.id.slice(-4)}`);
  });

  const valueises = document.querySelectorAll("#valueises");
  // 👆🏻 valueWhile

  const contentTitle = [...valueises].map((item) => {
    return newElement(item, "a", `title${item.id.slice(-4)}`);
  });

  const contentAuthor = [...valueises].map((item) => {
    return newElement(item, "a", `author${item.id.slice(-4)}`);
  });

  const contentDescription = [...valueises].map((item) => {
    return newElement(item, "a", `description${item.id.slice(-4)}`);
  });

  const buttonAction = [...valueises].map((item) => {
    return newElement(item, "button", `button${item.id.slice(-4)}`);
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

  // const result = value.map((item, index) => {
  //   newElement(item[i], "div", "elem");
  // });

  // return result;

  //   value.forEach((item) => {
  //     item.innerHTML = `

  //     <div style="max-width: fit-content;
  //     border-radius: 0.5rem;
  //     background-color: #d5d5d5;
  //     box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  //     border: 1px solid transparent;
  //     border-radius:7px;"> // elem${index}
  //      <img  src="https://s3-sa-east-1.amazonaws.com/season-training/images/blog/blog-10.png"
  //       style="object-fit: cover;
  //      width: 100%;
  //      height: 90px;
  //      background-color: #4caf4f"></img>
  //      <div style="padding: 1.1rem;">    <a href="#">
  //      <span style="color: #111827;
  //      font-size: 1.125rem;
  //      line-height: 1.75rem;
  //      font-weight: 600;  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
  //        Exercicicios {exercises.id}
  //      </span>
  //    </a>
  //    <span style="display:flex;

  //    color: #111827;
  //    font-size: 0.850rem;
  //    line-height: 1.75rem;
  //    font-weight: 600;">
  //    {exercises.name}
  //  </span>
  //     <span style="display:flex;

  //     color: #111827;
  //     font-size: 0.850rem;
  //     line-height: 1.75rem;
  //     font-weight: 600;  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
  //    De: {user.id}
  //  </span>

  //  <p style="margin-top: 0.5rem;
  //  color: #6B7280;
  //  font-size: 0.750rem;
  //  line-height: 1.25rem; word-break: break-all;  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;">
  //   <strong> Exercicios simples e faceis de fazer !!! </strong>
  //  </p>

  //  <a style="display: inline-flex;
  //  margin-top: 1rem;
  //  color: #ffffff;
  //  font-size: 0.875rem;
  //  line-height: 1.25rem;
  //  font-weight: 500;
  //  align-items: center;
  //  gap: 0.25rem;
  //  background-color: #2563EB;
  //  padding: 4px 8px;
  //  border-radius: 4px;
  //  transition: .3s ease;  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;" href="/ifelse/exercise#1">
  //    Vamos Nessa 🚀
  //  </a>
  //    </div>
  //      </div>

  //     `;
  //   });
}
