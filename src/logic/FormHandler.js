import CreateElement from './CreateElement';
import SetClass from './SetClass';
import SetCustom from './SetCustom';

export default function FormHandler() {
  CreateElement('form', 'id', 'todo_form', 'nav', '');
  CreateElement(
    'p',
    'class',
    'form_p_header',
    '#todo_form',
    "Let's create a To-Do!"
  );
  //   SetClass('#todo_form', 'method', 'post'); //? Would be good not to see the data in the URL?

  CreateElement('input', 'id', 'input_task_name', '#todo_form', '');
  SetClass('#input_task_name', 'placeholder', 'Enter To-Do name');
  SetClass('#input_task_name', 'type', 'text');
  SetClass('#input_task_name', 'name', 'todo');

  CreateElement('div', 'class', 'iro', '#todo_form', '');
  CreateElement('input', 'id', 'input_radio_ongoing', '.iro', '');
  CreateElement('label', 'class', 'iro_label', '.iro', '');
  SetClass('#input_radio_ongoing', 'type', 'radio');
  SetClass('.iro_label', 'for', 'input_radio_ongoing');
  SetClass('#input_radio_ongoing', 'name', 'iro_state');
  SetCustom('.iro_label', 'innerText', 'Ongoing To-Do');

  CreateElement('div', 'class', 'ird', '#todo_form', '');
  CreateElement('input', 'id', 'input_radio_overdue', '.ird', '');
  CreateElement('label', 'class', 'ird_label', '.ird', '');
  SetClass('#input_radio_overdue', 'type', 'radio');
  SetClass('.ird_label', 'for', 'input_radio_overdue');
  SetClass('#input_radio_overdue', 'name', 'ird_state');
  SetCustom('.ird_label', 'innerText', 'Overdue To-Do');

  CreateElement('div', 'class', 'irp', '#todo_form', '');
  CreateElement('input', 'id', 'input_radio_pending', '.irp', '');
  CreateElement('label', 'class', 'irp_label', '.irp', '');
  SetClass('#input_radio_pending', 'type', 'radio');
  SetClass('.irp_label', 'for', 'input_radio_pending');
  SetClass('#input_radio_pending', 'name', 'irp_state');
  SetCustom('.irp_label', 'innerText', 'Pending To-Do');

  CreateElement('div', 'class', 'irc', '#todo_form', '');
  CreateElement('input', 'id', 'input_radio_completed', '.irc', '');
  CreateElement('label', 'class', 'irc_label', '.irc', '');
  SetClass('#input_radio_completed', 'type', 'radio');
  SetClass('.irc_label', 'for', 'input_radio_completed');
  SetClass('#input_radio_completed', 'name', 'irc_state');
  SetCustom('.irc_label', 'innerText', 'Completed To-Do');

  CreateElement('button', 'id', 'submit_btn', '#todo_form', 'Create Todo');
  SetClass('#submit_btn', 'type', 'submit');
}
