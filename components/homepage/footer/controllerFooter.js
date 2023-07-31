import modelFooter from "./modelFooter";
import styleFooter from "./styleFooter";

export default function controllerFooter() {
  return {
    model: modelFooter(),
    style: styleFooter(),
  };
}
