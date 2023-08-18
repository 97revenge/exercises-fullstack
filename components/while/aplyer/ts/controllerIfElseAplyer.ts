import modelWhileAplyer from "./modelWhileAplyer";
import styleForAplyer from "./styleForAplyer";

import { Exert } from "./interface/Exert.interface";

export default function controllerIfElseAplyer(): Exert<void> {
  return {
    model: modelWhileAplyer(),
    style: styleForAplyer(),
  };
}
