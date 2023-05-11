import { Element } from '../codeJS/createElement';

export default function projectLooper() {
  for (let i = 0; i < localStorage.length; i++) {
    new Element('div', 'id', `project_item_holder_${i}`, '', 'project_holder');
    let touch = localStorage.key(i);
    let description = JSON.parse(
      localStorage.getItem(localStorage.key(i))
    ).projectDescription;
    new Element(
      'button',
      'id',
      `project_item_button_${i}`,
      touch,
      `project_item_holder_${i}`
    );
    new Element(
      'p',
      'id',
      `project_item_description_${i}`,
      description,
      `project_item_holder_${i}`
    );
    document
      .getElementById(`project_item_button_${i}`)
      .addEventListener('click', () => {
        localStorage.removeItem(
          document.getElementById(`project_item_button_${i}`).innerText
        );
        document.getElementById(`project_item_button_${i}`).remove();
        document.getElementById(`project_item_description_${i}`).remove();
      });
  }
}
