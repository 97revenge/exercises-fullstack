import modelIfElseBanner from "./modelIfElseBanner";
import styleIfElseBanner from "./styleIfElseBanner";

export default function controllerIfElseBanner() {
  return {
    style: styleIfElseBanner(),
    model: modelIfElseBanner(),
  };
}
