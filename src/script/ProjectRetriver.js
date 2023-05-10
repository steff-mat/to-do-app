import CreateElement from './CreateElement';

export default function ProjectRetriver(location) {
  let object = JSON.parse(localStorage.getItem(localStorage.key('to-do-app')));

  for (let i = 0; i < object.length; i++) {
    CreateElement(
      'button',
      'class',
      'project_item',
      location,
      object[i].todo_project_name_value
    );
  }
}
