export default function TaskHandler(formName) {
  const form = document.getElementById(formName);
  const pH = document.querySelector('.project_header');
  const projectHeader = pH.innerText.toLowerCase().replaceAll(' ', '');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let projectList = JSON.parse(localStorage.getItem('to-do-app')) || [];
    // const formData = new FormData(form);
    // let currentValue = JSON.parse(localStorage.getItem('to-do-app'));
    // const taskList = [];
    // taskList.push(Object.fromEntries(formData.entries()));
    // currentValue[projectHeader] = taskList;
    // localStorage.setItem(projectHeader, JSON.stringify(currentValue));
  });
}
