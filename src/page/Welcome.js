import CreateElement from '../script/CreateElement';
import CreateClass from '../script/CreateClass';
import ToDo from '../page/ToDo';
import StorageHandler from '../script/StorageHandler,js';

export default function Welcome() {
  CreateElement('div', 'id', 'main_menu', '#content', '');

  CreateElement('h1', 'class', 'logo_main_text', '#main_menu', 'To-Do App');
  CreateElement(
    'h3',
    'class',
    'logo_secondary_text',
    '#main_menu',
    'Create a new To-Do or select an existing one'
  );

  CreateElement('form', 'id', 'todo_form', '#main_menu', '');

  //Project name input field
  CreateElement('input', 'id', 'todo_name', '#todo_form', '');
  CreateClass('#todo_name', 'placeholder', 'Enter project name');
  CreateClass('#todo_name', 'name', 'todo_name_value');

  //State filed
  CreateElement('div', 'id', 'todo_state', '#todo_form', '');

  //Ongoing State field
  CreateElement('div', 'class', 'ongoing_state', '#todo_state', '');
  CreateElement('input', 'id', 'todo_ongoing', '.ongoing_state');
  CreateElement(
    'label',
    'id',
    'todo_ongoing_label',
    '.ongoing_state',
    'Ongoing'
  );
  CreateClass('#todo_ongoing', 'type', 'radio');
  CreateClass('#todo_ongoing', 'value', 'ongoing');
  CreateClass('#todo_ongoing_label', 'for', 'todo_ongoing');
  CreateClass('#todo_ongoing', 'name', 'todo');

  // Overdue State field
  CreateElement('div', 'class', 'overdue_state', '#todo_state', '');
  CreateElement('input', 'id', 'todo_overdue', '.overdue_state');
  CreateElement(
    'label',
    'id',
    'todo_overdue_label',
    '.overdue_state',
    'Overdue'
  );
  CreateClass('#todo_overdue', 'type', 'radio');
  CreateClass('#todo_overdue', 'value', 'overdue');

  CreateClass('#todo_overdue_label', 'for', 'todo_overdue');
  CreateClass('#todo_overdue', 'name', 'todo');

  // Pending State field
  CreateElement('div', 'class', 'pending_state', '#todo_state', '');
  CreateElement('input', 'id', 'todo_pending', '.pending_state');
  CreateElement(
    'label',
    'id',
    'todo_pending_label',
    '.pending_state',
    'Pending'
  );
  CreateClass('#todo_pending', 'type', 'radio');
  CreateClass('#todo_pending', 'value', 'pending');

  CreateClass('#todo_pending_label', 'for', 'todo_pending');
  CreateClass('#todo_pending', 'name', 'todo');

  // Completed State field
  CreateElement('div', 'class', 'completed_state', '#todo_state', '');
  CreateElement('input', 'id', 'todo_completed', '.completed_state');
  CreateElement(
    'label',
    'id',
    'todo_completed_label',
    '.completed_state',
    'Completed'
  );
  CreateClass('#todo_completed', 'type', 'radio');
  CreateClass('#todo_completed', 'value', 'completed');

  CreateClass('#todo_completed_label', 'for', 'todo_completed');
  CreateClass('#todo_completed', 'name', 'todo');

  //Date State
  CreateElement('input', 'id', 'todo_date', '#todo_form', '');
  CreateClass('#todo_date', 'type', 'date', '#todo_form');
  CreateClass('#todo_date', 'name', 'todo_name_date');
  CreateClass('#todo_date', 'min', '2023-01-01');
  CreateClass('#todo_date', 'max', '2099-01-01');

  //Description State
  CreateElement('input', 'id', 'todo_description', '#todo_form', '');
  CreateClass('#todo_description', 'name', 'todo_name_description');
  CreateClass(
    '#todo_description',
    'placeholder',
    'Type here the description of the project'
  );

  CreateElement('button', 'id', 'todo_submit', '#todo_form', 'Create To-Do');
  CreateClass('#todo_submit', 'type', 'submit');

  //   ToDo();
  StorageHandler();
}
