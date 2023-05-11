import { Element } from '../codeJS/createElement';
import taskForm from './taskForm';
import taskHolder from './taskHolder';

export default function taskPage() {
  new Element('div', 'id', 'task_section', '', 'content');
  taskForm();
  taskHolder();
}
