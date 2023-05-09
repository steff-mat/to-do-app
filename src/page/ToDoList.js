import CreateElement from '../script/CreateElement';
import CreateClass from '../script/CreateClass';
import TodayDate from '../script/TodayDate';
import StorageHandler from '../script/StorageHandler';
import TaskHandler from '../script/TaskHandler';

export default function ToDoList(header_text) {
  for (let i = 0; i < localStorage.length; i++) {
    let object = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (object.todo_project_name_value === header_text) {
      CreateElement(
        'h1',
        'class',
        'project_header',
        '#list_form_todo',
        `${object.todo_project_name_value}`
      );
      CreateElement(
        'h3',
        'class',
        'project_due_date',
        '#list_form_todo',
        `Due Date: ${object.todo_name_date}`
      );
      CreateElement(
        'h5',
        'class',
        'project_description',
        '#list_form_todo',
        `Description: ${object.todo_project_name_description}`
      );
      //Project name input field
      CreateElement('input', 'id', 'list_todo_name', '#list_form_todo', '');
      CreateClass('#list_todo_name', 'placeholder', 'Enter task name');
      CreateClass('#list_todo_name', 'name', 'todo_list_name_value');
      //Date State
      CreateElement('input', 'id', 'list_todo_date', '#list_form_todo', '');
      CreateClass('#list_todo_date', 'type', 'date', '#list_form_todo');
      CreateClass('#list_todo_date', 'name', 'list_todo_name_date');
      CreateClass('#list_todo_date', 'min', '2023-01-01');
      CreateClass('#list_todo_date', 'max', '2099-01-01');
      TodayDate('#list_todo_date');
      //Description State
      CreateElement(
        'input',
        'id',
        'list_todo_description',
        '#list_form_todo',
        ''
      );
      CreateClass(
        '#list_todo_description',
        'name',
        'todo_list_name_description'
      );
      CreateClass(
        '#list_todo_description',
        'placeholder',
        'Type here the description of the Todo'
      );

      //State filed
      CreateElement('div', 'id', 'list_todo_state', '#list_form_todo', '');

      //Ongoing State field
      CreateElement('div', 'class', 'ongoing_state', '#list_todo_state', '');
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
      CreateElement('div', 'class', 'overdue_state', '#list_todo_state', '');
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
      CreateElement('div', 'class', 'pending_state', '#list_todo_state', '');
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
      CreateElement('div', 'class', 'completed_state', '#list_todo_state', '');
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

      CreateElement(
        'button',
        'id',
        'list_todo_submit',
        '#list_form_todo',
        'Create Todo'
      );
      CreateClass('#list_todo_submit', 'type', 'submit');
      // StorageHandler('list_form_todo', '#list_todo_name');
      TaskHandler('list_form_todo');
    }
  }
}
