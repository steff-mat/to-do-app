import CreateElement from '../logic/CreateElement';
import EventHandler from '../logic/EventHandler';
import FormHandler from '../logic/FormHandler';
import SetClass from '../logic/SetClass';

export default function Nav() {
  CreateElement('nav', 'id', 'nav', '#content', '');
  SetClass('nav', 'class', 'hide-nav');
  //End of Nav set-up
  CreateElement('button', 'id', 'button_toggle_menu', 'nav', '');
  SetClass('#button_toggle_menu', 'class', 'show_btm');
  EventHandler('#button_toggle_menu');
  FormHandler();
}
