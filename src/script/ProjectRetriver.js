import CreateElement from './CreateElement';

export default function ProjectRetriver(location) {
  for (let i = 0; i < localStorage.length; i++) {
    let object = JSON.parse(localStorage.getItem(localStorage.key(i)));

    CreateElement(
      'div',
      'class',
      'project_item',
      location,
      object.todo_project_name_value
    );

    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
}
