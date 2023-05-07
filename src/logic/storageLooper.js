import CreateElement from './CreateElement';
import SetCustom from './SetCustom';
import TodoRemover from './TodoRemover';

export default function storageLooper(status, location) {
  for (let i = 0; i < localStorage.length; i++) {
    let object = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const checker = object.ir_state;
    switch (true) {
      case status === checker:
        CreateElement('div', 'class', 'card_item', location, object.todo);
        break;
    }
    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));
  }
}
