export default function TaskHandler(formName) {
  const form = document.getElementById(formName);
  const pH = document.querySelector('.project_header');
  const projectHeader = pH.innerText.toLowerCase().replaceAll(' ', '');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem(projectHeader)));
    const formData = new FormData(form);
    let currentValue = JSON.parse(localStorage.getItem(projectHeader));
    for (let [name, value] of formData.entries()) {
      currentValue[name] = value;
    }
    localStorage.setItem(projectHeader, JSON.stringify(currentValue));
  });
}
