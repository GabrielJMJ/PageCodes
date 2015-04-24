PageCodes
=========
Create keyboard codes for your page.

## Include
```html
<script src="https://cdn.rawgit.com/GabrielJMJ/PageCodes/master/src/pagecodes.js"></script>
```

## Usage
Lets say hello when someone digits hello
```javascript
PageCodes.createCode('hello', ['h', 'e', 'l', 'l', 'o'], function () {
    alert('Hello');
});
```
and add the ```keydown``` event
```javascript
window.addEventListener('keydown', function (key) {
    PageCodes.run(key.keyCode);
});
```
Each 3 seconds, if the user does not digit nothing, the pressed keys is cleared. If you wanna to change that, use the function ```setIntervalTime``` with the milliseconds:
```javascript
PageCodes.setIntervalTime(5000); // 5 seconds
```

## - [Live example](http://jsfiddle.net/GabrielJMJ/9mgm4ofg/)
## Key codes
*You can ignore the code section.*

| Key | Code |
|:-----:|:------:|
| backspace | 8 |
| tab | 9 |
| enter | 13 |
| shift | 16 |
| ctrl | 17 |
| alt | 18 |
| pause | 19 |
| caps_lock | 20 |
| escape | 27 |
| page_up | 33 |
| page_down | 34 |
| end | 35 |
| home | 36 |
| left_arrow | 37 |
| up_arrow | 38 |
| right_arrow | 39 |
| down_arrow | 40 |
| insert | 45 |
| delete | 46 |
| num_0 | 48 |
| num_1 | 49 |
| num_2 | 50 |
| num_3 | 51 |
| num_4 | 52 |
| num_5 | 53 |
| num_6 | 54 |
| num_7 | 55 |
| num_8 | 56 |
| num_9 | 57 |
| a | 65 |
| b | 66 |
| c | 67 |
| d | 68 |
| e | 69 |
| f | 70 |
| g | 71 |
| h | 72 |
| i | 73 |
| j | 74 |
| k | 75 |
| l | 76 |
| m | 77 |
| n | 78 |
| o | 79 |
| p | 80 |
| q | 81 |
| r | 82 |
| s | 83 |
| t | 84 |
| u | 85 |
| v | 86 |
| w | 87 |
| x | 88 |
| y | 89 |
| z | 90 |
| left_window_key | 91 |
| right_window_key | 92 |
| select_key | 93 |
| numpad_0 | 96 |
| numpad_1 | 97 |
| numpad_2 | 98 |
| numpad_3 | 99 |
| numpad_4 | 100 |
| numpad_5 | 101 |
| numpad_6 | 102 |
| numpad_7 | 103 |
| numpad_8 | 104 |
| numpad_9 | 105 |
| multiply | 106 |
| add | 107 |
| subtract | 109 |
| decimal_point | 110 |
| divide | 111 |
| f1 | 112 |
| f2 | 113 |
| f3 | 114 |
| f4 | 115 |
| f5 | 116 |
| f6 | 117 |
| f7 | 118 |
| f8 | 119 |
| f9 | 120 |
| f10 | 121 |
| f11 | 122 |
| f12 | 123 |
| num_lock | 144 |
| scroll_lock | 145 |
| semi_colon | 186 |
| equal_sign | 187 |
| comma | 188 |
| dash | 189 |
| period | 190 |
| forward_slash | 191 |
| grave_accent | 192 |
| open_bracket | 219 |
| back_slash | 220 |
| close_braket | 221 |
| single_quote | 222 |