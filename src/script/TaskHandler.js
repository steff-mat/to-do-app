export default function TaskHandler(formName) {
  const form = document.getElementById(formName);
  const pH = document.querySelector('.project_header');
  const projectHeader = pH.innerText.toLowerCase().replaceAll(' ', '');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    let currentValue = JSON.parse(localStorage.getItem(projectHeader));
    const taskList = [];
    taskList.push(Object.fromEntries(formData.entries()));
    currentValue[projectHeader] = taskList;
    localStorage.setItem(projectHeader, JSON.stringify(currentValue));
  });
}
