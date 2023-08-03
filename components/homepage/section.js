import axios from "axios";

export default function section() {
  const section = document.querySelectorAll("section");

  const div = document.createElement("div");

  const elemSection = (tag = "section") => {
    axios
      .get(`http://localhost:4000/style/${tag}`)
      .then((response) => response.data)
      .then((data) => {
        for (let i = 0; i <= section.length; i++) {
          const arr = ["WHILE", "FOR", "IF/ELSE"];
          section[i].innerHTML = `
          <style>
          
          </style>
          <a href="/while" style="color: white">
          <strong style="font-size: 55px"
            >Exercicios <code>${arr[i]}</code>
          </strong></a
        >
          
          `;

          section[0].setAttribute(
            "onmouseover",
            "this.style.borderRadius='0%';"
          );

          section[0].setAttribute(
            "onmouseout",
            "this.style.borderRadius='57px 57px 0px 0px';"
          );
          section[2].setAttribute(
            "onmouseover",
            "this.style.borderRadius='0%';"
          );

          section[2].setAttribute(
            "onmouseout",
            "this.style.borderRadius='0px 0px 57px 57px';"
          );

          const value = Object.values(data)[i];
          section[i].style = value;
        }

        return data;
      });
  };

  elemSection();
}
