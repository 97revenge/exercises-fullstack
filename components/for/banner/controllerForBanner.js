import modelForBanner from "./modelForBanner";
import styleForBanner from "./styleForBanner";

export default function controllerForBanner() {
  return {
    model: modelForBanner(),
    style: styleForBanner(),
  };
}
