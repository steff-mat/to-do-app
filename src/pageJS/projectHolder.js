import { Element } from '../codeJS/createElement';
import projectLooper from './projectLooper';
import projectProcessor from './projectProcessor';

export default function projectHolder() {
  new Element('div', 'id', 'project_holder', '', 'project_section');
  projectProcessor();
  projectLooper();
}
