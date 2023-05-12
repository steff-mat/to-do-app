export default function formFilter(listToFilter) {
  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i))).list;
    for (let j = 0; j < project.length; j++) {
      console.log(project);
    }
  }
}
