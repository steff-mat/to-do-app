import CreateElement from '../script/CreateElement';

export default function List() {
  CreateElement('div', 'id', 'list_menu', '#content', '');

  CreateElement('form', 'id', 'list_form_todo', '#list_menu', '');
  CreateElement('div', 'id', 'list_form_tasks', '#list_menu', '');
}
