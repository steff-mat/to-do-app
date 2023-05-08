import CreateElement from './CreateElement';

export default function StorageLooper(status, location) {
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
