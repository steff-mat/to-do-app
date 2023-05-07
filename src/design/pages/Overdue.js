import CreateElement from '../../logic/CreateElement';
import SetClass from '../../logic/SetClass';
import storageLooper from '../../logic/storageLooper';

export default function Overdue() {
  CreateElement('div', 'id', 'overdue', '.page', '');
  SetClass('#overdue', 'class', 'card');
  CreateElement(
    'p',
    'class',
    'overdue_header_text',
    '#overdue',
    "Overdue Todo's"
  );
  SetClass('.overdue_header_text', 'class', 'header_text');

  storageLooper('input_radio_overdue', '#overdue');
}
