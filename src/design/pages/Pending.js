import CreateElement from '../../logic/CreateElement';
import SetClass from '../../logic/SetClass';

export default function Pending() {
  CreateElement('div', 'id', 'pending', '.page', '');
  SetClass('#pending', 'class', 'card');
}
