export default function TaskHandler(formName) {
  const form = document.getElementById(formName);
  const pH = document.querySelector('.project_header');
  const projectHeader = pH.innerText.toLowerCase().replaceAll(' ', '');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(projectHeader)));
    // let item = document.querySelector('#list_todo_value').name;
    const formData = new FormData(form);
    // console.log(Object.fromEntries(formData.entries()));
    let currentValue = JSON.parse(localStorage.getItem(projectHeader));
    currentValue[projectHeader] = Object.fromEntries(formData.entries());
    // currentValue[value].push(Object.fromEntries(formData.entries()));
    // for (let [name, value] of formData.entries()) {
    //   currentValue[name] = value;
    // }
    localStorage.setItem(projectHeader, JSON.stringify(currentValue));
  });
}
