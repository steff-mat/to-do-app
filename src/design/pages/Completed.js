import CreateElement from '../../logic/CreateElement';
import SetClass from '../../logic/SetClass';

export default function Completed() {
  CreateElement('div', 'id', 'completed', '.page', '');
  SetClass('#completed', 'class', 'card');
}
