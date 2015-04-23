/**
 * Gabrieljmj\PageCodes
 *
 * @author Gabriel Jacinto aka. GabrielJMJ <gamjj74@hotmail.com>
 * @license MIT License
 */

/**
 * A page code
 *
 * @param array    keys
 * @param callable callback
 */
var Code = function (keys, callback) {
    this.keys = keys;
    this.callback = callback;
}

/**
 * Adds a key for the code
 *
 * @param integer key
 *
 * @return Code
 */
Code.prototype.addKey = function (key) {
    this.key.push(key);
    return this;
}

/**
 * Returns all code keys
 *
 * @return array
 */
Code.prototype.getKeys = function () {
    return this.keys;
}

/**
 * Returns the code callback
 *
 * @return callable
 */
Code.prototype.getCallback = function () {
    return this.callback;
}

/**
 * Page codes - create keyboard codes for your web page
 */
var PageCodes = function () {
    this.codes = [];
    this.pressed = [];
    this.time = 0;
    this.intervalTime = 3000;
}

PageCodes.prototype.setIntervalTime = function (time) {
    this.intervalTime = time;
    return this;
}

/**
 * Creates a code
 *
 * @param string   name Code name
 * @param array    codes The sorted code
 * @oaram callabke callback
 */
PageCodes.prototype.createCode = function (name, code, callback) {
    for (key in code) {
        code[key] = this.strToKeyCode(code[key]);
    }
    
    this.codes.push(new Code(code, callback));
    return this;
}

/**
 * Translates the string key to key code
 *
 * @param string str
 *
 * @return integer
 */
PageCodes.prototype.strToKeyCode = function (str) {
    var keys = {backspace: 8, tab: 9, enter: 13, shift: 16, ctrl: 17, alt: 18, pause: 19, caps_lock: 20, escape: 27, 
    page_up: 33, page_down: 34, end: 35, home: 36, left_arrow: 37, up_arrow: 38, right_arrow: 39, down_arrow: 40, 
    insert: 45, delete: 46, num_0: 48, num_1: 49, num_2: 50, num_3: 51, num_4: 52, num_5: 53, num_6: 54, num_7: 55, num_8: 56, num_9: 57, a: 65, b: 66, 
    c: 67, d: 68, e: 69, f: 70, g: 71, h: 72, i: 73, j: 74, k: 75, l: 76, m: 77, n: 78, o: 79, p: 80, q: 81, 
    r: 82, s: 83, t: 84, u: 85, v: 86, w: 87, x: 88, y: 89, z: 90, left_window_key: 91, right_window_key: 92, 
    select_key: 93, numpad_0: 96, numpad_1: 97, numpad_2: 98, numpad_3: 99, numpad_4: 100, numpad_5: 101, numpad_6: 102, 
    numpad_7: 103, numpad_8: 104, numpad_9: 105, multiply: 106, add: 107, subtract: 109, decimal_point: 110, divide: 111, 
    f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123, 
    num_lock: 144, scroll_lock: 145, semi_colon: 186, equal_sign: 187, comma: 188, dash: 189, period: 190, forward_slash: 191, 
    grave_accent: 192, open_bracket: 219, back_slash: 220, close_braket: 221, single_quote: 222};
    
    return keys[str];
}

/**
 * Runs when a key is pressed
 *
 * @parmm integer key 
 */
PageCodes.prototype.run = function (key) {
    var date = new Date();
    var sec = date.getTime();
    
    if (this.time <= (sec - this.intervalTime)) {
        this.pressed = [];
    }

    this.time = sec;
    this.pressed.push(key);

    for (code in this.codes) {
        console.log(this.pressed);
        if (this.pressed.equals(this.codes[code].getKeys())) {
            var callback = this.codes[code].getCallback();
            this.pressed = [];
            callback(this.codes[code].getKeys());
        }
    }
}

var PageCodes = new PageCodes();

/*
 * Function for compare arrays
 *
 * @param array array
 *
 * @return boolean
 */
Array.prototype.equals = function (array) {
    if (!array || this.length != array.length) {
        return false;
    }

    for (var i = 0, l=this.length; i < l; i++) {
        if (this[i] instanceof Array && array[i] instanceof Array) {
            if (!this[i].equals(array[i])) {
                return false;
            }
        } else if (this[i] != array[i]) { 
            return false;
        }
    }
    return true;
}