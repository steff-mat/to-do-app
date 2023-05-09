import CreateElement from '../script/CreateElement';
import CreateClass from '../script/CreateClass';

export default function ToDoList(header_text) {
  for (let i = 0; i < localStorage.length; i++) {
    let object = JSON.parse(localStorage.getItem(localStorage.key(i)));
    if (object.todo_project_name_value === header_text) {
      CreateElement(
        'h1',
        'class',
        'project_header',
        '#list_form_todo',
        `Project: ${object.todo_project_name_value}`
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
    }
  }
}
