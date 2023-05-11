import { Element } from '../codeJS/create';
import taskForm from './taskForm';

export default function taskPage() {
  new Element('div', 'id', 'task_section', '', 'content');
  taskForm();
}
