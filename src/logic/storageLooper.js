import CreateElement from './CreateElement';

export default function storageLooper(status, location) {
  //   console.log(status);

  for (let i = 0; i < localStorage.length; i++) {
    let object = JSON.parse(localStorage.getItem(localStorage.key(i)));
    const checker = object.ir_state;
    switch (true) {
      case status === checker:
        CreateElement('div', 'class', 'card_item', location, object.todo);
        break;
    }
    // console.log(i);
    // console.log(localStorage.key(i));
    console.log(JSON.parse(localStorage.getItem(localStorage.key(i))));

    // let todo = object.todo;
    // let state = object.ir_state;
    // console.log(object.todo);
    // console.log(object.ir_state);
  }
}
