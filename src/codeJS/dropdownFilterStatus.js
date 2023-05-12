export default function dropdownFilterStatus() {
  const select = document.getElementById('task_filter_select_status');
  const selection = ['All', 'Ongoing', 'Pending', 'Overdue', 'Completed'];

  for (let status of selection) {
    const option = document.createElement('option');
    option.value = status;
    option.text = status;
    select.append(option);
  }
}
