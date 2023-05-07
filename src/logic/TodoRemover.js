import CreateElement from './CreateElement';

export default function TodoRemover(location) {
  CreateElement('button', 'class', 'rm_btn', location, 'X');
}
