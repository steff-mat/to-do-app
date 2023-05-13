import cardStyle from '../codeJS/cardStyle';
import { Element } from '../codeJS/createElement';
import stateProcessor from '../codeJS/stateProcessor';
import taskLooper from './taskLooper';
import taskProcessor from './taskProcessor';

export default function taskHolder() {
  new Element('div', 'id', 'task_holder', '', 'task_section');
  taskProcessor();
  taskLooper();
  cardStyle();
  stateProcessor();
}
