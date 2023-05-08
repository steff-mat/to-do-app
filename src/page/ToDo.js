import CreateElement from '../script/CreateElement';
import ProjectRetriver from '../script/ProjectRetriver';

export default function ToDo() {
  CreateElement('div', 'id', 'open_projects', '#main_menu', '');
  ProjectRetriver('#open_projects');
}
