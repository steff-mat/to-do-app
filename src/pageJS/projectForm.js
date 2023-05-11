import { Element } from '../codeJS/createElement';
import { Identity } from '../codeJS/createIdentity';

export default function projectForm() {
  // Base of the form
  new Element('form', 'id', 'project_form', '', 'project_section');
  new Identity('project_form', 'name', 'project_form_name', '');

  //Name section
  new Element('div', 'id', 'div_project_form_input_name', '', 'project_form');
  new Element(
    'label',
    'id',
    'label_project_form_input_name',
    '',
    'div_project_form_input_name'
  );
  new Identity(
    'label_project_form_input_name',
    'for',
    'project_form_input_name',
    'Enter project name'
  );
  new Element(
    'input',
    'id',
    'project_form_input_name',
    '',
    'div_project_form_input_name'
  );
  new Identity(
    'project_form_input_name',
    'name',
    'project_form_input_name',
    ''
  );

  //Description section
  new Element(
    'div',
    'id',
    'div_project_form_input_description',
    '',
    'project_form'
  );
  new Element(
    'label',
    'id',
    'label_project_form_input_description',
    '',
    'div_project_form_input_description'
  );
  new Identity(
    'label_project_form_input_description',
    'for',
    'project_form_input_description',
    'Enter project description'
  );
  new Element(
    'input',
    'id',
    'project_form_input_description',
    '',
    'div_project_form_input_description'
  );
  new Identity(
    'project_form_input_description',
    'name',
    'project_form_input_description',
    ''
  );

  //Button section
  new Element('button', 'id', 'project_submit_button', '', 'project_form');
  new Identity('project_submit_button', 'type', 'submit', 'Create Project');
}
