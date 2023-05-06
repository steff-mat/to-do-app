import CreateElement from './CreateElement';
import SetClass from './SetClass';
import SetCustom from './SetCustom';

export default function FormItem(
  ce1element,
  ce1type,
  ce1value,
  ce1location,
  ce1string,
  ce2element,
  ce2type,
  ce2value,
  ce2location,
  ce2string,
  ce3element,
  ce3type,
  ce3value,
  ce3location,
  ce3string,
  sc1element,
  sc1type,
  sc1value,
  sc2element,
  sc2type,
  sc2value,
  sc3element,
  sc3type,
  sc3value,
  sc4element,
  sc4type,
  sc4value,
  scmelement,
  scmtype,
  scmstring
) {
  CreateElement(ce1element, ce1type, ce1value, ce1location, ce1string);
  CreateElement(ce2element, ce2type, ce2value, ce2location, ce2string);
  CreateElement(ce3element, ce3type, ce3value, ce3location, ce3string);
  SetClass(sc1element, sc1type, sc1value);
  SetClass(sc2element, sc2type, sc2value);
  SetClass(sc3element, sc3type, sc3value);
  SetClass(sc4element, sc4type, sc4value);
  SetCustom(scmelement, scmtype, scmstring);
}

//   FormItem(
//     'div',
//     'class',
//     'iro',
//     '#todo_form',
//     '',
//     'input',
//     'id',
//     'input_radio_ongoing',
//     '.iro',
//     '',
//     'label',
//     'class',
//     'iro_label',
//     '.iro',
//     '',
//     '#input_radio_ongoing',
//     'type',
//     'radio',
//     '#input_radio_ongoing',
//     'name',
//     'ir_state',
//     '#input_radio_ongoing',
//     'value',
//     'input_radio_ongoing',
//     '.iro_label',
//     'for',
//     'input_radio_ongoing',
//     '.iro_label',
//     'innerText',
//     'Ongoing To-Do'
//   );
