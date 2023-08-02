import modelWhileBanner from "./modelWhileBanner";
import styleWhileBanner from "./styleWhileBanner";

export default function controllerWhileBanner() {
  return {
    model: modelWhileBanner(),
    style: styleWhileBanner(),
  };
}
