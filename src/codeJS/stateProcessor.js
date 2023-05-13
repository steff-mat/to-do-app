export default function stateProcessor() {
  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i))).list;
    for (let j = 0; j < project.length; j++) {
      const statusButton = document.getElementById(
        `task_item_status_p${i}_t${j}`
      );
      const values = ['Ongoing', 'Pending', 'Overdue', 'Completed'];
      let counter = values.indexOf(
        document.getElementById(`task_item_status_p${i}_t${j}`).innerText
      );
      statusButton.addEventListener('click', () => {
        counter++;
        if (counter > 3) {
          counter = 0;
        }
        console.log(counter);
        console.log(values[counter]);
        const holder = JSON.parse(localStorage.getItem(localStorage.key(i)));
        holder.list[j].taskStatus = values[counter];
        console.log(holder.list[j].taskStatus);
        localStorage.setItem(localStorage.key(i), JSON.stringify(holder));
        location.reload();
      });
    }
  }
}
