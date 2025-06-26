// 1 + true       // true is coerced to the number 1, so the result is 2
// '4' + 3        // 3 is coerced to the string '3', so the result is '43'
// false == 0     // false is coerced to the number 0, so the result is true

// // The unary plus operator converts a value into a number, following the same rules as the Number function:
// +('123')        // 123
// +(true)         // 1
// +(false)        // 0
// +('')           // 0
// +(' ')          // 0
// +('\n')         // 0
// +(null)         // 0
// +(undefined)    // NaN
// +('a')          // NaN
// +('1a')         // NaN

// // The unary plus operator converts a value into a number, following the same rules as the Number function:
// +('123')        // 123
// +(true)         // 1
// +(false)        // 0
// +('')           // 0
// +(' ')          // 0
// +('\n')         // 0
// +(null)         // 0
// +(undefined)    // NaN
// +('a')          // NaN
// +('1a')         // NaN

// // The binary plus operator (with two operands) means either addition for numbers or concatenation for strings. When + is used with mixed operands that include a string, JavaScript converts the other operand to a string as well:
// '123' + 123     // "123123" -- if a string is present, coerce for string concatenation
// 123 + '123'     // "123123"
// null + 'a'      // "nulla" -- null is coerced to string
// '' + true       // "true"

// // When both operands are a combination of numbers, booleans, nulls, or undefineds, they are converted to numbers and added together:
// 1 + true        // 2
// 1 + false       // 1
// true + false    // 1
// null + false    // 0
// null + null     // 0
// 1 + undefined   // NaN

// // When one of the operands is an object (including arrays and functions), both operands are converted to strings and concatenated together:
// [1] + 2                     // "12"
// [1] + '2'                   // "12"
// [1, 2] + 3                  // "1,23"
// [] + 5                      // "5"
// [] + true                   // "true"
// 42 + {}                     // "42[object Object]"
// (function foo() {}) + 42    // "function foo() {}42"

// // The other arithmetic operators, -, *, /, %, are only defined for numbers, so JavaScript converts both operands to numbers:
// 1 - true                // 0
// '123' * 3               // 369 -- the string is coerced to a number
// '8' - '1'               // 7
// -'42'                   // -42
// null - 42               // -42
// false / true            // 0
// true / false            // Infinity
// '5' % 2                 // 1

// // Non-strict equality operators

// // When one operand is a string and the other is a number, the string is converted to a number:
// '42' == 42            // true
// 42 == '42'            // true
// 42 == 'a'             // false -- becomes 42 == NaN
// 0 == ''               // true -- becomes 0 == 0
// 0 == '\n'             // true -- becomes 0 == 0

// // When one operand is a boolean, it is converted to a number:
// 42 == true            // false -- becomes 42 == 1
// 0 == false            // true -- becomes 0 == 0
// '0' == false          // true -- becomes '0' == 0, then 0 == 0 (two conversions)
// '' == false           // true -- becomes '' == 0, then 0 == 0
// true == '1'           // true
// true == 'true'        // false -- becomes 1 == 'true', then 1 == NaN

// // When one operand is null and the other is undefined, the non-strict operator always returns true. If both operands are null or both are undefined, the return value is true. Comparing null or undefined to all other values returns false:
// null == undefined      // true
// undefined == null      // true
// null == null           // true
// undefined == undefined // true
// undefined == false     // false
// null == false          // false
// undefined == ''        // false
// undefined === null     // false -- strict comparison

// // When one of the operands is NaN, the comparison always returns false:
// NaN == 0              // false
// NaN == NaN            // false
// NaN === NaN           // false -- even with the strict operator
// NaN != NaN            // true -- NaN is the only JavaScript value not equal to itself

// // The relational operators, <, >, <=, and >= are defined for numbers (numeric comparison) and strings (lexicographic order). There are no strict versions of these operators. When both operands are strings, JavaScript compares them lexicographically. Otherwise, JavaScript converts both operands to numbers before comparing them.
// 11 > '9'              // true -- '9' is coerced to 9
// '11' > 9              // true -- '11' is coerced to 11
// 123 > 'a'             // false -- 'a' is coerced to NaN; any comparison with NaN is false
// 123 <= 'a'            // also false
// true > null           // true -- becomes 1 > 0
// true > false          // true -- also becomes 1 > 0
// null <= false         // true -- becomes 0 <= 0
// undefined >= 1        // false -- becomes NaN >= 1
