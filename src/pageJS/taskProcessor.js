export default function taskProcessor() {
  const form = document.getElementById('task_form');
  const select = document.getElementById('task_form_input_assign');
  form.addEventListener('submit', (e) => {
    const selectedValue = select.value;
    // e.preventDefault();
    let projectForm = JSON.parse(localStorage.getItem(selectedValue));
    const pF = localStorage.getItem(selectedValue);
    let taskForm = {
      taskName: document.getElementById('task_form_input_name').value,
      taskDescription: document.getElementById('task_form_input_description')
        .value,
      taskDueDate: document.getElementById('task_form_input_date').value,
      taskStatus: document.getElementById('task_form_input_status').value,
      taskProject: document.getElementById('task_form_input_assign').value,
    };
    projectForm.list.push(taskForm);
    localStorage.setItem(selectedValue, JSON.stringify(projectForm));
  });
}
