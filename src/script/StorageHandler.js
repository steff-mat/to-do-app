export default function StorageHandler(formValue, name) {
  const form = document.getElementById(formValue);

  form.addEventListener('submit', function (e) {
    const formData = new FormData(form);
    const newProject = Object.fromEntries(formData.entries());
    let projectList = JSON.parse(localStorage.getItem('to-do-app')) || [];
    projectList.push(newProject);
    localStorage.setItem('to-do-app', JSON.stringify(projectList));
  });
}
