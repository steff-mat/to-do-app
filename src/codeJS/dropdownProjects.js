export default function dropdown() {
  const localStorageKeys = Object.keys(localStorage);
  const select = document.getElementById('task_form_input_assign');

  for (let i = 0; i < localStorage.length; i++) {
    const project = JSON.parse(localStorage.getItem(localStorage.key(i))).list;
    for (let j = 0; j < project.length; j++) {}
  }

  for (let i = 0; i < localStorageKeys.length; i++) {
    const localStorageKey = localStorageKeys[i];
    const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    const option = document.createElement('option');
    option.value = localStorageKey;
    option.text = localStorageValue.projectName;
    select.appendChild(option);
  }
}
