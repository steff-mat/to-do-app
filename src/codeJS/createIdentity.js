export class Identity {
  constructor(element, type, value, text) {
    this.element = element;
    this.type = type;
    this.value = value;
    this.text = text;
    const el = document.getElementById(this.element);
    el.setAttribute(this.type, this.value);
    el.innerText = this.text;
  }
}
