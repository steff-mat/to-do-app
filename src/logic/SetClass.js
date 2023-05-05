export default function SetClass(element, classType, className) {
  const el = document.querySelector(element);
  el.setAttribute(classType, className);
}
