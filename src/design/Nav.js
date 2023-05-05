import CreateElement from '../logic/CreateElement';
import EventHandler from '../logic/EventHandler';

export default function Nav() {
  const content = document.getElementById('content');
  const nav = document.createElement('nav');
  content.appendChild(nav);
  //End of Nav Bar
  CreateElement('button', 'id', 'button_toggle_menu', 'nav', '');
  document
    .getElementById('button_toggle_menu')
    .setAttribute('class', 'hide_btm');
  CreateElement('button', 'class', 'button_home', 'nav', 'Home');
  CreateElement('button', 'class', 'button_add_task', 'nav', 'Add New Task');
  CreateElement('button', 'class', 'button_remove_task', 'nav', 'Remove Task');
  EventHandler('#button_toggle_menu');
}
