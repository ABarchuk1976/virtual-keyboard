export const markup = `
    <section class="app">
      <textarea
        name="monitor"
        id="monitor"
        cols="30"
        rows="10"
        class="app__monitor"
      ></textarea>
      <ul class="keyboard keyboard__app">
        <li class="keyboard__row">
          <button type="button" class="keyboard__key IntlBackslash">
            <span class="ru">
              <span class="unshift">ё</span>
              <span class="shift hidden">Ё</span>
              <span class="shiftCaps hidden">ё</span>
              <span class="unshiftCaps hidden">Ё</span>
            </span>
            <span class="en hidden">
              <span class="unshift hidden">&#x60;</span>
              <span class="shift hidden">~</span>
              <span class="shiftCaps hidden">&#x60;</span>
              <span class="unshiftCaps hidden">~</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit1">
            <span class="ru">
              <span class="unshift">1</span>
              <span class="shift hidden">!</span>
              <span class="shiftCaps hidden">!</span>
              <span class="unshiftCaps hidden">1</span>
            </span>
            <span class="en hidden">
              <span class="unshift">1</span>
              <span class="shift hidden">!</span>
              <span class="shiftCaps hidden">!</span>
              <span class="unshiftCaps hidden">1</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit2">
            <span class="ru">
              <span class="unshift">2</span>
              <span class="shift hidden">"</span>
              <span class="shiftCaps hidden">"</span>
              <span class="unshiftCaps hidden">2</span>
            </span>
            <span class="en hidden">
              <span class="unshift">2</span>
              <span class="shift hidden">@</span>
              <span class="shiftCaps hidden">@</span>
              <span class="unshiftCaps hidden">2</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit3">
            <span class="ru">
              <span class="unshift">3</span>
              <span class="shift hidden">№</span>
              <span class="shiftCaps hidden">№</span>
              <span class="unshiftCaps hidden">3</span>
            </span>
            <span class="en hidden">
              <span class="unshift">3</span>
              <span class="shift hidden">#</span>
              <span class="shiftCaps hidden">#</span>
              <span class="unshiftCaps hidden">3</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit4">
            <span class="ru">
              <span class="unshift">4</span>
              <span class="shift hidden">;</span>
              <span class="shiftCaps hidden">;</span>
              <span class="unshiftCaps hidden">4</span>
            </span>
            <span class="en hidden">
              <span class="unshift">4</span>
              <span class="shift hidden">$</span>
              <span class="shiftCaps hidden">$</span>
              <span class="unshiftCaps hidden">4</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit5">
            <span class="ru">
              <span class="unshift">5</span>
              <span class="shift hidden">%</span>
              <span class="shiftCaps hidden">%</span>
              <span class="unshiftCaps hidden">5</span>
            </span>
            <span class="en hidden">
              <span class="unshift">5</span>
              <span class="shift hidden">%</span>
              <span class="shiftCaps hidden">%</span>
              <span class="unshiftCaps hidden">5</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit6">
            <span class="ru">
              <span class="unshift">6</span>
              <span class="shift hidden">:</span>
              <span class="shiftCaps hidden">:</span>
              <span class="unshiftCaps hidden">6</span>
            </span>
            <span class="en hidden">
              <span class="unshift">6</span>
              <span class="shift hidden">^</span>
              <span class="shiftCaps hidden">^</span>
              <span class="unshiftCaps hidden">6</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit7">
            <span class="ru">
              <span class="unshift">7</span>
              <span class="shift hidden">?</span>
              <span class="shiftCaps hidden">?</span>
              <span class="unshiftCaps hidden">7</span>
            </span>
            <span class="en hidden">
              <span class="unshift">7</span>
              <span class="shift hidden">&</span>
              <span class="shiftCaps hidden">&</span>
              <span class="unshiftCaps hidden">7</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit8">
            <span class="ru">
              <span class="unshift">8</span>
              <span class="shift hidden">*</span>
              <span class="shiftCaps hidden">*</span>
              <span class="unshiftCaps hidden">8</span>
            </span>
            <span class="en hidden">
              <span class="unshift">8</span>
              <span class="shift hidden">*</span>
              <span class="shiftCaps hidden">*</span>
              <span class="unshiftCaps hidden">8</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit9">
            <span class="ru">
              <span class="unshift">9</span>
              <span class="shift hidden">(</span>
              <span class="shiftCaps hidden">(</span>
              <span class="unshiftCaps hidden">9</span>
            </span>
            <span class="en hidden">
              <span class="unshift">9</span>
              <span class="shift hidden">(</span>
              <span class="shiftCaps hidden">(</span>
              <span class="unshiftCaps hidden">9</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Digit0">
            <span class="ru">
              <span class="unshift">0</span>
              <span class="shift hidden">)</span>
              <span class="shiftCaps hidden">)</span>
              <span class="unshiftCaps hidden">0</span>
            </span>
            <span class="en hidden">
              <span class="unshift">0</span>
              <span class="shift hidden">)</span>
              <span class="shiftCaps hidden">)</span>
              <span class="unshiftCaps hidden">0</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Minus">
            <span class="ru">
              <span class="unshift">-</span>
              <span class="shift hidden">_</span>
              <span class="shiftCaps hidden">_</span>
              <span class="unshiftCaps hidden">-</span>
            </span>
            <span class="en hidden">
              <span class="unshift">-</span>
              <span class="shift hidden">_</span>
              <span class="shiftCaps hidden">_</span>
              <span class="unshiftCaps hidden">-</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Equal">
            <span class="ru">
              <span class="unshift">=</span>
              <span class="shift hidden">+</span>
              <span class="shiftCaps hidden">+</span>
              <span class="unshiftCaps hidden">=</span>
            </span>
            <span class="en hidden">
              <span class="unshift">=</span>
              <span class="shift hidden">+</span>
              <span class="shiftCaps hidden">+</span>
              <span class="unshiftCaps hidden">=</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Backspace">
            <span class="ru">
              <span class="unshift">Backspace</span>
              <span class="shift hidden">Backspace</span>
              <span class="shiftCaps hidden">Backspace</span>
              <span class="unshiftCaps hidden">Backspace</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Backspace</span>
              <span class="shift hidden">Backspace</span>
              <span class="shiftCaps hidden">Backspace</span>
              <span class="unshiftCaps hidden">Backspace</span>
            </span>
          </button>
        </li>
        <li class="keyboard__row">
          <button type="button" class="keyboard__key Tab">
            <span class="ru">
              <span class="unshift">Tab</span>
              <span class="shift hidden">Tab</span>
              <span class="shiftCaps hidden">Tab</span>
              <span class="unshiftCaps hidden">Tab</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Tab</span>
              <span class="shift hidden">Tab</span>
              <span class="shiftCaps hidden">Tab</span>
              <span class="unshiftCaps hidden">Tab</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyQ">
            <span class="ru">
              <span class="unshift">й</span>
              <span class="shift hidden">Й</span>
              <span class="shiftCaps hidden">Й</span>
              <span class="unshiftCaps hidden">й</span>
            </span>
            <span class="en hidden">
              <span class="unshift">q</span>
              <span class="shift hidden">Q</span>
              <span class="shiftCaps hidden">Q</span>
              <span class="unshiftCaps hidden">q</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyW">
            <span class="ru">
              <span class="unshift">ц</span>
              <span class="shift hidden">Ц</span>
              <span class="shiftCaps hidden">Ц</span>
              <span class="unshiftCaps hidden">ц</span>
            </span>
            <span class="en hidden">
              <span class="unshift">w</span>
              <span class="shift hidden">W</span>
              <span class="shiftCaps hidden">W</span>
              <span class="unshiftCaps hidden">w</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyE">
            <span class="ru">
              <span class="unshift">у</span>
              <span class="shift hidden">У</span>
              <span class="shiftCaps hidden">У</span>
              <span class="unshiftCaps hidden">у</span>
            </span>
            <span class="en hidden">
              <span class="unshift">e</span>
              <span class="shift hidden">E</span>
              <span class="shiftCaps hidden">E</span>
              <span class="unshiftCaps hidden">e</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyR">
            <span class="ru">
              <span class="unshift">к</span>
              <span class="shift hidden">К</span>
              <span class="shiftCaps hidden">К</span>
              <span class="unshiftCaps hidden">к</span>
            </span>
            <span class="en hidden">
              <span class="unshift">r</span>
              <span class="shift hidden">R</span>
              <span class="shiftCaps hidden">R</span>
              <span class="unshiftCaps hidden">r</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyT">
            <span class="ru">
              <span class="unshift">е</span>
              <span class="shift hidden">Е</span>
              <span class="shiftCaps hidden">Е</span>
              <span class="unshiftCaps hidden">е</span>
            </span>
            <span class="en hidden">
              <span class="unshift">t</span>
              <span class="shift hidden">T</span>
              <span class="shiftCaps hidden">T</span>
              <span class="unshiftCaps hidden">t</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyY">
            <span class="ru">
              <span class="unshift">н</span>
              <span class="shift hidden">Н</span>
              <span class="shiftCaps hidden">Н</span>
              <span class="unshiftCaps hidden">н</span>
            </span>
            <span class="en hidden">
              <span class="unshift">y</span>
              <span class="shift hidden">Y</span>
              <span class="shiftCaps hidden">Y</span>
              <span class="unshiftCaps hidden">y</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyU">
            <span class="ru">
              <span class="unshift">г</span>
              <span class="shift hidden">Г</span>
              <span class="shiftCaps hidden">Г</span>
              <span class="unshiftCaps hidden">г</span>
            </span>
            <span class="en hidden">
              <span class="unshift">u</span>
              <span class="shift hidden">U</span>
              <span class="shiftCaps hidden">U</span>
              <span class="unshiftCaps hidden">u</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyI">
            <span class="ru">
              <span class="unshift">ш</span>
              <span class="shift hidden">Ш</span>
              <span class="shiftCaps hidden">Ш</span>
              <span class="unshiftCaps hidden">ш</span>
            </span>
            <span class="en hidden">
              <span class="unshift">i</span>
              <span class="shift hidden">I</span>
              <span class="shiftCaps hidden">I</span>
              <span class="unshiftCaps hidden">i</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyO">
            <span class="ru">
              <span class="unshift">щ</span>
              <span class="shift hidden">Щ</span>
              <span class="shiftCaps hidden">Щ</span>
              <span class="unshiftCaps hidden">щ</span>
            </span>
            <span class="en hidden">
              <span class="unshift">o</span>
              <span class="shift hidden">O</span>
              <span class="shiftCaps hidden">O</span>
              <span class="unshiftCaps hidden">o</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyP">
            <span class="ru">
              <span class="unshift">з</span>
              <span class="shift hidden">З</span>
              <span class="shiftCaps hidden">З</span>
              <span class="unshiftCaps hidden">з</span>
            </span>
            <span class="en hidden">
              <span class="unshift">p</span>
              <span class="shift hidden">P</span>
              <span class="shiftCaps hidden">P</span>
              <span class="unshiftCaps hidden">p</span>
            </span>
          </button>
          <button type="button" class="keyboard__key BracketLeft">
            <span class="ru">
              <span class="unshift">х</span>
              <span class="shift hidden">Х</span>
              <span class="shiftCaps hidden">Х</span>
              <span class="unshiftCaps hidden">х</span>
            </span>
            <span class="en hidden">
              <span class="unshift">[</span>
              <span class="shift hidden">{</span>
              <span class="shiftCaps hidden">{</span>
              <span class="unshiftCaps hidden">[</span>
            </span>
          </button>
          <button type="button" class="keyboard__key BracketRight>
            <span class="ru">
              <span class="unshift">ъ</span>
              <span class="shift hidden">Ъ</span>
              <span class="shiftCaps hidden">Ъ</span>
              <span class="unshiftCaps hidden">ъ</span>
            </span>
            <span class="en hidden">
              <span class="unshift">]</span>
              <span class="shift hidden">}</span>
              <span class="shiftCaps hidden">}</span>
              <span class="unshiftCaps hidden">]</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Backslash">
            <span class="ru">
              <span class="unshift">&#x5c;</span>
              <span class="shift hidden">/</span>
              <span class="shiftCaps hidden">/</span>
              <span class="unshiftCaps hidden">&#x5c;</span>
            </span>
            <span class="en hidden">
              <span class="unshift">&#x5c;</span>
              <span class="shift hidden">|</span>
              <span class="shiftCaps hidden">|</span>
              <span class="unshiftCaps hidden">&#x5c;</span>
            </span>
          </button>
					<button type="button" class="keyboard__key Delete">
            <span class="ru">
              <span class="unshift">Del</span>
              <span class="shift hidden">Del</span>
              <span class="shiftCaps hidden">Del</span>
              <span class="unshiftCaps hidden">Del</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Del</span>
              <span class="shift hidden">Del</span>
              <span class="shiftCaps hidden">Del</span>
              <span class="unshiftCaps hidden">Del</span>
            </span>
          </button>
        </li>
				<li class="keyboard__row">
          <button type="button" class="keyboard__key CapsLock">
            <span class="ru">
              <span class="unshift">Caps Lock</span>
              <span class="shift hidden">Caps Lock</span>
              <span class="shiftCaps hidden">Caps Lock</span>
              <span class="unshiftCaps hidden">Caps Lock</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Caps Lock</span>
              <span class="shift hidden">Caps Lock</span>
              <span class="shiftCaps hidden">Caps Lock</span>
              <span class="unshiftCaps hidden">Caps Lock</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyA">
            <span class="ru">
              <span class="unshift">ф</span>
              <span class="shift hidden">ф</span>
              <span class="shiftCaps hidden">ф</span>
              <span class="unshiftCaps hidden">ф</span>
            </span>
            <span class="en hidden">
              <span class="unshift">a</span>
              <span class="shift hidden">A</span>
              <span class="shiftCaps hidden">A</span>
              <span class="unshiftCaps hidden">a</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyS">
            <span class="ru">
              <span class="unshift">ы</span>
              <span class="shift hidden">Ы</span>
              <span class="shiftCaps hidden">Ы</span>
              <span class="unshiftCaps hidden">ы</span>
            </span>
            <span class="en hidden">
              <span class="unshift">s</span>
              <span class="shift hidden">S</span>
              <span class="shiftCaps hidden">S</span>
              <span class="unshiftCaps hidden">s</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyD">
            <span class="ru">
              <span class="unshift">в</span>
              <span class="shift hidden">В</span>
              <span class="shiftCaps hidden">В</span>
              <span class="unshiftCaps hidden">в</span>
            </span>
            <span class="en hidden">
              <span class="unshift">d</span>
              <span class="shift hidden">D</span>
              <span class="shiftCaps hidden">D</span>
              <span class="unshiftCaps hidden">d</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyF">
            <span class="ru">
              <span class="unshift">а</span>
              <span class="shift hidden">А</span>
              <span class="shiftCaps hidden">А</span>
              <span class="unshiftCaps hidden">а</span>
            </span>
            <span class="en hidden">
              <span class="unshift">f</span>
              <span class="shift hidden">F</span>
              <span class="shiftCaps hidden">F</span>
              <span class="unshiftCaps hidden">f</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyG">
            <span class="ru">
              <span class="unshift">п</span>
              <span class="shift hidden">П</span>
              <span class="shiftCaps hidden">П</span>
              <span class="unshiftCaps hidden">п</span>
            </span>
            <span class="en hidden">
              <span class="unshift">g</span>
              <span class="shift hidden">G</span>
              <span class="shiftCaps hidden">G</span>
              <span class="unshiftCaps hidden">g</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyH">
            <span class="ru">
              <span class="unshift">р</span>
              <span class="shift hidden">Р</span>
              <span class="shiftCaps hidden">Р</span>
              <span class="unshiftCaps hidden">р</span>
            </span>
            <span class="en hidden">
              <span class="unshift">h</span>
              <span class="shift hidden">H</span>
              <span class="shiftCaps hidden">H</span>
              <span class="unshiftCaps hidden">h</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyJ">
            <span class="ru">
              <span class="unshift">о</span>
              <span class="shift hidden">О</span>
              <span class="shiftCaps hidden">О</span>
              <span class="unshiftCaps hidden">о</span>
            </span>
            <span class="en hidden">
              <span class="unshift">j</span>
              <span class="shift hidden">J</span>
              <span class="shiftCaps hidden">J</span>
              <span class="unshiftCaps hidden">j</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyK">
            <span class="ru">
              <span class="unshift">л</span>
              <span class="shift hidden">Л</span>
              <span class="shiftCaps hidden">Л</span>
              <span class="unshiftCaps hidden">л</span>
            </span>
            <span class="en hidden">
              <span class="unshift">k</span>
              <span class="shift hidden">K</span>
              <span class="shiftCaps hidden">K</span>
              <span class="unshiftCaps hidden">k</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyL">
            <span class="ru">
              <span class="unshift">д</span>
              <span class="shift hidden">Д</span>
              <span class="shiftCaps hidden">Д</span>
              <span class="unshiftCaps hidden">д</span>
            </span>
            <span class="en hidden">
              <span class="unshift">l</span>
              <span class="shift hidden">L</span>
              <span class="shiftCaps hidden">L</span>
              <span class="unshiftCaps hidden">l</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Semicolon">
            <span class="ru">
              <span class="unshift">ж</span>
              <span class="shift hidden">Ж</span>
              <span class="shiftCaps hidden">Ж</span>
              <span class="unshiftCaps hidden">ж</span>
            </span>
            <span class="en hidden">
              <span class="unshift">;</span>
              <span class="shift hidden">:</span>
              <span class="shiftCaps hidden">:</span>
              <span class="unshiftCaps hidden">;</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Quote">
            <span class="ru">
              <span class="unshift">э</span>
              <span class="shift hidden">Э</span>
              <span class="shiftCaps hidden">Э</span>
              <span class="unshiftCaps hidden">э</span>
            </span>
            <span class="en hidden">
              <span class="unshift">'</span>
              <span class="shift hidden">"</span>
              <span class="shiftCaps hidden">"</span>
              <span class="unshiftCaps hidden">'</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Enter>
            <span class="ru">
              <span class="unshift">Enter</span>
              <span class="shift hidden">Enter</span>
              <span class="shiftCaps hidden">Enter</span>
              <span class="unshiftCaps hidden">Enter</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Enter</span>
              <span class="shift hidden">Enter</span>
              <span class="shiftCaps hidden">Enter</span>
              <span class="unshiftCaps hidden">Enter</span>
            </span>
          </button>
        </li>
				<li class="keyboard__row">
          <button type="button" class="keyboard__key ShiftLeft">
            <span class="ru">
              <span class="unshift">Shift</span>
              <span class="shift hidden">Shift</span>
              <span class="shiftCaps hidden">Shift</span>
              <span class="unshiftCaps hidden">Shift</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Shift</span>
              <span class="shift hidden">Shift</span>
              <span class="shiftCaps hidden">Shift</span>
              <span class="unshiftCaps hidden">Shift</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyZ">
            <span class="ru">
              <span class="unshift">я</span>
              <span class="shift hidden">Я</span>
              <span class="shiftCaps hidden">Я</span>
              <span class="unshiftCaps hidden">я</span>
            </span>
            <span class="en hidden">
              <span class="unshift">z</span>
              <span class="shift hidden">Z</span>
              <span class="shiftCaps hidden">Z</span>
              <span class="unshiftCaps hidden">z</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyX">
            <span class="ru">
              <span class="unshift">ч</span>
              <span class="shift hidden">Ч</span>
              <span class="shiftCaps hidden">Ч</span>
              <span class="unshiftCaps hidden">ч</span>
            </span>
            <span class="en hidden">
              <span class="unshift">x</span>
              <span class="shift hidden">X</span>
              <span class="shiftCaps hidden">X</span>
              <span class="unshiftCaps hidden">x</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyC">
            <span class="ru">
              <span class="unshift">с</span>
              <span class="shift hidden">С</span>
              <span class="shiftCaps hidden">С</span>
              <span class="unshiftCaps hidden">с</span>
            </span>
            <span class="en hidden">
              <span class="unshift">c</span>
              <span class="shift hidden">C</span>
              <span class="shiftCaps hidden">C</span>
              <span class="unshiftCaps hidden">c</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyV">
            <span class="ru">
              <span class="unshift">м</span>
              <span class="shift hidden">М</span>
              <span class="shiftCaps hidden">М</span>
              <span class="unshiftCaps hidden">м</span>
            </span>
            <span class="en hidden">
              <span class="unshift">v</span>
              <span class="shift hidden">V</span>
              <span class="shiftCaps hidden">V</span>
              <span class="unshiftCaps hidden">v</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyB">
            <span class="ru">
              <span class="unshift">и</span>
              <span class="shift hidden">И</span>
              <span class="shiftCaps hidden">И</span>
              <span class="unshiftCaps hidden">и</span>
            </span>
            <span class="en hidden">
              <span class="unshift">b</span>
              <span class="shift hidden">B</span>
              <span class="shiftCaps hidden">B</span>
              <span class="unshiftCaps hidden">b</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyN">
            <span class="ru">
              <span class="unshift">т</span>
              <span class="shift hidden">Т</span>
              <span class="shiftCaps hidden">Т</span>
              <span class="unshiftCaps hidden">т</span>
            </span>
            <span class="en hidden">
              <span class="unshift">n</span>
              <span class="shift hidden">N</span>
              <span class="shiftCaps hidden">N</span>
              <span class="unshiftCaps hidden">n</span>
            </span>
          </button>
          <button type="button" class="keyboard__key KeyM">
            <span class="ru">
              <span class="unshift">ь</span>
              <span class="shift hidden">Ь</span>
              <span class="shiftCaps hidden">Ь</span>
              <span class="unshiftCaps hidden">ь</span>
            </span>
            <span class="en hidden">
              <span class="unshift">m</span>
              <span class="shift hidden">M</span>
              <span class="shiftCaps hidden">M</span>
              <span class="unshiftCaps hidden">m</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Comma">
            <span class="ru">
              <span class="unshift">б</span>
              <span class="shift hidden">Б</span>
              <span class="shiftCaps hidden">Б</span>
              <span class="unshiftCaps hidden">б</span>
            </span>
            <span class="en hidden">
              <span class="unshift">,</span>
              <span class="shift hidden"><</span>
              <span class="shiftCaps hidden"><</span>
              <span class="unshiftCaps hidden">,</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Period">
            <span class="ru">
              <span class="unshift">ю</span>
              <span class="shift hidden">Ю</span>
              <span class="shiftCaps hidden">Ю</span>
              <span class="unshiftCaps hidden">ю</span>
            </span>
            <span class="en hidden">
              <span class="unshift">.</span>
              <span class="shift hidden">></span>
              <span class="shiftCaps hidden">></span>
              <span class="unshiftCaps hidden">.</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Slash">
            <span class="ru">
              <span class="unshift">.</span>
              <span class="shift hidden">,</span>
              <span class="shiftCaps hidden">,</span>
              <span class="unshiftCaps hidden">.</span>
            </span>
            <span class="en hidden">
              <span class="unshift">/</span>
              <span class="shift hidden">?</span>
              <span class="shiftCaps hidden">?</span>
              <span class="unshiftCaps hidden">/</span>
            </span>
          </button>
          <button type="button" class="keyboard__key ArrowUp">
            <span class="ru">
              <span class="unshift">↑</span>
              <span class="shift hidden">↑</span>
              <span class="shiftCaps hidden">↑</span>
              <span class="unshiftCaps hidden">↑</span>
            </span>
            <span class="en hidden">
              <span class="unshift">↑</span>
              <span class="shift hidden">↑</span>
              <span class="shiftCaps hidden">↑</span>
              <span class="unshiftCaps hidden">↑</span>
            </span>
          </button>
          <button type="button" class="keyboard__key ShiftRight>
            <span class="ru">
              <span class="unshift">Shift</span>
              <span class="shift hidden">Shift</span>
              <span class="shiftCaps hidden">Shift</span>
              <span class="unshiftCaps hidden">Shift</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Shift</span>
              <span class="shift hidden">Shift</span>
              <span class="shiftCaps hidden">Shift</span>
              <span class="unshiftCaps hidden">Shift</span>
            </span>
          </button>
        </li>
				<li class="keyboard__row">
          <button type="button" class="keyboard__key ControlLeft">
            <span class="ru">
              <span class="unshift">Ctrl</span>
              <span class="shift hidden">Ctrl</span>
              <span class="shiftCaps hidden">Ctrl</span>
              <span class="unshiftCaps hidden">Ctrl</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Ctrl</span>
              <span class="shift hidden">Ctrl</span>
              <span class="shiftCaps hidden">Ctrl</span>
              <span class="unshiftCaps hidden">Ctrl</span>
            </span>
          </button>
          <button type="button" class="keyboard__key MetaLeft">
            <span class="ru">
              <span class="unshift">Win</span>
              <span class="shift hidden">Win</span>
              <span class="shiftCaps hidden">Win</span>
              <span class="unshiftCaps hidden">Win</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Win</span>
              <span class="shift hidden">Win</span>
              <span class="shiftCaps hidden">Win</span>
              <span class="unshiftCaps hidden">Win</span>
            </span>
          </button>
          <button type="button" class="keyboard__key AltLeft">
            <span class="ru">
              <span class="unshift">Alt</span>
              <span class="shift hidden">Alt</span>
              <span class="shiftCaps hidden">Alt</span>
              <span class="unshiftCaps hidden">Alt</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Alt</span>
              <span class="shift hidden">Alt</span>
              <span class="shiftCaps hidden">Alt</span>
              <span class="unshiftCaps hidden">Alt</span>
            </span>
          </button>
          <button type="button" class="keyboard__key Space">
            <span class="ru">
              <span class="unshift"> </span>
              <span class="shift hidden"> </span>
              <span class="shiftCaps hidden"> </span>
              <span class="unshiftCaps hidden"> </span>
            </span>
            <span class="en hidden">
              <span class="unshift"> </span>
              <span class="shift hidden"> </span>
              <span class="shiftCaps hidden"> </span>
              <span class="unshiftCaps hidden"> </span>
            </span>
          </button>
          <button type="button" class="keyboard__key AltRight">
            <span class="ru">
              <span class="unshift">Alt</span>
              <span class="shift hidden">Alt</span>
              <span class="shiftCaps hidden">Alt</span>
              <span class="unshiftCaps hidden">Alt</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Alt</span>
              <span class="shift hidden">Alt</span>
              <span class="shiftCaps hidden">Alt</span>
              <span class="unshiftCaps hidden">Alt</span>
            </span>
          </button>
          <button type="button" class="keyboard__key ArrowLeft">
            <span class="ru">
              <span class="unshift">←</span>
              <span class="shift hidden">←</span>
              <span class="shiftCaps hidden">←</span>
              <span class="unshiftCaps hidden">←</span>
            </span>
            <span class="en hidden">
              <span class="unshift">←</span>
              <span class="shift hidden">←</span>
              <span class="shiftCaps hidden">←</span>
              <span class="unshiftCaps hidden">←</span>
            </span>
          </button>
          <button type="button" class="keyboard__key ArrowDown">
            <span class="ru">
              <span class="unshift">↓</span>
              <span class="shift hidden">↓</span>
              <span class="shiftCaps hidden">↓</span>
              <span class="unshiftCaps hidden">↓</span>
            </span>
            <span class="en hidden">
              <span class="unshift">↓</span>
              <span class="shift hidden">↓</span>
              <span class="shiftCaps hidden">↓</span>
              <span class="unshiftCaps hidden">↓</span>
            </span>
          </button>
          <button type="button" class="keyboard__key ArrowRight">
            <span class="ru">
              <span class="unshift">→</span>
              <span class="shift hidden">→</span>
              <span class="shiftCaps hidden">→</span>
              <span class="unshiftCaps hidden">→</span>
            </span>
            <span class="en hidden">
              <span class="unshift">→</span>
              <span class="shift hidden">→</span>
              <span class="shiftCaps hidden">→</span>
              <span class="unshiftCaps hidden">→</span>
            </span>
          </button>
					<button type="button" class="keyboard__key ControlRight">
            <span class="ru">
              <span class="unshift">Ctrl</span>
              <span class="shift hidden">Ctrl</span>
              <span class="shiftCaps hidden">Ctrl</span>
              <span class="unshiftCaps hidden">Ctrl</span>
            </span>
            <span class="en hidden">
              <span class="unshift">Ctrl</span>
              <span class="shift hidden">Ctrl</span>
              <span class="shiftCaps hidden">Ctrl</span>
              <span class="unshiftCaps hidden">Ctrl</span>
            </span>
          </button>
        </li>
      </ul>
    </section>
`;
