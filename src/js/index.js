import { markup } from './constants.js';

const body = document.createElement('body');
body.className = 'body';
document.body = body;
body.innerHTML = markup;

const keys = document.getElementsByClassName('keyboard__key');
const monitor = document.querySelector('.app__monitor');
const notType = [
  'CapsLock',
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'ControlRight',
  'MetaLeft',
  'AltLeft',
  'AltRight',
  'Backspace',
  'Delete',
];

const switchersRu = document.getElementsByClassName('ru');
const switchersEn = document.getElementsByClassName('en');
let langCurrent = 'ru';

const unshift = document.getElementsByClassName('unshift');
const shift = document.getElementsByClassName('shift');
const unshiftCaps = document.getElementsByClassName('unshiftCaps');
const shiftCaps = document.getElementsByClassName('shiftCaps');
const shiftClasses = [unshift, shift, unshiftCaps, shiftCaps];
const capsLock = document.querySelector('.CapsLock');
const shiftLeft = document.querySelector('.ShiftLeft');
const shiftRight = document.querySelector('.ShiftRight');
let isShift =
  shiftLeft.classList.contains('active') ||
  shiftRight.classList.contains('active');
let isCaps = capsLock.classList.contains('active');

// onload
document.addEventListener('onload', () => {
  try {
    const lang = localStorage.getItem('languageKeyboard');

    if (lang) langCurrent = lang;

    localStorage.setItem('languageKeyboard', langCurrent);

    monitor.textContent = '';
  } catch (error) {
    console.error(error);
  }
});

// switching language
function handleSwitchLang(func, ...codes) {
  let pressed = new Set();

  window.addEventListener('keydown', evt => {
    evt.preventDefault();
    pressed.add(evt.code);

    for (let code of codes) {
      if (!pressed.has(code)) return;
    }

    pressed.clear();

    func();
  });

  window.addEventListener('keyup', evt => {
    evt.preventDefault();
    pressed.delete(evt.code);
  });
}

function switchLang() {
  if (langCurrent === 'ru') {
    langCurrent = 'en';
    localStorage.setItem('languageKeyboard', 'en');
  } else {
    langCurrent = 'ru';
    localStorage.setItem('languageKeyboard', 'ru');
  }

  for (let switcher of switchersEn) {
    switcher.classList.toggle('hidden');
  }
  for (let switcher of switchersRu) {
    switcher.classList.toggle('hidden');
  }
}

handleSwitchLang(switchLang, 'ControlLeft', 'MetaLeft');

// shift and caps
function change(arr, add, remove) {
  for (let item of arr) {
    item.classList.remove(remove);
    item.classList.add(add);
  }
}

function changeCaps(shiftClass) {
  for (let arr of shiftClasses) {
    if (arr[0].classList.contains('visible')) change(arr, 'hidden', 'visible');
  }

  change(shiftClass, 'visible', 'hidden');
}

function setCaps() {
  if (isShift && isCaps) {
    changeCaps(shiftCaps);
    return;
  }

  if (!isShift && isCaps) {
    changeCaps(unshiftCaps);
    return;
  }

  if (isShift && !isCaps) {
    changeCaps(shift);
    return;
  }

  if (!isShift && !isCaps) {
    changeCaps(unshift);
  }
}

// function process event by key code
function handleEventDown(code) {
  const activeKey = document.getElementsByClassName(code)[0];
  activeKey.classList.add('active');

  if (code === 'CapsLock') {
    isCaps = isCaps ? false : true;
    isCaps
      ? capsLock.classList.add('active')
      : capsLock.classList.remove('active');

    setCaps();
  }

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    code === 'ShiftLeft'
      ? shiftLeft.classList.add('active')
      : shiftRight.classList.add('active');

    isShift = true;

    setCaps();
  }

  if (code === 'Backspace') {
    const start = monitor.selectionStart;
    const end = monitor.selectionEnd;
    const length = monitor.textContent.length;

    if (start && length) {
      if (start === 1) {
        monitor.textContent = monitor.textContent.substring(end);
      }

      if (start === length) {
        monitor.textContent = monitor.textContent.substring(0, start - 1);
      }

      monitor.textContent =
        monitor.textContent.substring(0, start - 1) +
        monitor.textContent.substring(end);
    }
  }

  if (code === 'Delete') {
    const start = monitor.selectionStart;
    const end = monitor.selectionEnd;
    const length = monitor.textContent.length;

    if (start !== length && length) {
      if (start === length - 1) {
        monitor.textContent = monitor.textContent.substring(0, start);
      }

      if (start === 0) {
        monitor.textContent = monitor.textContent.substring(end + 1);
      }

      monitor.textContent =
        monitor.textContent.substring(0, start) +
        monitor.textContent.substring(end + 1);
    }
  }

  if (!notType.includes(code)) {
    const currentSpan = activeKey.getElementsByClassName(langCurrent)[0];
    const span = currentSpan.querySelector('.visible');
    let text = span.textContent;

    if (code === 'Tab') {
      text = '     ';
    }

    if (code === 'Enter') {
      text = monitor.textContent ? '\n' : '';
    }

    monitor.textContent += text;
  }

  monitor.selectionStart = monitor.textContent.length;
}

function handleEventKeyUp(code) {
  if (code === 'CapsLock') {
    isCaps = isCaps ? false : true;

    isCaps
      ? capsLock.classList.add('active')
      : capsLock.classList.remove('active');

    setCaps();
    return;
  }

  const activeKey = document.querySelector(`.${code}`);
  activeKey.classList.remove('active');

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    isShift = false;
    setCaps();
  }
}

function handleEventMouthUp(code) {
  if (code === 'CapsLock') return;

  const activeKey = document.querySelector(`.${code}`);
  activeKey.classList.remove('active');

  if (code === 'ShiftLeft' || code === 'ShiftRight') {
    isShift = false;
    setCaps();
  }
}

// keydown event
window.addEventListener('keydown', evt => {
  const { code } = evt;

  handleEventDown(code);
});

window.addEventListener('keyup', evt => {
  const { code } = evt;

  handleEventKeyUp(code);
});

//  click events
for (const key of keys) {
  key.onmousedown = () => handleEventDown(key.classList[1]);
  key.onclick = () => handleEventMouthUp(key.classList[1]);
}
