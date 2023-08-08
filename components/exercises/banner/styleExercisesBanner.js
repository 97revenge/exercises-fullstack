import axios from "axios";

export default function exercisesStyleBanner() {
  const container = document.querySelector("#banner-container");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "60px";
}
