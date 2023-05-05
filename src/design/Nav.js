import CreateElement from '../logic/CreateElement';
import EventHandler from '../logic/EventHandler';
import SetClass from '../logic/SetClass';

export default function Nav() {
  CreateElement('nav', 'id', 'nav', '#content', '');
  SetClass('nav', 'class', 'hide-nav');
  //End of Nav set-up
  CreateElement('button', 'id', 'button_toggle_menu', 'nav', '');
  document
    .getElementById('button_toggle_menu')
    // .setAttribute('class', 'show_btm');
    .setAttribute('class', 'show_btm');
  // CreateElement('button', 'class', 'button_home', 'nav', 'Home');
  CreateElement('button', 'class', 'button_add_task', 'nav', 'Add Task');
  // CreateElement('button', 'class', 'button_remove_task', 'nav', 'Remove Task');
  EventHandler('#button_toggle_menu');
}
