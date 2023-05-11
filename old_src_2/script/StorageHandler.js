export default function StorageHandler(formValue, name) {
  const form = document.getElementById(formValue);

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let form = {
      projectName: document.querySelector('#todo_name').value,
      projectDate: document.querySelector('#todo_date').value,
      projectDescription: document.querySelector('#todo_description').value,
    };
    localStorage.setItem('to-do-app', JSON.stringify(form));

    // let projectName = document.querySelector('#todo_name').value;
    // let projectDate = document.querySelector('#todo_date').value;
    // let projectDescription = document.querySelector('#todo_description').value;

    // localStorage.setItem(projectName, JSON.stringify(form));

    //   const formData = new FormData(form);
    //   const newProject = Object.fromEntries(formData.entries());
    //   let projectList = JSON.parse(localStorage.getItem('to-do-app')) || [];
    //   projectList.push(newProject);
    //   localStorage.setItem('to-do-app', JSON.stringify(projectList));
    //   const form = {
    //     projectName,
    //   };
    // });
  });
}
