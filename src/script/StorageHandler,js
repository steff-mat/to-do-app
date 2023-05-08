export default function StorageHandler() {
  const form = document.getElementById('todo_form');

  form.addEventListener('submit', function () {
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    localStorage.setItem(`${id()}`, JSON.stringify(formDataObject));
  });

  function id() {
    const timestamp = Date.now().toString(36);
    const randomChars = Math.random().toString(36).slice(2);
    return timestamp + randomChars;
  }
}
