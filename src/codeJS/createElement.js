export class Element {
  constructor(element, type, value, text, attach) {
    this.element = element;
    this.type = type;
    this.value = value;
    this.text = text;
    this.attach = attach;
    const el = document.createElement(this.element);
    el.setAttribute(this.type, this.value);
    const loc = document.getElementById(this.attach);
    loc.appendChild(el);
    el.innerText = this.text;
  }
}
