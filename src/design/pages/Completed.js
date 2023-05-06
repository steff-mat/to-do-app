import CreateElement from '../../logic/CreateElement';
import SetClass from '../../logic/SetClass';

export default function Completed() {
  CreateElement('div', 'id', 'completed', '.page', '');
  SetClass('#completed', 'class', 'card');
  CreateElement(
    'p',
    'class',
    'completed_header_text',
    '#completed',
    "Completed Todo's"
  );
  SetClass('.completed_header_text', 'class', 'header_text');
}
