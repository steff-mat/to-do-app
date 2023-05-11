export default function dropdownStatus() {
  const select = document.getElementById('task_form_input_status');
  const selection = ['Ongoing', 'Pending', 'Overdue', 'Completed'];

  for (let status of selection) {
    const option = document.createElement('option');
    option.value = status;
    option.text = status;
    select.append(option);
  }
  const form = document.getElementById('task_form');
  form.appendChild(select);
}
