export default function StorageHandler(formValue) {
  const form = document.getElementById(formValue);

  form.addEventListener('submit', function () {
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    localStorage.setItem(`${id()}`, JSON.stringify(formDataObject));
  });

  function id() {
    const nameText = document.querySelector('#todo_name').value;
    return nameText.toLowerCase().replaceAll(' ', '');
    // const timestamp = Date.now().toString(36);
    // const randomChars = Math.random().toString(36).slice(2);
    // return timestamp + randomChars;
  }
}
