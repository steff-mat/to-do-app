export default function StorageHandler(formValue, name) {
  const form = document.getElementById(formValue);

  form.addEventListener('submit', function (e) {
    // e.preventDefault();
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    localStorage.setItem(`${id()}`, JSON.stringify(formDataObject));
  });

  function id() {
    const nameText = document.querySelector(name).value;
    return nameText.toLowerCase().replaceAll(' ', '');
  }
}
