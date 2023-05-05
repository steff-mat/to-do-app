export default function EventHandler(element) {
  const e = document.querySelector(element);
  e.addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('hide-nav');
    document.querySelector('#button_toggle_menu').classList.toggle('show_btm');
    document.querySelector('#button_toggle_menu').classList.toggle('hide_btm');
  });
}
