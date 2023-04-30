import { markup } from './constants.js';

const body = document.createElement('body');
body.className = 'body';
document.body = body;
body.innerHTML = markup;

const keyboard = document.querySelector('.keyboard');
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

window.addEventListener('keydown', evt => {
  const { code, key } = evt;

  console.log('CODE: ', code);

  if (code === 'CapsLock') {
    capsLock.classList.toggle('active');
    isCaps = isCaps ? false : true;

    console.log('IS: ', isCaps, evt);

    setCaps();
  }

  if (key === 'Shift') {
    code === 'ShiftLeft'
      ? shiftLeft.classList.add('active')
      : shiftRight.classList.add('active');

    isShift = true;

    console.log('IS: ', isShift, isCaps);

    setCaps();
  }

  const activeKey = document.getElementsByClassName(code)[0];
  activeKey.classList.add('active');

  if (!notType.includes(code)) {
    const currentSpan = activeKey.getElementsByClassName(langCurrent)[0];
    const span = currentSpan.querySelector('.visible');
    let text = span.textContent;

    if (code === 'Tab') {
      text = '     ';
    }

    if (code === 'Backspace') {
      console.log('Here', monitor.textContent);
      const position = monitor.getCaret();

      console.log('POSITION: ');
    }

    if (code === 'Enter') {
      text = '\n';
    }

    monitor.textContent += text;
    return;
  }
});

window.addEventListener('keyup', evt => {
  const { code, key } = evt;

  if (code === 'CapsLock') {
    capsLock.classList.toggle('active');
    isCaps = isCaps ? false : true;

    console.log('IS: ', isCaps, evt);

    setCaps();
    return;
  }

  const activeKey = document.querySelector(`.${code}`);
  activeKey.classList.remove('active');

  if (key === 'Shift') {
    isShift = false;
    setCaps();
  }
});

function handlerKeyboardClick(evt) {
  evt.preventDefault();
  const { target } = evt;

  if (target.tagName !== 'BUTTON') return;
}
