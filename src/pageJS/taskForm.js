import { Element } from '../codeJS/createElement';
import { Identity } from '../codeJS/createIdentity';
import dropdownProjects from '../codeJS/dropdownProjects';
import dropdownStatus from '../codeJS/dropdownStatus';
import GetActualDate from '../codeJS/GetActualDate';

export default function taskForm() {
  //Base of the form
  new Element('form', 'id', 'task_form', '', 'task_section');
  new Identity('task_form', 'name', 'task_form_name', '');

  //Name section
  new Element('div', 'id', 'div_task_form_input_name', '', 'task_form');
  new Element(
    'label',
    'id',
    'label_task_form_input_name',
    '',
    'div_task_form_input_name'
  );
  new Identity(
    'label_task_form_input_name',
    'for',
    'task_form_input_name',
    'Enter task name'
  );
  new Element(
    'input',
    'id',
    'task_form_input_name',
    '',
    'div_task_form_input_name'
  );
  new Identity('task_form_input_name', 'name', 'task_form_input_name', '');

  //Description section
  new Element('div', 'id', 'div_task_form_input_description', '', 'task_form');
  new Element(
    'label',
    'id',
    'label_task_form_input_description',
    'Enter task description',
    'div_task_form_input_description'
  );
  new Identity(
    'label_task_form_input_description',
    'for',
    'task_form_input_description',
    'Enter task description'
  );
  new Element(
    'input',
    'id',
    'task_form_input_description',
    '',
    'div_task_form_input_description'
  );
  new Identity(
    'task_form_input_description',
    'name',
    'task_form_input_description',
    ''
  );

  //DueDate section
  new Element('div', 'id', 'div_task_form_input_date', '', 'task_form');
  new Element(
    'label',
    'id',
    'label_task_form_input_date',
    'Set task due-date',
    'div_task_form_input_date'
  );
  new Element(
    'input',
    'id',
    'task_form_input_date',
    '',
    'div_task_form_input_date'
  );
  new Identity('task_form_input_date', 'type', 'date', '');
  new Identity('task_form_input_date', 'name', 'task_form_input_date', '');
  new Identity('task_form_input_date', 'min', '2023-01-01', '');
  new Identity('task_form_input_date', 'max', '2099-01-01', '');
  GetActualDate('task_form_input_date');

  //Status selection
  new Element('div', 'id', 'div_task_form_input_status', '', 'task_form');
  new Element(
    'labe',
    'id',
    'label_task_form_input_status',
    'Set status: ',
    'div_task_form_input_status'
  );
  new Element(
    'select',
    'id',
    'task_form_input_status',
    '',
    'div_task_form_input_status'
  );

  //Assigner task
  new Element('div', 'id', 'div_task_form_input_assign', '', 'task_form');
  new Element(
    'labe',
    'id',
    'label_task_form_input_assign',
    'Assign task to: ',
    'div_task_form_input_assign'
  );

  new Element(
    'select',
    'id',
    'task_form_input_assign',
    '',
    'div_task_form_input_assign'
  );
  dropdownProjects();
  dropdownStatus();

  //Button section
  new Element('button', 'id', 'task_submit_button', '', 'task_form');
  new Identity('task_submit_button', 'type', 'submit', 'Create task');
}
