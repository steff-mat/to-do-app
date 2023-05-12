export default function cardStyle() {
  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i))).list;
    for (let j = 0; j < project.length; j++) {
      document.getElementById(`task_item_project_p${i}_t${j}`).style.fontSize =
        '1rem';
      document.getElementById(`task_item_due_date_p${i}_t${j}`).style.fontSize =
        '1.25rem';
      document.getElementById(`task_item_status_p${i}_t${j}`).style.fontSize =
        '1.5rem';
      document.getElementById(
        `task_item_description_p${i}_t${j}`
      ).style.fontSize = '1.25rem';

      const status = document.getElementById(`task_item_status_p${i}_t${j}`);
      const border = document.getElementById(`task_item_holder_p${i}_t${j}`);
      switch (true) {
        case status.innerText === 'Ongoing':
          status.style.color = 'lightblue';
          border.style.borderColor = 'lightblue';
          break;
        case status.innerText === 'Pending':
          status.style.color = 'orange';
          border.style.borderColor = 'orange';
          break;
        case status.innerText === 'Overdue':
          status.style.color = 'red';
          border.style.borderColor = 'red';
          break;
        case status.innerText === 'Completed':
          status.style.color = 'green';
          border.style.borderColor = 'green';
          break;
      }
    }
  }
}
