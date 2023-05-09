import List from '../page/List';
import ToDoList from '../page/ToDoList';

export default function ProjectLoader() {
  const mainMenu = document.querySelector('#main_menu');
  const buttons = document.querySelectorAll('.project_item');

  for (const button of buttons) {
    button.addEventListener('click', () => {
      console.log(mainMenu);
      mainMenu.remove();
      List();
      ToDoList(button.innerText);
    });
  }
}
