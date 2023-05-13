import { Element } from '../codeJS/createElement';

export default function taskLooper() {
  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i))).list;
    for (let j = 0; j < project.length; j++) {
      //Card holder
      new Element(
        'div',
        'id',
        `task_item_holder_p${i}_t${j}`,
        '',
        'task_holder'
      );

      //Project name
      new Element(
        'p',
        'id',
        `task_item_project_p${i}_t${j}`,
        project[j].taskProject,
        `task_item_holder_p${i}_t${j}`
      );

      //Task name
      new Element(
        'p',
        'id',
        `task_item_name_p${i}_t${j}`,
        project[j].taskName,
        `task_item_holder_p${i}_t${j}`
      );

      //Due-Date
      new Element(
        'p',
        'id',
        `task_item_due_date_p${i}_t${j}`,
        project[j].taskDueDate,
        `task_item_holder_p${i}_t${j}`
      );

      //Status
      new Element(
        'button',
        'id',
        `task_item_status_p${i}_t${j}`,
        project[j].taskStatus,
        `task_item_holder_p${i}_t${j}`
      );

      //Description
      new Element(
        'p',
        'id',
        `task_item_description_p${i}_t${j}`,
        project[j].taskDescription,
        `task_item_holder_p${i}_t${j}`
      );

      //Delete button
      new Element(
        'button',
        'id',
        `task_item_button_p${i}_t${j}`,
        'Delete',
        `task_item_holder_p${i}_t${j}`
      );
      document
        .getElementById(`task_item_button_p${i}_t${j}`)
        .addEventListener('click', () => {
          const key = localStorage.key(i);
          const project = JSON.parse(localStorage.getItem(key));
          project.list.splice(j, 1);
          localStorage.setItem(key, JSON.stringify(project));
          document.getElementById(`task_item_holder_p${i}_t${j}`).remove();
        });
    }
  }
}
