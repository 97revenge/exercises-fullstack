import controllerForBanner from "../../for/banner/controllerForBanner";
import { banner } from "../../homepage/banner";
import controllerIfElseBanner from "../../ifelse/banner/controllerIfElseBanner";
import controllerWhileBanner from "../../while/banner/controllerWhileBanner";
// import modelExercisesBanner from "./modelExercisesBanner";
// import styleExercisesBanner from "./styleExercisesBanner";

export default function controllerExercisesBanner() {
  const bannerContainer = document.querySelector("#banner-container").style;

  bannerContainer.display = "flex";
  bannerContainer.flexDirection = "column";
  bannerContainer.gap = "55px";

  return {
    while: controllerWhileBanner(),
    for: controllerForBanner(),
    ifelse: controllerIfElseBanner(),
  };
}
