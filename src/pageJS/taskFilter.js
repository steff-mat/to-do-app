import { Element } from '../codeJS/createElement';
import dropdownFilterProject from '../codeJS/dropdownFilterProject';
import dropdownFilterStatus from '../codeJS/dropdownFilterStatus';

export default function taskFilter() {
  new Element('form', 'id', 'task_filter', '', 'task_section');

  //Project filter
  new Element('div', 'id', 'div_task_filter_project', '', 'task_filter');
  new Element(
    'label',
    'id',
    'task_filter_label',
    'Filter project:',
    'div_task_filter_project'
  );
  new Element(
    'select',
    'id',
    'task_filter_select_project',
    '',
    'div_task_filter_project'
  );

  //Status filter
  new Element('div', 'id', 'div_task_filter_status', '', 'task_filter');
  new Element(
    'label',
    'id',
    'task_filter_label',
    'Filter status:',
    'div_task_filter_status'
  );
  new Element(
    'select',
    'id',
    'task_filter_select_status',
    '',
    'div_task_filter_status'
  );

  //Apply filter
  new Element(
    'button',
    'id',
    'task_filter_button',
    'Apply Filter',
    'task_filter'
  );
  dropdownFilterProject();
  dropdownFilterStatus();
}
