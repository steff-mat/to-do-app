export default function CreateElement(type, attr, attrVal, appendTo, txt) {
  const element = document.createElement(type);
  element.setAttribute(attr, attrVal);
  const location = document.querySelector(appendTo);
  location.appendChild(element);
  element.innerText = txt;
}
