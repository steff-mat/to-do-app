import projectForm from './projectForm';
import projectHeader from './projectHeader';
import { Element } from '../codeJS/createElement';
import projectHolder from './projectHolder';

export default function projectPage() {
  new Element('div', 'id', 'project_section', '', 'content');
  projectHeader();
  projectForm();
  projectHolder();
}
