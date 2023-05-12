import { Element } from '../codeJS/createElement';
import taskFilter from './taskFilter';
import taskForm from './taskForm';
import taskHolder from './taskHolder';

export default function taskPage() {
  new Element('div', 'id', 'task_section', '', 'content');
  taskForm();
  taskHolder();
  taskFilter();
}
