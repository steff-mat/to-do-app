export default function dropdownFilterProcessor() {
  const projectSelection = document.getElementById(
    'task_filter_select_project'
  );
  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i))).list;
    for (let j = 0; j < project.length; j++) {
      if (project[j].taskProject === 's') {
      }
      console.log(project[j].taskProject, projectSelection);
    }
  }
}
