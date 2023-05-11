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

export class Element extends Identity {
  constructor(element, type, value, text, attach) {
    super(element, type, value, text);
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
