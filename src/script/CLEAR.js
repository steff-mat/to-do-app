import CreateElement from './CreateElement';

export default function CLEAR() {
  CreateElement('button', 'class', 'clear', '#main_menu', 'clear');
  const clearBtn = document.querySelector('.clear');
  clearBtn.style.backgroundColor = 'red';
  clearBtn.style.color = 'white';
  const clearText = document.querySelector('.logo_main_text');
  clearBtn.addEventListener('click', () => {
    const keys = Object.keys(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
      localStorage.removeItem(keys[i]);
    }
    if (keys.length === 0) {
      clearText.innerText = 'No more keys bro';
    }
    if (keys.length !== 0) {
      clearText.innerText =
        'CLEAR EVERY FUCKING THING on click! Remove me from Welcome.js';
    }
  });
}
