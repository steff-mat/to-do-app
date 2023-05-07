import CreateElement from '../../logic/CreateElement';
import SetClass from '../../logic/SetClass';
import StorageLooper from '../../logic/storageLooper';

export default function Pending() {
  CreateElement('div', 'id', 'pending', '.page', '');
  SetClass('#pending', 'class', 'card');
  CreateElement(
    'p',
    'class',
    'pending_header_text',
    '#pending',
    "Pending Todo's"
  );
  SetClass('.pending_header_text', 'class', 'header_text');
  StorageLooper('input_radio_pending', '#pending');
}
