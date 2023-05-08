export default function CreateClass(element, classType, className) {
  const el = document.querySelector(element);
  el.setAttribute(classType, className);
}
