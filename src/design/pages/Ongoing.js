import CreateElement from '../../logic/CreateElement';
import SetClass from '../../logic/SetClass';
import StorageLooper from '../../logic/storageLooper';

export default function Ongoing() {
  CreateElement('div', 'id', 'ongoing', '.page', '');
  SetClass('#ongoing', 'class', 'card');
  CreateElement(
    'p',
    'class',
    'ongoing_header_text',
    '#ongoing',
    "Ongoing Todo's"
  );
  SetClass('.ongoing_header_text', 'class', 'header_text');
  StorageLooper('input_radio_ongoing', '#ongoing');
}
