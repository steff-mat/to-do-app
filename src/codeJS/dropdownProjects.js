export default function dropdown() {
  const localStorageKeys = Object.keys(localStorage);
  const select = document.getElementById('task_form_input_assign');

  for (let i = 0; i < localStorageKeys.length; i++) {
    const localStorageKey = localStorageKeys[i];
    const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
    const option = document.createElement('option');
    option.value = localStorageKey;
    option.text = localStorageValue.projectName;
    select.appendChild(option);
  }

  const form = document.getElementById('task_form');
  form.appendChild(select);
}
