import { Element, Identity } from '../codeJS/create';

export default function taskForm() {
  //Base of the form
  new Element('form', 'id', 'task_form', '', 'task_section');
  new Identity('task_form', 'name', 'task_form_name', '');
}
