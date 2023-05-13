export default function dropdownFilterProcessor() {
  const filterSelection = document.getElementById('task_filter');
  filterSelection.addEventListener('submit', (e) => {
    e.preventDefault();
    const projectSelection = document.getElementById(
      'task_filter_select_project'
    );
    const taskSection = document.getElementById('task_filter_select_status');

    for (let i = 0; i < localStorage.length; i++) {
      const project = JSON.parse(
        localStorage.getItem(localStorage.key(i))
      ).list;
      for (let j = 0; j < project.length; j++) {
        const card = document.getElementById(`task_item_holder_p${i}_t${j}`);
        const cardInnerProject = document.getElementById(
          `task_item_project_p${i}_t${j}`
        );
        const cardInnerTask = document.getElementById(
          `task_item_status_p${i}_t${j}`
        );

        card.style.display = 'block';

        if (projectSelection.value === 'All' && taskSection.value === 'All') {
          card.style.display = 'block';
        } else if (
          projectSelection.value !== 'All' &&
          taskSection.value !== 'All'
        ) {
          if (projectSelection.value !== cardInnerProject.innerText) {
            card.style.display = 'none';
          }
          if (taskSection.value !== cardInnerTask.innerText) {
            card.style.display = 'none';
          }
        } else if (
          projectSelection.value !== cardInnerProject.innerText &&
          taskSection.value === 'All'
        ) {
          card.style.display = 'none';
        } else if (
          taskSection.value !== cardInnerTask.innerText &&
          projectSelection.value == 'All'
        ) {
          card.style.display = 'none';
        }
      }
    }
  });
}
