import modelExercisesBanner from "./modelExercisesBanner";
import styleExercisesBanner from "./styleExercisesBanner";

export default function controllerExercisesBanner() {
  return {
    model: modelExercisesBanner(),
    style: styleExercisesBanner(),
  };
}
