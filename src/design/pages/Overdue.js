import CreateElement from '../../logic/CreateElement';
import SetClass from '../../logic/SetClass';

export default function Overdue() {
  CreateElement('div', 'id', 'overdue', '.page', '');
  SetClass('#overdue', 'class', 'card');
}
