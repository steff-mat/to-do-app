export default function cardStyle() {
  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i))).list;
    for (let j = 0; j < project.length; j++) {
      document.getElementById(`task_item_project_p${i}_t${j}`).style.fontSize =
        '0.75rem';
      document.getElementById(`task_item_due_date_p${i}_t${j}`).style.fontSize =
        '0.75rem';
      document.getElementById(`task_item_status_p${i}_t${j}`).style.fontSize =
        '1.5rem';
      document.getElementById(
        `task_item_description_p${i}_t${j}`
      ).style.fontSize = '1rem';

      const button = document.getElementById(`task_item_button_p${i}_t${j}`);
      const status = document.getElementById(`task_item_status_p${i}_t${j}`);
      const border = document.getElementById(`task_item_holder_p${i}_t${j}`);
      const background = document.getElementById(
        `task_item_holder_p${i}_t${j}`
      );
      switch (true) {
        case status.innerText === 'Ongoing':
          status.style.color = '#C5CAE9';
          border.style.borderColor = '#303F9F';
          background.style.backgroundColor = '#3F51B5';
          button.style.backgroundColor = '#C5CAE9';
          break;
        case status.innerText === 'Pending':
          status.style.color = '#FFE0B2';
          border.style.borderColor = '#F57C00';
          background.style.backgroundColor = '#FF9800';
          button.style.backgroundColor = '#FFE0B2';

          break;
        case status.innerText === 'Overdue':
          status.style.color = '#FFCDD2';
          border.style.borderColor = '#D32F2F';
          background.style.backgroundColor = '#F44336';
          button.style.backgroundColor = '#FFCDD2';

          break;
        case status.innerText === 'Completed':
          status.style.color = '#C8E6C9';
          border.style.borderColor = '#388E3C';
          background.style.backgroundColor = '#4CAF50';
          button.style.backgroundColor = '#C8E6C9';

          break;
      }
    }
  }
}
