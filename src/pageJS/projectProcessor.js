export default function projectProcessor() {
  const form = document.getElementById('project_form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let form = {
      projectName: document.getElementById('project_form_input_name').value,
      projectDescription: document.getElementById(
        'project_form_input_description'
      ).value,
      list: [],
    };
    localStorage.setItem(form.projectName, JSON.stringify(form));
  });
}
