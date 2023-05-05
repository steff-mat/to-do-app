import CreateElement from '../../logic/CreateElement';
import SetClass from '../../logic/SetClass';

export default function Ongoing() {
  CreateElement('div', 'id', 'ongoing', '.page', '');
  SetClass('#ongoing', 'class', 'card');
}
