export class ProjectFormHandler {
  constructor(name, description, submit) {
    this.name = name;
    this.description = description;
    this.submit = submit;
  }
}

export class TaskFormHandler extends ProjectFormHandler {
  constructor(name, description, dueDate, taskState, submit) {
    super(name, description, submit);
    this.dueDate = dueDate;
    this.taskState = taskState;
  }
}
