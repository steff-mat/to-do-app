export default function TaskHandler(formName) {
  const form = document.getElementById(formName);
  const projectHeader = document.querySelector('.project_header');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const taskName = document.querySelector('#list_todo_name').value;
    const taskDate = document.querySelector('#list_todo_date').value;
    const taskDescription = document.querySelector(
      '#list_todo_description'
    ).value;
    let taskCheckbox = [];
    document.querySelectorAll('[type=radio]').forEach((item) => {
      if (item.checked === true) {
        taskCheckbox.push(item.value);
      }
    });
    const form = {
      taskName: taskName,
      taskDate: taskDate,
      taskDescription: taskDescription,
      taskRadio: taskCheckbox,
    };
    const object = localStorage.getItem('to-do-app');
    const obj2 = JSON.parse(object)[0];
    obj2[form.taskName] = form;
    localStorage.setItem('to-do-app', JSON.stringify(obj2));
  });
}

// const object = localStorage.getItem('to-do-app');
// const form = {
//   taskName: 'Task1',
//   taskDate: '22/02/2222',
//   taskDescription: 'TEXT',
//   taskRadio: ['completed'],
// };
// const obj2 = JSON.parse(object)[0];
// obj2[form.taskName] = form;

// console.log(obj2);
