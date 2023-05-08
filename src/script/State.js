export default function State() {
  //State filed
  CreateElement('div', 'id', 'todo_state', '#todo_form', '');

  //Ongoing State field
  CreateElement('div', 'class', 'ongoing_state', '#todo_state', '');
  CreateElement('input', 'id', 'todo_ongoing', '.ongoing_state');
  CreateElement(
    'label',
    'id',
    'todo_ongoing_label',
    '.ongoing_state',
    'Ongoing'
  );
  CreateClass('#todo_ongoing', 'type', 'radio');
  CreateClass('#todo_ongoing', 'value', 'ongoing');
  CreateClass('#todo_ongoing_label', 'for', 'todo_ongoing');
  CreateClass('#todo_ongoing', 'name', 'todo');

  // Overdue State field
  CreateElement('div', 'class', 'overdue_state', '#todo_state', '');
  CreateElement('input', 'id', 'todo_overdue', '.overdue_state');
  CreateElement(
    'label',
    'id',
    'todo_overdue_label',
    '.overdue_state',
    'Overdue'
  );
  CreateClass('#todo_overdue', 'type', 'radio');
  CreateClass('#todo_overdue', 'value', 'overdue');

  CreateClass('#todo_overdue_label', 'for', 'todo_overdue');
  CreateClass('#todo_overdue', 'name', 'todo');

  // Pending State field
  CreateElement('div', 'class', 'pending_state', '#todo_state', '');
  CreateElement('input', 'id', 'todo_pending', '.pending_state');
  CreateElement(
    'label',
    'id',
    'todo_pending_label',
    '.pending_state',
    'Pending'
  );
  CreateClass('#todo_pending', 'type', 'radio');
  CreateClass('#todo_pending', 'value', 'pending');

  CreateClass('#todo_pending_label', 'for', 'todo_pending');
  CreateClass('#todo_pending', 'name', 'todo');

  // Completed State field
  CreateElement('div', 'class', 'completed_state', '#todo_state', '');
  CreateElement('input', 'id', 'todo_completed', '.completed_state');
  CreateElement(
    'label',
    'id',
    'todo_completed_label',
    '.completed_state',
    'Completed'
  );
  CreateClass('#todo_completed', 'type', 'radio');
  CreateClass('#todo_completed', 'value', 'completed');

  CreateClass('#todo_completed_label', 'for', 'todo_completed');
  CreateClass('#todo_completed', 'name', 'todo');
}
