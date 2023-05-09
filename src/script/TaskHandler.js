import FindKey from './FindKey';

export default function TaskHandler(formName) {
  const form = document.querySelector(formName);
  const header = document.querySelector('.project_header');

  for (let i = 0; i < localStorage.length; i++) {
    let object = JSON.parse(localStorage.getItem(localStorage.key(i)));
    // FindKey(header, object);
  }

  // form.addEventListener('submit', function () {
  //   const formData = new FormData(form);
  //   const formDataObject = Object.fromEntries(formData.entries());
  //   localStorage.setItem(`${id()}`, JSON.stringify(formDataObject));
  // });

  // function id() {
  //   const timestamp = Date.now().toString(36);
  //   const randomChars = Math.random().toString(36).slice(2);
  //   return timestamp + randomChars;
  // }
}
