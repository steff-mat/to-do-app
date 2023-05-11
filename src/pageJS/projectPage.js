import { Element } from '../codeJS/createElement';
import { Identity } from '../codeJS/createIdentity';

export default function projectPage() {
  // Base of the form
  new Element('div', 'id', 'project_section', '', 'content');
  new Element('form', 'id', 'project_form', '', 'project_section');
  new Identity('project_form', 'name', 'project_form_name', '', 'project_form');

  //Name section
  new Element('div', 'id', 'div_project_form_input_name', '', 'project_form');
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
  new Element(
    'label',
    'id',
    'label_project_form_input_name',
    'Enter project name',
    'div_project_form_input_name'
  );
  new Identity(
    'label_project_form_input_name',
    'for',
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
    'input',
    'id',
    'project_form_input_description',
    '',
    'div_project_form_input_description'
  );
  new Identity(
    'project_form_input_description',
    'description',
    'project_form_input_description',
    ''
  );
  new Element(
    'label',
    'id',
    'label_project_form_input_description',
    'Enter project description',
    'div_project_form_input_description'
  );
  new Identity(
    'label_project_form_input_description',
    'for',
    'project_form_input_description',
    ''
  );
}
