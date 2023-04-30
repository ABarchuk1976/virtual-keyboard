import { markup } from './constants.js';

const body = document.createElement('body');
body.className = 'body';
document.body = body;
body.innerHTML = markup;

const keyboard = document.querySelector('.keyboard');
const monitor = document.querySelector('.app__monitor');
const notType = [
  'Backspace',
  'Enter',
  'CapsLock',
  'ShiftLeft',
  'ShiftRight',
  'ControlLeft',
  'ControlRight',
  'MetaLeft',
  'AltLeft',
  'AltRight',
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

// switching language
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

handleSwitchLang(switchLang, 'ControlLeft', 'KeyL');

// shift and caps
function changeCaps(shiftClass) {
  function change(arr, add, remove) {
    for (let item of arr) {
      item.classList.remove(remove);
      item.classList.add(add);
    }
  }

  for (let arr of shiftClasses) {
    if (arr[0].classList.contains('visible')) change(arr, 'hidden', 'visible');
  }

  change(shiftClass, 'visible', 'hidden');
}

window.addEventListener('keydown', evt => {
  const { code } = evt;

  let isShift =
    shiftLeft.classList.contains('active') ||
    shiftRight.classList.contains('active');
  let isCaps = capsLock.classList.contains('active');

  console.log(
    'Massives: ',
    shift,
    unshift,
    shiftCaps,
    unshiftCaps,
    shiftClasses
  );

  if (code === 'CapsLock') {
    capsLock.classList.toggle('active');
    isCaps = !isCaps;

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
      return;
    }
  }

  const activeKey = document.getElementsByClassName(code)[0];
  activeKey.classList.add('active');

  if (!notType.includes(code)) {
    const currentSpan = activeKey.getElementsByClassName(langCurrent)[0];
    const span = currentSpan.querySelector('.visible');

    monitor.textContent += span.textContent;
    return;
  }
});

window.addEventListener('keyup', evt => {
  const { code } = evt;
  const activeKey = document.getElementsByClassName(code)[0];
  activeKey.classList.remove('active');
});

function handlerKeyboardClick(evt) {
  evt.preventDefault();
  const { target } = evt;

  if (target.tagName !== 'BUTTON') return;
}
