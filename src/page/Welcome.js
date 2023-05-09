import CreateElement from '../script/CreateElement';
import CreateClass from '../script/CreateClass';
import StorageHandler from '../script/StorageHandler.js';
import TodayDate from '../script/TodayDate';
import CLEAR from '../script/CLEAR';

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
  CLEAR();

  CreateElement('form', 'id', 'todo_form', '#main_menu', '');

  //Project name input field
  CreateElement('input', 'id', 'todo_name', '#todo_form', '');
  CreateClass('#todo_name', 'placeholder', 'Enter project name');
  CreateClass('#todo_name', 'name', 'todo_project_name_value');

  //Date State
  CreateElement('input', 'id', 'todo_date', '#todo_form', '');
  CreateClass('#todo_date', 'type', 'date', '#todo_form');
  CreateClass('#todo_date', 'name', 'todo_name_date');
  CreateClass('#todo_date', 'min', '2023-01-01');
  CreateClass('#todo_date', 'max', '2099-01-01');
  TodayDate('#todo_date');

  //Description State
  CreateElement('input', 'id', 'todo_description', '#todo_form', '');
  CreateClass('#todo_description', 'name', 'todo_project_name_description');
  CreateClass(
    '#todo_description',
    'placeholder',
    'Type here the description of the project'
  );

  CreateElement('button', 'id', 'todo_submit', '#todo_form', 'Create Project');
  CreateClass('#todo_submit', 'type', 'submit');

  ////////////////////////////////////////////////

  StorageHandler('todo_form', '#todo_name');
}
