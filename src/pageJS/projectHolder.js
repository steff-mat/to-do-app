import { Element } from '../codeJS/create';
import projectProcessor from './projectProcessor';

export default function projectHolder() {
  new Element('div', 'id', 'project_holder', '', 'project_section');
  projectProcessor();
}
