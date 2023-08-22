import modelWhileAplyer from "./modelWhileAplyer";
import styleWhileAplyer from "./styleWhileAplyer";

export default function controllerWhileAplyer({
  auth = "Liberado",
  title,
  dificulty = "Fácil",
  description = "Descreva sobre...",
  image = "https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/lfq1i1v4jqm-14%3A649?alt=media&token=b7d26097-52a4-488a-9109-ba10c35cf0e8",
}) {
  return {
    model: modelWhileAplyer(auth, title, dificulty, description, image),
    style: styleWhileAplyer(),
  };
}
