import modelSection from "./modelSection";
import styleSection from "./styleSection";

export default function controllerSection() {
  return {
    model: modelSection(),
    style: styleSection(),
  };
}
