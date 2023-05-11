import { Element } from '../codeJS/createElement';

export default function taskLooper() {
  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i))).list;
    for (let j = 0; j < project.length; j++) {
      new Element(
        'div',
        'id',
        `task_item_holder_p${i}_t${j}`,
        '',
        'task_holder'
      );
      new Element(
        'p',
        'id',
        `task_item_project_p${i}_t${j}`,
        project[j].taskProject,
        `task_item_holder_p${i}_t${j}`
      );
      new Element(
        'p',
        'id',
        `task_item_name_p${i}_t${j}`,
        project[j].taskName,
        `task_item_holder_p${i}_t${j}`
      );
      new Element(
        'p',
        'id',
        `task_item_due_date_p${i}_t${j}`,
        project[j].taskDueDate,
        `task_item_holder_p${i}_t${j}`
      );
      new Element(
        'p',
        'id',
        `task_item_description_p${i}_t${j}`,
        project[j].taskDescription,
        `task_item_holder_p${i}_t${j}`
      );
    }
  }
}
