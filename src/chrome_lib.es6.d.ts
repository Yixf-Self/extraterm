// Generated at Tue Jul 14 2015 22:18:38 GMT+0200 (CEST)
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved. 
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0  
 
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE, 
MERCHANTABLITY OR NON-INFRINGEMENT. 
 
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference no-default-lib="true"/>

/////////////////////////////
/// ECMAScript APIs
/////////////////////////////

declare  var NaN: number;

declare  var Infinity: number;


/**
  * Evaluates JavaScript code and executes it. 
  * @param x A String value that contains valid JavaScript code.
  */
declare function eval(x: string): any;

/**
  * Converts A string to an integer.
  * @param s A string to convert into a number.
  * @param radix A value between 2 and 36 that specifies the base of the number in numString. 
  * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
  * All other strings are considered decimal.
  */
declare function parseInt(s: string, radix?: number): number;

/**
  * Converts a string to a floating-point number. 
  * @param string A string that contains a floating-point number. 
  */
declare function parseFloat(string: string): number;

/**
  * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number). 
  * @param number A numeric value.
  */
declare function isNaN(number: number): boolean;

/** 
  * Determines whether a supplied number is finite.
  * @param number Any numeric value.
  */
declare function isFinite(number: number): boolean;

/**
  * Gets the unencoded version of an encoded Uniform Resource Identifier (URI).
  * @param encodedURI A value representing an encoded URI.
  */
declare function decodeURI(encodedURI: string): string;

/**
  * Gets the unencoded version of an encoded component of a Uniform Resource Identifier (URI).
  * @param encodedURIComponent A value representing an encoded URI component.
  */
declare function decodeURIComponent(encodedURIComponent: string): string;

/** 
  * Encodes a text string as a valid Uniform Resource Identifier (URI)
  * @param uri A value representing an encoded URI.
  */
declare function encodeURI(uri: string): string;

/**
  * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
  * @param uriComponent A value representing an encoded URI component.
  */
declare function encodeURIComponent(uriComponent: string): string;

interface PropertyDescriptor {

        configurable?: boolean;
        enumerable?: boolean;
        value?: any;
        writable?: boolean;
        get?(): any;
        set?(v: any): void;

}


interface PropertyDescriptorMap {

        [s: string]: PropertyDescriptor;

}


interface Object {

    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
        constructor: Function;

    /** Returns a string representation of an object. */
        toString(): string;

    /** Returns a date converted to a string using the current locale. */
        toLocaleString(): string;

    /** Returns the primitive value of the specified object. */
        valueOf(): Object;

    /**
      * Determines whether an object has a property with the specified name. 
      * @param v A property name.
      */
        hasOwnProperty(v: string): boolean;

    /**
      * Determines whether an object exists in another object's prototype chain. 
      * @param v Another object whose prototype chain is to be checked.
      */
        isPrototypeOf(v: Object): boolean;

    /** 
      * Determines whether a specified property is enumerable.
      * @param v A property name.
      */
        propertyIsEnumerable(v: string): boolean;

}


interface ObjectConstructor {

        new(value?: any): Object;
        (): any;
        (value: any): any;

    /** A reference to the prototype for a class of objects. */
        prototype: Object;

    /** 
      * Returns the prototype of an object. 
      * @param o The object that references the prototype.
      */
        getPrototypeOf(o: any): any;

    /**
      * Gets the own property descriptor of the specified object. 
      * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype. 
      * @param o Object that contains the property.
      * @param p Name of the property.
    */
        getOwnPropertyDescriptor(o: any, p: string): PropertyDescriptor;

    /** 
      * Returns the names of the own properties of an object. The own properties of an object are those that are defined directly 
      * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
      * @param o Object that contains the own properties.
      */
        getOwnPropertyNames(o: any): string[];

    /** 
      * Creates an object that has the specified prototype, and that optionally contains specified properties.
      * @param o Object to use as a prototype. May be null
      * @param properties JavaScript object that contains one or more property descriptors. 
      */
        create(o: any, properties?: PropertyDescriptorMap): any;

    /**
      * Adds a property to an object, or modifies attributes of an existing property. 
      * @param o Object on which to add or modify the property. This can be a native JavaScript object (that is, a user-defined object or a built in object) or a DOM object.
      * @param p The property name.
      * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
      */
        defineProperty(o: any, p: string, attributes: PropertyDescriptor): any;

    /**
      * Adds one or more properties to an object, and/or modifies attributes of existing properties. 
      * @param o Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
      * @param properties JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.
      */
        defineProperties(o: any, properties: PropertyDescriptorMap): any;

    /**
      * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes. 
      */
        seal<T>(o: T): T;

    /**
      * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
      * @param o Object on which to lock the attributes.
      */
        freeze<T>(o: T): T;

    /**
      * Prevents the addition of new properties to an object.
      * @param o Object to make non-extensible. 
      */
        preventExtensions<T>(o: T): T;

    /**
      * Returns true if existing property attributes cannot be modified in an object and new properties cannot be added to the object.
      * @param o Object to test. 
      */
        isSealed(o: any): boolean;

    /**
      * Returns true if existing property attributes and values cannot be modified in an object, and new properties cannot be added to the object.
      * @param o Object to test.  
      */
        isFrozen(o: any): boolean;

    /**
      * Returns a value that indicates whether new properties can be added to an object.
      * @param o Object to test. 
      */
        isExtensible(o: any): boolean;

    /**
      * Returns the names of the enumerable properties and methods of an object.
      * @param o Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
      */
        keys(o: any): string[];

}


/**
  * Provides functionality common to all JavaScript objects.
  */
declare  var Object: ObjectConstructor;


/**
  * Creates a new function.
  */
interface Function {

    /**
      * Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.
      * @param thisArg The object to be used as the this object.
      * @param argArray A set of arguments to be passed to the function.
      */
        apply(thisArg: any, argArray?: any): any;

    /**
      * Calls a method of an object, substituting another object for the current object.
      * @param thisArg The object to be used as the current object.
      * @param argArray A list of arguments to be passed to the method.
      */
        call(thisArg: any, ...argArray: any[]): any;

    /**
      * For a given function, creates a bound function that has the same body as the original function. 
      * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
      * @param thisArg An object to which the this keyword can refer inside the new function.
      * @param argArray A list of arguments to be passed to the new function.
      */
        bind(thisArg: any, ...argArray: any[]): any;

        prototype: any;
        length: number;

    // Non-standard extensions
        arguments: any;
        caller: Function;

}


interface FunctionConstructor {

    /**
      * Creates a new function.
      * @param args A list of arguments the function accepts.
      */
        new(...args: string[]): Function;
        (...args: string[]): Function;
        prototype: Function;

}


declare  var Function: FunctionConstructor;


interface IArguments {

        [index: number]: any;
        length: number;
        callee: Function;

}


interface String {

    /** Returns a string representation of a string. */
        toString(): string;

    /**
      * Returns the character at the specified index.
      * @param pos The zero-based index of the desired character.
      */
        charAt(pos: number): string;

    /** 
      * Returns the Unicode value of the character at the specified location.
      * @param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.
      */
        charCodeAt(index: number): number;

    /**
      * Returns a string that contains the concatenation of two or more strings.
      * @param strings The strings to append to the end of the string.  
      */
        concat(...strings: string[]): string;

    /**
      * Returns the position of the first occurrence of a substring. 
      * @param searchString The substring to search for in the string
      * @param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.
      */
        indexOf(searchString: string, position?: number): number;

    /**
      * Returns the last occurrence of a substring in the string.
      * @param searchString The substring to search for.
      * @param position The index at which to begin searching. If omitted, the search begins at the end of the string.
      */
        lastIndexOf(searchString: string, position?: number): number;

    /**
      * Determines whether two strings are equivalent in the current locale.
      * @param that String to compare to target string
      */
        localeCompare(that: string): number;

    /** 
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A variable name or string literal containing the regular expression pattern and flags.
      */
        match(regexp: string): RegExpMatchArray;

    /** 
      * Matches a string with a regular expression, and returns an array containing the results of that search.
      * @param regexp A regular expression object that contains the regular expression pattern and applicable flags. 
      */
        match(regexp: RegExp): RegExpMatchArray;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A String object or string literal that represents the regular expression
      * @param replaceValue A String object or string literal containing the text to replace for every successful match of rgExp in stringObj.
      */
        replace(searchValue: string, replaceValue: string): string;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A String object or string literal that represents the regular expression
      * @param replaceValue A function that returns the replacement text.
      */
        replace(searchValue: string, replaceValue: (substring: string, ...args: any[]) => string): string;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags
      * @param replaceValue A String object or string literal containing the text to replace for every successful match of rgExp in stringObj.
      */
        replace(searchValue: RegExp, replaceValue: string): string;

    /**
      * Replaces text in a string, using a regular expression or search string.
      * @param searchValue A Regular Expression object containing the regular expression pattern and applicable flags
      * @param replaceValue A function that returns the replacement text.
      */
        replace(searchValue: RegExp, replaceValue: (substring: string, ...args: any[]) => string): string;

    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags. 
      */
        search(regexp: string): number;

    /**
      * Finds the first substring match in a regular expression search.
      * @param regexp The regular expression pattern and applicable flags. 
      */
        search(regexp: RegExp): number;

    /**
      * Returns a section of a string.
      * @param start The index to the beginning of the specified portion of stringObj. 
      * @param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end. 
      * If this value is not specified, the substring continues to the end of stringObj.
      */
        slice(start?: number, end?: number): string;

    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. 
      * @param limit A value used to limit the number of elements returned in the array.
      */
        split(separator: string, limit?: number): string[];

    /**
      * Split a string into substrings using the specified separator and return them as an array.
      * @param separator A Regular Express that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned. 
      * @param limit A value used to limit the number of elements returned in the array.
      */
        split(separator: RegExp, limit?: number): string[];

    /**
      * Returns the substring at the specified location within a String object. 
      * @param start The zero-based index number indicating the beginning of the substring.
      * @param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
      * If end is omitted, the characters from start through the end of the original string are returned.
      */
        substring(start: number, end?: number): string;

    /** Converts all the alphabetic characters in a string to lowercase. */
        toLowerCase(): string;

    /** Converts all alphabetic characters to lowercase, taking into account the host environment's current locale. */
        toLocaleLowerCase(): string;

    /** Converts all the alphabetic characters in a string to uppercase. */
        toUpperCase(): string;

    /** Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale. */
        toLocaleUpperCase(): string;

    /** Removes the leading and trailing white space and line terminator characters from a string. */
        trim(): string;

    /** Returns the length of a String object. */
        length: number;

    // IE extensions
    /**
      * Gets a substring beginning at the specified location and having the specified length.
      * @param from The starting position of the desired substring. The index of the first character in the string is zero.
      * @param length The number of characters to include in the returned substring.
      */
        substr(from: number, length?: number): string;

    /** Returns the primitive value of the specified object. */
        valueOf(): string;

        [index: number]: string;

}


interface StringConstructor {

        new(value?: any): String;
        (value?: any): string;
        prototype: String;
        fromCharCode(...codes: number[]): string;

}


/** 
  * Allows manipulation and formatting of text strings and determination and location of substrings within strings. 
  */
declare  var String: StringConstructor;


interface Boolean {

    /** Returns the primitive value of the specified object. */
        valueOf(): boolean;

}


interface BooleanConstructor {

        new(value?: any): Boolean;
        (value?: any): boolean;
        prototype: Boolean;

}


declare  var Boolean: BooleanConstructor;


interface Number {

    /**
      * Returns a string representation of an object.
      * @param radix Specifies a radix for converting numeric values to strings. This value is only used for numbers.
      */
        toString(radix?: number): string;

    /** 
      * Returns a string representing a number in fixed-point notation.
      * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
      */
        toFixed(fractionDigits?: number): string;

    /**
      * Returns a string containing a number represented in exponential notation.
      * @param fractionDigits Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
      */
        toExponential(fractionDigits?: number): string;

    /**
      * Returns a string containing a number represented either in exponential or fixed-point notation with a specified number of digits.
      * @param precision Number of significant digits. Must be in the range 1 - 21, inclusive.
      */
        toPrecision(precision?: number): string;

    /** Returns the primitive value of the specified object. */
        valueOf(): number;

}


interface NumberConstructor {

        new(value?: any): Number;
        (value?: any): number;
        prototype: Number;

    /** The largest number that can be represented in JavaScript. Equal to approximately 1.79E+308. */
        MAX_VALUE: number;

    /** The closest number to zero that can be represented in JavaScript. Equal to approximately 5.00E-324. */
        MIN_VALUE: number;

    /** 
      * A value that is not a number.
      * In equality comparisons, NaN does not equal any value, including itself. To test whether a value is equivalent to NaN, use the isNaN function.
      */
        NaN: number;

    /** 
      * A value that is less than the largest negative number that can be represented in JavaScript.
      * JavaScript displays NEGATIVE_INFINITY values as -infinity. 
      */
        NEGATIVE_INFINITY: number;

    /**
      * A value greater than the largest number that can be represented in JavaScript. 
      * JavaScript displays POSITIVE_INFINITY values as infinity. 
      */
        POSITIVE_INFINITY: number;

}


/** An object that represents a number of any kind. All JavaScript numbers are 64-bit floating-point numbers. */
declare  var Number: NumberConstructor;


interface TemplateStringsArray extends Array<string> {

        raw: string[];

}


interface Math {

    /** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
        E: number;
    /** The natural logarithm of 10. */
        LN10: number;
    /** The natural logarithm of 2. */
        LN2: number;
    /** The base-2 logarithm of e. */
        LOG2E: number;
    /** The base-10 logarithm of e. */
        LOG10E: number;
    /** Pi. This is the ratio of the circumference of a circle to its diameter. */
        PI: number;
    /** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
        SQRT1_2: number;
    /** The square root of 2. */
        SQRT2: number;
    /**
      * Returns the absolute value of a number (the value without regard to whether it is positive or negative). 
      * For example, the absolute value of -5 is the same as the absolute value of 5.
      * @param x A numeric expression for which the absolute value is needed.
      */
        abs(x: number): number;
    /**
      * Returns the arc cosine (or inverse cosine) of a number. 
      * @param x A numeric expression.
      */
        acos(x: number): number;
    /** 
      * Returns the arcsine of a number. 
      * @param x A numeric expression.
      */
        asin(x: number): number;
    /**
      * Returns the arctangent of a number. 
      * @param x A numeric expression for which the arctangent is needed.
      */
        atan(x: number): number;
    /**
      * Returns the angle (in radians) from the X axis to a point (y,x).
      * @param y A numeric expression representing the cartesian y-coordinate.
      * @param x A numeric expression representing the cartesian x-coordinate.
      */
        atan2(y: number, x: number): number;
    /**
      * Returns the smallest number greater than or equal to its numeric argument. 
      * @param x A numeric expression.
      */
        ceil(x: number): number;
    /**
      * Returns the cosine of a number. 
      * @param x A numeric expression that contains an angle measured in radians.
      */
        cos(x: number): number;
    /**
      * Returns e (the base of natural logarithms) raised to a power. 
      * @param x A numeric expression representing the power of e.
      */
        exp(x: number): number;
    /**
      * Returns the greatest number less than or equal to its numeric argument. 
      * @param x A numeric expression.
      */
        floor(x: number): number;
    /**
      * Returns the natural logarithm (base e) of a number. 
      * @param x A numeric expression.
      */
        log(x: number): number;
    /**
      * Returns the larger of a set of supplied numeric expressions. 
      * @param values Numeric expressions to be evaluated.
      */
        max(...values: number[]): number;
    /**
      * Returns the smaller of a set of supplied numeric expressions. 
      * @param values Numeric expressions to be evaluated.
      */
        min(...values: number[]): number;
    /**
      * Returns the value of a base expression taken to a specified power. 
      * @param x The base value of the expression.
      * @param y The exponent value of the expression.
      */
        pow(x: number, y: number): number;
    /** Returns a pseudorandom number between 0 and 1. */
        random(): number;
    /** 
      * Returns a supplied numeric expression rounded to the nearest number.
      * @param x The value to be rounded to the nearest number.
      */
        round(x: number): number;
    /**
      * Returns the sine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
        sin(x: number): number;
    /**
      * Returns the square root of a number.
      * @param x A numeric expression.
      */
        sqrt(x: number): number;
    /**
      * Returns the tangent of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
        tan(x: number): number;

}

/** An intrinsic object that provides basic mathematics functionality and constants. */
declare  var Math: Math;


/** Enables basic storage and retrieval of dates and times. */
interface Date {

    /** Returns a string representation of a date. The format of the string depends on the locale. */
        toString(): string;
    /** Returns a date as a string value. */
        toDateString(): string;
    /** Returns a time as a string value. */
        toTimeString(): string;
    /** Returns a value as a string value appropriate to the host environment's current locale. */
        toLocaleString(): string;
    /** Returns a date as a string value appropriate to the host environment's current locale. */
        toLocaleDateString(): string;
    /** Returns a time as a string value appropriate to the host environment's current locale. */
        toLocaleTimeString(): string;
    /** Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC. */
        valueOf(): number;
    /** Gets the time value in milliseconds. */
        getTime(): number;
    /** Gets the year, using local time. */
        getFullYear(): number;
    /** Gets the year using Universal Coordinated Time (UTC). */
        getUTCFullYear(): number;
    /** Gets the month, using local time. */
        getMonth(): number;
    /** Gets the month of a Date object using Universal Coordinated Time (UTC). */
        getUTCMonth(): number;
    /** Gets the day-of-the-month, using local time. */
        getDate(): number;
    /** Gets the day-of-the-month, using Universal Coordinated Time (UTC). */
        getUTCDate(): number;
    /** Gets the day of the week, using local time. */
        getDay(): number;
    /** Gets the day of the week using Universal Coordinated Time (UTC). */
        getUTCDay(): number;
    /** Gets the hours in a date, using local time. */
        getHours(): number;
    /** Gets the hours value in a Date object using Universal Coordinated Time (UTC). */
        getUTCHours(): number;
    /** Gets the minutes of a Date object, using local time. */
        getMinutes(): number;
    /** Gets the minutes of a Date object using Universal Coordinated Time (UTC). */
        getUTCMinutes(): number;
    /** Gets the seconds of a Date object, using local time. */
        getSeconds(): number;
    /** Gets the seconds of a Date object using Universal Coordinated Time (UTC). */
        getUTCSeconds(): number;
    /** Gets the milliseconds of a Date, using local time. */
        getMilliseconds(): number;
    /** Gets the milliseconds of a Date object using Universal Coordinated Time (UTC). */
        getUTCMilliseconds(): number;
    /** Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC). */
        getTimezoneOffset(): number;
    /** 
      * Sets the date and time value in the Date object.
      * @param time A numeric value representing the number of elapsed milliseconds since midnight, January 1, 1970 GMT. 
      */
        setTime(time: number): number;
    /**
      * Sets the milliseconds value in the Date object using local time. 
      * @param ms A numeric value equal to the millisecond value.
      */
        setMilliseconds(ms: number): number;
    /** 
      * Sets the milliseconds value in the Date object using Universal Coordinated Time (UTC).
      * @param ms A numeric value equal to the millisecond value. 
      */
        setUTCMilliseconds(ms: number): number;

    /**
      * Sets the seconds value in the Date object using local time. 
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
        setSeconds(sec: number, ms?: number): number;
    /**
      * Sets the seconds value in the Date object using Universal Coordinated Time (UTC).
      * @param sec A numeric value equal to the seconds value.
      * @param ms A numeric value equal to the milliseconds value.
      */
        setUTCSeconds(sec: number, ms?: number): number;
    /**
      * Sets the minutes value in the Date object using local time. 
      * @param min A numeric value equal to the minutes value. 
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
        setMinutes(min: number, sec?: number, ms?: number): number;
    /**
      * Sets the minutes value in the Date object using Universal Coordinated Time (UTC).
      * @param min A numeric value equal to the minutes value. 
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
        setUTCMinutes(min: number, sec?: number, ms?: number): number;
    /**
      * Sets the hour value in the Date object using local time.
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
        setHours(hours: number, min?: number, sec?: number, ms?: number): number;
    /**
      * Sets the hours value in the Date object using Universal Coordinated Time (UTC).
      * @param hours A numeric value equal to the hours value.
      * @param min A numeric value equal to the minutes value.
      * @param sec A numeric value equal to the seconds value. 
      * @param ms A numeric value equal to the milliseconds value.
      */
        setUTCHours(hours: number, min?: number, sec?: number, ms?: number): number;
    /**
      * Sets the numeric day-of-the-month value of the Date object using local time. 
      * @param date A numeric value equal to the day of the month.
      */
        setDate(date: number): number;
    /** 
      * Sets the numeric day of the month in the Date object using Universal Coordinated Time (UTC).
      * @param date A numeric value equal to the day of the month. 
      */
        setUTCDate(date: number): number;
    /** 
      * Sets the month value in the Date object using local time. 
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. 
      * @param date A numeric value representing the day of the month. If this value is not supplied, the value from a call to the getDate method is used.
      */
        setMonth(month: number, date?: number): number;
    /**
      * Sets the month value in the Date object using Universal Coordinated Time (UTC).
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively.
      * @param date A numeric value representing the day of the month. If it is not supplied, the value from a call to the getUTCDate method is used.
      */
        setUTCMonth(month: number, date?: number): number;
    /**
      * Sets the year of the Date object using local time.
      * @param year A numeric value for the year.
      * @param month A zero-based numeric value for the month (0 for January, 11 for December). Must be specified if numDate is specified.
      * @param date A numeric value equal for the day of the month.
      */
        setFullYear(year: number, month?: number, date?: number): number;
    /**
      * Sets the year value in the Date object using Universal Coordinated Time (UTC).
      * @param year A numeric value equal to the year.
      * @param month A numeric value equal to the month. The value for January is 0, and other month values follow consecutively. Must be supplied if numDate is supplied.
      * @param date A numeric value equal to the day of the month.
      */
        setUTCFullYear(year: number, month?: number, date?: number): number;
    /** Returns a date converted to a string using Universal Coordinated Time (UTC). */
        toUTCString(): string;
    /** Returns a date as a string value in ISO format. */
        toISOString(): string;
    /** Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. */
        toJSON(key?: any): string;

}


interface DateConstructor {

        new(): Date;
        new(value: number): Date;
        new(value: string): Date;
        new(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): Date;
        (): string;
        prototype: Date;
    /**
      * Parses a string containing a date, and returns the number of milliseconds between that date and midnight, January 1, 1970.
      * @param s A date string
      */
        parse(s: string): number;
    /**
      * Returns the number of milliseconds between midnight, January 1, 1970 Universal Coordinated Time (UTC) (or GMT) and the specified date. 
      * @param year The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
      * @param month The month as an number between 0 and 11 (January to December).
      * @param date The date as an number between 1 and 31.
      * @param hours Must be supplied if minutes is supplied. An number from 0 to 23 (midnight to 11pm) that specifies the hour.
      * @param minutes Must be supplied if seconds is supplied. An number from 0 to 59 that specifies the minutes.
      * @param seconds Must be supplied if milliseconds is supplied. An number from 0 to 59 that specifies the seconds.
      * @param ms An number from 0 to 999 that specifies the milliseconds.
      */
        UTC(year: number, month: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number): number;
        now(): number;

}


declare  var Date: DateConstructor;


interface RegExpMatchArray extends Array<string> {

        index?: number;
        input?: string;

}


interface RegExpExecArray extends Array<string> {

        index: number;
        input: string;

}


interface RegExp {

    /** 
      * Executes a search on a string using a regular expression pattern, and returns an array containing the results of that search.
      * @param string The String object or string literal on which to perform the search.
      */
        exec(string: string): RegExpExecArray;

    /** 
      * Returns a Boolean value that indicates whether or not a pattern exists in a searched string.
      * @param string String on which to perform the search.
      */
        test(string: string): boolean;

    /** Returns a copy of the text of the regular expression pattern. Read-only. The rgExp argument is a Regular expression object. It can be a variable name or a literal. */
        source: string;

    /** Returns a Boolean value indicating the state of the global flag (g) used with a regular expression. Default is false. Read-only. */
        global: boolean;

    /** Returns a Boolean value indicating the state of the ignoreCase flag (i) used with a regular expression. Default is false. Read-only. */
        ignoreCase: boolean;

    /** Returns a Boolean value indicating the state of the multiline flag (m) used with a regular expression. Default is false. Read-only. */
        multiline: boolean;

        lastIndex: number;

    // Non-standard extensions
        compile(): RegExp;

}


interface RegExpConstructor {

        new(pattern: string, flags?: string): RegExp;
        (pattern: string, flags?: string): RegExp;
        prototype: RegExp;

    // Non-standard extensions
        $1: string;
        $2: string;
        $3: string;
        $4: string;
        $5: string;
        $6: string;
        $7: string;
        $8: string;
        $9: string;
        lastMatch: string;

}


declare  var RegExp: RegExpConstructor;


interface Error {

        name: string;
        message: string;

}


interface ErrorConstructor {

        new(message?: string): Error;
        (message?: string): Error;
        prototype: Error;

}


declare  var Error: ErrorConstructor;


interface EvalError extends Error {


}


interface EvalErrorConstructor {

        new(message?: string): EvalError;
        (message?: string): EvalError;
        prototype: EvalError;

}


declare  var EvalError: EvalErrorConstructor;


interface RangeError extends Error {


}


interface RangeErrorConstructor {

        new(message?: string): RangeError;
        (message?: string): RangeError;
        prototype: RangeError;

}


declare  var RangeError: RangeErrorConstructor;


interface ReferenceError extends Error {


}


interface ReferenceErrorConstructor {

        new(message?: string): ReferenceError;
        (message?: string): ReferenceError;
        prototype: ReferenceError;

}


declare  var ReferenceError: ReferenceErrorConstructor;


interface SyntaxError extends Error {


}


interface SyntaxErrorConstructor {

        new(message?: string): SyntaxError;
        (message?: string): SyntaxError;
        prototype: SyntaxError;

}


declare  var SyntaxError: SyntaxErrorConstructor;


interface TypeError extends Error {


}


interface TypeErrorConstructor {

        new(message?: string): TypeError;
        (message?: string): TypeError;
        prototype: TypeError;

}


declare  var TypeError: TypeErrorConstructor;


interface URIError extends Error {


}


interface URIErrorConstructor {

        new(message?: string): URIError;
        (message?: string): URIError;
        prototype: URIError;

}


declare  var URIError: URIErrorConstructor;


interface JSON {

    /**
      * Converts a JavaScript Object Notation (JSON) string into an object.
      * @param text A valid JSON string.
      * @param reviver A function that transforms the results. This function is called for each member of the object. 
      * If a member contains nested objects, the nested objects are transformed before the parent object is. 
      */
        parse(text: string, reviver?: (key: any, value: any) => any): any;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      */
        stringify(value: any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer A function that transforms the results.
      */
        stringify(value: any, replacer: (key: string, value: any) => any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer Array that transforms the results.
      */
        stringify(value: any, replacer: any[]): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer A function that transforms the results.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */
        stringify(value: any, replacer: (key: string, value: any) => any, space: any): string;
    /**
      * Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
      * @param value A JavaScript value, usually an object or array, to be converted.
      * @param replacer Array that transforms the results.
      * @param space Adds indentation, white space, and line break characters to the return-value JSON text to make it easier to read.
      */
        stringify(value: any, replacer: any[], space: any): string;

}

/**
  * An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation (JSON) format.
  */
declare  var JSON: JSON;



/////////////////////////////
/// ECMAScript Array API (specially handled by compiler)
/////////////////////////////

interface Array<T> {

    /**
      * Gets or sets the length of the array. This is a number one higher than the highest element defined in an array.
      */
        length: number;
    /**
      * Returns a string representation of an array.
      */
        toString(): string;
        toLocaleString(): string;
    /**
      * Appends new elements to an array, and returns the new length of the array.
      * @param items New elements of the Array.
      */
        push(...items: T[]): number;
    /**
      * Removes the last element from an array and returns it.
      */
        pop(): T;
    /**
      * Combines two or more arrays.
      * @param items Additional items to add to the end of array1.
      */
        concat<U extends T[]>(...items: U[]): T[];
    /**
      * Combines two or more arrays.
      * @param items Additional items to add to the end of array1.
      */
        concat(...items: T[]): T[];
    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;
    /**
      * Reverses the elements in an Array. 
      */
        reverse(): T[];
    /**
      * Removes the first element from an array and returns it.
      */
        shift(): T;
    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): T[];

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: T, b: T) => number): T[];

    /**
      * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
      * @param start The zero-based location in the array from which to start removing elements.
      */
        splice(start: number): T[];

    /**
      * Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
      * @param start The zero-based location in the array from which to start removing elements.
      * @param deleteCount The number of elements to remove.
      * @param items Elements to insert into the array in place of the deleted elements.
      */
        splice(start: number, deleteCount: number, ...items: T[]): T[];

    /**
      * Inserts new elements at the start of an array.
      * @param items  Elements to insert at the start of the Array.
      */
        unshift(...items: T[]): number;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
      */
        indexOf(searchElement: T, fromIndex?: number): number;

    /**
      * Returns the index of the last occurrence of a specified value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array.
      */
        lastIndexOf(searchElement: T, fromIndex?: number): number;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls the callbackfn function for each element in array1 until the callbackfn returns false, or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the callbackfn function for each element in array1 until the callbackfn returns true, or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): boolean;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
        map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: T, index: number, array: T[]) => boolean, thisArg?: any): T[];

    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
        reduce(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
    /**
      * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;

        [n: number]: T;

}


interface ArrayConstructor {

        new(arrayLength?: number): any[];
        new<T>(arrayLength: number): T[];
        new<T>(...items: T[]): T[];
        (arrayLength?: number): any[];
        <T>(arrayLength: number): T[];
        <T>(...items: T[]): T[];
        isArray(arg: any): boolean;
        prototype: Array<any>;

}


declare  var Array: ArrayConstructor;


interface TypedPropertyDescriptor<T> {

        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        value?: T;
        get?: () => T;
        set?: (value: T) => void;

}


declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction|void;
declare type PropertyDecorator = (target: Object, propertyKey: string|symbol) => void;
declare type MethodDecorator = <T>(target: Object, propertyKey: string|symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T>|void;
declare type ParameterDecorator = (target: Function, propertyKey: string|symbol, parameterIndex: number) => void;
declare type PropertyKey = string|number|symbol;

interface Symbol {

    /** Returns a string representation of an object. */
        toString(): string;

    /** Returns the primitive value of the specified object. */
        valueOf(): Object;

        [Symbol.toStringTag]: string;

}


interface SymbolConstructor {

    /** 
      * A reference to the prototype. 
      */
        prototype: Symbol;

    /**
      * Returns a new unique Symbol value.
      * @param  description Description of the new Symbol object.
      */
        (description?: string|number): symbol;

    /**
      * Returns a Symbol object from the global symbol registry matching the given key if found. 
      * Otherwise, returns a new symbol with this key.
      * @param key key to search for.
      */
        for(key: string): symbol;

    /**
      * Returns a key from the global symbol registry matching the given Symbol if found. 
      * Otherwise, returns a undefined.
      * @param sym Symbol to find the key for.
      */
        keyFor(sym: symbol): string;

    // Well-known Symbols

    /** 
      * A method that determines if a constructor object recognizes an object as one of the 
      * constructor’s instances. Called by the semantics of the instanceof operator. 
      */
        hasInstance: symbol;

    /** 
      * A Boolean value that if true indicates that an object should flatten to its array elements
      * by Array.prototype.concat.
      */
        isConcatSpreadable: symbol;

    /** 
      * A Boolean value that if true indicates that an object may be used as a regular expression. 
      */
        isRegExp: symbol;

    /** 
      * A method that returns the default iterator for an object.Called by the semantics of the 
      * for-of statement. 
      */
        iterator: symbol;

    /** 
      * A method that converts an object to a corresponding primitive value.Called by the ToPrimitive
      * abstract operation. 
      */
        toPrimitive: symbol;

    /** 
      * A String value that is used in the creation of the default string description of an object. 
      * Called by the built- in method Object.prototype.toString. 
      */
        toStringTag: symbol;

    /** 
      * An Object whose own property names are property names that are excluded from the with 
      * environment bindings of the associated objects.
      */
        unscopables: symbol;

}

declare  var Symbol: SymbolConstructor;


interface Object {

    /**
      * Determines whether an object has a property with the specified name. 
      * @param v A property name.
      */
        hasOwnProperty(v: PropertyKey): boolean;

    /** 
      * Determines whether a specified property is enumerable.
      * @param v A property name.
      */
        propertyIsEnumerable(v: PropertyKey): boolean;

}


interface ObjectConstructor {

    /**
      * Copy the values of all of the enumerable own properties from one or more source objects to a 
      * target object. Returns the target object.
      * @param target The target object to copy to.
      * @param sources One or more source objects to copy properties from.
      */
        assign(target: any, ...sources: any[]): any;

    /**
      * Returns an array of all symbol properties found directly on object o.
      * @param o Object to retrieve the symbols from.
      */
        getOwnPropertySymbols(o: any): symbol[];

    /**
      *  Returns true if the values are the same value, false otherwise.
      * @param value1 The first value.
      * @param value2 The second value.
      */
        is(value1: any, value2: any): boolean;

    /**
      * Sets the prototype of a specified object o to  object proto or null. Returns the object o.
      * @param o The object to change its prototype.
      * @param proto The value of the new prototype or null.
      */
        setPrototypeOf(o: any, proto: any): any;

    /**
      * Gets the own property descriptor of the specified object. 
      * An own property descriptor is one that is defined directly on the object and is not 
      * inherited from the object's prototype. 
      * @param o Object that contains the property.
      * @param p Name of the property.
    */
        getOwnPropertyDescriptor(o: any, propertyKey: PropertyKey): PropertyDescriptor;

    /**
      * Adds a property to an object, or modifies attributes of an existing property. 
      * @param o Object on which to add or modify the property. This can be a native JavaScript 
      * object (that is, a user-defined object or a built in object) or a DOM object.
      * @param p The property name.
      * @param attributes Descriptor for the property. It can be for a data property or an accessor
      *  property.
      */
        defineProperty(o: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): any;

}


interface Function {

    /** 
      * Returns a new function object that is identical to the argument object in all ways except 
      * for its identity and the value of its HomeObject internal slot. 
      */
        toMethod(newHome: Object): Function;

    /**
      * Returns the name of the function. Function names are read-only and can not be changed.
      */
        name: string;

}


interface NumberConstructor {

    /**
      * The value of Number.EPSILON is the difference between 1 and the smallest value greater than 1
      * that is representable as a Number value, which is approximately: 
      * 2.2204460492503130808472633361816 x 10‍−‍16.
      */
        EPSILON: number;

    /**
      * Returns true if passed value is finite.
      * Unlike the global isFininte, Number.isFinite doesn't forcibly convert the parameter to a 
      * number. Only finite values of the type number, result in true.
      * @param number A numeric value.
      */
        isFinite(number: number): boolean;

    /**
      * Returns true if the value passed is an integer, false otherwise.
      * @param number A numeric value.
      */
        isInteger(number: number): boolean;

    /**
      * Returns a Boolean value that indicates whether a value is the reserved value NaN (not a 
      * number). Unlike the global isNaN(), Number.isNaN() doesn't forcefully convert the parameter
      * to a number. Only values of the type number, that are also NaN, result in true.
      * @param number A numeric value.
      */
        isNaN(number: number): boolean;

    /**
      * Returns true if the value passed is a safe integer.
      * @param number A numeric value.
      */
        isSafeInteger(number: number): boolean;

    /** 
      * The value of the largest integer n such that n and n + 1 are both exactly representable as 
      * a Number value. 
      * The value of Number.MIN_SAFE_INTEGER is 9007199254740991 2^53 − 1.
      */
        MAX_SAFE_INTEGER: number;

    /** 
      * The value of the smallest integer n such that n and n − 1 are both exactly representable as 
      * a Number value. 
      * The value of Number.MIN_SAFE_INTEGER is −9007199254740991 (−(2^53 − 1)).
      */
        MIN_SAFE_INTEGER: number;

    /**
      * Converts a string to a floating-point number. 
      * @param string A string that contains a floating-point number. 
      */
        parseFloat(string: string): number;

    /**
      * Converts A string to an integer.
      * @param s A string to convert into a number.
      * @param radix A value between 2 and 36 that specifies the base of the number in numString. 
      * If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
      * All other strings are considered decimal.
      */
        parseInt(string: string, radix?: number): number;

}


interface ArrayLike<T> {

        length: number;
        [n: number]: T;

}


interface Array<T> {

    /** Iterator */
        [Symbol.iterator](): IterableIterator<T>;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, T]>;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<T>;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: T, index: number, obj: Array<T>) => boolean, thisArg?: any): T;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: T) => boolean, thisArg?: any): number;

    /**
      * Returns the this object after filling the section identified by start and end with value
      * @param value value to fill array section with
      * @param start index to start filling the array at. If start is negative, it is treated as 
      * length+start where length is the length of the array. 
      * @param end index to stop filling the array at. If end is negative, it is treated as 
      * length+end.
      */
        fill(value: T, start?: number, end?: number): T[];

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): T[];

}


interface ArrayConstructor {

    /**
      * Creates an array from an array-like object.
      * @param arrayLike An array-like object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from<T, U>(arrayLike: ArrayLike<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>;

    /**
      * Creates an array from an iterable object.
      * @param iterable An iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from<T, U>(iterable: Iterable<T>, mapfn: (v: T, k: number) => U, thisArg?: any): Array<U>;

    /**
      * Creates an array from an array-like object.
      * @param arrayLike An array-like object to convert to an array.
      */
        from<T>(arrayLike: ArrayLike<T>): Array<T>;

    /**
      * Creates an array from an iterable object.
      * @param iterable An iterable object to convert to an array.
      */
        from<T>(iterable: Iterable<T>): Array<T>;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of<T>(...items: T[]): Array<T>;

}


interface String {

    /** Iterator */
        [Symbol.iterator](): IterableIterator<string>;

    /**
      * Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point 
      * value of the UTF-16 encoded code point starting at the string element at position pos in 
      * the String resulting from converting this object to a String. 
      * If there is no element at that position, the result is undefined. 
      * If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.
      */
        codePointAt(pos: number): number;

    /**
      * Returns true if searchString appears as a substring of the result of converting this 
      * object to a String, at one or more positions that are 
      * greater than or equal to position; otherwise, returns false.
      * @param searchString search string 
      * @param position If position is undefined, 0 is assumed, so as to search all of the String.
      */
        contains(searchString: string, position?: number): boolean;

    /**
      * Returns true if the sequence of elements of searchString converted to a String is the 
      * same as the corresponding elements of this object (converted to a String) starting at 
      * endPosition – length(this). Otherwise returns false.
      */
        endsWith(searchString: string, endPosition?: number): boolean;

    /**
      * Returns the String value result of normalizing the string into the normalization form 
      * named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
      * @param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
      * is "NFC"
      */
        normalize(form?: string): string;

    /**
      * Returns a String value that is made from count copies appended together. If count is 0, 
      * T is the empty String is returned.
      * @param count number of copies to append
      */
        repeat(count: number): string;

    /**
      * Returns true if the sequence of elements of searchString converted to a String is the 
      * same as the corresponding elements of this object (converted to a String) starting at 
      * position. Otherwise returns false.
      */
        startsWith(searchString: string, position?: number): boolean;

    /**
      * Returns an <a> HTML anchor element and sets the name attribute to the text value
      * @param name
      */
        anchor(name: string): string;

    /** Returns a <big> HTML element */
        big(): string;

    /** Returns a <blink> HTML element */
        blink(): string;

    /** Returns a <b> HTML element */
        bold(): string;

    /** Returns a <tt> HTML element */
        fixed(): string;
    /** Returns a <font> HTML element and sets the color attribute value */
        fontcolor(color: string): string;
    /** Returns a <font> HTML element and sets the size attribute value */
        fontsize(size: number): string;

    /** Returns a <font> HTML element and sets the size attribute value */
        fontsize(size: string): string;

    /** Returns an <i> HTML element */
        italics(): string;

    /** Returns an <a> HTML element and sets the href attribute value */
        link(url: string): string;

    /** Returns a <small> HTML element */
        small(): string;

    /** Returns a <strike> HTML element */
        strike(): string;

    /** Returns a <sub> HTML element */
        sub(): string;

    /** Returns a <sup> HTML element */
        sup(): string;

}


interface StringConstructor {

    /**
      * Return the String value whose elements are, in order, the elements in the List elements.
      * If length is 0, the empty string is returned.
      */
        fromCodePoint(...codePoints: number[]): string;

    /**
      * String.raw is intended for use as a tag function of a Tagged Template String. When called
      * as such the first argument will be a well formed template call site object and the rest 
      * parameter will contain the substitution values.
      * @param template A well-formed template string call site representation.
      * @param substitutions A set of substitution values.
      */
        raw(template: TemplateStringsArray, ...substitutions: any[]): string;

}


interface IteratorResult<T> {

        done: boolean;
        value?: T;

}


interface Iterator<T> {

        next(): IteratorResult<T>;
        return?(value?: any): IteratorResult<T>;
        throw?(e?: any): IteratorResult<T>;

}


interface Iterable<T> {

        [Symbol.iterator](): Iterator<T>;

}


interface IterableIterator<T> extends Iterator<T> {

        [Symbol.iterator](): IterableIterator<T>;

}


interface GeneratorFunction extends Function {



}


interface GeneratorFunctionConstructor {

    /**
      * Creates a new Generator function.
      * @param args A list of arguments the function accepts.
      */
        new(...args: string[]): GeneratorFunction;
        (...args: string[]): GeneratorFunction;
        prototype: GeneratorFunction;

}

declare  var GeneratorFunction: GeneratorFunctionConstructor;


interface Generator<T> extends IterableIterator<T> {

        next(value?: any): IteratorResult<T>;
        throw(exception: any): IteratorResult<T>;
        return(value: T): IteratorResult<T>;
        [Symbol.iterator](): Generator<T>;
        [Symbol.toStringTag]: string;

}


interface Math {

    /**
      * Returns the number of leading zero bits in the 32-bit binary representation of a number.
      * @param x A numeric expression.
      */
        clz32(x: number): number;

    /**
      * Returns the result of 32-bit multiplication of two numbers.
      * @param x First number
      * @param y Second number
      */
        imul(x: number, y: number): number;

    /**
      * Returns the sign of the x, indicating whether x is positive, negative or zero.
      * @param x The numeric expression to test
      */
        sign(x: number): number;

    /**
      * Returns the base 10 logarithm of a number.
      * @param x A numeric expression.
      */
        log10(x: number): number;

    /**
      * Returns the base 2 logarithm of a number.
      * @param x A numeric expression.
      */
        log2(x: number): number;

    /**
      * Returns the natural logarithm of 1 + x.
      * @param x A numeric expression.
      */
        log1p(x: number): number;

    /**
      * Returns the result of (e^x - 1) of x (e raised to the power of x, where e is the base of 
      * the natural logarithms).
      * @param x A numeric expression.
      */
        expm1(x: number): number;

    /**
      * Returns the hyperbolic cosine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
        cosh(x: number): number;

    /**
      * Returns the hyperbolic sine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
        sinh(x: number): number;

    /**
      * Returns the hyperbolic tangent of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
        tanh(x: number): number;

    /**
      * Returns the inverse hyperbolic cosine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
        acosh(x: number): number;

    /**
      * Returns the inverse hyperbolic sine of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
        asinh(x: number): number;

    /**
      * Returns the inverse hyperbolic tangent of a number.
      * @param x A numeric expression that contains an angle measured in radians.
      */
        atanh(x: number): number;

    /**
      * Returns the square root of the sum of squares of its arguments.
      * @param values Values to compute the square root for.
      *     If no arguments are passed, the result is +0.
      *     If there is only one argument, the result is the absolute value.
      *     If any argument is +Infinity or -Infinity, the result is +Infinity.
      *     If any argument is NaN, the result is NaN.
      *     If all arguments are either +0 or −0, the result is +0.
      */
        hypot(...values: number[]): number;

    /**
      * Returns the integral part of the a numeric expression, x, removing any fractional digits.
      * If x is already an integer, the result is x.
      * @param x A numeric expression.
      */
        trunc(x: number): number;

    /**
      * Returns the nearest single precision float representation of a number.
      * @param x A numeric expression.
      */
        fround(x: number): number;

    /**
      * Returns an implementation-dependent approximation to the cube root of number.
      * @param x A numeric expression.
      */
        cbrt(x: number): number;

        [Symbol.toStringTag]: string;

}


interface RegExp {

        [Symbol.isRegExp]: boolean;

    /** 
      * Matches a string with a regular expression, and returns an array containing the results of 
      * that search.
      * @param string A string to search within.
      */
        match(string: string): string[];

    /**
      * Replaces text in a string, using a regular expression.
      * @param searchValue A String object or string literal that represents the regular expression
      * @param replaceValue A String object or string literal containing the text to replace for every 
      * successful match of rgExp in stringObj.
      */
        replace(string: string, replaceValue: string): string;

        search(string: string): number;

    /**
      * Returns an Array object into which substrings of the result of converting string to a String 
      * have been stored. The substrings are determined by searching from left to right for matches 
      * of the this value regular expression; these occurrences are not part of any substring in the 
      * returned array, but serve to divide up the String value.
      *
      * If the regular expression that contains capturing parentheses, then each time separator is 
      * matched the results (including any undefined results) of the capturing parentheses are spliced.
      * @param string string value to split
      * @param limit if not undefined, the output array is truncated so that it contains no more 
      * than limit elements.
      */
        split(string: string, limit?: number): string[];

    /** 
      * Returns a Boolean value indicating the state of the sticky flag (y) used with a regular 
      * expression. Default is false. Read-only. 
      */
        sticky: boolean;

    /** 
      * Returns a Boolean value indicating the state of the Unicode flag (u) used with a regular 
      * expression. Default is false. Read-only. 
      */
        unicode: boolean;

}


interface Map<K, V> {

        clear(): void;
        delete(key: K): boolean;
        entries(): IterableIterator<[K, V]>;
        forEach(callbackfn: (value: V, index: K, map: Map<K,V>) => void, thisArg?: any): void;
        get(key: K): V;
        has(key: K): boolean;
        keys(): IterableIterator<K>;
        set(key: K, value?: V): Map<K,V>;
        size: number;
        values(): IterableIterator<V>;
        [Symbol.iterator](): IterableIterator<[K, V]>;
        [Symbol.toStringTag]: string;

}


interface MapConstructor {

        new<K, V>(): Map<K,V>;
        new<K, V>(iterable: Iterable<[K, V]>): Map<K,V>;
        prototype: Map<any,any>;

}

declare  var Map: MapConstructor;


interface WeakMap<K, V> {

        clear(): void;
        delete(key: K): boolean;
        get(key: K): V;
        has(key: K): boolean;
        set(key: K, value?: V): WeakMap<K,V>;
        [Symbol.toStringTag]: string;

}


interface WeakMapConstructor {

        new<K, V>(): WeakMap<K,V>;
        new<K, V>(iterable: Iterable<[K, V]>): WeakMap<K,V>;
        prototype: WeakMap<any,any>;

}

declare  var WeakMap: WeakMapConstructor;


interface Set<T> {

        add(value: T): Set<T>;
        clear(): void;
        delete(value: T): boolean;
        entries(): IterableIterator<[T, T]>;
        forEach(callbackfn: (value: T, index: T, set: Set<T>) => void, thisArg?: any): void;
        has(value: T): boolean;
        keys(): IterableIterator<T>;
        size: number;
        values(): IterableIterator<T>;
        [Symbol.iterator](): IterableIterator<T>;
        [Symbol.toStringTag]: string;

}


interface SetConstructor {

        new<T>(): Set<T>;
        new<T>(iterable: Iterable<T>): Set<T>;
        prototype: Set<any>;

}

declare  var Set: SetConstructor;


interface WeakSet<T> {

        add(value: T): WeakSet<T>;
        clear(): void;
        delete(value: T): boolean;
        has(value: T): boolean;
        [Symbol.toStringTag]: string;

}


interface WeakSetConstructor {

        new<T>(): WeakSet<T>;
        new<T>(iterable: Iterable<T>): WeakSet<T>;
        prototype: WeakSet<any>;

}

declare  var WeakSet: WeakSetConstructor;


interface JSON {

        [Symbol.toStringTag]: string;

}


/**
  * Represents a raw buffer of binary data, which is used to store data for the 
  * different typed arrays. ArrayBuffers cannot be read from or written to directly, 
  * but can be passed to a typed array or DataView Object to interpret the raw 
  * buffer as needed. 
  */
interface ArrayBuffer {

    /**
      * Read-only. The length of the ArrayBuffer (in bytes).
      */
        byteLength: number;

    /**
      * Returns a section of an ArrayBuffer.
      */
        slice(begin: number, end?: number): ArrayBuffer;

        [Symbol.toStringTag]: string;

}


interface ArrayBufferConstructor {

        prototype: ArrayBuffer;
        new(byteLength: number): ArrayBuffer;
        isView(arg: any): boolean;

}

declare  var ArrayBuffer: ArrayBufferConstructor;


interface DataView {

        buffer: ArrayBuffer;
        byteLength: number;
        byteOffset: number;
    /**
      * Gets the Float32 value at the specified byte offset from the start of the view. There is 
      * no alignment constraint; multi-byte values may be fetched from any offset. 
      * @param byteOffset The place in the buffer at which the value should be retrieved.
      */
        getFloat32(byteOffset: number, littleEndian: boolean): number;

    /**
      * Gets the Float64 value at the specified byte offset from the start of the view. There is
      * no alignment constraint; multi-byte values may be fetched from any offset. 
      * @param byteOffset The place in the buffer at which the value should be retrieved.
      */
        getFloat64(byteOffset: number, littleEndian: boolean): number;

    /**
      * Gets the Int8 value at the specified byte offset from the start of the view. There is 
      * no alignment constraint; multi-byte values may be fetched from any offset. 
      * @param byteOffset The place in the buffer at which the value should be retrieved.
      */
        getInt8(byteOffset: number): number;

    /**
      * Gets the Int16 value at the specified byte offset from the start of the view. There is 
      * no alignment constraint; multi-byte values may be fetched from any offset. 
      * @param byteOffset The place in the buffer at which the value should be retrieved.
      */
        getInt16(byteOffset: number, littleEndian: boolean): number;
    /**
      * Gets the Int32 value at the specified byte offset from the start of the view. There is 
      * no alignment constraint; multi-byte values may be fetched from any offset. 
      * @param byteOffset The place in the buffer at which the value should be retrieved.
      */
        getInt32(byteOffset: number, littleEndian: boolean): number;

    /**
      * Gets the Uint8 value at the specified byte offset from the start of the view. There is 
      * no alignment constraint; multi-byte values may be fetched from any offset. 
      * @param byteOffset The place in the buffer at which the value should be retrieved.
      */
        getUint8(byteOffset: number): number;

    /**
      * Gets the Uint16 value at the specified byte offset from the start of the view. There is 
      * no alignment constraint; multi-byte values may be fetched from any offset. 
      * @param byteOffset The place in the buffer at which the value should be retrieved.
      */
        getUint16(byteOffset: number, littleEndian: boolean): number;

    /**
      * Gets the Uint32 value at the specified byte offset from the start of the view. There is 
      * no alignment constraint; multi-byte values may be fetched from any offset. 
      * @param byteOffset The place in the buffer at which the value should be retrieved.
      */
        getUint32(byteOffset: number, littleEndian: boolean): number;

    /**
      * Stores an Float32 value at the specified byte offset from the start of the view. 
      * @param byteOffset The place in the buffer at which the value should be set.
      * @param value The value to set.
      * @param littleEndian If false or undefined, a big-endian value should be written, 
      * otherwise a little-endian value should be written.
      */
        setFloat32(byteOffset: number, value: number, littleEndian: boolean): void;

    /**
      * Stores an Float64 value at the specified byte offset from the start of the view. 
      * @param byteOffset The place in the buffer at which the value should be set.
      * @param value The value to set.
      * @param littleEndian If false or undefined, a big-endian value should be written, 
      * otherwise a little-endian value should be written.
      */
        setFloat64(byteOffset: number, value: number, littleEndian: boolean): void;

    /**
      * Stores an Int8 value at the specified byte offset from the start of the view. 
      * @param byteOffset The place in the buffer at which the value should be set.
      * @param value The value to set.
      */
        setInt8(byteOffset: number, value: number): void;

    /**
      * Stores an Int16 value at the specified byte offset from the start of the view. 
      * @param byteOffset The place in the buffer at which the value should be set.
      * @param value The value to set.
      * @param littleEndian If false or undefined, a big-endian value should be written, 
      * otherwise a little-endian value should be written.
      */
        setInt16(byteOffset: number, value: number, littleEndian: boolean): void;

    /**
      * Stores an Int32 value at the specified byte offset from the start of the view. 
      * @param byteOffset The place in the buffer at which the value should be set.
      * @param value The value to set.
      * @param littleEndian If false or undefined, a big-endian value should be written, 
      * otherwise a little-endian value should be written.
      */
        setInt32(byteOffset: number, value: number, littleEndian: boolean): void;

    /**
      * Stores an Uint8 value at the specified byte offset from the start of the view. 
      * @param byteOffset The place in the buffer at which the value should be set.
      * @param value The value to set.
      */
        setUint8(byteOffset: number, value: number): void;

    /**
      * Stores an Uint16 value at the specified byte offset from the start of the view. 
      * @param byteOffset The place in the buffer at which the value should be set.
      * @param value The value to set.
      * @param littleEndian If false or undefined, a big-endian value should be written, 
      * otherwise a little-endian value should be written.
      */
        setUint16(byteOffset: number, value: number, littleEndian: boolean): void;

    /**
      * Stores an Uint32 value at the specified byte offset from the start of the view. 
      * @param byteOffset The place in the buffer at which the value should be set.
      * @param value The value to set.
      * @param littleEndian If false or undefined, a big-endian value should be written, 
      * otherwise a little-endian value should be written.
      */
        setUint32(byteOffset: number, value: number, littleEndian: boolean): void;

        [Symbol.toStringTag]: string;

}


interface DataViewConstructor {

        new(buffer: ArrayBuffer, byteOffset?: number, byteLength?: number): DataView;

}

declare  var DataView: DataViewConstructor;


/**
  * A typed array of 8-bit integer values. The contents are initialized to 0. If the requested 
  * number of bytes could not be allocated an exception is raised.
  */
interface Int8Array {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Int8Array;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Int8Array) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Int8Array;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Int8Array) => boolean, thisArg?: any): Int8Array;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Int8Array) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Int8Array) => number, thisArg?: any): Int8Array;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int8Array) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int8Array) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Int8Array;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Int8Array, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Int8Array;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Int8Array) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Int8Array;

    /**
      * Gets a new Int8Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Int8Array;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Int8ArrayConstructor {

        prototype: Int8Array;
        new(length: number): Int8Array;
        new(array: Int8Array): Int8Array;
        new(array: number[]): Int8Array;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Int8Array;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Int8Array;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int8Array;

}

declare  var Int8Array: Int8ArrayConstructor;


/**
  * A typed array of 8-bit unsigned integer values. The contents are initialized to 0. If the 
  * requested number of bytes could not be allocated an exception is raised.
  */
interface Uint8Array {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Uint8Array;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Uint8Array) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Uint8Array;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Uint8Array) => boolean, thisArg?: any): Uint8Array;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Uint8Array) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Uint8Array) => number, thisArg?: any): Uint8Array;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8Array) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8Array) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Uint8Array;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Uint8Array, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Uint8Array;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Uint8Array) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Uint8Array;

    /**
      * Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Uint8Array;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Uint8ArrayConstructor {

        prototype: Uint8Array;
        new(length: number): Uint8Array;
        new(array: Uint8Array): Uint8Array;
        new(array: number[]): Uint8Array;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint8Array;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Uint8Array;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8Array;

}

declare  var Uint8Array: Uint8ArrayConstructor;


/**
  * A typed array of 8-bit unsigned integer (clamped) values. The contents are initialized to 0. 
  * If the requested number of bytes could not be allocated an exception is raised.
  */
interface Uint8ClampedArray {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Uint8ClampedArray;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Uint8ClampedArray;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => boolean, thisArg?: any): Uint8ClampedArray;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => number, thisArg?: any): Uint8ClampedArray;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint8ClampedArray) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Uint8ClampedArray;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Uint8ClampedArray, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Uint8ClampedArray;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Uint8ClampedArray) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Uint8ClampedArray;

    /**
      * Gets a new Uint8ClampedArray view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Uint8ClampedArray;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Uint8ClampedArrayConstructor {

        prototype: Uint8ClampedArray;
        new(length: number): Uint8ClampedArray;
        new(array: Uint8ClampedArray): Uint8ClampedArray;
        new(array: number[]): Uint8ClampedArray;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint8ClampedArray;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Uint8ClampedArray;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint8ClampedArray;

}

declare  var Uint8ClampedArray: Uint8ClampedArrayConstructor;


/**
  * A typed array of 16-bit signed integer values. The contents are initialized to 0. If the 
  * requested number of bytes could not be allocated an exception is raised.
  */
interface Int16Array {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Int16Array;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Int16Array) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Int16Array;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Int16Array) => boolean, thisArg?: any): Int16Array;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Int16Array) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Int16Array) => number, thisArg?: any): Int16Array;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int16Array) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int16Array) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Int16Array;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Int16Array, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Int16Array;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Int16Array) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Int16Array;

    /**
      * Gets a new Int16Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Int16Array;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Int16ArrayConstructor {

        prototype: Int16Array;
        new(length: number): Int16Array;
        new(array: Int16Array): Int16Array;
        new(array: number[]): Int16Array;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Int16Array;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Int16Array;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int16Array;

}

declare  var Int16Array: Int16ArrayConstructor;


/**
  * A typed array of 16-bit unsigned integer values. The contents are initialized to 0. If the 
  * requested number of bytes could not be allocated an exception is raised.
  */
interface Uint16Array {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Uint16Array;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Uint16Array) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Uint16Array;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Uint16Array) => boolean, thisArg?: any): Uint16Array;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Uint16Array) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Uint16Array) => number, thisArg?: any): Uint16Array;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint16Array) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint16Array) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Uint16Array;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Uint16Array, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Uint16Array;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Uint16Array) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Uint16Array;

    /**
      * Gets a new Uint16Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Uint16Array;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Uint16ArrayConstructor {

        prototype: Uint16Array;
        new(length: number): Uint16Array;
        new(array: Uint16Array): Uint16Array;
        new(array: number[]): Uint16Array;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint16Array;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Uint16Array;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint16Array;

}

declare  var Uint16Array: Uint16ArrayConstructor;


/**
  * A typed array of 32-bit signed integer values. The contents are initialized to 0. If the 
  * requested number of bytes could not be allocated an exception is raised.
  */
interface Int32Array {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Int32Array;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Int32Array) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Int32Array;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Int32Array) => boolean, thisArg?: any): Int32Array;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Int32Array) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Int32Array) => number, thisArg?: any): Int32Array;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Int32Array) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Int32Array) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Int32Array;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Int32Array, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Int32Array;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Int32Array) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Int32Array;

    /**
      * Gets a new Int32Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Int32Array;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Int32ArrayConstructor {

        prototype: Int32Array;
        new(length: number): Int32Array;
        new(array: Int32Array): Int32Array;
        new(array: number[]): Int32Array;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Int32Array;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Int32Array;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Int32Array;

}

declare  var Int32Array: Int32ArrayConstructor;


/**
  * A typed array of 32-bit unsigned integer values. The contents are initialized to 0. If the 
  * requested number of bytes could not be allocated an exception is raised.
  */
interface Uint32Array {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Uint32Array;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Uint32Array) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Uint32Array;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Uint32Array) => boolean, thisArg?: any): Uint32Array;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Uint32Array) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Uint32Array) => number, thisArg?: any): Uint32Array;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Uint32Array) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Uint32Array) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Uint32Array;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Uint32Array, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Uint32Array;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Uint32Array) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Uint32Array;

    /**
      * Gets a new Uint32Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Uint32Array;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Uint32ArrayConstructor {

        prototype: Uint32Array;
        new(length: number): Uint32Array;
        new(array: Uint32Array): Uint32Array;
        new(array: number[]): Uint32Array;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint32Array;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Uint32Array;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Uint32Array;

}

declare  var Uint32Array: Uint32ArrayConstructor;


/**
  * A typed array of 32-bit float values. The contents are initialized to 0. If the requested number
  * of bytes could not be allocated an exception is raised.
  */
interface Float32Array {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Float32Array;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Float32Array) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Float32Array;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Float32Array) => boolean, thisArg?: any): Float32Array;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Float32Array) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Float32Array) => number, thisArg?: any): Float32Array;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float32Array) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float32Array) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Float32Array;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Float32Array, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Float32Array;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Float32Array) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Float32Array;

    /**
      * Gets a new Float32Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Float32Array;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Float32ArrayConstructor {

        prototype: Float32Array;
        new(length: number): Float32Array;
        new(array: Float32Array): Float32Array;
        new(array: number[]): Float32Array;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Float32Array;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Float32Array;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float32Array;

}

declare  var Float32Array: Float32ArrayConstructor;


/**
  * A typed array of 64-bit float values. The contents are initialized to 0. If the requested 
  * number of bytes could not be allocated an exception is raised.
  */
interface Float64Array {

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

    /** 
      * Returns the this object after copying a section of the array identified by start and end
      * to the same array starting at position target
      * @param target If target is negative, it is treated as length+target where length is the 
      * length of the array. 
      * @param start If start is negative, it is treated as length+start. If end is negative, it 
      * is treated as length+end.
      * @param end If not specified, length of the this object is used as its default value. 
      */
        copyWithin(target: number, start: number, end?: number): Float64Array;

    /** 
      * Returns an array of key, value pairs for every entry in the array
      */
        entries(): IterableIterator<[number, number]>;

    /**
      * Determines whether all the members of an array satisfy the specified test.
      * @param callbackfn A function that accepts up to three arguments. The every method calls 
      * the callbackfn function for each element in array1 until the callbackfn returns false, 
      * or until the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function.
      * If thisArg is omitted, undefined is used as the this value.
      */
        every(callbackfn: (value: number, index: number, array: Float64Array) => boolean, thisArg?: any): boolean;

    /**
        * Returns the this object after filling the section identified by start and end with value
        * @param value value to fill array section with
        * @param start index to start filling the array at. If start is negative, it is treated as 
        * length+start where length is the length of the array. 
        * @param end index to stop filling the array at. If end is negative, it is treated as 
        * length+end.
        */
        fill(value: number, start?: number, end?: number): Float64Array;

    /**
      * Returns the elements of an array that meet the condition specified in a callback function. 
      * @param callbackfn A function that accepts up to three arguments. The filter method calls 
      * the callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        filter(callbackfn: (value: number, index: number, array: Float64Array) => boolean, thisArg?: any): Float64Array;

    /** 
      * Returns the value of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        find(predicate: (value: number, index: number, obj: Array<number>) => boolean, thisArg?: any): number;

    /** 
      * Returns the index of the first element in the array where predicate is true, and undefined 
      * otherwise.
      * @param predicate find calls predicate once for each element of the array, in ascending 
      * order, until it finds one where predicate returns true. If such an element is found, find 
      * immediately returns that element value. Otherwise, find returns undefined.
      * @param thisArg If provided, it will be used as the this value for each invocation of 
      * predicate. If it is not provided, undefined is used instead.
      */
        findIndex(predicate: (value: number) => boolean, thisArg?: any): number;

    /**
      * Performs the specified action for each element in an array.
      * @param callbackfn  A function that accepts up to three arguments. forEach calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg  An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        forEach(callbackfn: (value: number, index: number, array: Float64Array) => void, thisArg?: any): void;

    /**
      * Returns the index of the first occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
      *  search starts at index 0.
      */
        indexOf(searchElement: number, fromIndex?: number): number;

    /**
      * Adds all the elements of an array separated by the specified separator string.
      * @param separator A string used to separate one element of an array from the next in the 
      * resulting String. If omitted, the array elements are separated with a comma.
      */
        join(separator?: string): string;

    /** 
      * Returns an list of keys in the array
      */
        keys(): IterableIterator<number>;

    /**
      * Returns the index of the last occurrence of a value in an array.
      * @param searchElement The value to locate in the array.
      * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the 
      * search starts at index 0.
      */
        lastIndexOf(searchElement: number, fromIndex?: number): number;

    /**
      * The length of the array.
      */
        length: number;

    /**
      * Calls a defined callback function on each element of an array, and returns an array that 
      * contains the results.
      * @param callbackfn A function that accepts up to three arguments. The map method calls the 
      * callbackfn function one time for each element in the array. 
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        map(callbackfn: (value: number, index: number, array: Float64Array) => number, thisArg?: any): Float64Array;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduce(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue?: number): number;

    /**
      * Calls the specified callback function for all the elements in an array. The return value of 
      * the callback function is the accumulated result, and is provided as an argument in the next 
      * call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduce method calls the 
      * callbackfn function one time for each element in the array.
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument 
      * instead of an array value.
      */
        reduce<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls 
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an 
      * argument instead of an array value.
      */
        reduceRight(callbackfn: (previousValue: number, currentValue: number, currentIndex: number, array: Float64Array) => number, initialValue?: number): number;

    /** 
      * Calls the specified callback function for all the elements in an array, in descending order. 
      * The return value of the callback function is the accumulated result, and is provided as an 
      * argument in the next call to the callback function.
      * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
      * the callbackfn function one time for each element in the array. 
      * @param initialValue If initialValue is specified, it is used as the initial value to start 
      * the accumulation. The first call to the callbackfn function provides this value as an argument
      * instead of an array value.
      */
        reduceRight<U>(callbackfn: (previousValue: U, currentValue: number, currentIndex: number, array: Float64Array) => U, initialValue: U): U;

    /**
      * Reverses the elements in an Array. 
      */
        reverse(): Float64Array;

    /**
      * Sets a value or an array of values.
      * @param index The index of the location to set.
      * @param value The value to set.
      */
        set(index: number, value: number): void;

    /**
      * Sets a value or an array of values.
      * @param array A typed or untyped array of values to set.
      * @param offset The index in the current array at which the values are to be written.
      */
        set(array: Float64Array, offset?: number): void;

    /** 
      * Returns a section of an array.
      * @param start The beginning of the specified portion of the array.
      * @param end The end of the specified portion of the array.
      */
        slice(start?: number, end?: number): Float64Array;

    /**
      * Determines whether the specified callback function returns true for any element of an array.
      * @param callbackfn A function that accepts up to three arguments. The some method calls the 
      * callbackfn function for each element in array1 until the callbackfn returns true, or until 
      * the end of the array.
      * @param thisArg An object to which the this keyword can refer in the callbackfn function. 
      * If thisArg is omitted, undefined is used as the this value.
      */
        some(callbackfn: (value: number, index: number, array: Float64Array) => boolean, thisArg?: any): boolean;

    /**
      * Sorts an array.
      * @param compareFn The name of the function used to determine the order of the elements. If 
      * omitted, the elements are sorted in ascending, ASCII character order.
      */
        sort(compareFn?: (a: number, b: number) => number): Float64Array;

    /**
      * Gets a new Float64Array view of the ArrayBuffer store for this array, referencing the elements
      * at begin, inclusive, up to end, exclusive. 
      * @param begin The index of the beginning of the array.
      * @param end The index of the end of the array.
      */
        subarray(begin: number, end?: number): Float64Array;

    /**
      * Converts a number to a string by using the current locale. 
      */
        toLocaleString(): string;

    /**
      * Returns a string representation of an array.
      */
        toString(): string;

    /** 
      * Returns an list of values in the array
      */
        values(): IterableIterator<number>;

        [index: number]: number;
        [Symbol.iterator](): IterableIterator<number>;

}


interface Float64ArrayConstructor {

        prototype: Float64Array;
        new(length: number): Float64Array;
        new(array: Float64Array): Float64Array;
        new(array: number[]): Float64Array;
        new(buffer: ArrayBuffer, byteOffset?: number, length?: number): Float64Array;

    /**
      * The size in bytes of each element in the array. 
      */
        BYTES_PER_ELEMENT: number;

    /**
      * Returns a new array from a set of elements.
      * @param items A set of elements to include in the new array object.
      */
        of(...items: number[]): Float64Array;

    /**
      * Creates an array from an array-like or iterable object.
      * @param arrayLike An array-like or iterable object to convert to an array.
      * @param mapfn A mapping function to call on every element of the array.
      * @param thisArg Value of 'this' used to invoke the mapfn.
      */
        from(arrayLike: ArrayLike<number>|Iterable<number>, mapfn?: (v: number, k: number) => number, thisArg?: any): Float64Array;

}

declare  var Float64Array: Float64ArrayConstructor;


interface ProxyHandler<T> {

        getPrototypeOf?(target: T): any;
        setPrototypeOf?(target: T, v: any): boolean;
        isExtensible?(target: T): boolean;
        preventExtensions?(target: T): boolean;
        getOwnPropertyDescriptor?(target: T, p: PropertyKey): PropertyDescriptor;
        has?(target: T, p: PropertyKey): boolean;
        get?(target: T, p: PropertyKey, receiver: any): any;
        set?(target: T, p: PropertyKey, value: any, receiver: any): boolean;
        deleteProperty?(target: T, p: PropertyKey): boolean;
        defineProperty?(target: T, p: PropertyKey, attributes: PropertyDescriptor): boolean;
        enumerate?(target: T): PropertyKey[];
        ownKeys?(target: T): PropertyKey[];
        apply?(target: T, thisArg: any, argArray?: any): any;
        construct?(target: T, thisArg: any, argArray?: any): any;

}


interface ProxyConstructor {

        revocable<T>(target: T, handler: ProxyHandler<T>): {     proxy: T;     revoke: () => void; };
        new<T>(target: T, handeler: ProxyHandler<T>): T;
}

declare  var Proxy: ProxyConstructor;


declare  var Reflect: {
        apply(target: Function, thisArgument: any, argumentsList: ArrayLike<any>): any;
        construct(target: Function, argumentsList: ArrayLike<any>): any;
        defineProperty(target: any, propertyKey: PropertyKey, attributes: PropertyDescriptor): boolean;
        deleteProperty(target: any, propertyKey: PropertyKey): boolean;
        enumerate(target: any): IterableIterator<any>;
        get(target: any, propertyKey: PropertyKey, receiver?: any): any;
        getOwnPropertyDescriptor(target: any, propertyKey: PropertyKey): PropertyDescriptor;
        getPrototypeOf(target: any): any;
        has(target: any, propertyKey: string): boolean;
        has(target: any, propertyKey: symbol): boolean;
        isExtensible(target: any): boolean;
        ownKeys(target: any): Array<PropertyKey>;
        preventExtensions(target: any): boolean;
        set(target: any, propertyKey: PropertyKey, value: any, receiver?: any): boolean;
        setPrototypeOf(target: any, proto: any): boolean;
};


/**
 * Represents the completion of an asynchronous operation
 */
interface Promise<T> {

    /**
    * Attaches callbacks for the resolution and/or rejection of the Promise.
    * @param onfulfilled The callback to execute when the Promise is resolved.
    * @param onrejected The callback to execute when the Promise is rejected.
    * @returns A Promise for the completion of which ever callback is executed.
    */
        then<TResult>(onfulfilled?: (value: T) => TResult|Promise<TResult>, onrejected?: (reason: any) => TResult|Promise<TResult>): Promise<TResult>;

    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
        catch(onrejected?: (reason: any) => T|Promise<T>): Promise<T>;

}


interface PromiseConstructor {

    /** 
      * A reference to the prototype. 
      */
        prototype: Promise<any>;

    /**
     * Creates a new Promise.
     * @param init A callback used to initialize the promise. This callback is passed two arguments: 
     * a resolve callback used resolve the promise with a value or the result of another promise, 
     * and a reject callback used to reject the promise with a provided reason or error.
     */
        new<T>(init: (resolve: (value?: T|Promise<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

        <T>(init: (resolve: (value?: T|Promise<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises 
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
        all<T>(values: (T|Promise<T>)[]): Promise<T[]>;

    /**
     * Creates a Promise that is resolved with an array of results when all of the provided Promises
     * resolve, or rejected when any Promise is rejected.
     * @param values An array of values.
     * @returns A new Promise.
     */
        all(values: Promise<void>[]): Promise<void>;

    /**
     * Creates a Promise that is resolved or rejected when any of the provided Promises are resolved 
     * or rejected.
     * @param values An array of Promises.
     * @returns A new Promise.
     */
        race<T>(values: (T|Promise<T>)[]): Promise<T>;

    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
        reject(reason: any): Promise<void>;

    /**
     * Creates a new rejected promise for the provided reason.
     * @param reason The reason the promise was rejected.
     * @returns A new rejected Promise.
     */
        reject<T>(reason: any): Promise<T>;

    /**
      * Creates a new resolved promise for the provided value.
      * @param value A promise.
      * @returns A promise whose internal state matches the provided promise.
      */
        resolve<T>(value: T|Promise<T>): Promise<T>;

    /**
     * Creates a new resolved promise .
     * @returns A resolved promise.
     */
        resolve(): Promise<void>;

}


declare  var Promise: PromiseConstructor;


interface ArrayBufferView {

    /**
      * The ArrayBuffer instance referenced by the array. 
      */
        buffer: ArrayBuffer;

    /**
      * The length in bytes of the array.
      */
        byteLength: number;

    /**
      * The offset in bytes of the array.
      */
        byteOffset: number;

}
/////////////////////////////
/// ECMAScript Internationalization API 
/////////////////////////////

declare module Intl {

        interface CollatorOptions {

                usage?: string;
                localeMatcher?: string;
                numeric?: boolean;
                caseFirst?: string;
                sensitivity?: string;
                ignorePunctuation?: boolean;
    
    }


        interface ResolvedCollatorOptions {

                locale: string;
                usage: string;
                sensitivity: string;
                ignorePunctuation: boolean;
                collation: string;
                caseFirst: string;
                numeric: boolean;
    
    }


        interface Collator {

                compare(x: string, y: string): number;
                resolvedOptions(): ResolvedCollatorOptions;
    
    }

         var Collator: {
            new(locales?: string[], options?: CollatorOptions): Collator;
            new(locale?: string, options?: CollatorOptions): Collator;
            (locales?: string[], options?: CollatorOptions): Collator;
            (locale?: string, options?: CollatorOptions): Collator;
            supportedLocalesOf(locales: string[], options?: CollatorOptions): string[];
            supportedLocalesOf(locale: string, options?: CollatorOptions): string[];
    };
    interface NumberFormatOptions {

                localeMatcher?: string;
                style?: string;
                currency?: string;
                currencyDisplay?: string;
                useGrouping?: boolean;
    
    }


        interface ResolvedNumberFormatOptions {

                locale: string;
                numberingSystem: string;
                style: string;
                currency?: string;
                currencyDisplay?: string;
                minimumintegerDigits: number;
                minimumFractionDigits: number;
                maximumFractionDigits: number;
                minimumSignificantDigits?: number;
                maximumSignificantDigits?: number;
                useGrouping: boolean;
    
    }


        interface NumberFormat {

                format(value: number): string;
                resolvedOptions(): ResolvedNumberFormatOptions;
    
    }

         var NumberFormat: {
            new(locales?: string[], options?: NumberFormatOptions): Collator;
            new(locale?: string, options?: NumberFormatOptions): Collator;
            (locales?: string[], options?: NumberFormatOptions): Collator;
            (locale?: string, options?: NumberFormatOptions): Collator;
            supportedLocalesOf(locales: string[], options?: NumberFormatOptions): string[];
            supportedLocalesOf(locale: string, options?: NumberFormatOptions): string[];
    };
    interface DateTimeFormatOptions {

                localeMatcher?: string;
                weekday?: string;
                era?: string;
                year?: string;
                month?: string;
                day?: string;
                hour?: string;
                minute?: string;
                second?: string;
                timeZoneName?: string;
                formatMatcher?: string;
                hour12?: boolean;
    
    }


        interface ResolvedDateTimeFormatOptions {

                locale: string;
                calendar: string;
                numberingSystem: string;
                timeZone: string;
                hour12?: boolean;
                weekday?: string;
                era?: string;
                year?: string;
                month?: string;
                day?: string;
                hour?: string;
                minute?: string;
                second?: string;
                timeZoneName?: string;
    
    }


        interface DateTimeFormat {

                format(date: number): string;
                resolvedOptions(): ResolvedDateTimeFormatOptions;
    
    }

         var DateTimeFormat: {
            new(locales?: string[], options?: DateTimeFormatOptions): Collator;
            new(locale?: string, options?: DateTimeFormatOptions): Collator;
            (locales?: string[], options?: DateTimeFormatOptions): Collator;
            (locale?: string, options?: DateTimeFormatOptions): Collator;
            supportedLocalesOf(locales: string[], options?: DateTimeFormatOptions): string[];
            supportedLocalesOf(locale: string, options?: DateTimeFormatOptions): string[];
    };
}


interface String {

    /**
      * Determines whether two strings are equivalent in the current locale.
      * @param that String to compare to target string
      * @param locales An array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
      * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
      */
        localeCompare(that: string, locales: string[], options?: Intl.CollatorOptions): number;

    /**
      * Determines whether two strings are equivalent in the current locale.
      * @param that String to compare to target string
      * @param locale Locale tag. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
      * @param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
      */
        localeCompare(that: string, locale: string, options?: Intl.CollatorOptions): number;

}


interface Number {

    /**
      * Converts a number to a string by using the current or specified locale. 
      * @param locales An array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
      * @param options An object that contains one or more properties that specify comparison options.
      */
        toLocaleString(locales?: string[], options?: Intl.NumberFormatOptions): string;

    /**
      * Converts a number to a string by using the current or specified locale. 
      * @param locale Locale tag. If you omit this parameter, the default locale of the JavaScript runtime is used.
      * @param options An object that contains one or more properties that specify comparison options.
      */
        toLocaleString(locale?: string, options?: Intl.NumberFormatOptions): string;

}


interface Date {

    /**
      * Converts a date to a string by using the current or specified locale.  
      * @param locales An array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used.
      * @param options An object that contains one or more properties that specify comparison options.
      */
        toLocaleString(locales?: string[], options?: Intl.DateTimeFormatOptions): string;

    /**
      * Converts a date to a string by using the current or specified locale.  
      * @param locale Locale tag. If you omit this parameter, the default locale of the JavaScript runtime is used.
      * @param options An object that contains one or more properties that specify comparison options.
      */
        toLocaleString(locale?: string, options?: Intl.DateTimeFormatOptions): string;

}


/////////////////////////////
/// IE DOM APIs
/////////////////////////////


interface PositionOptions {

        enableHighAccuracy?: boolean;
        timeout?: number;
        maximumAge?: number;

}


interface ObjectURLOptions {

        oneTimeOnly?: boolean;

}


interface StoreExceptionsInformation extends ExceptionInformation {

        siteName?: string;
        explanationString?: string;
        detailURI?: string;

}


interface StoreSiteSpecificExceptionsInformation extends StoreExceptionsInformation {

        arrayOfDomainStrings?: string[];

}


interface ConfirmSiteSpecificExceptionsInformation extends ExceptionInformation {

        arrayOfDomainStrings?: string[];

}


interface AlgorithmParameters {


}


interface MutationObserverInit {

        childList?: boolean;
        attributes?: boolean;
        characterData?: boolean;
        subtree?: boolean;
        attributeOldValue?: boolean;
        characterDataOldValue?: boolean;
        attributeFilter?: string[];

}


interface PointerEventInit extends MouseEventInit {

        pointerId?: number;
        width?: number;
        height?: number;
        pressure?: number;
        tiltX?: number;
        tiltY?: number;
        pointerType?: string;
        isPrimary?: boolean;

}


interface ExceptionInformation {

        domain?: string;

}


interface DeviceAccelerationDict {

        x?: number;
        y?: number;
        z?: number;

}


interface MsZoomToOptions {

        contentX?: number;
        contentY?: number;
        viewportX?: string;
        viewportY?: string;
        scaleFactor?: number;
        animate?: string;

}


interface DeviceRotationRateDict {

        alpha?: number;
        beta?: number;
        gamma?: number;

}


interface Algorithm {

        name?: string;
        params?: AlgorithmParameters;

}


interface MouseEventInit {

        bubbles?: boolean;
        cancelable?: boolean;
        view?: Window;
        detail?: number;
        screenX?: number;
        screenY?: number;
        clientX?: number;
        clientY?: number;
        ctrlKey?: boolean;
        shiftKey?: boolean;
        altKey?: boolean;
        metaKey?: boolean;
        button?: number;
        buttons?: number;
        relatedTarget?: EventTarget;

}


interface WebGLContextAttributes {

        alpha?: boolean;
        depth?: boolean;
        stencil?: boolean;
        antialias?: boolean;
        premultipliedAlpha?: boolean;
        preserveDrawingBuffer?: boolean;

}


interface NodeListOf<TNode extends Node> extends NodeList {

        length: number;
        item(index: number): TNode;
        [index: number]: TNode;

}


declare class HTMLElement implements Element, ElementCSSInlineStyle, MSEventAttachmentTarget, MSNodeExtensions {

        hidden: any;
        readyState: any;
        onmouseleave: (ev: MouseEvent) => any;
        onbeforecut: (ev: DragEvent) => any;
        onkeydown: (ev: KeyboardEvent) => any;
        onmove: (ev: MSEventObj) => any;
        onkeyup: (ev: KeyboardEvent) => any;
        onreset: (ev: Event) => any;
        onhelp: (ev: Event) => any;
        ondragleave: (ev: DragEvent) => any;
        className: string;
        onfocusin: (ev: FocusEvent) => any;
        onseeked: (ev: Event) => any;
        recordNumber: any;
        title: string;
        parentTextEdit: Element;
        outerHTML: string;
        ondurationchange: (ev: Event) => any;
        offsetHeight: number;
        all: HTMLCollection;
        onblur: (ev: FocusEvent) => any;
        dir: string;
        onemptied: (ev: Event) => any;
        onseeking: (ev: Event) => any;
        oncanplay: (ev: Event) => any;
        ondeactivate: (ev: UIEvent) => any;
        ondatasetchanged: (ev: MSEventObj) => any;
        onrowsdelete: (ev: MSEventObj) => any;
        sourceIndex: number;
        onloadstart: (ev: Event) => any;
        onlosecapture: (ev: MSEventObj) => any;
        ondragenter: (ev: DragEvent) => any;
        oncontrolselect: (ev: MSEventObj) => any;
        onsubmit: (ev: Event) => any;
        behaviorUrns: MSBehaviorUrnsCollection;
        scopeName: string;
        onchange: (ev: Event) => any;
        id: string;
        onlayoutcomplete: (ev: MSEventObj) => any;
        uniqueID: string;
        onbeforeactivate: (ev: UIEvent) => any;
        oncanplaythrough: (ev: Event) => any;
        onbeforeupdate: (ev: MSEventObj) => any;
        onfilterchange: (ev: MSEventObj) => any;
        offsetParent: Element;
        ondatasetcomplete: (ev: MSEventObj) => any;
        onsuspend: (ev: Event) => any;
        onmouseenter: (ev: MouseEvent) => any;
        innerText: string;
        onerrorupdate: (ev: MSEventObj) => any;
        onmouseout: (ev: MouseEvent) => any;
        parentElement: HTMLElement;
        onmousewheel: (ev: MouseWheelEvent) => any;
        onvolumechange: (ev: Event) => any;
        oncellchange: (ev: MSEventObj) => any;
        onrowexit: (ev: MSEventObj) => any;
        onrowsinserted: (ev: MSEventObj) => any;
        onpropertychange: (ev: MSEventObj) => any;
        filters: any;
        children: HTMLCollection;
        ondragend: (ev: DragEvent) => any;
        onbeforepaste: (ev: DragEvent) => any;
        ondragover: (ev: DragEvent) => any;
        offsetTop: number;
        onmouseup: (ev: MouseEvent) => any;
        ondragstart: (ev: DragEvent) => any;
        onbeforecopy: (ev: DragEvent) => any;
        ondrag: (ev: DragEvent) => any;
        innerHTML: string;
        onmouseover: (ev: MouseEvent) => any;
        lang: string;
        uniqueNumber: number;
        onpause: (ev: Event) => any;
        tagUrn: string;
        onmousedown: (ev: MouseEvent) => any;
        onclick: (ev: MouseEvent) => any;
        onwaiting: (ev: Event) => any;
        onresizestart: (ev: MSEventObj) => any;
        offsetLeft: number;
        isTextEdit: boolean;
        isDisabled: boolean;
        onpaste: (ev: DragEvent) => any;
        canHaveHTML: boolean;
        onmoveend: (ev: MSEventObj) => any;
        language: string;
        onstalled: (ev: Event) => any;
        onmousemove: (ev: MouseEvent) => any;
        style: MSStyleCSSProperties;
        isContentEditable: boolean;
        onbeforeeditfocus: (ev: MSEventObj) => any;
        onratechange: (ev: Event) => any;
        contentEditable: string;
        tabIndex: number;
        document: Document;
        onprogress: (ev: ProgressEvent) => any;
        ondblclick: (ev: MouseEvent) => any;
        oncontextmenu: (ev: MouseEvent) => any;
        onloadedmetadata: (ev: Event) => any;
        onafterupdate: (ev: MSEventObj) => any;
        onerror: (ev: ErrorEvent) => any;
        onplay: (ev: Event) => any;
        onresizeend: (ev: MSEventObj) => any;
        onplaying: (ev: Event) => any;
        isMultiLine: boolean;
        onfocusout: (ev: FocusEvent) => any;
        onabort: (ev: UIEvent) => any;
        ondataavailable: (ev: MSEventObj) => any;
        hideFocus: boolean;
        onreadystatechange: (ev: Event) => any;
        onkeypress: (ev: KeyboardEvent) => any;
        onloadeddata: (ev: Event) => any;
        onbeforedeactivate: (ev: UIEvent) => any;
        outerText: string;
        disabled: boolean;
        onactivate: (ev: UIEvent) => any;
        accessKey: string;
        onmovestart: (ev: MSEventObj) => any;
        onselectstart: (ev: Event) => any;
        onfocus: (ev: FocusEvent) => any;
        ontimeupdate: (ev: Event) => any;
        onresize: (ev: UIEvent) => any;
        oncut: (ev: DragEvent) => any;
        onselect: (ev: UIEvent) => any;
        ondrop: (ev: DragEvent) => any;
        offsetWidth: number;
        oncopy: (ev: DragEvent) => any;
        onended: (ev: Event) => any;
        onscroll: (ev: UIEvent) => any;
        onrowenter: (ev: MSEventObj) => any;
        onload: (ev: Event) => any;
        canHaveChildren: boolean;
        oninput: (ev: Event) => any;
        onmscontentzoom: (ev: MSEventObj) => any;
        oncuechange: (ev: Event) => any;
        spellcheck: boolean;
        classList: DOMTokenList;
        onmsmanipulationstatechanged: (ev: any) => any;
        draggable: boolean;
        dataset: DOMStringMap;
        dragDrop(): boolean;
        scrollIntoView(top?: boolean): void;
        addFilter(filter: any): void;
        setCapture(containerCapture?: boolean): void;
        focus(): void;
        getAdjacentText(where: string): string;
        insertAdjacentText(where: string, text: string): void;
        getElementsByClassName(classNames: string): NodeList;
        setActive(): void;
        removeFilter(filter: any): void;
        blur(): void;
        clearAttributes(): void;
        releaseCapture(): void;
        createControlRange(): ControlRangeCollection;
        removeBehavior(cookie: number): boolean;
        contains(child: HTMLElement): boolean;
        click(): void;
        insertAdjacentElement(position: string, insertedElement: Element): Element;
        mergeAttributes(source: HTMLElement, preserveIdentity?: boolean): void;
        replaceAdjacentText(where: string, newText: string): string;
        applyElement(apply: Element, where?: string): Element;
        addBehavior(bstrUrl: string, factory?: any): number;
        insertAdjacentHTML(where: string, html: string): void;
        msGetInputContext(): MSInputMethodContext;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

        scrollTop: number;
        clientLeft: number;
        scrollLeft: number;
        tagName: string;
        clientWidth: number;
        scrollWidth: number;
        clientHeight: number;
        clientTop: number;
        scrollHeight: number;
        msRegionOverflow: string;
        onmspointerdown: (ev: any) => any;
        onmsgotpointercapture: (ev: any) => any;
        onmsgesturedoubletap: (ev: any) => any;
        onmspointerhover: (ev: any) => any;
        onmsgesturehold: (ev: any) => any;
        onmspointermove: (ev: any) => any;
        onmsgesturechange: (ev: any) => any;
        onmsgesturestart: (ev: any) => any;
        onmspointercancel: (ev: any) => any;
        onmsgestureend: (ev: any) => any;
        onmsgesturetap: (ev: any) => any;
        onmspointerout: (ev: any) => any;
        onmsinertiastart: (ev: any) => any;
        onmslostpointercapture: (ev: any) => any;
        onmspointerover: (ev: any) => any;
        msContentZoomFactor: number;
        onmspointerup: (ev: any) => any;
        onlostpointercapture: (ev: PointerEvent) => any;
        onmspointerenter: (ev: any) => any;
        ongotpointercapture: (ev: PointerEvent) => any;
        onmspointerleave: (ev: any) => any;
        getAttribute(name?: string): string;
        getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
        hasAttributeNS(namespaceURI: string, localName: string): boolean;
        getBoundingClientRect(): ClientRect;
        getAttributeNS(namespaceURI: string, localName: string): string;
        getAttributeNodeNS(namespaceURI: string, localName: string): Attr;
        setAttributeNodeNS(newAttr: Attr): Attr;
        msMatchesSelector(selectors: string): boolean;
        hasAttribute(name: string): boolean;
        removeAttribute(name?: string): void;
        setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;
        getAttributeNode(name: string): Attr;
        fireEvent(eventName: string, eventObj?: any): boolean;
        getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
        getElementsByTagName(name: "abbr"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "acronym"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "address"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "applet"): NodeListOf<HTMLAppletElement>;
        getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;
        getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
        getElementsByTagName(name: "b"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;
        getElementsByTagName(name: "basefont"): NodeListOf<HTMLBaseFontElement>;
        getElementsByTagName(name: "bdo"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "bgsound"): NodeListOf<HTMLBGSoundElement>;
        getElementsByTagName(name: "big"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "blockquote"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
        getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;
        getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
        getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
        getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;
        getElementsByTagName(name: "center"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "cite"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "code"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;
        getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;
        getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;
        getElementsByTagName(name: "dd"): NodeListOf<HTMLDDElement>;
        getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;
        getElementsByTagName(name: "dfn"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "dir"): NodeListOf<HTMLDirectoryElement>;
        getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
        getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;
        getElementsByTagName(name: "dt"): NodeListOf<HTMLDTElement>;
        getElementsByTagName(name: "em"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;
        getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;
        getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "font"): NodeListOf<HTMLFontElement>;
        getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
        getElementsByTagName(name: "frame"): NodeListOf<HTMLFrameElement>;
        getElementsByTagName(name: "frameset"): NodeListOf<HTMLFrameSetElement>;
        getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
        getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;
        getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
        getElementsByTagName(name: "i"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
        getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
        getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;
        getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;
        getElementsByTagName(name: "isindex"): NodeListOf<HTMLIsIndexElement>;
        getElementsByTagName(name: "kbd"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "keygen"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;
        getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;
        getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;
        getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;
        getElementsByTagName(name: "listing"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;
        getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "marquee"): NodeListOf<HTMLMarqueeElement>;
        getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;
        getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;
        getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "nextid"): NodeListOf<HTMLNextIdElement>;
        getElementsByTagName(name: "nobr"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "noframes"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;
        getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;
        getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;
        getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;
        getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;
        getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;
        getElementsByTagName(name: "plaintext"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;
        getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;
        getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;
        getElementsByTagName(name: "rt"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "ruby"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "s"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "samp"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
        getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;
        getElementsByTagName(name: "small"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "SOURCE"): NodeListOf<HTMLSourceElement>;
        getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;
        getElementsByTagName(name: "strike"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "strong"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;
        getElementsByTagName(name: "sub"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "sup"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;
        getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;
        getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;
        getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;
        getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;
        getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;
        getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;
        getElementsByTagName(name: "tt"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "u"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;
        getElementsByTagName(name: "var"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
        getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "x-ms-webview"): NodeListOf<MSHTMLWebViewElement>;
        getElementsByTagName(name: "xmp"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: string): NodeList;
        getClientRects(): ClientRectList;
        setAttributeNode(newAttr: Attr): Attr;
        removeAttributeNode(oldAttr: Attr): Attr;
        setAttribute(name?: string, value?: string): void;
        removeAttributeNS(namespaceURI: string, localName: string): void;
        msGetRegionContent(): MSRangeCollection;
        msReleasePointerCapture(pointerId: number): void;
        msSetPointerCapture(pointerId: number): void;
        msZoomTo(args: MsZoomToOptions): void;
        setPointerCapture(pointerId: number): void;
        msGetUntransformedBounds(): ClientRect;
        releasePointerCapture(pointerId: number): void;
        msRequestFullscreen(): void;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

      remove(): void; // FF and Chrome specific.

  // Shadow DOM
      createShadowRoot(): ShadowRoot;
  
      webkitCreateShadowRoot(): ShadowRoot;
  
      getDestinationInsertionPoints(): NodeList;
      shadowRoot: ShadowRoot;
      webkitShadowRoot: ShadowRoot;
// Node

        nodeType: number;
        previousSibling: Node;
        localName: string;
        namespaceURI: string;
        textContent: string;
        parentNode: Node;
        nextSibling: Node;
        nodeValue: string;
        lastChild: Node;
        childNodes: NodeList;
        nodeName: string;
        ownerDocument: Document;
        attributes: NamedNodeMap;
        firstChild: Node;
        prefix: string;
        removeChild(oldChild: Node): Node;
        appendChild(newChild: Node): Node;
        isSupported(feature: string, version: string): boolean;
        isEqualNode(arg: Node): boolean;
        lookupPrefix(namespaceURI: string): string;
        isDefaultNamespace(namespaceURI: string): boolean;
        compareDocumentPosition(other: Node): number;
        normalize(): void;
        isSameNode(other: Node): boolean;
        hasAttributes(): boolean;
        lookupNamespaceURI(prefix: string): string;
        cloneNode(deep?: boolean): Node;
        hasChildNodes(): boolean;
        replaceChild(newChild: Node, oldChild: Node): Node;
        insertBefore(newChild: Node, refChild?: Node): Node;
        ENTITY_REFERENCE_NODE: number;
        ATTRIBUTE_NODE: number;
        DOCUMENT_FRAGMENT_NODE: number;
        TEXT_NODE: number;
        ELEMENT_NODE: number;
        COMMENT_NODE: number;
        DOCUMENT_POSITION_DISCONNECTED: number;
        DOCUMENT_POSITION_CONTAINED_BY: number;
        DOCUMENT_POSITION_CONTAINS: number;
        DOCUMENT_TYPE_NODE: number;
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        DOCUMENT_NODE: number;
        ENTITY_NODE: number;
        PROCESSING_INSTRUCTION_NODE: number;
        CDATA_SECTION_NODE: number;
        NOTATION_NODE: number;
        DOCUMENT_POSITION_FOLLOWING: number;
        DOCUMENT_POSITION_PRECEDING: number;
// EventTarget

        removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
        dispatchEvent(evt: Event): boolean;
// NodeSelector

        querySelectorAll(selectors: string): NodeList;
        querySelector(selectors: string): Element;
// ElementTraversal

        childElementCount: number;
        previousElementSibling: Element;
        lastElementChild: Element;
        nextElementSibling: Element;
        firstElementChild: Element;
// GlobalEventHandlers

        onpointerenter: (ev: PointerEvent) => any;
        onpointerout: (ev: PointerEvent) => any;
        onpointerdown: (ev: PointerEvent) => any;
        onpointerup: (ev: PointerEvent) => any;
        onpointercancel: (ev: PointerEvent) => any;
        onpointerover: (ev: PointerEvent) => any;
        onpointermove: (ev: PointerEvent) => any;
        onpointerleave: (ev: PointerEvent) => any;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

        runtimeStyle: MSStyleCSSProperties;
        currentStyle: MSCurrentStyleCSSProperties;
        doScroll(component?: any): void;
        componentFromPoint(x: number, y: number): string;

        attachEvent(event: string, listener: EventListener): boolean;
        detachEvent(event: string, listener: EventListener): void;

        swapNode(otherNode: Node): Node;
        removeNode(deep?: boolean): Node;
        replaceNode(replacement: Node): Node;
}

interface Document extends Node, NodeSelector, MSEventAttachmentTarget, DocumentEvent, MSResourceMetadata, MSNodeExtensions, MSDocumentExtensions, GlobalEventHandlers {

    /**
      * Gets a reference to the root node of the document. 
      */
        documentElement: HTMLElement;
    /**
      * Retrieves the collection of user agents and versions declared in the X-UA-Compatible
      */
        compatible: MSCompatibleInfoCollection;
    /**
      * Fires when the user presses a key.
      * @param ev The keyboard event
      */
        onkeydown: (ev: KeyboardEvent) => any;
    /**
      * Fires when the user releases a key.
      * @param ev The keyboard event
      */
        onkeyup: (ev: KeyboardEvent) => any;
    /**
      * Gets the implementation object of the current document. 
      */
        implementation: DOMImplementation;
    /**
      * Fires when the user resets a form. 
      * @param ev The event.
      */
        onreset: (ev: Event) => any;
    /**
      * Retrieves a collection of all script objects in the document.
      */
        scripts: HTMLCollection;
    /**
      * Fires when the user presses the F1 key while the browser is the active window. 
      * @param ev The event.
      */
        onhelp: (ev: Event) => any;
    /** 
      * Fires on the target object when the user moves the mouse out of a valid drop target during a drag operation.
      * @param ev The drag event.
      */
        ondragleave: (ev: DragEvent) => any;
    /**
      * Gets or sets the character set used to encode the object.
      */
        charset: string;
    /**
      * Fires for an element just prior to setting focus on that element.
      * @param ev The focus event
      */
        onfocusin: (ev: FocusEvent) => any;
    /** 
      * Sets or gets the color of the links that the user has visited.
      */
        vlinkColor: string;
    /**
      * Occurs when the seek operation ends. 
      * @param ev The event.
      */
        onseeked: (ev: Event) => any;
        security: string;
    /**
      * Contains the title of the document.
      */
        title: string;
    /**
      * Retrieves a collection of namespace objects.
      */
        namespaces: MSNamespaceInfoCollection;
    /**
      * Gets the default character set from the current regional language settings.
      */
        defaultCharset: string;
    /**
      * Retrieves a collection of all embed objects in the document.
      */
        embeds: HTMLCollection;
    /**
      * Retrieves a collection of styleSheet objects representing the style sheets that correspond to each instance of a link or style object in the document.
      */
        styleSheets: StyleSheetList;
    /**
      * Retrieves a collection of all window objects defined by the given document or defined by the document associated with the given window.
      */
        frames: Window;
    /**
      * Occurs when the duration attribute is updated. 
      * @param ev The event.
      */
        ondurationchange: (ev: Event) => any;
    /**
      * Returns a reference to the collection of elements contained by the object.
      */
        all: HTMLCollection;
    /**
      * Retrieves a collection, in source order, of all form objects in the document.
      */
        forms: HTMLCollection;
    /** 
      * Fires when the object loses the input focus. 
      * @param ev The focus event.
      */
        onblur: (ev: FocusEvent) => any;
    /**
      * Sets or retrieves a value that indicates the reading order of the object. 
      */
        dir: string;
    /**
      * Occurs when the media element is reset to its initial state. 
      * @param ev The event.
      */
        onemptied: (ev: Event) => any;
    /**
      * Sets or gets a value that indicates whether the document can be edited.
      */
        designMode: string;
    /**
      * Occurs when the current playback position is moved. 
      * @param ev The event.
      */
        onseeking: (ev: Event) => any;
    /**
      * Fires when the activeElement is changed from the current object to another object in the parent document.
      * @param ev The UI Event
      */
        ondeactivate: (ev: UIEvent) => any;
    /**
      * Occurs when playback is possible, but would require further buffering. 
      * @param ev The event.
      */
        oncanplay: (ev: Event) => any;
    /**
      * Fires when the data set exposed by a data source object changes. 
      * @param ev The event.
      */
        ondatasetchanged: (ev: MSEventObj) => any;
    /**
      * Fires when rows are about to be deleted from the recordset.
      * @param ev The event 
      */
        onrowsdelete: (ev: MSEventObj) => any;
        Script: MSScriptHost;
    /**
      * Occurs when Internet Explorer begins looking for media data. 
      * @param ev The event.
      */
        onloadstart: (ev: Event) => any;
    /**
      * Gets the URL for the document, stripped of any character encoding.
      */
        URLUnencoded: string;
        defaultView: Window;
    /**
      * Fires when the user is about to make a control selection of the object.
      * @param ev The event.
      */
        oncontrolselect: (ev: MSEventObj) => any;
    /** 
      * Fires on the target element when the user drags the object to a valid drop target.
      * @param ev The drag event.
      */
        ondragenter: (ev: DragEvent) => any;
        onsubmit: (ev: Event) => any;
    /**
      * Returns the character encoding used to create the webpage that is loaded into the document object.
      */
        inputEncoding: string;
    /**
      * Gets the object that has the focus when the parent document has focus.
      */
        activeElement: Element;
    /**
      * Fires when the contents of the object or selection have changed. 
      * @param ev The event.
      */
        onchange: (ev: Event) => any;
    /**
      * Retrieves a collection of all a objects that specify the href property and all area objects in the document.
      */
        links: HTMLCollection;
    /**
      * Retrieves an autogenerated, unique identifier for the object. 
      */
        uniqueID: string;
    /**
      * Sets or gets the URL for the current document. 
      */
        URL: string;
    /**
      * Fires immediately before the object is set as the active element.
      * @param ev The event.
      */
        onbeforeactivate: (ev: UIEvent) => any;
        head: HTMLHeadElement;
        cookie: string;
        xmlEncoding: string;
        oncanplaythrough: (ev: Event) => any;
    /** 
      * Retrieves the document compatibility mode of the document.
      */
        documentMode: number;
        characterSet: string;
    /**
      * Retrieves a collection of all a objects that have a name and/or id property. Objects in this collection are in HTML source order.
      */
        anchors: HTMLCollection;
        onbeforeupdate: (ev: MSEventObj) => any;
    /** 
      * Fires to indicate that all data is available from the data source object. 
      * @param ev The event.
      */
        ondatasetcomplete: (ev: MSEventObj) => any;
        plugins: HTMLCollection;
    /**
      * Occurs if the load operation has been intentionally halted. 
      * @param ev The event.
      */
        onsuspend: (ev: Event) => any;
    /**
      * Gets the root svg element in the document hierarchy.
      */
        rootElement: SVGSVGElement;
    /**
      * Retrieves a value that indicates the current state of the object.
      */
        readyState: string;
    /**
      * Gets the URL of the location that referred the user to the current page.
      */
        referrer: string;
    /**
      * Sets or gets the color of all active links in the document.
      */
        alinkColor: string;
    /**
      * Fires on a databound object when an error occurs while updating the associated data in the data source object. 
      * @param ev The event.
      */
        onerrorupdate: (ev: MSEventObj) => any;
    /**
      * Gets a reference to the container object of the window.
      */
        parentWindow: Window;
    /**
      * Fires when the user moves the mouse pointer outside the boundaries of the object. 
      * @param ev The mouse event.
      */
        onmouseout: (ev: MouseEvent) => any;
    /**
      * Occurs when a user clicks a button in a Thumbnail Toolbar of a webpage running in Site Mode.
      * @param ev The event.
      */
        onmsthumbnailclick: (ev: MSSiteModeEvent) => any;
    /**
      * Fires when the wheel button is rotated. 
      * @param ev The mouse event
      */
        onmousewheel: (ev: MouseWheelEvent) => any;
    /**
      * Occurs when the volume is changed, or playback is muted or unmuted.
      * @param ev The event.
      */
        onvolumechange: (ev: Event) => any;
    /** 
      * Fires when data changes in the data provider.
      * @param ev The event.
      */
        oncellchange: (ev: MSEventObj) => any;
    /**
      * Fires just before the data source control changes the current row in the object. 
      * @param ev The event.
      */
        onrowexit: (ev: MSEventObj) => any;
    /**
      * Fires just after new rows are inserted in the current recordset.
      * @param ev The event.
      */
        onrowsinserted: (ev: MSEventObj) => any;
    /**
      * Gets or sets the version attribute specified in the declaration of an XML document.
      */
        xmlVersion: string;
        msCapsLockWarningOff: boolean;
    /**
      * Fires when a property changes on the object.
      * @param ev The event.
      */
        onpropertychange: (ev: MSEventObj) => any;
    /**
      * Fires on the source object when the user releases the mouse at the close of a drag operation.
      * @param ev The event.
      */
        ondragend: (ev: DragEvent) => any;
    /**
      * Gets an object representing the document type declaration associated with the current document. 
      */
        doctype: DocumentType;
    /**
      * Fires on the target element continuously while the user drags the object over a valid drop target.
      * @param ev The event.
      */
        ondragover: (ev: DragEvent) => any;
    /**
      * Deprecated. Sets or retrieves a value that indicates the background color behind the object. 
      */
        bgColor: string;
    /**
      * Fires on the source object when the user starts to drag a text selection or selected object. 
      * @param ev The event.
      */
        ondragstart: (ev: DragEvent) => any;
    /**
      * Fires when the user releases a mouse button while the mouse is over the object. 
      * @param ev The mouse event.
      */
        onmouseup: (ev: MouseEvent) => any;
    /**
      * Fires on the source object continuously during a drag operation.
      * @param ev The event.
      */
        ondrag: (ev: DragEvent) => any;
    /**
      * Fires when the user moves the mouse pointer into the object.
      * @param ev The mouse event.
      */
        onmouseover: (ev: MouseEvent) => any;
    /**
      * Sets or gets the color of the document links. 
      */
        linkColor: string;
    /**
      * Occurs when playback is paused.
      * @param ev The event.
      */
        onpause: (ev: Event) => any;
    /**
      * Fires when the user clicks the object with either mouse button. 
      * @param ev The mouse event.
      */
        onmousedown: (ev: MouseEvent) => any;
    /**
      * Fires when the user clicks the left mouse button on the object
      * @param ev The mouse event.
      */
        onclick: (ev: MouseEvent) => any;
    /**
      * Occurs when playback stops because the next frame of a video resource is not available. 
      * @param ev The event.
      */
        onwaiting: (ev: Event) => any;
    /**
      * Fires when the user clicks the Stop button or leaves the Web page.
      * @param ev The event.
      */
        onstop: (ev: Event) => any;
    /**
      * Occurs when an item is removed from a Jump List of a webpage running in Site Mode. 
      * @param ev The event.
      */
        onmssitemodejumplistitemremoved: (ev: MSSiteModeEvent) => any;
    /**
      * Retrieves a collection of all applet objects in the document.
      */
        applets: HTMLCollection;
    /**
      * Specifies the beginning and end of the document body.
      */
        body: HTMLElement;
    /**
      * Sets or gets the security domain of the document. 
      */
        domain: string;
        xmlStandalone: boolean;
    /**
      * Represents the active selection, which is a highlighted block of text or other elements in the document that a user or a script can carry out some action on.
      */
        selection: MSSelection;
    /**
      * Occurs when the download has stopped. 
      * @param ev The event.
      */
        onstalled: (ev: Event) => any;
    /**
      * Fires when the user moves the mouse over the object. 
      * @param ev The mouse event.
      */
        onmousemove: (ev: MouseEvent) => any;
    /**
      * Fires before an object contained in an editable element enters a UI-activated state or when an editable container object is control selected.
      * @param ev The event.
      */
        onbeforeeditfocus: (ev: MSEventObj) => any;
    /**
      * Occurs when the playback rate is increased or decreased. 
      * @param ev The event.
      */
        onratechange: (ev: Event) => any;
    /**
      * Occurs to indicate progress while downloading media data. 
      * @param ev The event.
      */
        onprogress: (ev: ProgressEvent) => any;
    /**
      * Fires when the user double-clicks the object.
      * @param ev The mouse event.
      */
        ondblclick: (ev: MouseEvent) => any;
    /**
      * Fires when the user clicks the right mouse button in the client area, opening the context menu. 
      * @param ev The mouse event.
      */
        oncontextmenu: (ev: MouseEvent) => any;
    /**
      * Occurs when the duration and dimensions of the media have been determined.
      * @param ev The event.
      */
        onloadedmetadata: (ev: Event) => any;
        media: string;
    /**
      * Fires when an error occurs during object loading.
      * @param ev The event.
      */
        onerror: (ev: ErrorEvent) => any;
    /**
      * Occurs when the play method is requested. 
      * @param ev The event.
      */
        onplay: (ev: Event) => any;
        onafterupdate: (ev: MSEventObj) => any;
    /**
      * Occurs when the audio or video has started playing. 
      * @param ev The event.
      */
        onplaying: (ev: Event) => any;
    /**
      * Retrieves a collection, in source order, of img objects in the document.
      */
        images: HTMLCollection;
    /**
      * Contains information about the current URL. 
      */
        location: Location;
    /**
      * Fires when the user aborts the download.
      * @param ev The event.
      */
        onabort: (ev: UIEvent) => any;
    /**
      * Fires for the current element with focus immediately after moving focus to another element. 
      * @param ev The event.
      */
        onfocusout: (ev: FocusEvent) => any;
    /**
      * Fires when the selection state of a document changes.
      * @param ev The event.
      */
        onselectionchange: (ev: Event) => any;
    /**
      * Fires when a local DOM Storage area is written to disk.
      * @param ev The event.
      */
        onstoragecommit: (ev: StorageEvent) => any;
    /**
      * Fires periodically as data arrives from data source objects that asynchronously transmit their data. 
      * @param ev The event.
      */
        ondataavailable: (ev: MSEventObj) => any;
    /**
      * Fires when the state of the object has changed.
      * @param ev The event
      */
        onreadystatechange: (ev: Event) => any;
    /**
      * Gets the date that the page was last modified, if the page supplies one. 
      */
        lastModified: string;
    /**
      * Fires when the user presses an alphanumeric key.
      * @param ev The event.
      */
        onkeypress: (ev: KeyboardEvent) => any;
    /**
      * Occurs when media data is loaded at the current playback position. 
      * @param ev The event.
      */
        onloadeddata: (ev: Event) => any;
    /**
      * Fires immediately before the activeElement is changed from the current object to another object in the parent document.
      * @param ev The event.
      */
        onbeforedeactivate: (ev: UIEvent) => any;
    /**
      * Fires when the object is set as the active element.
      * @param ev The event.
      */
        onactivate: (ev: UIEvent) => any;
        onselectstart: (ev: Event) => any;
    /**
      * Fires when the object receives focus. 
      * @param ev The event.
      */
        onfocus: (ev: FocusEvent) => any;
    /**
      * Sets or gets the foreground (text) color of the document.
      */
        fgColor: string;
    /**
      * Occurs to indicate the current playback position.
      * @param ev The event.
      */
        ontimeupdate: (ev: Event) => any;
    /**
      * Fires when the current selection changes.
      * @param ev The event.
      */
        onselect: (ev: UIEvent) => any;
        ondrop: (ev: DragEvent) => any;
    /**
      * Occurs when the end of playback is reached. 
      * @param ev The event
      */
        onended: (ev: Event) => any;
    /**
      * Gets a value that indicates whether standards-compliant mode is switched on for the object.
      */
        compatMode: string;
    /**
      * Fires when the user repositions the scroll box in the scroll bar on the object. 
      * @param ev The event.
      */
        onscroll: (ev: UIEvent) => any;
    /**
      * Fires to indicate that the current row has changed in the data source and new data values are available on the object. 
      * @param ev The event.
      */
        onrowenter: (ev: MSEventObj) => any;
    /**
      * Fires immediately after the browser loads the object. 
      * @param ev The event.
      */
        onload: (ev: Event) => any;
        oninput: (ev: Event) => any;
        onmspointerdown: (ev: any) => any;
        msHidden: boolean;
        msVisibilityState: string;
        onmsgesturedoubletap: (ev: any) => any;
        visibilityState: string;
        onmsmanipulationstatechanged: (ev: any) => any;
        onmspointerhover: (ev: any) => any;
        onmscontentzoom: (ev: MSEventObj) => any;
        onmspointermove: (ev: any) => any;
        onmsgesturehold: (ev: any) => any;
        onmsgesturechange: (ev: any) => any;
        onmsgesturestart: (ev: any) => any;
        onmspointercancel: (ev: any) => any;
        onmsgestureend: (ev: any) => any;
        onmsgesturetap: (ev: any) => any;
        onmspointerout: (ev: any) => any;
        onmsinertiastart: (ev: any) => any;
        msCSSOMElementFloatMetrics: boolean;
        onmspointerover: (ev: any) => any;
        hidden: boolean;
        onmspointerup: (ev: any) => any;
        msFullscreenEnabled: boolean;
        onmsfullscreenerror: (ev: any) => any;
        onmspointerenter: (ev: any) => any;
        msFullscreenElement: Element;
        onmsfullscreenchange: (ev: any) => any;
        onmspointerleave: (ev: any) => any;
    /**
      * Returns a reference to the first object with the specified value of the ID or NAME attribute.
      * @param elementId String that specifies the ID value. Case-insensitive.
      */
        getElementById(elementId: string): HTMLElement;
    /**
      * Returns the current value of the document, range, or current selection for the given command.
      * @param commandId String that specifies a command identifier.
      */
        queryCommandValue(commandId: string): string;
        adoptNode(source: Node): Node;
    /**
      * Returns a Boolean value that indicates whether the specified command is in the indeterminate state.
      * @param commandId String that specifies a command identifier.
      */
        queryCommandIndeterm(commandId: string): boolean;
        getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
        createProcessingInstruction(target: string, data: string): ProcessingInstruction;
    /**
      * Executes a command on the current document, current selection, or the given range.
      * @param commandId String that specifies the command to execute. This command can be any of the command identifiers that can be executed in script.
      * @param showUI Display the user interface, defaults to false.
      * @param value Value to assign.
      */
        execCommand(commandId: string, showUI?: boolean, value?: any): boolean;
    /**
      * Returns the element for the specified x coordinate and the specified y coordinate. 
      * @param x The x-offset
      * @param y The y-offset
      */
        elementFromPoint(x: number, y: number): Element;
        createCDATASection(data: string): CDATASection;
    /**
      * Retrieves the string associated with a command.
      * @param commandId String that contains the identifier of a command. This can be any command identifier given in the list of Command Identifiers. 
      */
        queryCommandText(commandId: string): string;
    /**
      * Writes one or more HTML expressions to a document in the specified window. 
      * @param content Specifies the text and HTML tags to write.
      */
        write(...content: string[]): void;
    /**
      * Allows updating the print settings for the page.
      */
        updateSettings(): void;
    /**
      * Creates an instance of the element for the specified tag.
      * @param tagName The name of an element.
      */
        createElement(tagName: "a"): HTMLAnchorElement;
        createElement(tagName: "abbr"): HTMLPhraseElement;
        createElement(tagName: "acronym"): HTMLPhraseElement;
        createElement(tagName: "address"): HTMLBlockElement;
        createElement(tagName: "applet"): HTMLAppletElement;
        createElement(tagName: "area"): HTMLAreaElement;
        createElement(tagName: "article"): HTMLElement;
        createElement(tagName: "aside"): HTMLElement;
        createElement(tagName: "audio"): HTMLAudioElement;
        createElement(tagName: "b"): HTMLPhraseElement;
        createElement(tagName: "base"): HTMLBaseElement;
        createElement(tagName: "basefont"): HTMLBaseFontElement;
        createElement(tagName: "bdo"): HTMLPhraseElement;
        createElement(tagName: "bgsound"): HTMLBGSoundElement;
        createElement(tagName: "big"): HTMLPhraseElement;
        createElement(tagName: "blockquote"): HTMLBlockElement;
        createElement(tagName: "body"): HTMLBodyElement;
        createElement(tagName: "br"): HTMLBRElement;
        createElement(tagName: "button"): HTMLButtonElement;
        createElement(tagName: "canvas"): HTMLCanvasElement;
        createElement(tagName: "caption"): HTMLTableCaptionElement;
        createElement(tagName: "center"): HTMLBlockElement;
        createElement(tagName: "cite"): HTMLPhraseElement;
        createElement(tagName: "code"): HTMLPhraseElement;
        createElement(tagName: "col"): HTMLTableColElement;
        createElement(tagName: "colgroup"): HTMLTableColElement;
        createElement(tagName: "datalist"): HTMLDataListElement;
        createElement(tagName: "dd"): HTMLDDElement;
        createElement(tagName: "del"): HTMLModElement;
        createElement(tagName: "dfn"): HTMLPhraseElement;
        createElement(tagName: "dir"): HTMLDirectoryElement;
        createElement(tagName: "div"): HTMLDivElement;
        createElement(tagName: "dl"): HTMLDListElement;
        createElement(tagName: "dt"): HTMLDTElement;
        createElement(tagName: "em"): HTMLPhraseElement;
        createElement(tagName: "embed"): HTMLEmbedElement;
        createElement(tagName: "fieldset"): HTMLFieldSetElement;
        createElement(tagName: "figcaption"): HTMLElement;
        createElement(tagName: "figure"): HTMLElement;
        createElement(tagName: "font"): HTMLFontElement;
        createElement(tagName: "footer"): HTMLElement;
        createElement(tagName: "form"): HTMLFormElement;
        createElement(tagName: "frame"): HTMLFrameElement;
        createElement(tagName: "frameset"): HTMLFrameSetElement;
        createElement(tagName: "h1"): HTMLHeadingElement;
        createElement(tagName: "h2"): HTMLHeadingElement;
        createElement(tagName: "h3"): HTMLHeadingElement;
        createElement(tagName: "h4"): HTMLHeadingElement;
        createElement(tagName: "h5"): HTMLHeadingElement;
        createElement(tagName: "h6"): HTMLHeadingElement;
        createElement(tagName: "head"): HTMLHeadElement;
        createElement(tagName: "header"): HTMLElement;
        createElement(tagName: "hgroup"): HTMLElement;
        createElement(tagName: "hr"): HTMLHRElement;
        createElement(tagName: "html"): HTMLHtmlElement;
        createElement(tagName: "i"): HTMLPhraseElement;
        createElement(tagName: "iframe"): HTMLIFrameElement;
        createElement(tagName: "img"): HTMLImageElement;
        createElement(tagName: "input"): HTMLInputElement;
        createElement(tagName: "ins"): HTMLModElement;
        createElement(tagName: "isindex"): HTMLIsIndexElement;
        createElement(tagName: "kbd"): HTMLPhraseElement;
        createElement(tagName: "keygen"): HTMLBlockElement;
        createElement(tagName: "label"): HTMLLabelElement;
        createElement(tagName: "legend"): HTMLLegendElement;
        createElement(tagName: "li"): HTMLLIElement;
        createElement(tagName: "link"): HTMLLinkElement;
        createElement(tagName: "listing"): HTMLBlockElement;
        createElement(tagName: "map"): HTMLMapElement;
        createElement(tagName: "mark"): HTMLElement;
        createElement(tagName: "marquee"): HTMLMarqueeElement;
        createElement(tagName: "menu"): HTMLMenuElement;
        createElement(tagName: "meta"): HTMLMetaElement;
        createElement(tagName: "nav"): HTMLElement;
        createElement(tagName: "nextid"): HTMLNextIdElement;
        createElement(tagName: "nobr"): HTMLPhraseElement;
        createElement(tagName: "noframes"): HTMLElement;
        createElement(tagName: "noscript"): HTMLElement;
        createElement(tagName: "object"): HTMLObjectElement;
        createElement(tagName: "ol"): HTMLOListElement;
        createElement(tagName: "optgroup"): HTMLOptGroupElement;
        createElement(tagName: "option"): HTMLOptionElement;
        createElement(tagName: "p"): HTMLParagraphElement;
        createElement(tagName: "param"): HTMLParamElement;
        createElement(tagName: "plaintext"): HTMLBlockElement;
        createElement(tagName: "pre"): HTMLPreElement;
        createElement(tagName: "progress"): HTMLProgressElement;
        createElement(tagName: "q"): HTMLQuoteElement;
        createElement(tagName: "rt"): HTMLPhraseElement;
        createElement(tagName: "ruby"): HTMLPhraseElement;
        createElement(tagName: "s"): HTMLPhraseElement;
        createElement(tagName: "samp"): HTMLPhraseElement;
        createElement(tagName: "script"): HTMLScriptElement;
        createElement(tagName: "section"): HTMLElement;
        createElement(tagName: "select"): HTMLSelectElement;
        createElement(tagName: "small"): HTMLPhraseElement;
        createElement(tagName: "SOURCE"): HTMLSourceElement;
        createElement(tagName: "span"): HTMLSpanElement;
        createElement(tagName: "strike"): HTMLPhraseElement;
        createElement(tagName: "strong"): HTMLPhraseElement;
        createElement(tagName: "style"): HTMLStyleElement;
        createElement(tagName: "sub"): HTMLPhraseElement;
        createElement(tagName: "sup"): HTMLPhraseElement;
        createElement(tagName: "table"): HTMLTableElement;
        createElement(tagName: "tbody"): HTMLTableSectionElement;
        createElement(tagName: "td"): HTMLTableDataCellElement;
        createElement(tagName: "textarea"): HTMLTextAreaElement;
        createElement(tagName: "tfoot"): HTMLTableSectionElement;
        createElement(tagName: "th"): HTMLTableHeaderCellElement;
        createElement(tagName: "thead"): HTMLTableSectionElement;
        createElement(tagName: "title"): HTMLTitleElement;
        createElement(tagName: "tr"): HTMLTableRowElement;
        createElement(tagName: "track"): HTMLTrackElement;
        createElement(tagName: "tt"): HTMLPhraseElement;
        createElement(tagName: "u"): HTMLPhraseElement;
        createElement(tagName: "ul"): HTMLUListElement;
        createElement(tagName: "var"): HTMLPhraseElement;
        createElement(tagName: "video"): HTMLVideoElement;
        createElement(tagName: "wbr"): HTMLElement;
        createElement(tagName: "x-ms-webview"): MSHTMLWebViewElement;
        createElement(tagName: "xmp"): HTMLBlockElement;
        createElement(tagName: string): HTMLElement;
    /**
      * Removes mouse capture from the object in the current document.
      */
        releaseCapture(): void;
    /**
      * Writes one or more HTML expressions, followed by a carriage return, to a document in the specified window. 
      * @param content The text and HTML tags to write.
      */
        writeln(...content: string[]): void;
        createElementNS(namespaceURI: string, qualifiedName: string): Element;
    /**
      * Opens a new window and loads a document specified by a given URL. Also, opens a new window that uses the url parameter and the name parameter to collect the output of the write method and the writeln method.
      * @param url Specifies a MIME type for the document.
      * @param name Specifies the name of the window. This name is used as the value for the TARGET attribute on a form or an anchor element.
      * @param features Contains a list of items separated by commas. Each item consists of an option and a value, separated by an equals sign (for example, "fullscreen=yes, toolbar=yes"). The following values are supported.
      * @param replace Specifies whether the existing entry for the document is replaced in the history list.
      */
        open(url?: string, name?: string, features?: string, replace?: boolean): any;
    /**
      * Returns a Boolean value that indicates whether the current command is supported on the current range.
      * @param commandId Specifies a command identifier.
      */
        queryCommandSupported(commandId: string): boolean;
    /**
      * Creates a TreeWalker object that you can use to traverse filtered lists of nodes or elements in a document.
      * @param root The root element or node to start traversing on.
      * @param whatToShow The type of nodes or elements to appear in the node list. For more information, see whatToShow.
      * @param filter A custom NodeFilter function to use.
      * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
      */
        createTreeWalker(root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean): TreeWalker;
        createAttributeNS(namespaceURI: string, qualifiedName: string): Attr;
    /** 
      * Returns a Boolean value that indicates whether a specified command can be successfully executed using execCommand, given the current state of the document.
      * @param commandId Specifies a command identifier.
      */
        queryCommandEnabled(commandId: string): boolean;
    /**
      * Causes the element to receive the focus and executes the code specified by the onfocus event.
      */
        focus(): void;
    /**
      * Closes an output stream and forces the sent data to display.
      */
        close(): void;
        getElementsByClassName(classNames: string): NodeList;
        importNode(importedNode: Node, deep: boolean): Node;
    /**
      *  Returns an empty range object that has both of its boundary points positioned at the beginning of the document. 
      */
        createRange(): Range;
    /**
      * Fires a specified event on the object.
      * @param eventName Specifies the name of the event to fire.
      * @param eventObj Object that specifies the event object from which to obtain event object properties.
      */
        fireEvent(eventName: string, eventObj?: any): boolean;
    /**
      * Creates a comment object with the specified data.
      * @param data Sets the comment object's data.
      */
        createComment(data: string): Comment;
    /**
      * Retrieves a collection of objects based on the specified element name.
      * @param name Specifies the name of an element.
      */
        getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
        getElementsByTagName(name: "abbr"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "acronym"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "address"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "applet"): NodeListOf<HTMLAppletElement>;
        getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;
        getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
        getElementsByTagName(name: "b"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;
        getElementsByTagName(name: "basefont"): NodeListOf<HTMLBaseFontElement>;
        getElementsByTagName(name: "bdo"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "bgsound"): NodeListOf<HTMLBGSoundElement>;
        getElementsByTagName(name: "big"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "blockquote"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
        getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;
        getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
        getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
        getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;
        getElementsByTagName(name: "center"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "cite"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "code"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;
        getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;
        getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;
        getElementsByTagName(name: "dd"): NodeListOf<HTMLDDElement>;
        getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;
        getElementsByTagName(name: "dfn"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "dir"): NodeListOf<HTMLDirectoryElement>;
        getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
        getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;
        getElementsByTagName(name: "dt"): NodeListOf<HTMLDTElement>;
        getElementsByTagName(name: "em"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;
        getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;
        getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "font"): NodeListOf<HTMLFontElement>;
        getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
        getElementsByTagName(name: "frame"): NodeListOf<HTMLFrameElement>;
        getElementsByTagName(name: "frameset"): NodeListOf<HTMLFrameSetElement>;
        getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
        getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;
        getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
        getElementsByTagName(name: "i"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
        getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
        getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;
        getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;
        getElementsByTagName(name: "isindex"): NodeListOf<HTMLIsIndexElement>;
        getElementsByTagName(name: "kbd"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "keygen"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;
        getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;
        getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;
        getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;
        getElementsByTagName(name: "listing"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;
        getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "marquee"): NodeListOf<HTMLMarqueeElement>;
        getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;
        getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;
        getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "nextid"): NodeListOf<HTMLNextIdElement>;
        getElementsByTagName(name: "nobr"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "noframes"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;
        getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;
        getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;
        getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;
        getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;
        getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;
        getElementsByTagName(name: "plaintext"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;
        getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;
        getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;
        getElementsByTagName(name: "rt"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "ruby"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "s"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "samp"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
        getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;
        getElementsByTagName(name: "small"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "SOURCE"): NodeListOf<HTMLSourceElement>;
        getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;
        getElementsByTagName(name: "strike"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "strong"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;
        getElementsByTagName(name: "sub"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "sup"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;
        getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;
        getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;
        getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;
        getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;
        getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;
        getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;
        getElementsByTagName(name: "tt"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "u"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;
        getElementsByTagName(name: "var"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
        getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "x-ms-webview"): NodeListOf<MSHTMLWebViewElement>;
        getElementsByTagName(name: "xmp"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: string): NodeList;
    /**
      * Creates a new document.
      */
        createDocumentFragment(): DocumentFragment;
    /**
      * Creates a style sheet for the document. 
      * @param href Specifies how to add the style sheet to the document. If a file name is specified for the URL, the style information is added as a link object. If the URL contains style information, it is added to the style object.
      * @param index Specifies the index that indicates where the new style sheet is inserted in the styleSheets collection. The default is to insert the new style sheet at the end of the collection.
      */
        createStyleSheet(href?: string, index?: number): CSSStyleSheet;
    /**
      * Gets a collection of objects based on the value of the NAME or ID attribute.
      * @param elementName Gets a collection of objects based on the value of the NAME or ID attribute.
      */
        getElementsByName(elementName: string): NodeList;
    /**
      * Returns a Boolean value that indicates the current state of the command.
      * @param commandId String that specifies a command identifier.
      */
        queryCommandState(commandId: string): boolean;
    /**
      * Gets a value indicating whether the object currently has focus.
      */
        hasFocus(): boolean;
    /**
      * Displays help information for the given command identifier.
      * @param commandId Displays help information for the given command identifier.
      */
        execCommandShowHelp(commandId: string): boolean;
    /**
      * Creates an attribute object with a specified name.
      * @param name String that sets the attribute object's name.
      */
        createAttribute(name: string): Attr;
    /**
      * Creates a text string from the specified value. 
      * @param data String that specifies the nodeValue property of the text node.
      */
        createTextNode(data: string): Text;
    /**
      * Creates a NodeIterator object that you can use to traverse filtered lists of nodes or elements in a document. 
      * @param root The root element or node to start traversing on.
      * @param whatToShow The type of nodes or elements to appear in the node list
      * @param filter A custom NodeFilter function to use. For more information, see filter. Use null for no filter.
      * @param entityReferenceExpansion A flag that specifies whether entity reference nodes are expanded.
      */
        createNodeIterator(root: Node, whatToShow: number, filter: NodeFilter, entityReferenceExpansion: boolean): NodeIterator;
    /**
      * Generates an event object to pass event context information when you use the fireEvent method.
      * @param eventObj An object that specifies an existing event object on which to base the new object.
      */
        createEventObject(eventObj?: any): MSEventObj;
    /**
      * Returns an object representing the current selection of the document that is loaded into the object displaying a webpage.
      */
        getSelection(): Selection;
        msElementsFromPoint(x: number, y: number): NodeList;
        msElementsFromRect(left: number, top: number, width: number, height: number): NodeList;
        clear(): void;
        msExitFullscreen(): void;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "msthumbnailclick", listener: (ev: MSSiteModeEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "stop", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mssitemodejumplistitemremoved", listener: (ev: MSSiteModeEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "selectionchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "storagecommit", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msfullscreenerror", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msfullscreenchange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var Document: {
        prototype: Document;
        new(): Document;
};
interface Console {

        info(message?: any, ...optionalParams: any[]): void;
        warn(message?: any, ...optionalParams: any[]): void;
        error(message?: any, ...optionalParams: any[]): void;
        log(message?: any, ...optionalParams: any[]): void;
        profile(reportName?: string): void;
        assert(test?: boolean, message?: string, ...optionalParams: any[]): void;
        msIsIndependentlyComposed(element: Element): boolean;
        clear(): void;
        dir(value?: any, ...optionalParams: any[]): void;
        profileEnd(): void;
        count(countTitle?: string): void;
        groupEnd(): void;
        time(timerName?: string): void;
        timeEnd(timerName?: string): void;
        trace(): void;
        group(groupTitle?: string): void;
        dirxml(value: any): void;
        debug(message?: string, ...optionalParams: any[]): void;
        groupCollapsed(groupTitle?: string): void;
        select(element: Element): void;

}

declare  var Console: {
        prototype: Console;
        new(): Console;
};
interface MSEventObj extends Event {

        nextPage: string;
        keyCode: number;
        toElement: Element;
        returnValue: any;
        dataFld: string;
        y: number;
        dataTransfer: DataTransfer;
        propertyName: string;
        url: string;
        offsetX: number;
        recordset: any;
        screenX: number;
        buttonID: number;
        wheelDelta: number;
        reason: number;
        origin: string;
        data: string;
        srcFilter: any;
        boundElements: HTMLCollection;
        cancelBubble: boolean;
        altLeft: boolean;
        behaviorCookie: number;
        bookmarks: BookmarkCollection;
        type: string;
        repeat: boolean;
        srcElement: Element;
        source: Window;
        fromElement: Element;
        offsetY: number;
        x: number;
        behaviorPart: number;
        qualifier: string;
        altKey: boolean;
        ctrlKey: boolean;
        clientY: number;
        shiftKey: boolean;
        shiftLeft: boolean;
        contentOverflow: boolean;
        screenY: number;
        ctrlLeft: boolean;
        button: number;
        srcUrn: string;
        clientX: number;
        actionURL: string;
        getAttribute(strAttributeName: string, lFlags?: number): any;
        setAttribute(strAttributeName: string, AttributeValue: any, lFlags?: number): void;
        removeAttribute(strAttributeName: string, lFlags?: number): boolean;

}

declare  var MSEventObj: {
        prototype: MSEventObj;
        new(): MSEventObj;
};
declare class HTMLCanvasElement extends HTMLElement {

    /**
      * Gets or sets the width of a canvas element on a document.
      */
        width: number;
    /**
      * Gets or sets the height of a canvas element on a document.
      */
        height: number;
    /**
      * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
      * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
      */
        getContext(contextId: "2d"): CanvasRenderingContext2D;
    /**
      * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
      * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
      */
        getContext(contextId: "experimental-webgl"): WebGLRenderingContext;
    /**
      * Returns an object that provides methods and properties for drawing and manipulating images and graphics on a canvas element in a document. A context object includes information about colors, line widths, fonts, and other graphic parameters that can be drawn on a canvas.
      * @param contextId The identifier (ID) of the type of canvas to create. Internet Explorer 9 and Internet Explorer 10 support only a 2-D context using canvas.getContext("2d"); IE11 Preview also supports 3-D or WebGL context using canvas.getContext("experimental-webgl");
      */
        getContext(contextId: string, ...args: any[]): any;
    /**
      * Returns the content of the current canvas as an image that you can use as a source for another canvas or an HTML element.
      * @param type The standard MIME type for the image format to return. If you do not specify this parameter, the default value is a PNG format image.
      */
        toDataURL(type?: string, ...args: any[]): string;
    /**
      * Returns a blob object encoded as a Portable Network Graphics (PNG) format from a canvas image or drawing.
      */
        msToBlob(): Blob;
}

interface Window extends EventTarget, MSEventAttachmentTarget, WindowLocalStorage, MSWindowExtensions, WindowSessionStorage, WindowTimers, WindowBase64, IDBEnvironment, WindowConsole, GlobalEventHandlers {

        ondragend: (ev: DragEvent) => any;
        onkeydown: (ev: KeyboardEvent) => any;
        ondragover: (ev: DragEvent) => any;
        onkeyup: (ev: KeyboardEvent) => any;
        onreset: (ev: Event) => any;
        onmouseup: (ev: MouseEvent) => any;
        ondragstart: (ev: DragEvent) => any;
        ondrag: (ev: DragEvent) => any;
        screenX: number;
        onmouseover: (ev: MouseEvent) => any;
        ondragleave: (ev: DragEvent) => any;
        history: History;
        pageXOffset: number;
        name: string;
        onafterprint: (ev: Event) => any;
        onpause: (ev: Event) => any;
        onbeforeprint: (ev: Event) => any;
        top: Window;
        onmousedown: (ev: MouseEvent) => any;
        onseeked: (ev: Event) => any;
        opener: Window;
        onclick: (ev: MouseEvent) => any;
        innerHeight: number;
        onwaiting: (ev: Event) => any;
        ononline: (ev: Event) => any;
        ondurationchange: (ev: Event) => any;
        frames: Window;
        onblur: (ev: FocusEvent) => any;
        onemptied: (ev: Event) => any;
        onseeking: (ev: Event) => any;
        oncanplay: (ev: Event) => any;
        outerWidth: number;
        onstalled: (ev: Event) => any;
        onmousemove: (ev: MouseEvent) => any;
        innerWidth: number;
        onoffline: (ev: Event) => any;
        length: number;
        screen: Screen;
        onbeforeunload: (ev: BeforeUnloadEvent) => any;
        onratechange: (ev: Event) => any;
        onstorage: (ev: StorageEvent) => any;
        onloadstart: (ev: Event) => any;
        ondragenter: (ev: DragEvent) => any;
        onsubmit: (ev: Event) => any;
        self: Window;
        document: Document;
        onprogress: (ev: ProgressEvent) => any;
        ondblclick: (ev: MouseEvent) => any;
        pageYOffset: number;
        oncontextmenu: (ev: MouseEvent) => any;
        onchange: (ev: Event) => any;
        onloadedmetadata: (ev: Event) => any;
        onplay: (ev: Event) => any;
        onerror: ErrorEventHandler;
        onplaying: (ev: Event) => any;
        parent: Window;
        location: Location;
        oncanplaythrough: (ev: Event) => any;
        onabort: (ev: UIEvent) => any;
        onreadystatechange: (ev: Event) => any;
        outerHeight: number;
        onkeypress: (ev: KeyboardEvent) => any;
        frameElement: Element;
        onloadeddata: (ev: Event) => any;
        onsuspend: (ev: Event) => any;
        window: Window;
        onfocus: (ev: FocusEvent) => any;
        onmessage: (ev: MessageEvent) => any;
        ontimeupdate: (ev: Event) => any;
        onresize: (ev: UIEvent) => any;
        onselect: (ev: UIEvent) => any;
        navigator: Navigator;
        styleMedia: StyleMedia;
        ondrop: (ev: DragEvent) => any;
        onmouseout: (ev: MouseEvent) => any;
        onended: (ev: Event) => any;
        onhashchange: (ev: Event) => any;
        onunload: (ev: Event) => any;
        onscroll: (ev: UIEvent) => any;
        screenY: number;
        onmousewheel: (ev: MouseWheelEvent) => any;
        onload: (ev: Event) => any;
        onvolumechange: (ev: Event) => any;
        oninput: (ev: Event) => any;
        performance: Performance;
        onmspointerdown: (ev: any) => any;
        animationStartTime: number;
        onmsgesturedoubletap: (ev: any) => any;
        onmspointerhover: (ev: any) => any;
        onmsgesturehold: (ev: any) => any;
        onmspointermove: (ev: any) => any;
        onmsgesturechange: (ev: any) => any;
        onmsgesturestart: (ev: any) => any;
        onmspointercancel: (ev: any) => any;
        onmsgestureend: (ev: any) => any;
        onmsgesturetap: (ev: any) => any;
        onmspointerout: (ev: any) => any;
        msAnimationStartTime: number;
        applicationCache: ApplicationCache;
        onmsinertiastart: (ev: any) => any;
        onmspointerover: (ev: any) => any;
        onpopstate: (ev: PopStateEvent) => any;
        onmspointerup: (ev: any) => any;
        onpageshow: (ev: PageTransitionEvent) => any;
        ondevicemotion: (ev: DeviceMotionEvent) => any;
        devicePixelRatio: number;
        msCrypto: Crypto;
        ondeviceorientation: (ev: DeviceOrientationEvent) => any;
        doNotTrack: string;
        onmspointerenter: (ev: any) => any;
        onpagehide: (ev: PageTransitionEvent) => any;
        onmspointerleave: (ev: any) => any;
        alert(message?: any): void;
        scroll(x?: number, y?: number): void;
        focus(): void;
        scrollTo(x?: number, y?: number): void;
        print(): void;
        prompt(message?: string, _default?: string): string;
        toString(): string;
        open(url?: string, target?: string, features?: string, replace?: boolean): Window;
        scrollBy(x?: number, y?: number): void;
        confirm(message?: string): boolean;
        close(): void;
        postMessage(message: any, targetOrigin: string, ports?: any): void;
        showModalDialog(url?: string, argument?: any, options?: any): any;
        blur(): void;
        getSelection(): Selection;
        getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
        msCancelRequestAnimationFrame(handle: number): void;
        matchMedia(mediaQuery: string): MediaQueryList;
        cancelAnimationFrame(handle: number): void;
        msIsStaticHTML(html: string): boolean;
        msMatchMedia(mediaQuery: string): MediaQueryList;
        requestAnimationFrame(callback: FrameRequestCallback): number;
        msRequestAnimationFrame(callback: FrameRequestCallback): number;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var Window: {
        prototype: Window;
        new(): Window;
};
interface HTMLCollection extends MSHTMLCollectionExtensions {

    /**
      * Sets or retrieves the number of objects in a collection.
      */
        length: number;
    /**
      * Retrieves an object from various collections.
      */
        item(nameOrIndex?: any, optionalIndex?: any): Element;
    /**
      * Retrieves a select object or an object from an options collection.
      */
        namedItem(name: string): Element;
    // [name: string]: Element;
        [index: number]: Element;

}

declare  var HTMLCollection: {
        prototype: HTMLCollection;
        new(): HTMLCollection;
};
interface BlobPropertyBag {

        type?: string;
        endings?: string;

}


interface Blob {

        type: string;
        size: number;
        msDetachStream(): any;
        slice(start?: number, end?: number, contentType?: string): Blob;
        msClose(): void;

}

declare  var Blob: {
        prototype: Blob;
        new(blobParts?: any[], options?: BlobPropertyBag): Blob;
};
interface NavigatorID {

        appVersion: string;
        appName: string;
        userAgent: string;
        platform: string;
        product: string;
        vendor: string;

}


declare class HTMLTableElement extends HTMLElement implements MSDataBindingTableExtensions, MSDataBindingExtensions, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {

    /**
      * Sets or retrieves the width of the object.
      */
        width: string;
    /**
      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.
      */
        borderColorLight: any;
    /**
      * Sets or retrieves the amount of space between cells in a table.
      */
        cellSpacing: string;
    /**
      * Retrieves the tFoot object of the table.
      */
        tFoot: HTMLTableSectionElement;
    /**
      * Sets or retrieves the way the border frame around the table is displayed.
      */
        frame: string;
    /**
      * Sets or retrieves the border color of the object. 
      */
        borderColor: any;
    /**
      * Sets or retrieves the number of horizontal rows contained in the object.
      */
        rows: HTMLCollection;
    /**
      * Sets or retrieves which dividing lines (inner borders) are displayed.
      */
        rules: string;
    /**
      * Sets or retrieves the number of columns in the table.
      */
        cols: number;
    /**
      * Sets or retrieves a description and/or structure of the object.
      */
        summary: string;
    /**
      * Retrieves the caption object of a table.
      */
        caption: HTMLTableCaptionElement;
    /**
      * Retrieves a collection of all tBody objects in the table. Objects in this collection are in source order.
      */
        tBodies: HTMLCollection;
    /**
      * Retrieves the tHead object of the table.
      */
        tHead: HTMLTableSectionElement;
    /**
      * Sets or retrieves a value that indicates the table alignment.
      */
        align: string;
    /**
      * Retrieves a collection of all cells in the table row or in the entire table.
      */
        cells: HTMLCollection;
    /**
      * Sets or retrieves the height of the object.
      */
        height: any;
    /**
      * Sets or retrieves the amount of space between the border of the cell and the content of the cell.
      */
        cellPadding: string;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
        border: string;
    /**
      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.
      */
        borderColorDark: any;
    /**
      * Removes the specified row (tr) from the element and from the rows collection.
      * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
      */
        deleteRow(index?: number): void;
    /**
      * Creates an empty tBody element in the table.
      */
        createTBody(): HTMLElement;
    /**
      * Deletes the caption element and its contents from the table.
      */
        deleteCaption(): void;
    /**
      * Creates a new row (tr) in the table, and adds the row to the rows collection.
      * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
      */
        insertRow(index?: number): HTMLElement;
    /**
      * Deletes the tFoot element and its contents from the table.
      */
        deleteTFoot(): void;
    /**
      * Returns the tHead element object if successful, or null otherwise.
      */
        createTHead(): HTMLElement;
    /**
      * Deletes the tHead element and its contents from the table.
      */
        deleteTHead(): void;
    /**
      * Creates an empty caption element in the table.
      */
        createCaption(): HTMLElement;
    /**
      * Moves a table row to a new position.
      * @param indexFrom Number that specifies the index in the rows collection of the table row that is moved.
      * @param indexTo Number that specifies where the row is moved within the rows collection.
      */
        moveRow(indexFrom?: number, indexTo?: number): any;
    /**
      * Creates an empty tFoot element in the table.
      */
        createTFoot(): HTMLElement;

        dataPageSize: number;
        nextPage(): void;
        firstPage(): void;
        refresh(): void;
        previousPage(): void;
        lastPage(): void;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;

        background: string;

        bgColor: any;
}

interface TreeWalker {

        whatToShow: number;
        filter: NodeFilter;
        root: Node;
        currentNode: Node;
        expandEntityReferences: boolean;
        previousSibling(): Node;
        lastChild(): Node;
        nextSibling(): Node;
        nextNode(): Node;
        parentNode(): Node;
        firstChild(): Node;
        previousNode(): Node;

}

declare  var TreeWalker: {
        prototype: TreeWalker;
        new(): TreeWalker;
};
interface GetSVGDocument {

        getSVGDocument(): Document;

}


interface SVGPathSegCurvetoQuadraticRel extends SVGPathSeg {

        y: number;
        y1: number;
        x: number;
        x1: number;

}

declare  var SVGPathSegCurvetoQuadraticRel: {
        prototype: SVGPathSegCurvetoQuadraticRel;
        new(): SVGPathSegCurvetoQuadraticRel;
};
interface Performance {

        navigation: PerformanceNavigation;
        timing: PerformanceTiming;
        getEntriesByType(entryType: string): any;
        toJSON(): any;
        getMeasures(measureName?: string): any;
        clearMarks(markName?: string): void;
        getMarks(markName?: string): any;
        clearResourceTimings(): void;
        mark(markName: string): void;
        measure(measureName: string, startMarkName?: string, endMarkName?: string): void;
        getEntriesByName(name: string, entryType?: string): any;
        getEntries(): any;
        clearMeasures(measureName?: string): void;
        setResourceTimingBufferSize(maxSize: number): void;
        now(): number;

}

declare  var Performance: {
        prototype: Performance;
        new(): Performance;
};
interface MSDataBindingTableExtensions {

        dataPageSize: number;
        nextPage(): void;
        firstPage(): void;
        refresh(): void;
        previousPage(): void;
        lastPage(): void;

}


interface CompositionEvent extends UIEvent {

        data: string;
        locale: string;
        initCompositionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, locale: string): void;

}

declare  var CompositionEvent: {
        prototype: CompositionEvent;
        new(): CompositionEvent;
};
interface WindowTimers extends WindowTimersExtension {

        clearTimeout(handle: number): void;
        setTimeout(handler: any, timeout?: any, ...args: any[]): number;
        clearInterval(handle: number): void;
        setInterval(handler: any, timeout?: any, ...args: any[]): number;

}


interface SVGMarkerElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox, SVGExternalResourcesRequired {

        orientType: SVGAnimatedEnumeration;
        markerUnits: SVGAnimatedEnumeration;
        markerWidth: SVGAnimatedLength;
        markerHeight: SVGAnimatedLength;
        orientAngle: SVGAnimatedAngle;
        refY: SVGAnimatedLength;
        refX: SVGAnimatedLength;
        setOrientToAngle(angle: SVGAngle): void;
        setOrientToAuto(): void;
        SVG_MARKER_ORIENT_UNKNOWN: number;
        SVG_MARKER_ORIENT_ANGLE: number;
        SVG_MARKERUNITS_UNKNOWN: number;
        SVG_MARKERUNITS_STROKEWIDTH: number;
        SVG_MARKER_ORIENT_AUTO: number;
        SVG_MARKERUNITS_USERSPACEONUSE: number;

}

declare  var SVGMarkerElement: {
        prototype: SVGMarkerElement;
        new(): SVGMarkerElement;
        SVG_MARKER_ORIENT_UNKNOWN: number;
        SVG_MARKER_ORIENT_ANGLE: number;
        SVG_MARKERUNITS_UNKNOWN: number;
        SVG_MARKERUNITS_STROKEWIDTH: number;
        SVG_MARKER_ORIENT_AUTO: number;
        SVG_MARKERUNITS_USERSPACEONUSE: number;
};
interface CSSStyleDeclaration {

        backgroundAttachment: string;
        visibility: string;
        textAlignLast: string;
        borderRightStyle: string;
        counterIncrement: string;
        orphans: string;
        cssText: string;
        borderStyle: string;
        pointerEvents: string;
        borderTopColor: string;
        markerEnd: string;
        textIndent: string;
        listStyleImage: string;
        cursor: string;
        listStylePosition: string;
        wordWrap: string;
        borderTopStyle: string;
        alignmentBaseline: string;
        opacity: string;
        direction: string;
        strokeMiterlimit: string;
        maxWidth: string;
        color: string;
        clip: string;
        borderRightWidth: string;
        verticalAlign: string;
        overflow: string;
        mask: string;
        borderLeftStyle: string;
        emptyCells: string;
        stopOpacity: string;
        paddingRight: string;
        parentRule: CSSRule;
        background: string;
        boxSizing: string;
        textJustify: string;
        height: string;
        paddingTop: string;
        length: number;
        right: string;
        baselineShift: string;
        borderLeft: string;
        widows: string;
        lineHeight: string;
        left: string;
        textUnderlinePosition: string;
        glyphOrientationHorizontal: string;
        display: string;
        textAnchor: string;
        cssFloat: string;
        strokeDasharray: string;
        rubyAlign: string;
        fontSizeAdjust: string;
        borderLeftColor: string;
        backgroundImage: string;
        listStyleType: string;
        strokeWidth: string;
        textOverflow: string;
        fillRule: string;
        borderBottomColor: string;
        zIndex: string;
        position: string;
        listStyle: string;
        msTransformOrigin: string;
        dominantBaseline: string;
        overflowY: string;
        fill: string;
        captionSide: string;
        borderCollapse: string;
        boxShadow: string;
        quotes: string;
        tableLayout: string;
        unicodeBidi: string;
        borderBottomWidth: string;
        backgroundSize: string;
        textDecoration: string;
        strokeDashoffset: string;
        fontSize: string;
        border: string;
        pageBreakBefore: string;
        borderTopRightRadius: string;
        msTransform: string;
        borderBottomLeftRadius: string;
        textTransform: string;
        rubyPosition: string;
        strokeLinejoin: string;
        clipPath: string;
        borderRightColor: string;
        fontFamily: string;
        clear: string;
        content: string;
        backgroundClip: string;
        marginBottom: string;
        counterReset: string;
        outlineWidth: string;
        marginRight: string;
        paddingLeft: string;
        borderBottom: string;
        wordBreak: string;
        marginTop: string;
        top: string;
        fontWeight: string;
        borderRight: string;
        width: string;
        kerning: string;
        pageBreakAfter: string;
        borderBottomStyle: string;
        fontStretch: string;
        padding: string;
        strokeOpacity: string;
        markerStart: string;
        bottom: string;
        borderLeftWidth: string;
        clipRule: string;
        backgroundPosition: string;
        backgroundColor: string;
        pageBreakInside: string;
        backgroundOrigin: string;
        strokeLinecap: string;
        borderTopWidth: string;
        outlineStyle: string;
        borderTop: string;
        outlineColor: string;
        paddingBottom: string;
        marginLeft: string;
        font: string;
        outline: string;
        wordSpacing: string;
        maxHeight: string;
        fillOpacity: string;
        letterSpacing: string;
        borderSpacing: string;
        backgroundRepeat: string;
        borderRadius: string;
        borderWidth: string;
        borderBottomRightRadius: string;
        whiteSpace: string;
        fontStyle: string;
        minWidth: string;
        stopColor: string;
        borderTopLeftRadius: string;
        borderColor: string;
        marker: string;
        glyphOrientationVertical: string;
        markerMid: string;
        fontVariant: string;
        minHeight: string;
        stroke: string;
        rubyOverhang: string;
        overflowX: string;
        textAlign: string;
        margin: string;
        animationFillMode: string;
        floodColor: string;
        animationIterationCount: string;
        textShadow: string;
        backfaceVisibility: string;
        msAnimationIterationCount: string;
        animationDelay: string;
        animationTimingFunction: string;
        columnWidth: any;
        msScrollSnapX: string;
        columnRuleColor: any;
        columnRuleWidth: any;
        transitionDelay: string;
        transition: string;
        msFlowFrom: string;
        msScrollSnapType: string;
        msContentZoomSnapType: string;
        msGridColumns: string;
        msAnimationName: string;
        msGridRowAlign: string;
        msContentZoomChaining: string;
        msGridColumn: any;
        msHyphenateLimitZone: any;
        msScrollRails: string;
        msAnimationDelay: string;
        enableBackground: string;
        msWrapThrough: string;
        columnRuleStyle: string;
        msAnimation: string;
        msFlexFlow: string;
        msScrollSnapY: string;
        msHyphenateLimitLines: any;
        msTouchAction: string;
        msScrollLimit: string;
        animation: string;
        transform: string;
        filter: string;
        colorInterpolationFilters: string;
        transitionTimingFunction: string;
        msBackfaceVisibility: string;
        animationPlayState: string;
        transformOrigin: string;
        msScrollLimitYMin: any;
        msFontFeatureSettings: string;
        msContentZoomLimitMin: any;
        columnGap: any;
        transitionProperty: string;
        msAnimationDuration: string;
        msAnimationFillMode: string;
        msFlexDirection: string;
        msTransitionDuration: string;
        fontFeatureSettings: string;
        breakBefore: string;
        msFlexWrap: string;
        perspective: string;
        msFlowInto: string;
        msTransformStyle: string;
        msScrollTranslation: string;
        msTransitionProperty: string;
        msUserSelect: string;
        msOverflowStyle: string;
        msScrollSnapPointsY: string;
        animationDirection: string;
        animationDuration: string;
        msFlex: string;
        msTransitionTimingFunction: string;
        animationName: string;
        columnRule: string;
        msGridColumnSpan: any;
        msFlexNegative: string;
        columnFill: string;
        msGridRow: any;
        msFlexOrder: string;
        msFlexItemAlign: string;
        msFlexPositive: string;
        msContentZoomLimitMax: any;
        msScrollLimitYMax: any;
        msGridColumnAlign: string;
        perspectiveOrigin: string;
        lightingColor: string;
        columns: string;
        msScrollChaining: string;
        msHyphenateLimitChars: string;
        msTouchSelect: string;
        floodOpacity: string;
        msAnimationDirection: string;
        msAnimationPlayState: string;
        columnSpan: string;
        msContentZooming: string;
        msPerspective: string;
        msFlexPack: string;
        msScrollSnapPointsX: string;
        msContentZoomSnapPoints: string;
        msGridRowSpan: any;
        msContentZoomSnap: string;
        msScrollLimitXMin: any;
        breakInside: string;
        msHighContrastAdjust: string;
        msFlexLinePack: string;
        msGridRows: string;
        transitionDuration: string;
        msHyphens: string;
        breakAfter: string;
        msTransition: string;
        msPerspectiveOrigin: string;
        msContentZoomLimit: string;
        msScrollLimitXMax: any;
        msFlexAlign: string;
        msWrapMargin: any;
        columnCount: any;
        msAnimationTimingFunction: string;
        msTransitionDelay: string;
        transformStyle: string;
        msWrapFlow: string;
        msFlexPreferredSize: string;
        alignItems: string;
        borderImageSource: string;
        flexBasis: string;
        borderImageWidth: string;
        borderImageRepeat: string;
        order: string;
        flex: string;
        alignContent: string;
        msImeAlign: string;
        flexShrink: string;
        flexGrow: string;
        borderImageSlice: string;
        flexWrap: string;
        borderImageOutset: string;
        flexDirection: string;
        touchAction: string;
        flexFlow: string;
        borderImage: string;
        justifyContent: string;
        alignSelf: string;
        msTextCombineHorizontal: string;
        getPropertyPriority(propertyName: string): string;
        getPropertyValue(propertyName: string): string;
        removeProperty(propertyName: string): string;
        item(index: number): string;
        [index: number]: string;
        setProperty(propertyName: string, value: string, priority?: string): void;

}

declare  var CSSStyleDeclaration: {
        prototype: CSSStyleDeclaration;
        new(): CSSStyleDeclaration;
};
interface SVGGElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {


}

declare  var SVGGElement: {
        prototype: SVGGElement;
        new(): SVGGElement;
};
interface MSStyleCSSProperties extends MSCSSProperties {

        pixelWidth: number;
        posHeight: number;
        posLeft: number;
        pixelTop: number;
        pixelBottom: number;
        textDecorationNone: boolean;
        pixelLeft: number;
        posTop: number;
        posBottom: number;
        textDecorationOverline: boolean;
        posWidth: number;
        textDecorationLineThrough: boolean;
        pixelHeight: number;
        textDecorationBlink: boolean;
        posRight: number;
        pixelRight: number;
        textDecorationUnderline: boolean;

}

declare  var MSStyleCSSProperties: {
        prototype: MSStyleCSSProperties;
        new(): MSStyleCSSProperties;
};
interface Navigator extends NavigatorID, NavigatorOnLine, NavigatorContentUtils, MSNavigatorExtensions, NavigatorGeolocation, MSNavigatorDoNotTrack, NavigatorStorageUtils, MSFileSaver {

        msMaxTouchPoints: number;
        msPointerEnabled: boolean;
        msManipulationViewsEnabled: boolean;
        pointerEnabled: boolean;
        maxTouchPoints: number;
        msLaunchUri(uri: string, successCallback?: MSLaunchUriCallback, noHandlerCallback?: MSLaunchUriCallback): void;

}

declare  var Navigator: {
        prototype: Navigator;
        new(): Navigator;
};
interface SVGPathSegCurvetoCubicSmoothAbs extends SVGPathSeg {

        y: number;
        x2: number;
        x: number;
        y2: number;

}

declare  var SVGPathSegCurvetoCubicSmoothAbs: {
        prototype: SVGPathSegCurvetoCubicSmoothAbs;
        new(): SVGPathSegCurvetoCubicSmoothAbs;
};
interface SVGZoomEvent extends UIEvent {

        zoomRectScreen: SVGRect;
        previousScale: number;
        newScale: number;
        previousTranslate: SVGPoint;
        newTranslate: SVGPoint;

}

declare  var SVGZoomEvent: {
        prototype: SVGZoomEvent;
        new(): SVGZoomEvent;
};
interface NodeSelector {

        querySelectorAll(selectors: string): NodeList;
        querySelector(selectors: string): Element;

}


declare class HTMLTableDataCellElement extends HTMLTableCellElement {

}

declare class HTMLBaseElement extends HTMLElement {

    /**
      * Sets or retrieves the window or frame at which to target content.
      */
        target: string;
    /**
      * Gets or sets the baseline URL on which relative links are based.
      */
        href: string;
}

interface ClientRect {

        left: number;
        width: number;
        right: number;
        top: number;
        bottom: number;
        height: number;

}

declare  var ClientRect: {
        prototype: ClientRect;
        new(): ClientRect;
};
interface PositionErrorCallback {

        (error: PositionError): void;

}


interface DOMImplementation {

        createDocumentType(qualifiedName: string, Id: string, systemId: string): DocumentType;
        createDocument(namespaceURI: string, qualifiedName: string, doctype: DocumentType): Document;
        hasFeature(feature: string, version?: string): boolean;
        createHTMLDocument(title: string): Document;

}

declare  var DOMImplementation: {
        prototype: DOMImplementation;
        new(): DOMImplementation;
};
interface SVGUnitTypes {

        SVG_UNIT_TYPE_UNKNOWN: number;
        SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number;
        SVG_UNIT_TYPE_USERSPACEONUSE: number;

}

declare  var SVGUnitTypes: SVGUnitTypes;


interface Element extends Node, NodeSelector, ElementTraversal, GlobalEventHandlers {

        scrollTop: number;
        clientLeft: number;
        scrollLeft: number;
        tagName: string;
        clientWidth: number;
        scrollWidth: number;
        clientHeight: number;
        clientTop: number;
        scrollHeight: number;
        msRegionOverflow: string;
        onmspointerdown: (ev: any) => any;
        onmsgotpointercapture: (ev: any) => any;
        onmsgesturedoubletap: (ev: any) => any;
        onmspointerhover: (ev: any) => any;
        onmsgesturehold: (ev: any) => any;
        onmspointermove: (ev: any) => any;
        onmsgesturechange: (ev: any) => any;
        onmsgesturestart: (ev: any) => any;
        onmspointercancel: (ev: any) => any;
        onmsgestureend: (ev: any) => any;
        onmsgesturetap: (ev: any) => any;
        onmspointerout: (ev: any) => any;
        onmsinertiastart: (ev: any) => any;
        onmslostpointercapture: (ev: any) => any;
        onmspointerover: (ev: any) => any;
        msContentZoomFactor: number;
        onmspointerup: (ev: any) => any;
        onlostpointercapture: (ev: PointerEvent) => any;
        onmspointerenter: (ev: any) => any;
        ongotpointercapture: (ev: PointerEvent) => any;
        onmspointerleave: (ev: any) => any;
        getAttribute(name?: string): string;
        getElementsByTagNameNS(namespaceURI: string, localName: string): NodeList;
        hasAttributeNS(namespaceURI: string, localName: string): boolean;
        getBoundingClientRect(): ClientRect;
        getAttributeNS(namespaceURI: string, localName: string): string;
        getAttributeNodeNS(namespaceURI: string, localName: string): Attr;
        setAttributeNodeNS(newAttr: Attr): Attr;
        msMatchesSelector(selectors: string): boolean;
        hasAttribute(name: string): boolean;
        removeAttribute(name?: string): void;
        setAttributeNS(namespaceURI: string, qualifiedName: string, value: string): void;
        getAttributeNode(name: string): Attr;
        fireEvent(eventName: string, eventObj?: any): boolean;
        getElementsByTagName(name: "a"): NodeListOf<HTMLAnchorElement>;
        getElementsByTagName(name: "abbr"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "acronym"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "address"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "applet"): NodeListOf<HTMLAppletElement>;
        getElementsByTagName(name: "area"): NodeListOf<HTMLAreaElement>;
        getElementsByTagName(name: "article"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "aside"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "audio"): NodeListOf<HTMLAudioElement>;
        getElementsByTagName(name: "b"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "base"): NodeListOf<HTMLBaseElement>;
        getElementsByTagName(name: "basefont"): NodeListOf<HTMLBaseFontElement>;
        getElementsByTagName(name: "bdo"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "bgsound"): NodeListOf<HTMLBGSoundElement>;
        getElementsByTagName(name: "big"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "blockquote"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "body"): NodeListOf<HTMLBodyElement>;
        getElementsByTagName(name: "br"): NodeListOf<HTMLBRElement>;
        getElementsByTagName(name: "button"): NodeListOf<HTMLButtonElement>;
        getElementsByTagName(name: "canvas"): NodeListOf<HTMLCanvasElement>;
        getElementsByTagName(name: "caption"): NodeListOf<HTMLTableCaptionElement>;
        getElementsByTagName(name: "center"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "cite"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "code"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "col"): NodeListOf<HTMLTableColElement>;
        getElementsByTagName(name: "colgroup"): NodeListOf<HTMLTableColElement>;
        getElementsByTagName(name: "datalist"): NodeListOf<HTMLDataListElement>;
        getElementsByTagName(name: "dd"): NodeListOf<HTMLDDElement>;
        getElementsByTagName(name: "del"): NodeListOf<HTMLModElement>;
        getElementsByTagName(name: "dfn"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "dir"): NodeListOf<HTMLDirectoryElement>;
        getElementsByTagName(name: "div"): NodeListOf<HTMLDivElement>;
        getElementsByTagName(name: "dl"): NodeListOf<HTMLDListElement>;
        getElementsByTagName(name: "dt"): NodeListOf<HTMLDTElement>;
        getElementsByTagName(name: "em"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "embed"): NodeListOf<HTMLEmbedElement>;
        getElementsByTagName(name: "fieldset"): NodeListOf<HTMLFieldSetElement>;
        getElementsByTagName(name: "figcaption"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "figure"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "font"): NodeListOf<HTMLFontElement>;
        getElementsByTagName(name: "footer"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "form"): NodeListOf<HTMLFormElement>;
        getElementsByTagName(name: "frame"): NodeListOf<HTMLFrameElement>;
        getElementsByTagName(name: "frameset"): NodeListOf<HTMLFrameSetElement>;
        getElementsByTagName(name: "h1"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h2"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h3"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h4"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h5"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "h6"): NodeListOf<HTMLHeadingElement>;
        getElementsByTagName(name: "head"): NodeListOf<HTMLHeadElement>;
        getElementsByTagName(name: "header"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "hgroup"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "hr"): NodeListOf<HTMLHRElement>;
        getElementsByTagName(name: "html"): NodeListOf<HTMLHtmlElement>;
        getElementsByTagName(name: "i"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "iframe"): NodeListOf<HTMLIFrameElement>;
        getElementsByTagName(name: "img"): NodeListOf<HTMLImageElement>;
        getElementsByTagName(name: "input"): NodeListOf<HTMLInputElement>;
        getElementsByTagName(name: "ins"): NodeListOf<HTMLModElement>;
        getElementsByTagName(name: "isindex"): NodeListOf<HTMLIsIndexElement>;
        getElementsByTagName(name: "kbd"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "keygen"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "label"): NodeListOf<HTMLLabelElement>;
        getElementsByTagName(name: "legend"): NodeListOf<HTMLLegendElement>;
        getElementsByTagName(name: "li"): NodeListOf<HTMLLIElement>;
        getElementsByTagName(name: "link"): NodeListOf<HTMLLinkElement>;
        getElementsByTagName(name: "listing"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "map"): NodeListOf<HTMLMapElement>;
        getElementsByTagName(name: "mark"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "marquee"): NodeListOf<HTMLMarqueeElement>;
        getElementsByTagName(name: "menu"): NodeListOf<HTMLMenuElement>;
        getElementsByTagName(name: "meta"): NodeListOf<HTMLMetaElement>;
        getElementsByTagName(name: "nav"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "nextid"): NodeListOf<HTMLNextIdElement>;
        getElementsByTagName(name: "nobr"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "noframes"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "noscript"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "object"): NodeListOf<HTMLObjectElement>;
        getElementsByTagName(name: "ol"): NodeListOf<HTMLOListElement>;
        getElementsByTagName(name: "optgroup"): NodeListOf<HTMLOptGroupElement>;
        getElementsByTagName(name: "option"): NodeListOf<HTMLOptionElement>;
        getElementsByTagName(name: "p"): NodeListOf<HTMLParagraphElement>;
        getElementsByTagName(name: "param"): NodeListOf<HTMLParamElement>;
        getElementsByTagName(name: "plaintext"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: "pre"): NodeListOf<HTMLPreElement>;
        getElementsByTagName(name: "progress"): NodeListOf<HTMLProgressElement>;
        getElementsByTagName(name: "q"): NodeListOf<HTMLQuoteElement>;
        getElementsByTagName(name: "rt"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "ruby"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "s"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "samp"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "script"): NodeListOf<HTMLScriptElement>;
        getElementsByTagName(name: "section"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "select"): NodeListOf<HTMLSelectElement>;
        getElementsByTagName(name: "small"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "SOURCE"): NodeListOf<HTMLSourceElement>;
        getElementsByTagName(name: "span"): NodeListOf<HTMLSpanElement>;
        getElementsByTagName(name: "strike"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "strong"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "style"): NodeListOf<HTMLStyleElement>;
        getElementsByTagName(name: "sub"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "sup"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "table"): NodeListOf<HTMLTableElement>;
        getElementsByTagName(name: "tbody"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "td"): NodeListOf<HTMLTableDataCellElement>;
        getElementsByTagName(name: "textarea"): NodeListOf<HTMLTextAreaElement>;
        getElementsByTagName(name: "tfoot"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "th"): NodeListOf<HTMLTableHeaderCellElement>;
        getElementsByTagName(name: "thead"): NodeListOf<HTMLTableSectionElement>;
        getElementsByTagName(name: "title"): NodeListOf<HTMLTitleElement>;
        getElementsByTagName(name: "tr"): NodeListOf<HTMLTableRowElement>;
        getElementsByTagName(name: "track"): NodeListOf<HTMLTrackElement>;
        getElementsByTagName(name: "tt"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "u"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "ul"): NodeListOf<HTMLUListElement>;
        getElementsByTagName(name: "var"): NodeListOf<HTMLPhraseElement>;
        getElementsByTagName(name: "video"): NodeListOf<HTMLVideoElement>;
        getElementsByTagName(name: "wbr"): NodeListOf<HTMLElement>;
        getElementsByTagName(name: "x-ms-webview"): NodeListOf<MSHTMLWebViewElement>;
        getElementsByTagName(name: "xmp"): NodeListOf<HTMLBlockElement>;
        getElementsByTagName(name: string): NodeList;
        getClientRects(): ClientRectList;
        setAttributeNode(newAttr: Attr): Attr;
        removeAttributeNode(oldAttr: Attr): Attr;
        setAttribute(name?: string, value?: string): void;
        removeAttributeNS(namespaceURI: string, localName: string): void;
        msGetRegionContent(): MSRangeCollection;
        msReleasePointerCapture(pointerId: number): void;
        msSetPointerCapture(pointerId: number): void;
        msZoomTo(args: MsZoomToOptions): void;
        setPointerCapture(pointerId: number): void;
        msGetUntransformedBounds(): ClientRect;
        releasePointerCapture(pointerId: number): void;
        msRequestFullscreen(): void;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var Element: {
        prototype: Element;
        new(): Element;
};
declare class HTMLNextIdElement extends HTMLElement {

        n: string;
}

interface SVGPathSegMovetoRel extends SVGPathSeg {

        y: number;
        x: number;

}

declare  var SVGPathSegMovetoRel: {
        prototype: SVGPathSegMovetoRel;
        new(): SVGPathSegMovetoRel;
};
interface SVGLineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {

        y1: SVGAnimatedLength;
        x2: SVGAnimatedLength;
        x1: SVGAnimatedLength;
        y2: SVGAnimatedLength;

}

declare  var SVGLineElement: {
        prototype: SVGLineElement;
        new(): SVGLineElement;
};
declare class HTMLParagraphElement extends HTMLElement implements DOML2DeprecatedTextFlowControl {

    /**
      * Sets or retrieves how the object is aligned with adjacent text. 
      */
        align: string;

        clear: string;
}

interface HTMLAreasCollection extends HTMLCollection {

    /**
      * Removes an element from the collection.
      */
        remove(index?: number): void;
    /**
      * Adds an element to the areas, controlRange, or options collection.
      */
        add(element: HTMLElement, before?: any): void;

}

declare  var HTMLAreasCollection: {
        prototype: HTMLAreasCollection;
        new(): HTMLAreasCollection;
};
interface SVGDescElement extends SVGElement, SVGStylable, SVGLangSpace {


}

declare  var SVGDescElement: {
        prototype: SVGDescElement;
        new(): SVGDescElement;
};
interface Node extends EventTarget {

        nodeType: number;
        previousSibling: Node;
        localName: string;
        namespaceURI: string;
        textContent: string;
        parentNode: Node;
        nextSibling: Node;
        nodeValue: string;
        lastChild: Node;
        childNodes: NodeList;
        nodeName: string;
        ownerDocument: Document;
        attributes: NamedNodeMap;
        firstChild: Node;
        prefix: string;
        removeChild(oldChild: Node): Node;
        appendChild(newChild: Node): Node;
        isSupported(feature: string, version: string): boolean;
        isEqualNode(arg: Node): boolean;
        lookupPrefix(namespaceURI: string): string;
        isDefaultNamespace(namespaceURI: string): boolean;
        compareDocumentPosition(other: Node): number;
        normalize(): void;
        isSameNode(other: Node): boolean;
        hasAttributes(): boolean;
        lookupNamespaceURI(prefix: string): string;
        cloneNode(deep?: boolean): Node;
        hasChildNodes(): boolean;
        replaceChild(newChild: Node, oldChild: Node): Node;
        insertBefore(newChild: Node, refChild?: Node): Node;
        ENTITY_REFERENCE_NODE: number;
        ATTRIBUTE_NODE: number;
        DOCUMENT_FRAGMENT_NODE: number;
        TEXT_NODE: number;
        ELEMENT_NODE: number;
        COMMENT_NODE: number;
        DOCUMENT_POSITION_DISCONNECTED: number;
        DOCUMENT_POSITION_CONTAINED_BY: number;
        DOCUMENT_POSITION_CONTAINS: number;
        DOCUMENT_TYPE_NODE: number;
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        DOCUMENT_NODE: number;
        ENTITY_NODE: number;
        PROCESSING_INSTRUCTION_NODE: number;
        CDATA_SECTION_NODE: number;
        NOTATION_NODE: number;
        DOCUMENT_POSITION_FOLLOWING: number;
        DOCUMENT_POSITION_PRECEDING: number;

}

declare  var Node: {
        prototype: Node;
        new(): Node;
        ENTITY_REFERENCE_NODE: number;
        ATTRIBUTE_NODE: number;
        DOCUMENT_FRAGMENT_NODE: number;
        TEXT_NODE: number;
        ELEMENT_NODE: number;
        COMMENT_NODE: number;
        DOCUMENT_POSITION_DISCONNECTED: number;
        DOCUMENT_POSITION_CONTAINED_BY: number;
        DOCUMENT_POSITION_CONTAINS: number;
        DOCUMENT_TYPE_NODE: number;
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
        DOCUMENT_NODE: number;
        ENTITY_NODE: number;
        PROCESSING_INSTRUCTION_NODE: number;
        CDATA_SECTION_NODE: number;
        NOTATION_NODE: number;
        DOCUMENT_POSITION_FOLLOWING: number;
        DOCUMENT_POSITION_PRECEDING: number;
};
interface SVGPathSegCurvetoQuadraticSmoothRel extends SVGPathSeg {

        y: number;
        x: number;

}

declare  var SVGPathSegCurvetoQuadraticSmoothRel: {
        prototype: SVGPathSegCurvetoQuadraticSmoothRel;
        new(): SVGPathSegCurvetoQuadraticSmoothRel;
};
interface DOML2DeprecatedListSpaceReduction {

        compact: boolean;

}


interface MSScriptHost {


}

declare  var MSScriptHost: {
        prototype: MSScriptHost;
        new(): MSScriptHost;
};
interface SVGClipPathElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {

        clipPathUnits: SVGAnimatedEnumeration;

}

declare  var SVGClipPathElement: {
        prototype: SVGClipPathElement;
        new(): SVGClipPathElement;
};
interface MouseEvent extends UIEvent {

        toElement: Element;
        layerY: number;
        fromElement: Element;
        which: number;
        pageX: number;
        offsetY: number;
        x: number;
        y: number;
        metaKey: boolean;
        altKey: boolean;
        ctrlKey: boolean;
        offsetX: number;
        screenX: number;
        clientY: number;
        shiftKey: boolean;
        layerX: number;
        screenY: number;
        relatedTarget: EventTarget;
        button: number;
        pageY: number;
        buttons: number;
        clientX: number;
        initMouseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget): void;
        getModifierState(keyArg: string): boolean;

}

declare  var MouseEvent: {
        prototype: MouseEvent;
        new(): MouseEvent;
};
interface RangeException {

        code: number;
        message: string;
        name: string;
        toString(): string;
        INVALID_NODE_TYPE_ERR: number;
        BAD_BOUNDARYPOINTS_ERR: number;

}

declare  var RangeException: {
        prototype: RangeException;
        new(): RangeException;
        INVALID_NODE_TYPE_ERR: number;
        BAD_BOUNDARYPOINTS_ERR: number;
};
interface SVGTextPositioningElement extends SVGTextContentElement {

        y: SVGAnimatedLengthList;
        rotate: SVGAnimatedNumberList;
        dy: SVGAnimatedLengthList;
        x: SVGAnimatedLengthList;
        dx: SVGAnimatedLengthList;

}

declare  var SVGTextPositioningElement: {
        prototype: SVGTextPositioningElement;
        new(): SVGTextPositioningElement;
};
declare class HTMLAppletElement extends HTMLElement implements DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {

        width: number;
    /**
      * Sets or retrieves the Internet media type for the code associated with the object.
      */
        codeType: string;
        object: string;
        form: HTMLFormElement;
        code: string;
    /**
      * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
      */
        archive: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
        alt: string;
    /**
      * Sets or retrieves a message to be displayed while an object is loading.
      */
        standby: string;
    /**
      * Sets or retrieves the class identifier for the object.
      */
        classid: string;
    /**
      * Sets or retrieves the shape of the object.
      */
        name: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
        useMap: string;
    /**
      * Sets or retrieves the URL that references the data of the object.
      */
        data: string;
    /**
      * Sets or retrieves the height of the object.
      */
        height: string;
    /**
      * Gets or sets the optional alternative HTML script to execute if the object fails to load.
      */
        altHtml: string;
    /**
      * Address of a pointer to the document this page or frame contains. If there is no document, then null will be returned.
      */
        contentDocument: Document;
    /**
      * Sets or retrieves the URL of the component.
      */
        codeBase: string;
    /**
      * Sets or retrieves a character string that can be used to implement your own declare functionality for the object.
      */
        declare: boolean;
    /**
      * Returns the content type of the object.
      */
        type: string;
    /**
      * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.
      */
        BaseHref: string;

        vspace: number;
        hspace: number;

        border: string;

        align: string;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;

        recordset: any;
        namedRecordset(dataMember: string, hierarchy?: any): any;
}

interface TextMetrics {

        width: number;

}

declare  var TextMetrics: {
        prototype: TextMetrics;
        new(): TextMetrics;
};
interface DocumentEvent {

        createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
        createEvent(eventInterface: "CloseEvent"): CloseEvent;
        createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
        createEvent(eventInterface: "CustomEvent"): CustomEvent;
        createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
        createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
        createEvent(eventInterface: "DragEvent"): DragEvent;
        createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
        createEvent(eventInterface: "Event"): Event;
        createEvent(eventInterface: "Events"): Event;
        createEvent(eventInterface: "FocusEvent"): FocusEvent;
        createEvent(eventInterface: "HTMLEvents"): Event;
        createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
        createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
        createEvent(eventInterface: "LongRunningScriptDetectedEvent"): LongRunningScriptDetectedEvent;
        createEvent(eventInterface: "MessageEvent"): MessageEvent;
        createEvent(eventInterface: "MouseEvent"): MouseEvent;
        createEvent(eventInterface: "MouseEvents"): MouseEvent;
        createEvent(eventInterface: "MouseWheelEvent"): MouseWheelEvent;
        createEvent(eventInterface: "MSGestureEvent"): MSGestureEvent;
        createEvent(eventInterface: "MSPointerEvent"): MSPointerEvent;
        createEvent(eventInterface: "MutationEvent"): MutationEvent;
        createEvent(eventInterface: "MutationEvents"): MutationEvent;
        createEvent(eventInterface: "NavigationCompletedEvent"): NavigationCompletedEvent;
        createEvent(eventInterface: "NavigationEvent"): NavigationEvent;
        createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
        createEvent(eventInterface: "PointerEvent"): MSPointerEvent;
        createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
        createEvent(eventInterface: "ProgressEvent"): ProgressEvent;
        createEvent(eventInterface: "StorageEvent"): StorageEvent;
        createEvent(eventInterface: "SVGZoomEvents"): SVGZoomEvent;
        createEvent(eventInterface: "TextEvent"): TextEvent;
        createEvent(eventInterface: "TrackEvent"): TrackEvent;
        createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
        createEvent(eventInterface: "UIEvent"): UIEvent;
        createEvent(eventInterface: "UIEvents"): UIEvent;
        createEvent(eventInterface: "UnviewableContentIdentifiedEvent"): UnviewableContentIdentifiedEvent;
        createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
        createEvent(eventInterface: "WheelEvent"): WheelEvent;
        createEvent(eventInterface: string): Event;

}


declare class HTMLOListElement extends HTMLElement implements DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {

    /**
      * The starting number.
      */
        start: number;

        compact: boolean;

        type: string;
}

interface SVGPathSegLinetoVerticalRel extends SVGPathSeg {

        y: number;

}

declare  var SVGPathSegLinetoVerticalRel: {
        prototype: SVGPathSegLinetoVerticalRel;
        new(): SVGPathSegLinetoVerticalRel;
};
interface SVGAnimatedString {

        animVal: string;
        baseVal: string;

}

declare  var SVGAnimatedString: {
        prototype: SVGAnimatedString;
        new(): SVGAnimatedString;
};
interface CDATASection extends Text {


}

declare  var CDATASection: {
        prototype: CDATASection;
        new(): CDATASection;
};
interface StyleMedia {

        type: string;
        matchMedium(mediaquery: string): boolean;

}

declare  var StyleMedia: {
        prototype: StyleMedia;
        new(): StyleMedia;
};
declare class HTMLSelectElement extends HTMLElement implements MSHTMLCollectionExtensions, MSDataBindingExtensions {

        options: HTMLSelectElement;
    /**
      * Sets or retrieves the value which is returned to the server when the form control is submitted.
      */
        value: string;
    /**
      * Retrieves a reference to the form that the object is embedded in. 
      */
        form: HTMLFormElement;
    /**
      * Sets or retrieves the name of the object.
      */
        name: string;
    /**
      * Sets or retrieves the number of rows in the list box. 
      */
        size: number;
    /**
      * Sets or retrieves the number of objects in a collection.
      */
        length: number;
    /**
      * Sets or retrieves the index of the selected option in a select object.
      */
        selectedIndex: number;
    /**
      * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
      */
        multiple: boolean;
    /**
      * Retrieves the type of select control based on the value of the MULTIPLE attribute.
      */
        type: string;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
        validationMessage: string;
    /**
      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
      */
        autofocus: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
        validity: ValidityState;
    /**
      * When present, marks an element that can't be submitted without a value.
      */
        required: boolean;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
        willValidate: boolean;
    /**
      * Removes an element from the collection.
      * @param index Number that specifies the zero-based index of the element to remove from the collection.
      */
        remove(index?: number): void;
    /**
      * Adds an element to the areas, controlRange, or options collection.
      * @param element Variant of type Number that specifies the index position in the collection where the element is placed. If no value is given, the method places the element at the end of the collection.
      * @param before Variant of type Object that specifies an element to insert before, or null to append the object to the collection. 
      */
        add(element: HTMLElement, before?: any): void;
    /**
      * Retrieves a select object or an object from an options collection.
      * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is an integer, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
      * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
      */
        item(name?: any, index?: any): any;
    /**
      * Retrieves a select object or an object from an options collection.
      * @param namedItem A String that specifies the name or id property of the object to retrieve. A collection is returned if more than one match is made.
      */
        namedItem(name: string): any;
        [name: string]: any;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
        checkValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
        setCustomValidity(error: string): void;

        urns(urn: any): any;
        tags(tagName: any): any;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

interface TextRange {

        boundingLeft: number;
        htmlText: string;
        offsetLeft: number;
        boundingWidth: number;
        boundingHeight: number;
        boundingTop: number;
        text: string;
        offsetTop: number;
        moveToPoint(x: number, y: number): void;
        queryCommandValue(cmdID: string): any;
        getBookmark(): string;
        move(unit: string, count?: number): number;
        queryCommandIndeterm(cmdID: string): boolean;
        scrollIntoView(fStart?: boolean): void;
        findText(string: string, count?: number, flags?: number): boolean;
        execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
        getBoundingClientRect(): ClientRect;
        moveToBookmark(bookmark: string): boolean;
        isEqual(range: TextRange): boolean;
        duplicate(): TextRange;
        collapse(start?: boolean): void;
        queryCommandText(cmdID: string): string;
        select(): void;
        pasteHTML(html: string): void;
        inRange(range: TextRange): boolean;
        moveEnd(unit: string, count?: number): number;
        getClientRects(): ClientRectList;
        moveStart(unit: string, count?: number): number;
        parentElement(): Element;
        queryCommandState(cmdID: string): boolean;
        compareEndPoints(how: string, sourceRange: TextRange): number;
        execCommandShowHelp(cmdID: string): boolean;
        moveToElementText(element: Element): void;
        expand(Unit: string): boolean;
        queryCommandSupported(cmdID: string): boolean;
        setEndPoint(how: string, SourceRange: TextRange): void;
        queryCommandEnabled(cmdID: string): boolean;

}

declare  var TextRange: {
        prototype: TextRange;
        new(): TextRange;
};
interface SVGTests {

        requiredFeatures: SVGStringList;
        requiredExtensions: SVGStringList;
        systemLanguage: SVGStringList;
        hasExtension(extension: string): boolean;

}


declare class HTMLBlockElement extends HTMLElement implements DOML2DeprecatedTextFlowControl {

    /**
      * Sets or retrieves the width of the object.
      */
        width: number;
    /**
      * Sets or retrieves reference information about the object.
      */
        cite: string;

        clear: string;
}

interface CSSStyleSheet extends StyleSheet {

        owningElement: Element;
        imports: StyleSheetList;
        isAlternate: boolean;
        rules: MSCSSRuleList;
        isPrefAlternate: boolean;
        readOnly: boolean;
        cssText: string;
        ownerRule: CSSRule;
        href: string;
        cssRules: CSSRuleList;
        id: string;
        pages: StyleSheetPageList;
        addImport(bstrURL: string, lIndex?: number): number;
        addPageRule(bstrSelector: string, bstrStyle: string, lIndex?: number): number;
        insertRule(rule: string, index?: number): number;
        removeRule(lIndex: number): void;
        deleteRule(index?: number): void;
        addRule(bstrSelector: string, bstrStyle?: string, lIndex?: number): number;
        removeImport(lIndex: number): void;

}

declare  var CSSStyleSheet: {
        prototype: CSSStyleSheet;
        new(): CSSStyleSheet;
};
interface MSSelection {

        type: string;
        typeDetail: string;
        createRange(): TextRange;
        clear(): void;
        createRangeCollection(): TextRangeCollection;
        empty(): void;

}

declare  var MSSelection: {
        prototype: MSSelection;
        new(): MSSelection;
};
declare class HTMLMetaElement extends HTMLElement {

    /**
      * Gets or sets information used to bind the value of a content attribute of a meta element to an HTTP response header.
      */
        httpEquiv: string;
    /**
      * Sets or retrieves the value specified in the content attribute of the meta object.
      */
        name: string;
    /**
      * Gets or sets meta-information to associate with httpEquiv or name.
      */
        content: string;
    /**
      * Sets or retrieves the URL property that will be loaded after the specified time has elapsed. 
      */
        url: string;
    /**
      * Sets or retrieves a scheme to be used in interpreting the value of a property specified for the object.
      */
        scheme: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
        charset: string;
}

interface SVGPatternElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired, SVGURIReference {

        patternUnits: SVGAnimatedEnumeration;
        y: SVGAnimatedLength;
        width: SVGAnimatedLength;
        x: SVGAnimatedLength;
        patternContentUnits: SVGAnimatedEnumeration;
        patternTransform: SVGAnimatedTransformList;
        height: SVGAnimatedLength;

}

declare  var SVGPatternElement: {
        prototype: SVGPatternElement;
        new(): SVGPatternElement;
};
interface SVGAnimatedAngle {

        animVal: SVGAngle;
        baseVal: SVGAngle;

}

declare  var SVGAnimatedAngle: {
        prototype: SVGAnimatedAngle;
        new(): SVGAnimatedAngle;
};
interface Selection {

        isCollapsed: boolean;
        anchorNode: Node;
        focusNode: Node;
        anchorOffset: number;
        focusOffset: number;
        rangeCount: number;
        addRange(range: Range): void;
        collapseToEnd(): void;
        toString(): string;
        selectAllChildren(parentNode: Node): void;
        getRangeAt(index: number): Range;
        collapse(parentNode: Node, offset: number): void;
        removeAllRanges(): void;
        collapseToStart(): void;
        deleteFromDocument(): void;
        removeRange(range: Range): void;

}

declare  var Selection: {
        prototype: Selection;
        new(): Selection;
};
interface SVGScriptElement extends SVGElement, SVGExternalResourcesRequired, SVGURIReference {

        type: string;

}

declare  var SVGScriptElement: {
        prototype: SVGScriptElement;
        new(): SVGScriptElement;
};
declare class HTMLDDElement extends HTMLElement {

    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
        noWrap: boolean;
}

interface MSDataBindingRecordSetReadonlyExtensions {

        recordset: any;
        namedRecordset(dataMember: string, hierarchy?: any): any;

}


interface CSSStyleRule extends CSSRule {

        selectorText: string;
        style: MSStyleCSSProperties;
        readOnly: boolean;

}

declare  var CSSStyleRule: {
        prototype: CSSStyleRule;
        new(): CSSStyleRule;
};
interface NodeIterator {

        whatToShow: number;
        filter: NodeFilter;
        root: Node;
        expandEntityReferences: boolean;
        nextNode(): Node;
        detach(): void;
        previousNode(): Node;

}

declare  var NodeIterator: {
        prototype: NodeIterator;
        new(): NodeIterator;
};
interface SVGViewElement extends SVGElement, SVGZoomAndPan, SVGFitToViewBox, SVGExternalResourcesRequired {

        viewTarget: SVGStringList;

}

declare  var SVGViewElement: {
        prototype: SVGViewElement;
        new(): SVGViewElement;
};
declare class HTMLLinkElement extends HTMLElement implements LinkStyle {

    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
        rel: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
        target: string;
    /**
      * Sets or retrieves a destination URL or an anchor point.
      */
        href: string;
    /**
      * Sets or retrieves the media type.
      */
        media: string;
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
        rev: string;
    /**
      * Sets or retrieves the MIME type of the object.
      */
        type: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
        charset: string;
    /**
      * Sets or retrieves the language code of the object.
      */
        hreflang: string;

        styleSheet: StyleSheet;
        sheet: StyleSheet;
}

interface SVGLocatable {

        farthestViewportElement: SVGElement;
        nearestViewportElement: SVGElement;
        getBBox(): SVGRect;
        getTransformToElement(element: SVGElement): SVGMatrix;
        getCTM(): SVGMatrix;
        getScreenCTM(): SVGMatrix;

}


declare class HTMLFontElement extends HTMLElement implements DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {

    /**
      * Sets or retrieves the current typeface family.
      */
        face: string;

        color: string;

        size: number;
}

interface SVGTitleElement extends SVGElement, SVGStylable, SVGLangSpace {


}

declare  var SVGTitleElement: {
        prototype: SVGTitleElement;
        new(): SVGTitleElement;
};
interface ControlRangeCollection {

        length: number;
        queryCommandValue(cmdID: string): any;
        remove(index: number): void;
        add(item: Element): void;
        queryCommandIndeterm(cmdID: string): boolean;
        scrollIntoView(varargStart?: any): void;
        item(index: number): Element;
        [index: number]: Element;
        execCommand(cmdID: string, showUI?: boolean, value?: any): boolean;
        addElement(item: Element): void;
        queryCommandState(cmdID: string): boolean;
        queryCommandSupported(cmdID: string): boolean;
        queryCommandEnabled(cmdID: string): boolean;
        queryCommandText(cmdID: string): string;
        select(): void;

}

declare  var ControlRangeCollection: {
        prototype: ControlRangeCollection;
        new(): ControlRangeCollection;
};
interface MSNamespaceInfo extends MSEventAttachmentTarget {

        urn: string;
        onreadystatechange: (ev: Event) => any;
        name: string;
        readyState: string;
        doImport(implementationUrl: string): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var MSNamespaceInfo: {
        prototype: MSNamespaceInfo;
        new(): MSNamespaceInfo;
};
interface WindowSessionStorage {

        sessionStorage: Storage;

}


interface SVGAnimatedTransformList {

        animVal: SVGTransformList;
        baseVal: SVGTransformList;

}

declare  var SVGAnimatedTransformList: {
        prototype: SVGAnimatedTransformList;
        new(): SVGAnimatedTransformList;
};
declare class HTMLTableCaptionElement extends HTMLElement {

    /**
      * Sets or retrieves the alignment of the caption or legend.
      */
        align: string;
    /**
      * Sets or retrieves whether the caption appears at the top or bottom of the table.
      */
        vAlign: string;
}

declare class HTMLOptionElement extends HTMLElement implements MSDataBindingExtensions {

    /**
      * Sets or retrieves the ordinal position of an option in a list box.
      */
        index: number;
    /**
      * Sets or retrieves the status of an option.
      */
        defaultSelected: boolean;
    /**
      * Sets or retrieves the value which is returned to the server when the form control is submitted.
      */
        value: string;
    /**
      * Sets or retrieves the text string specified by the option tag.
      */
        text: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;
    /**
      * Sets or retrieves a value that you can use to implement your own label functionality for the object.
      */
        label: string;
    /**
      * Sets or retrieves whether the option in the list box is the default item.
      */
        selected: boolean;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

declare class HTMLMapElement extends HTMLElement {

    /**
      * Sets or retrieves the name of the object.
      */
        name: string;
    /**
      * Retrieves a collection of the area objects defined for the given map object.
      */
        areas: HTMLAreasCollection;
}

declare class HTMLMenuElement extends HTMLElement implements DOML2DeprecatedListSpaceReduction {

        type: string;

        compact: boolean;
}

interface MouseWheelEvent extends MouseEvent {

        wheelDelta: number;
        initMouseWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, wheelDeltaArg: number): void;

}

declare  var MouseWheelEvent: {
        prototype: MouseWheelEvent;
        new(): MouseWheelEvent;
};
interface SVGFitToViewBox {

        viewBox: SVGAnimatedRect;
        preserveAspectRatio: SVGAnimatedPreserveAspectRatio;

}


interface SVGPointList {

        numberOfItems: number;
        replaceItem(newItem: SVGPoint, index: number): SVGPoint;
        getItem(index: number): SVGPoint;
        clear(): void;
        appendItem(newItem: SVGPoint): SVGPoint;
        initialize(newItem: SVGPoint): SVGPoint;
        removeItem(index: number): SVGPoint;
        insertItemBefore(newItem: SVGPoint, index: number): SVGPoint;

}

declare  var SVGPointList: {
        prototype: SVGPointList;
        new(): SVGPointList;
};
interface SVGAnimatedLengthList {

        animVal: SVGLengthList;
        baseVal: SVGLengthList;

}

declare  var SVGAnimatedLengthList: {
        prototype: SVGAnimatedLengthList;
        new(): SVGAnimatedLengthList;
};
interface SVGAnimatedPreserveAspectRatio {

        animVal: SVGPreserveAspectRatio;
        baseVal: SVGPreserveAspectRatio;

}

declare  var SVGAnimatedPreserveAspectRatio: {
        prototype: SVGAnimatedPreserveAspectRatio;
        new(): SVGAnimatedPreserveAspectRatio;
};
interface MSSiteModeEvent extends Event {

        buttonID: number;
        actionURL: string;

}

declare  var MSSiteModeEvent: {
        prototype: MSSiteModeEvent;
        new(): MSSiteModeEvent;
};
interface DOML2DeprecatedTextFlowControl {

        clear: string;

}


interface StyleSheetPageList {

        length: number;
        item(index: number): CSSPageRule;
        [index: number]: CSSPageRule;

}

declare  var StyleSheetPageList: {
        prototype: StyleSheetPageList;
        new(): StyleSheetPageList;
};
interface MSCSSProperties extends CSSStyleDeclaration {

        scrollbarShadowColor: string;
        scrollbarHighlightColor: string;
        layoutGridChar: string;
        layoutGridType: string;
        textAutospace: string;
        textKashidaSpace: string;
        writingMode: string;
        scrollbarFaceColor: string;
        backgroundPositionY: string;
        lineBreak: string;
        imeMode: string;
        msBlockProgression: string;
        layoutGridLine: string;
        scrollbarBaseColor: string;
        layoutGrid: string;
        layoutFlow: string;
        textKashida: string;
        filter: string;
        zoom: string;
        scrollbarArrowColor: string;
        behavior: string;
        backgroundPositionX: string;
        accelerator: string;
        layoutGridMode: string;
        textJustifyTrim: string;
        scrollbar3dLightColor: string;
        msInterpolationMode: string;
        scrollbarTrackColor: string;
        scrollbarDarkShadowColor: string;
        styleFloat: string;
        getAttribute(attributeName: string, flags?: number): any;
        setAttribute(attributeName: string, AttributeValue: any, flags?: number): void;
        removeAttribute(attributeName: string, flags?: number): boolean;

}

declare  var MSCSSProperties: {
        prototype: MSCSSProperties;
        new(): MSCSSProperties;
};
interface SVGExternalResourcesRequired {

        externalResourcesRequired: SVGAnimatedBoolean;

}


declare class HTMLImageElement extends HTMLElement implements MSImageResourceExtensions, MSDataBindingExtensions, MSResourceMetadata {

    /**
      * Sets or retrieves the width of the object.
      */
        width: number;
    /**
      * Sets or retrieves the vertical margin for the object.
      */
        vspace: number;
    /**
      * The original height of the image resource before sizing.
      */
        naturalHeight: number;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
        alt: string;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
        align: string;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
        src: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
        useMap: string;
    /**
      * The original width of the image resource before sizing.
      */
        naturalWidth: number;
    /**
      * Sets or retrieves the name of the object.
      */
        name: string;
    /**
      * Sets or retrieves the height of the object.
      */
        height: number;
    /**
      * Specifies the properties of a border drawn around an object.
      */
        border: string;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
        hspace: number;
    /**
      * Sets or retrieves a Uniform Resource Identifier (URI) to a long description of the object.
      */
        longDesc: string;
    /**
      * Contains the hypertext reference (HREF) of the URL.
      */
        href: string;
    /**
      * Sets or retrieves whether the image is a server-side image map.
      */
        isMap: boolean;
    /**
      * Retrieves whether the object is fully loaded.
      */
        complete: boolean;
    /**
      * Gets or sets the primary DLNA PlayTo device.
      */
        msPlayToPrimary: boolean;
    /**
      * Gets or sets whether the DLNA PlayTo device is available.
      */
        msPlayToDisabled: boolean;
    /**
      * Gets the source associated with the media element for use by the PlayToManager.
      */
        msPlayToSource: any;
        crossOrigin: string;
        msPlayToPreferredSourceUri: string;

        dynsrc: string;
        vrml: string;
        lowsrc: string;
        start: string;
        loop: number;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;

        protocol: string;
        fileSize: string;
        fileUpdatedDate: string;
        nameProp: string;
        fileCreatedDate: string;
        fileModifiedDate: string;
        mimeType: string;
}

declare class HTMLAreaElement extends HTMLElement {

    /**
      * Sets or retrieves the protocol portion of a URL.
      */
        protocol: string;
    /**
      * Sets or retrieves the substring of the href property that follows the question mark.
      */
        search: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
        alt: string;
    /**
      * Sets or retrieves the coordinates of the object.
      */
        coords: string;
    /**
      * Sets or retrieves the host name part of the location or URL. 
      */
        hostname: string;
    /**
      * Sets or retrieves the port number associated with a URL.
      */
        port: string;
    /**
      * Sets or retrieves the file name or path specified by the object.
      */
        pathname: string;
    /**
      * Sets or retrieves the hostname and port number of the location or URL.
      */
        host: string;
    /**
      * Sets or retrieves the subsection of the href property that follows the number sign (#).
      */
        hash: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
        target: string;
    /**
      * Sets or retrieves a destination URL or an anchor point.
      */
        href: string;
    /**
      * Sets or gets whether clicks in this region cause action.
      */
        noHref: boolean;
    /**
      * Sets or retrieves the shape of the object.
      */
        shape: string;
    /** 
      * Returns a string representation of an object.
      */
        toString(): string;
}

interface EventTarget {

        removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
        dispatchEvent(evt: Event): boolean;

}


interface SVGAngle {

        valueAsString: string;
        valueInSpecifiedUnits: number;
        value: number;
        unitType: number;
        newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
        convertToSpecifiedUnits(unitType: number): void;
        SVG_ANGLETYPE_RAD: number;
        SVG_ANGLETYPE_UNKNOWN: number;
        SVG_ANGLETYPE_UNSPECIFIED: number;
        SVG_ANGLETYPE_DEG: number;
        SVG_ANGLETYPE_GRAD: number;

}

declare  var SVGAngle: {
        prototype: SVGAngle;
        new(): SVGAngle;
        SVG_ANGLETYPE_RAD: number;
        SVG_ANGLETYPE_UNKNOWN: number;
        SVG_ANGLETYPE_UNSPECIFIED: number;
        SVG_ANGLETYPE_DEG: number;
        SVG_ANGLETYPE_GRAD: number;
};
declare class HTMLButtonElement extends HTMLElement implements MSDataBindingExtensions {

    /** 
      * Sets or retrieves the default or selected value of the control.
      */
        value: string;
        status: any;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;
    /** 
      * Sets or retrieves the name of the object.
      */
        name: string;
    /**
      * Gets the classification and default behavior of the button.
      */
        type: string;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
        validationMessage: string;
    /**
      * Overrides the target attribute on a form element.
      */
        formTarget: string;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
        willValidate: boolean;
    /**
      * Overrides the action attribute (where the data on a form is sent) on the parent form element.
      */
        formAction: string;
    /**
      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
      */
        autofocus: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
        validity: ValidityState;
    /**
      * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
      */
        formNoValidate: string;
    /**
      * Used to override the encoding (formEnctype attribute) specified on the form element.
      */
        formEnctype: string;
    /**
      * Overrides the submit method attribute previously specified on a form element.
      */
        formMethod: string;
    /**
      * Creates a TextRange object for the element.
      */
        createTextRange(): TextRange;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
        checkValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
        setCustomValidity(error: string): void;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

declare class HTMLSourceElement extends HTMLElement {

    /**
      * The address or URL of the a media resource that is to be considered.
      */
        src: string;
    /**
      * Gets or sets the intended media type of the media source.
     */
        media: string;
    /**
     * Gets or sets the MIME type of a media resource.
     */
        type: string;
        msKeySystem: string;
}

interface CanvasGradient {

        addColorStop(offset: number, color: string): void;

}

declare  var CanvasGradient: {
        prototype: CanvasGradient;
        new(): CanvasGradient;
};
interface KeyboardEvent extends UIEvent {

        location: number;
        keyCode: number;
        shiftKey: boolean;
        which: number;
        locale: string;
        key: string;
        altKey: boolean;
        metaKey: boolean;
        char: string;
        ctrlKey: boolean;
        repeat: boolean;
        charCode: number;
        getModifierState(keyArg: string): boolean;
        initKeyboardEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, keyArg: string, locationArg: number, modifiersListArg: string, repeat: boolean, locale: string): void;
        DOM_KEY_LOCATION_RIGHT: number;
        DOM_KEY_LOCATION_STANDARD: number;
        DOM_KEY_LOCATION_LEFT: number;
        DOM_KEY_LOCATION_NUMPAD: number;
        DOM_KEY_LOCATION_JOYSTICK: number;
        DOM_KEY_LOCATION_MOBILE: number;

}

declare  var KeyboardEvent: {
        prototype: KeyboardEvent;
        new(): KeyboardEvent;
        DOM_KEY_LOCATION_RIGHT: number;
        DOM_KEY_LOCATION_STANDARD: number;
        DOM_KEY_LOCATION_LEFT: number;
        DOM_KEY_LOCATION_NUMPAD: number;
        DOM_KEY_LOCATION_JOYSTICK: number;
        DOM_KEY_LOCATION_MOBILE: number;
};
interface MessageEvent extends Event {

        source: Window;
        origin: string;
        data: any;
        ports: any;
        initMessageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window): void;

}

declare  var MessageEvent: {
        prototype: MessageEvent;
        new(): MessageEvent;
};
interface SVGElement extends Element {

        onmouseover: (ev: MouseEvent) => any;
        viewportElement: SVGElement;
        onmousemove: (ev: MouseEvent) => any;
        onmouseout: (ev: MouseEvent) => any;
        ondblclick: (ev: MouseEvent) => any;
        onfocusout: (ev: FocusEvent) => any;
        onfocusin: (ev: FocusEvent) => any;
        xmlbase: string;
        onmousedown: (ev: MouseEvent) => any;
        onload: (ev: Event) => any;
        onmouseup: (ev: MouseEvent) => any;
        onclick: (ev: MouseEvent) => any;
        ownerSVGElement: SVGSVGElement;
        id: string;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var SVGElement: {
        prototype: SVGElement;
        new(): SVGElement;
};
declare class HTMLScriptElement extends HTMLElement {

    /**
      * Sets or retrieves the status of the script.
      */
        defer: boolean;
    /**
      * Retrieves or sets the text of the object as a string. 
      */
        text: string;
    /**
      * Retrieves the URL to an external file that contains the source code or data.
      */
        src: string;
    /** 
      * Sets or retrieves the object that is bound to the event script.
      */
        htmlFor: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
        charset: string;
    /**
      * Sets or retrieves the MIME type for the associated scripting engine.
      */
        type: string;
    /**
      * Sets or retrieves the event for which the script is written. 
      */
        event: string;
        async: boolean;
}

declare class HTMLTableRowElement extends HTMLElement implements HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {

    /**
      * Retrieves the position of the object in the rows collection for the table.
      */
        rowIndex: number;
    /**
      * Retrieves a collection of all cells in the table row.
      */
        cells: HTMLCollection;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
        align: string;
    /**
      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.
      */
        borderColorLight: any;
    /**
      * Retrieves the position of the object in the collection.
      */
        sectionRowIndex: number;
    /**
      * Sets or retrieves the border color of the object.
      */
        borderColor: any;
    /**
      * Sets or retrieves the height of the object.
      */
        height: any;
    /**
      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.
      */
        borderColorDark: any;
    /**
      * Removes the specified cell from the table row, as well as from the cells collection.
      * @param index Number that specifies the zero-based position of the cell to remove from the table row. If no value is provided, the last cell in the cells collection is deleted.
      */
        deleteCell(index?: number): void;
    /**
      * Creates a new cell in the table row, and adds the cell to the cells collection.
      * @param index Number that specifies where to insert the cell in the tr. The default value is -1, which appends the new cell to the end of the cells collection.
      */
        insertCell(index?: number): HTMLElement;

    /**
      * Sets or retrieves a value that you can use to implement your own ch functionality for the object.
      */
        ch: string;
    /**
      * Sets or retrieves how text and other content are vertically aligned within the object that contains them.
      */
        vAlign: string;
    /**
      * Sets or retrieves a value that you can use to implement your own chOff functionality for the object.
      */
        chOff: string;

        bgColor: any;
}

interface CanvasRenderingContext2D {

        miterLimit: number;
        font: string;
        globalCompositeOperation: string;
        msFillRule: string;
        lineCap: string;
        msImageSmoothingEnabled: boolean;
        lineDashOffset: number;
        shadowColor: string;
        lineJoin: string;
        shadowOffsetX: number;
        lineWidth: number;
        canvas: HTMLCanvasElement;
        strokeStyle: any;
        globalAlpha: number;
        shadowOffsetY: number;
        fillStyle: any;
        shadowBlur: number;
        textAlign: string;
        textBaseline: string;
        restore(): void;
        setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
        save(): void;
        arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
        measureText(text: string): TextMetrics;
        isPointInPath(x: number, y: number, fillRule?: string): boolean;
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
        putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX?: number, dirtyY?: number, dirtyWidth?: number, dirtyHeight?: number): void;
        rotate(angle: number): void;
        fillText(text: string, x: number, y: number, maxWidth?: number): void;
        translate(x: number, y: number): void;
        scale(x: number, y: number): void;
        createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
        lineTo(x: number, y: number): void;
        getLineDash(): number[];
        fill(fillRule?: string): void;
        createImageData(imageDataOrSw: any, sh?: number): ImageData;
        createPattern(image: HTMLElement, repetition: string): CanvasPattern;
        closePath(): void;
        rect(x: number, y: number, w: number, h: number): void;
        clip(fillRule?: string): void;
        clearRect(x: number, y: number, w: number, h: number): void;
        moveTo(x: number, y: number): void;
        getImageData(sx: number, sy: number, sw: number, sh: number): ImageData;
        fillRect(x: number, y: number, w: number, h: number): void;
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
        drawImage(image: HTMLElement, offsetX: number, offsetY: number, width?: number, height?: number, canvasOffsetX?: number, canvasOffsetY?: number, canvasImageWidth?: number, canvasImageHeight?: number): void;
        transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
        stroke(): void;
        strokeRect(x: number, y: number, w: number, h: number): void;
        setLineDash(segments: number[]): void;
        strokeText(text: string, x: number, y: number, maxWidth?: number): void;
        beginPath(): void;
        arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
        createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;

}

declare  var CanvasRenderingContext2D: {
        prototype: CanvasRenderingContext2D;
        new(): CanvasRenderingContext2D;
};
interface MSCSSRuleList {

        length: number;
        item(index?: number): CSSStyleRule;
        [index: number]: CSSStyleRule;

}

declare  var MSCSSRuleList: {
        prototype: MSCSSRuleList;
        new(): MSCSSRuleList;
};
interface SVGPathSegLinetoHorizontalAbs extends SVGPathSeg {

        x: number;

}

declare  var SVGPathSegLinetoHorizontalAbs: {
        prototype: SVGPathSegLinetoHorizontalAbs;
        new(): SVGPathSegLinetoHorizontalAbs;
};
interface SVGPathSegArcAbs extends SVGPathSeg {

        y: number;
        sweepFlag: boolean;
        r2: number;
        x: number;
        angle: number;
        r1: number;
        largeArcFlag: boolean;

}

declare  var SVGPathSegArcAbs: {
        prototype: SVGPathSegArcAbs;
        new(): SVGPathSegArcAbs;
};
interface SVGTransformList {

        numberOfItems: number;
        getItem(index: number): SVGTransform;
        consolidate(): SVGTransform;
        clear(): void;
        appendItem(newItem: SVGTransform): SVGTransform;
        initialize(newItem: SVGTransform): SVGTransform;
        removeItem(index: number): SVGTransform;
        insertItemBefore(newItem: SVGTransform, index: number): SVGTransform;
        replaceItem(newItem: SVGTransform, index: number): SVGTransform;
        createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;

}

declare  var SVGTransformList: {
        prototype: SVGTransformList;
        new(): SVGTransformList;
};
declare class HTMLHtmlElement extends HTMLElement {

    /**
      * Sets or retrieves the DTD version that governs the current document.
      */
        version: string;
}

interface SVGPathSegClosePath extends SVGPathSeg {


}

declare  var SVGPathSegClosePath: {
        prototype: SVGPathSegClosePath;
        new(): SVGPathSegClosePath;
};
declare class HTMLFrameElement extends HTMLElement implements GetSVGDocument, MSDataBindingExtensions {

    /**
      * Sets or retrieves the width of the object.
      */
        width: any;
    /**
      * Sets or retrieves whether the frame can be scrolled.
      */
        scrolling: string;
    /**
      * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
      */
        marginHeight: string;
    /**
      * Sets or retrieves the left and right margin widths before displaying the text in a frame.
      */
        marginWidth: string;
    /**
      * Sets or retrieves the border color of the object.
      */
        borderColor: any;
    /**
      * Sets or retrieves the amount of additional space between the frames.
      */
        frameSpacing: any;
    /**
      * Sets or retrieves whether to display a border for the frame.
      */
        frameBorder: string;
    /**
      * Sets or retrieves whether the user can resize the frame.
      */
        noResize: boolean;
    /**
      * Retrieves the object of the specified.
      */
        contentWindow: Window;
    /**
      * Sets or retrieves a URL to be loaded by the object.
      */
        src: string;
    /**
      * Sets or retrieves the frame name.
      */
        name: string;
    /**
      * Sets or retrieves the height of the object.
      */
        height: any;
    /**
      * Retrieves the document object of the page or frame.
      */
        contentDocument: Document;
    /**
      * Specifies the properties of a border drawn around an object.
      */
        border: string;
    /**
      * Sets or retrieves a URI to a long description of the object.
      */
        longDesc: string;
    /**
      * Raised when the object has been completely received from the server.
      */
        onload: (ev: Event) => any;
    /**
      * Sets the value indicating whether the source file of a frame or iframe has specific security restrictions applied.
      */
        security: any;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

        getSVGDocument(): Document;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

interface SVGAnimatedLength {

        animVal: SVGLength;
        baseVal: SVGLength;

}

declare  var SVGAnimatedLength: {
        prototype: SVGAnimatedLength;
        new(): SVGAnimatedLength;
};
interface SVGAnimatedPoints {

        points: SVGPointList;
        animatedPoints: SVGPointList;

}


interface SVGDefsElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {


}

declare  var SVGDefsElement: {
        prototype: SVGDefsElement;
        new(): SVGDefsElement;
};
declare class HTMLQuoteElement extends HTMLElement {

    /**
      * Sets or retrieves the date and time of a modification to the object.
      */
        dateTime: string;
    /**
      * Sets or retrieves reference information about the object.
      */
        cite: string;
}

interface CSSMediaRule extends CSSRule {

        media: MediaList;
        cssRules: CSSRuleList;
        insertRule(rule: string, index?: number): number;
        deleteRule(index?: number): void;

}

declare  var CSSMediaRule: {
        prototype: CSSMediaRule;
        new(): CSSMediaRule;
};
interface WindowModal {

        dialogArguments: any;
        returnValue: any;

}


interface XMLHttpRequest extends EventTarget {

        responseBody: any;
        status: number;
        readyState: number;
        responseText: string;
        responseXML: any;
        ontimeout: (ev: Event) => any;
        statusText: string;
        onreadystatechange: (ev: Event) => any;
        timeout: number;
        onload: (ev: Event) => any;
        response: any;
        withCredentials: boolean;
        onprogress: (ev: ProgressEvent) => any;
        onabort: (ev: UIEvent) => any;
        responseType: string;
        onloadend: (ev: ProgressEvent) => any;
        upload: XMLHttpRequestEventTarget;
        onerror: (ev: ErrorEvent) => any;
        onloadstart: (ev: Event) => any;
        msCaching: string;
        open(method: string, url: string, async?: boolean, user?: string, password?: string): void;
        send(data?: any): void;
        abort(): void;
        getAllResponseHeaders(): string;
        setRequestHeader(header: string, value: string): void;
        getResponseHeader(header: string): string;
        msCachingEnabled(): boolean;
        overrideMimeType(mime: string): void;
        LOADING: number;
        DONE: number;
        UNSENT: number;
        OPENED: number;
        HEADERS_RECEIVED: number;
        addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var XMLHttpRequest: {
        prototype: XMLHttpRequest;
        new(): XMLHttpRequest;
        LOADING: number;
        DONE: number;
        UNSENT: number;
        OPENED: number;
        HEADERS_RECEIVED: number;
        create(): XMLHttpRequest;
};
declare class HTMLTableHeaderCellElement extends HTMLTableCellElement {

    /**
      * Sets or retrieves the group of cells in a table to which the object's information applies.
      */
        scope: string;
}

declare class HTMLDListElement extends HTMLElement implements DOML2DeprecatedListSpaceReduction {


        compact: boolean;
}

interface MSDataBindingExtensions {

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;

}


interface SVGPathSegLinetoHorizontalRel extends SVGPathSeg {

        x: number;

}

declare  var SVGPathSegLinetoHorizontalRel: {
        prototype: SVGPathSegLinetoHorizontalRel;
        new(): SVGPathSegLinetoHorizontalRel;
};
interface SVGEllipseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {

        ry: SVGAnimatedLength;
        cx: SVGAnimatedLength;
        rx: SVGAnimatedLength;
        cy: SVGAnimatedLength;

}

declare  var SVGEllipseElement: {
        prototype: SVGEllipseElement;
        new(): SVGEllipseElement;
};
interface SVGAElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {

        target: SVGAnimatedString;

}

declare  var SVGAElement: {
        prototype: SVGAElement;
        new(): SVGAElement;
};
interface SVGStylable {

        className: SVGAnimatedString;
        style: CSSStyleDeclaration;

}


interface SVGTransformable extends SVGLocatable {

        transform: SVGAnimatedTransformList;

}


declare class HTMLFrameSetElement extends HTMLElement {

        ononline: (ev: Event) => any;
    /**
      * Sets or retrieves the border color of the object.
      */
        borderColor: any;
    /**
      * Sets or retrieves the frame heights of the object.
      */
        rows: string;
    /**
      * Sets or retrieves the frame widths of the object.
      */
        cols: string;
    /**
      * Fires when the object loses the input focus.
      */
        onblur: (ev: FocusEvent) => any;
    /**
      * Sets or retrieves the amount of additional space between the frames.
      */
        frameSpacing: any;
    /**
      * Fires when the object receives focus.
      */
        onfocus: (ev: FocusEvent) => any;
        onmessage: (ev: MessageEvent) => any;
        onerror: (ev: ErrorEvent) => any;
    /**
      * Sets or retrieves whether to display a border for the frame.
      */
        frameBorder: string;
        onresize: (ev: UIEvent) => any;
        name: string;
        onafterprint: (ev: Event) => any;
        onbeforeprint: (ev: Event) => any;
        onoffline: (ev: Event) => any;
        border: string;
        onunload: (ev: Event) => any;
        onhashchange: (ev: Event) => any;
        onload: (ev: Event) => any;
        onbeforeunload: (ev: BeforeUnloadEvent) => any;
        onstorage: (ev: StorageEvent) => any;
        onpageshow: (ev: PageTransitionEvent) => any;
        onpagehide: (ev: PageTransitionEvent) => any;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface Screen extends EventTarget {

        width: number;
        deviceXDPI: number;
        fontSmoothingEnabled: boolean;
        bufferDepth: number;
        logicalXDPI: number;
        systemXDPI: number;
        availHeight: number;
        height: number;
        logicalYDPI: number;
        systemYDPI: number;
        updateInterval: number;
        colorDepth: number;
        availWidth: number;
        deviceYDPI: number;
        pixelDepth: number;
        msOrientation: string;
        onmsorientationchange: (ev: any) => any;
        msLockOrientation(orientation: string): boolean;
        msLockOrientation(orientations: string[]): boolean;
        msUnlockOrientation(): void;
        addEventListener(type: "msorientationchange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var Screen: {
        prototype: Screen;
        new(): Screen;
};
interface Coordinates {

        altitudeAccuracy: number;
        longitude: number;
        latitude: number;
        speed: number;
        heading: number;
        altitude: number;
        accuracy: number;

}

declare  var Coordinates: {
        prototype: Coordinates;
        new(): Coordinates;
};
interface NavigatorGeolocation {

        geolocation: Geolocation;

}


interface NavigatorContentUtils {


}


interface EventListener {

        (evt: Event): void;

}


interface SVGLangSpace {

        xmllang: string;
        xmlspace: string;

}


interface DataTransfer {

        effectAllowed: string;
        dropEffect: string;
        types: DOMStringList;
        files: FileList;
        clearData(format?: string): boolean;
        setData(format: string, data: string): boolean;
        getData(format: string): string;

}

declare  var DataTransfer: {
        prototype: DataTransfer;
        new(): DataTransfer;
};
interface FocusEvent extends UIEvent {

        relatedTarget: EventTarget;
        initFocusEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, relatedTargetArg: EventTarget): void;

}

declare  var FocusEvent: {
        prototype: FocusEvent;
        new(): FocusEvent;
};
interface Range {

        startOffset: number;
        collapsed: boolean;
        endOffset: number;
        startContainer: Node;
        endContainer: Node;
        commonAncestorContainer: Node;
        setStart(refNode: Node, offset: number): void;
        setEndBefore(refNode: Node): void;
        setStartBefore(refNode: Node): void;
        selectNode(refNode: Node): void;
        detach(): void;
        getBoundingClientRect(): ClientRect;
        toString(): string;
        compareBoundaryPoints(how: number, sourceRange: Range): number;
        insertNode(newNode: Node): void;
        collapse(toStart: boolean): void;
        selectNodeContents(refNode: Node): void;
        cloneContents(): DocumentFragment;
        setEnd(refNode: Node, offset: number): void;
        cloneRange(): Range;
        getClientRects(): ClientRectList;
        surroundContents(newParent: Node): void;
        deleteContents(): void;
        setStartAfter(refNode: Node): void;
        extractContents(): DocumentFragment;
        setEndAfter(refNode: Node): void;
        createContextualFragment(fragment: string): DocumentFragment;
        END_TO_END: number;
        START_TO_START: number;
        START_TO_END: number;
        END_TO_START: number;

}

declare  var Range: {
        prototype: Range;
        new(): Range;
        END_TO_END: number;
        START_TO_START: number;
        START_TO_END: number;
        END_TO_START: number;
};
interface SVGPoint {

        y: number;
        x: number;
        matrixTransform(matrix: SVGMatrix): SVGPoint;

}

declare  var SVGPoint: {
        prototype: SVGPoint;
        new(): SVGPoint;
};
interface MSPluginsCollection {

        length: number;
        refresh(reload?: boolean): void;

}

declare  var MSPluginsCollection: {
        prototype: MSPluginsCollection;
        new(): MSPluginsCollection;
};
interface SVGAnimatedNumberList {

        animVal: SVGNumberList;
        baseVal: SVGNumberList;

}

declare  var SVGAnimatedNumberList: {
        prototype: SVGAnimatedNumberList;
        new(): SVGAnimatedNumberList;
};
interface SVGSVGElement extends SVGElement, SVGStylable, SVGZoomAndPan, DocumentEvent, SVGLangSpace, SVGLocatable, SVGTests, SVGFitToViewBox, SVGExternalResourcesRequired {

        width: SVGAnimatedLength;
        x: SVGAnimatedLength;
        contentStyleType: string;
        onzoom: (ev: any) => any;
        y: SVGAnimatedLength;
        viewport: SVGRect;
        onerror: (ev: ErrorEvent) => any;
        pixelUnitToMillimeterY: number;
        onresize: (ev: UIEvent) => any;
        screenPixelToMillimeterY: number;
        height: SVGAnimatedLength;
        onabort: (ev: UIEvent) => any;
        contentScriptType: string;
        pixelUnitToMillimeterX: number;
        currentTranslate: SVGPoint;
        onunload: (ev: Event) => any;
        currentScale: number;
        onscroll: (ev: UIEvent) => any;
        screenPixelToMillimeterX: number;
        setCurrentTime(seconds: number): void;
        createSVGLength(): SVGLength;
        getIntersectionList(rect: SVGRect, referenceElement: SVGElement): NodeList;
        unpauseAnimations(): void;
        createSVGRect(): SVGRect;
        checkIntersection(element: SVGElement, rect: SVGRect): boolean;
        unsuspendRedrawAll(): void;
        pauseAnimations(): void;
        suspendRedraw(maxWaitMilliseconds: number): number;
        deselectAll(): void;
        createSVGAngle(): SVGAngle;
        getEnclosureList(rect: SVGRect, referenceElement: SVGElement): NodeList;
        createSVGTransform(): SVGTransform;
        unsuspendRedraw(suspendHandleID: number): void;
        forceRedraw(): void;
        getCurrentTime(): number;
        checkEnclosure(element: SVGElement, rect: SVGRect): boolean;
        createSVGMatrix(): SVGMatrix;
        createSVGPoint(): SVGPoint;
        createSVGNumber(): SVGNumber;
        createSVGTransformFromMatrix(matrix: SVGMatrix): SVGTransform;
        getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
        getElementById(elementId: string): Element;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "zoom", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var SVGSVGElement: {
        prototype: SVGSVGElement;
        new(): SVGSVGElement;
};
declare class HTMLLabelElement extends HTMLElement implements MSDataBindingExtensions {

    /**
      * Sets or retrieves the object to which the given label object is assigned.
      */
        htmlFor: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

interface MSResourceMetadata {

        protocol: string;
        fileSize: string;
        fileUpdatedDate: string;
        nameProp: string;
        fileCreatedDate: string;
        fileModifiedDate: string;
        mimeType: string;

}


declare class HTMLLegendElement extends HTMLElement implements MSDataBindingExtensions {

    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        align: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

declare class HTMLDirectoryElement extends HTMLElement implements DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {


        compact: boolean;

        type: string;
}

interface SVGAnimatedInteger {

        animVal: number;
        baseVal: number;

}

declare  var SVGAnimatedInteger: {
        prototype: SVGAnimatedInteger;
        new(): SVGAnimatedInteger;
};
interface SVGTextElement extends SVGTextPositioningElement, SVGTransformable {


}

declare  var SVGTextElement: {
        prototype: SVGTextElement;
        new(): SVGTextElement;
};
interface SVGTSpanElement extends SVGTextPositioningElement {


}

declare  var SVGTSpanElement: {
        prototype: SVGTSpanElement;
        new(): SVGTSpanElement;
};
declare class HTMLLIElement extends HTMLElement implements DOML2DeprecatedListNumberingAndBulletStyle {

    /**
      * Sets or retrieves the value of a list item.
      */
        value: number;

        type: string;
}

interface SVGPathSegLinetoVerticalAbs extends SVGPathSeg {

        y: number;

}

declare  var SVGPathSegLinetoVerticalAbs: {
        prototype: SVGPathSegLinetoVerticalAbs;
        new(): SVGPathSegLinetoVerticalAbs;
};
interface MSStorageExtensions {

        remainingSpace: number;

}


interface SVGStyleElement extends SVGElement, SVGLangSpace {

        media: string;
        type: string;
        title: string;

}

declare  var SVGStyleElement: {
        prototype: SVGStyleElement;
        new(): SVGStyleElement;
};
interface MSCurrentStyleCSSProperties extends MSCSSProperties {

        blockDirection: string;
        clipBottom: string;
        clipLeft: string;
        clipRight: string;
        clipTop: string;
        hasLayout: string;

}

declare  var MSCurrentStyleCSSProperties: {
        prototype: MSCurrentStyleCSSProperties;
        new(): MSCurrentStyleCSSProperties;
};
interface MSHTMLCollectionExtensions {

        urns(urn: any): any;
        tags(tagName: any): any;

}


interface Storage extends MSStorageExtensions {

        length: number;
        getItem(key: string): any;
        [key: string]: any;
        setItem(key: string, data: string): void;
        clear(): void;
        removeItem(key: string): void;
        key(index: number): string;
        [index: number]: string;

}

declare  var Storage: {
        prototype: Storage;
        new(): Storage;
};
declare class HTMLIFrameElement extends HTMLElement implements GetSVGDocument, MSDataBindingExtensions {

    /**
      * Sets or retrieves the width of the object.
      */
        width: string;
    /**
      * Sets or retrieves whether the frame can be scrolled.
      */
        scrolling: string;
    /**
      * Sets or retrieves the top and bottom margin heights before displaying the text in a frame.
      */
        marginHeight: string;
    /**
      * Sets or retrieves the left and right margin widths before displaying the text in a frame.
      */
        marginWidth: string;
    /**
      * Sets or retrieves the amount of additional space between the frames.
      */
        frameSpacing: any;
    /**
      * Sets or retrieves whether to display a border for the frame.
      */
        frameBorder: string;
    /**
      * Sets or retrieves whether the user can resize the frame.
      */
        noResize: boolean;
    /**
      * Sets or retrieves the vertical margin for the object.
      */
        vspace: number;
    /**
      * Retrieves the object of the specified.
      */
        contentWindow: Window;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
        align: string;
    /**
      * Sets or retrieves a URL to be loaded by the object.
      */
        src: string;
    /**
      * Sets or retrieves the frame name.
      */
        name: string;
    /**
      * Sets or retrieves the height of the object.
      */
        height: string;
    /**
      * Specifies the properties of a border drawn around an object.
      */
        border: string;
    /**
      * Retrieves the document object of the page or frame.
      */
        contentDocument: Document;
    /**
      * Sets or retrieves the horizontal margin for the object.
      */
        hspace: number;
    /**
      * Sets or retrieves a URI to a long description of the object.
      */
        longDesc: string;
    /**
      * Sets the value indicating whether the source file of a frame or iframe has specific security restrictions applied.
      */
        security: any;
    /**
      * Raised when the object has been completely received from the server.
      */
        onload: (ev: Event) => any;
        sandbox: DOMSettableTokenList;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

        getSVGDocument(): Document;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

interface TextRangeCollection {

        length: number;
        item(index: number): TextRange;
        [index: number]: TextRange;

}

declare  var TextRangeCollection: {
        prototype: TextRangeCollection;
        new(): TextRangeCollection;
};
declare class HTMLBodyElement extends HTMLElement implements DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {

        scroll: string;
        ononline: (ev: Event) => any;
        onblur: (ev: FocusEvent) => any;
        noWrap: boolean;
        onfocus: (ev: FocusEvent) => any;
        onmessage: (ev: MessageEvent) => any;
        text: any;
        onerror: (ev: ErrorEvent) => any;
        bgProperties: string;
        onresize: (ev: UIEvent) => any;
        link: any;
        aLink: any;
        bottomMargin: any;
        topMargin: any;
        onafterprint: (ev: Event) => any;
        vLink: any;
        onbeforeprint: (ev: Event) => any;
        onoffline: (ev: Event) => any;
        onunload: (ev: Event) => any;
        onhashchange: (ev: Event) => any;
        onload: (ev: Event) => any;
        rightMargin: any;
        onbeforeunload: (ev: BeforeUnloadEvent) => any;
        leftMargin: any;
        onstorage: (ev: StorageEvent) => any;
        onpopstate: (ev: PopStateEvent) => any;
        onpageshow: (ev: PageTransitionEvent) => any;
        onpagehide: (ev: PageTransitionEvent) => any;
        createTextRange(): TextRange;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

        background: string;

        bgColor: any;
}

interface DocumentType extends Node {

        name: string;
        notations: NamedNodeMap;
        systemId: string;
        internalSubset: string;
        entities: NamedNodeMap;
        publicId: string;

}

declare  var DocumentType: {
        prototype: DocumentType;
        new(): DocumentType;
};
interface SVGRadialGradientElement extends SVGGradientElement {

        cx: SVGAnimatedLength;
        r: SVGAnimatedLength;
        cy: SVGAnimatedLength;
        fx: SVGAnimatedLength;
        fy: SVGAnimatedLength;

}

declare  var SVGRadialGradientElement: {
        prototype: SVGRadialGradientElement;
        new(): SVGRadialGradientElement;
};
interface MutationEvent extends Event {

        newValue: string;
        attrChange: number;
        attrName: string;
        prevValue: string;
        relatedNode: Node;
        initMutationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, relatedNodeArg: Node, prevValueArg: string, newValueArg: string, attrNameArg: string, attrChangeArg: number): void;
        MODIFICATION: number;
        REMOVAL: number;
        ADDITION: number;

}

declare  var MutationEvent: {
        prototype: MutationEvent;
        new(): MutationEvent;
        MODIFICATION: number;
        REMOVAL: number;
        ADDITION: number;
};
interface DragEvent extends MouseEvent {

        dataTransfer: DataTransfer;
        initDragEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, dataTransferArg: DataTransfer): void;
        msConvertURL(file: File, targetType: string, targetURL?: string): void;

}

declare  var DragEvent: {
        prototype: DragEvent;
        new(): DragEvent;
};
declare class HTMLTableSectionElement extends HTMLElement implements HTMLTableAlignment, DOML2DeprecatedBackgroundColorStyle {

    /**
      * Sets or retrieves a value that indicates the table alignment.
      */
        align: string;
    /**
      * Sets or retrieves the number of horizontal rows contained in the object.
      */
        rows: HTMLCollection;
    /**
      * Removes the specified row (tr) from the element and from the rows collection.
      * @param index Number that specifies the zero-based position in the rows collection of the row to remove.
      */
        deleteRow(index?: number): void;
    /**
      * Moves a table row to a new position.
      * @param indexFrom Number that specifies the index in the rows collection of the table row that is moved.
      * @param indexTo Number that specifies where the row is moved within the rows collection.
      */
        moveRow(indexFrom?: number, indexTo?: number): any;
    /**
      * Creates a new row (tr) in the table, and adds the row to the rows collection.
      * @param index Number that specifies where to insert the row in the rows collection. The default value is -1, which appends the new row to the end of the rows collection.
      */
        insertRow(index?: number): HTMLElement;

    /**
      * Sets or retrieves a value that you can use to implement your own ch functionality for the object.
      */
        ch: string;
    /**
      * Sets or retrieves how text and other content are vertically aligned within the object that contains them.
      */
        vAlign: string;
    /**
      * Sets or retrieves a value that you can use to implement your own chOff functionality for the object.
      */
        chOff: string;

        bgColor: any;
}

interface DOML2DeprecatedListNumberingAndBulletStyle {

        type: string;

}


declare class HTMLInputElement extends HTMLElement implements MSDataBindingExtensions {

    /**
      * Sets or retrieves the width of the object.
      */
        width: string;
        status: boolean;
    /**
      * Retrieves a reference to the form that the object is embedded in. 
      */
        form: HTMLFormElement;
    /**
      * Gets or sets the starting position or offset of a text selection.
      */
        selectionStart: number;
        indeterminate: boolean;
        readOnly: boolean;
        size: number;
        loop: number;
    /**
      * Gets or sets the end position or offset of a text selection.
      */
        selectionEnd: number;
    /**
      * Sets or retrieves the URL of the virtual reality modeling language (VRML) world to be displayed in the window.
      */
        vrml: string;
    /**
      * Sets or retrieves a lower resolution image to display.
      */
        lowsrc: string;
    /**
      * Sets or retrieves the vertical margin for the object.
      */
        vspace: number;
    /**
      * Sets or retrieves a comma-separated list of content types.
      */
        accept: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
        alt: string;
    /**
      * Sets or retrieves the state of the check box or radio button.
      */
        defaultChecked: boolean;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
        align: string;
    /**
      * Returns the value of the data at the cursor's current position.
      */
        value: string;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
        src: string;
    /**
      * Sets or retrieves the name of the object.
      */
        name: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
        useMap: string;
    /**
      * Sets or retrieves the height of the object.
      */
        height: string;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
        border: string;
        dynsrc: string;
    /**
      * Sets or retrieves the state of the check box or radio button.
      */
        checked: boolean;
    /**
      * Sets or retrieves the width of the border to draw around the object.
      */
        hspace: number;
    /**
      * Sets or retrieves the maximum number of characters that the user can enter in a text control.
      */
        maxLength: number;
    /**
      * Returns the content type of the object.
      */
        type: string;
    /**
      * Sets or retrieves the initial contents of the object.
      */
        defaultValue: string;
    /**
      * Retrieves whether the object is fully loaded.
      */
        complete: boolean;
        start: string;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
        validationMessage: string;
    /**
      * Returns a FileList object on a file type input object.
      */
        files: FileList;
    /**
      * Defines the maximum acceptable value for an input element with type="number".When used with the min and step attributes, lets you control the range and increment (such as only even numbers) that the user can enter into an input field.
      */
        max: string;
    /**
      * Overrides the target attribute on a form element.
      */
        formTarget: string;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
        willValidate: boolean;
    /**
      * Defines an increment or jump between values that you want to allow the user to enter. When used with the max and min attributes, lets you control the range and increment (for example, allow only even numbers) that the user can enter into an input field.
      */
        step: string;
    /**
      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
      */
        autofocus: boolean;
    /**
      * When present, marks an element that can't be submitted without a value.
      */
        required: boolean;
    /**
      * Used to override the encoding (formEnctype attribute) specified on the form element.
      */
        formEnctype: string;
    /**
      * Returns the input field value as a number.
      */
        valueAsNumber: number;
    /**
      * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
      */
        placeholder: string;
    /**
      * Overrides the submit method attribute previously specified on a form element.
      */
        formMethod: string;
    /**
      * Specifies the ID of a pre-defined datalist of options for an input element.
      */
        list: HTMLElement;
    /**
      * Specifies whether autocomplete is applied to an editable text field.
      */
        autocomplete: string;
    /**
      * Defines the minimum acceptable value for an input element with type="number". When used with the max and step attributes, lets you control the range and increment (such as even numbers only) that the user can enter into an input field.
      */
        min: string;
    /**
      * Overrides the action attribute (where the data on a form is sent) on the parent form element.
      */
        formAction: string;
    /**
      * Gets or sets a string containing a regular expression that the user's input must match.
      */
        pattern: string;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
        validity: ValidityState;
    /**
      * Overrides any validation or required attributes on a form or form elements to allow it to be submitted without validation. This can be used to create a "save draft"-type submit option.
      */
        formNoValidate: string;
    /**
      * Sets or retrieves the Boolean value indicating whether multiple items can be selected from a list.
      */
        multiple: boolean;
    /**
      * Creates a TextRange object for the element.
      */
        createTextRange(): TextRange;
    /**
      * Sets the start and end positions of a selection in a text field.
      * @param start The offset into the text field for the start of the selection.
      * @param end The offset into the text field for the end of the selection.
      */
        setSelectionRange(start: number, end: number): void;
    /**
      * Makes the selection equal to the current object.
      */
        select(): void;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
        checkValidity(): boolean;
    /**
      * Decrements a range input control's value by the value given by the Step attribute. If the optional parameter is used, it will decrement the input control's step value multiplied by the parameter's value.
      * @param n Value to decrement the value by.
      */
        stepDown(n?: number): void;
    /**
      * Increments a range input control's value by the value given by the Step attribute. If the optional parameter is used, will increment the input control's value by that value.
      * @param n Value to increment the value by.
      */
        stepUp(n?: number): void;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
        setCustomValidity(error: string): void;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

declare class HTMLAnchorElement extends HTMLElement implements MSDataBindingExtensions {

    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
        rel: string;
    /**
      * Contains the protocol of the URL.
      */
        protocol: string;
    /**
      * Sets or retrieves the substring of the href property that follows the question mark.
      */
        search: string;
    /**
      * Sets or retrieves the coordinates of the object.
      */
        coords: string;
    /**
      * Contains the hostname of a URL.
      */
        hostname: string;
    /**
      * Contains the pathname of the URL.
      */
        pathname: string;
        Methods: string;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
        target: string;
        protocolLong: string;
    /**
      * Sets or retrieves a destination URL or an anchor point.
      */
        href: string;
    /**
      * Sets or retrieves the shape of the object.
      */
        name: string;
    /**
      * Sets or retrieves the character set used to encode the object.
      */
        charset: string;
    /**
      * Sets or retrieves the language code of the object.
      */
        hreflang: string;
    /**
      * Sets or retrieves the port number associated with a URL.
      */
        port: string;
    /**
      * Contains the hostname and port values of the URL.
      */
        host: string;
    /**
      * Contains the anchor portion of the URL including the hash sign (#).
      */
        hash: string;
        nameProp: string;
        urn: string;
    /**
      * Sets or retrieves the relationship between the object and the destination of the link.
      */
        rev: string;
    /**
      * Sets or retrieves the shape of the object.
      */
        shape: string;
        type: string;
        mimeType: string;
    /**
      * Retrieves or sets the text of the object as a string. 
      */
        text: string;
    /** 
      * Returns a string representation of an object.
      */
        toString(): string;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

declare class HTMLParamElement extends HTMLElement {

    /**
      * Sets or retrieves the value of an input parameter for an element.
      */
        value: string;
    /**
      * Sets or retrieves the name of an input parameter for an element.
      */
        name: string;
    /**
      * Sets or retrieves the content type of the resource designated by the value attribute.
      */
        type: string;
    /**
      * Sets or retrieves the data type of the value attribute.
      */
        valueType: string;
}

interface SVGImageElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {

        y: SVGAnimatedLength;
        width: SVGAnimatedLength;
        preserveAspectRatio: SVGAnimatedPreserveAspectRatio;
        x: SVGAnimatedLength;
        height: SVGAnimatedLength;

}

declare  var SVGImageElement: {
        prototype: SVGImageElement;
        new(): SVGImageElement;
};
interface SVGAnimatedNumber {

        animVal: number;
        baseVal: number;

}

declare  var SVGAnimatedNumber: {
        prototype: SVGAnimatedNumber;
        new(): SVGAnimatedNumber;
};
interface PerformanceTiming {

        redirectStart: number;
        domainLookupEnd: number;
        responseStart: number;
        domComplete: number;
        domainLookupStart: number;
        loadEventStart: number;
        msFirstPaint: number;
        unloadEventEnd: number;
        fetchStart: number;
        requestStart: number;
        domInteractive: number;
        navigationStart: number;
        connectEnd: number;
        loadEventEnd: number;
        connectStart: number;
        responseEnd: number;
        domLoading: number;
        redirectEnd: number;
        unloadEventStart: number;
        domContentLoadedEventStart: number;
        domContentLoadedEventEnd: number;
        toJSON(): any;

}

declare  var PerformanceTiming: {
        prototype: PerformanceTiming;
        new(): PerformanceTiming;
};
declare class HTMLPreElement extends HTMLElement implements DOML2DeprecatedTextFlowControl {

    /**
      * Sets or gets a value that you can use to implement your own width functionality for the object.
      */
        width: number;
    /**
      * Indicates a citation by rendering text in italic type.
      */
        cite: string;

        clear: string;
}

interface EventException {

        code: number;
        message: string;
        name: string;
        toString(): string;
        DISPATCH_REQUEST_ERR: number;
        UNSPECIFIED_EVENT_TYPE_ERR: number;

}

declare  var EventException: {
        prototype: EventException;
        new(): EventException;
        DISPATCH_REQUEST_ERR: number;
        UNSPECIFIED_EVENT_TYPE_ERR: number;
};
interface MSNavigatorDoNotTrack {

        msDoNotTrack: string;
        removeSiteSpecificTrackingException(args: ExceptionInformation): void;
        removeWebWideTrackingException(args: ExceptionInformation): void;
        storeWebWideTrackingException(args: StoreExceptionsInformation): void;
        storeSiteSpecificTrackingException(args: StoreSiteSpecificExceptionsInformation): void;
        confirmSiteSpecificTrackingException(args: ConfirmSiteSpecificExceptionsInformation): boolean;
        confirmWebWideTrackingException(args: ExceptionInformation): boolean;

}


interface NavigatorOnLine {

        onLine: boolean;

}


interface WindowLocalStorage {

        localStorage: Storage;

}


interface SVGMetadataElement extends SVGElement {


}

declare  var SVGMetadataElement: {
        prototype: SVGMetadataElement;
        new(): SVGMetadataElement;
};
interface SVGPathSegArcRel extends SVGPathSeg {

        y: number;
        sweepFlag: boolean;
        r2: number;
        x: number;
        angle: number;
        r1: number;
        largeArcFlag: boolean;

}

declare  var SVGPathSegArcRel: {
        prototype: SVGPathSegArcRel;
        new(): SVGPathSegArcRel;
};
interface SVGPathSegMovetoAbs extends SVGPathSeg {

        y: number;
        x: number;

}

declare  var SVGPathSegMovetoAbs: {
        prototype: SVGPathSegMovetoAbs;
        new(): SVGPathSegMovetoAbs;
};
interface SVGStringList {

        numberOfItems: number;
        replaceItem(newItem: string, index: number): string;
        getItem(index: number): string;
        clear(): void;
        appendItem(newItem: string): string;
        initialize(newItem: string): string;
        removeItem(index: number): string;
        insertItemBefore(newItem: string, index: number): string;

}

declare  var SVGStringList: {
        prototype: SVGStringList;
        new(): SVGStringList;
};
interface XDomainRequest {

        timeout: number;
        onerror: (ev: ErrorEvent) => any;
        onload: (ev: Event) => any;
        onprogress: (ev: ProgressEvent) => any;
        ontimeout: (ev: Event) => any;
        responseText: string;
        contentType: string;
        open(method: string, url: string): void;
        abort(): void;
        send(data?: any): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var XDomainRequest: {
        prototype: XDomainRequest;
        new(): XDomainRequest;
        create(): XDomainRequest;
};
interface DOML2DeprecatedBackgroundColorStyle {

        bgColor: any;

}


interface ElementTraversal {

        childElementCount: number;
        previousElementSibling: Element;
        lastElementChild: Element;
        nextElementSibling: Element;
        firstElementChild: Element;

}


interface SVGLength {

        valueAsString: string;
        valueInSpecifiedUnits: number;
        value: number;
        unitType: number;
        newValueSpecifiedUnits(unitType: number, valueInSpecifiedUnits: number): void;
        convertToSpecifiedUnits(unitType: number): void;
        SVG_LENGTHTYPE_NUMBER: number;
        SVG_LENGTHTYPE_CM: number;
        SVG_LENGTHTYPE_PC: number;
        SVG_LENGTHTYPE_PERCENTAGE: number;
        SVG_LENGTHTYPE_MM: number;
        SVG_LENGTHTYPE_PT: number;
        SVG_LENGTHTYPE_IN: number;
        SVG_LENGTHTYPE_EMS: number;
        SVG_LENGTHTYPE_PX: number;
        SVG_LENGTHTYPE_UNKNOWN: number;
        SVG_LENGTHTYPE_EXS: number;

}

declare  var SVGLength: {
        prototype: SVGLength;
        new(): SVGLength;
        SVG_LENGTHTYPE_NUMBER: number;
        SVG_LENGTHTYPE_CM: number;
        SVG_LENGTHTYPE_PC: number;
        SVG_LENGTHTYPE_PERCENTAGE: number;
        SVG_LENGTHTYPE_MM: number;
        SVG_LENGTHTYPE_PT: number;
        SVG_LENGTHTYPE_IN: number;
        SVG_LENGTHTYPE_EMS: number;
        SVG_LENGTHTYPE_PX: number;
        SVG_LENGTHTYPE_UNKNOWN: number;
        SVG_LENGTHTYPE_EXS: number;
};
interface SVGPolygonElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {


}

declare  var SVGPolygonElement: {
        prototype: SVGPolygonElement;
        new(): SVGPolygonElement;
};
declare class HTMLPhraseElement extends HTMLElement {

    /**
      * Sets or retrieves the date and time of a modification to the object.
      */
        dateTime: string;
    /**
      * Sets or retrieves reference information about the object.
      */
        cite: string;
}

interface NavigatorStorageUtils {


}


interface SVGPathSegCurvetoCubicRel extends SVGPathSeg {

        y: number;
        y1: number;
        x2: number;
        x: number;
        x1: number;
        y2: number;

}

declare  var SVGPathSegCurvetoCubicRel: {
        prototype: SVGPathSegCurvetoCubicRel;
        new(): SVGPathSegCurvetoCubicRel;
};
interface SVGTextContentElement extends SVGElement, SVGStylable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {

        textLength: SVGAnimatedLength;
        lengthAdjust: SVGAnimatedEnumeration;
        getCharNumAtPosition(point: SVGPoint): number;
        getStartPositionOfChar(charnum: number): SVGPoint;
        getExtentOfChar(charnum: number): SVGRect;
        getComputedTextLength(): number;
        getSubStringLength(charnum: number, nchars: number): number;
        selectSubString(charnum: number, nchars: number): void;
        getNumberOfChars(): number;
        getRotationOfChar(charnum: number): number;
        getEndPositionOfChar(charnum: number): SVGPoint;
        LENGTHADJUST_SPACING: number;
        LENGTHADJUST_SPACINGANDGLYPHS: number;
        LENGTHADJUST_UNKNOWN: number;

}

declare  var SVGTextContentElement: {
        prototype: SVGTextContentElement;
        new(): SVGTextContentElement;
        LENGTHADJUST_SPACING: number;
        LENGTHADJUST_SPACINGANDGLYPHS: number;
        LENGTHADJUST_UNKNOWN: number;
};
interface DOML2DeprecatedColorProperty {

        color: string;

}


interface Location {

        hash: string;
        protocol: string;
        search: string;
        href: string;
        hostname: string;
        port: string;
        pathname: string;
        host: string;
        reload(flag?: boolean): void;
        replace(url: string): void;
        assign(url: string): void;
        toString(): string;

}

declare  var Location: {
        prototype: Location;
        new(): Location;
};
declare class HTMLTitleElement extends HTMLElement {

    /**
      * Retrieves or sets the text of the object as a string. 
      */
        text: string;
}

declare class HTMLStyleElement extends HTMLElement implements LinkStyle {

    /**
      * Sets or retrieves the media type.
      */
        media: string;
    /**
      * Retrieves the CSS language in which the style sheet is written.
      */
        type: string;

        styleSheet: StyleSheet;
        sheet: StyleSheet;
}

interface PerformanceEntry {

        name: string;
        startTime: number;
        duration: number;
        entryType: string;

}

declare  var PerformanceEntry: {
        prototype: PerformanceEntry;
        new(): PerformanceEntry;
};
interface SVGTransform {

        type: number;
        angle: number;
        matrix: SVGMatrix;
        setTranslate(tx: number, ty: number): void;
        setScale(sx: number, sy: number): void;
        setMatrix(matrix: SVGMatrix): void;
        setSkewY(angle: number): void;
        setRotate(angle: number, cx: number, cy: number): void;
        setSkewX(angle: number): void;
        SVG_TRANSFORM_SKEWX: number;
        SVG_TRANSFORM_UNKNOWN: number;
        SVG_TRANSFORM_SCALE: number;
        SVG_TRANSFORM_TRANSLATE: number;
        SVG_TRANSFORM_MATRIX: number;
        SVG_TRANSFORM_ROTATE: number;
        SVG_TRANSFORM_SKEWY: number;

}

declare  var SVGTransform: {
        prototype: SVGTransform;
        new(): SVGTransform;
        SVG_TRANSFORM_SKEWX: number;
        SVG_TRANSFORM_UNKNOWN: number;
        SVG_TRANSFORM_SCALE: number;
        SVG_TRANSFORM_TRANSLATE: number;
        SVG_TRANSFORM_MATRIX: number;
        SVG_TRANSFORM_ROTATE: number;
        SVG_TRANSFORM_SKEWY: number;
};
interface UIEvent extends Event {

        detail: number;
        view: Window;
        initUIEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number): void;

}

declare  var UIEvent: {
        prototype: UIEvent;
        new(): UIEvent;
};
interface SVGURIReference {

        href: SVGAnimatedString;

}


interface SVGPathSeg {

        pathSegType: number;
        pathSegTypeAsLetter: string;
        PATHSEG_MOVETO_REL: number;
        PATHSEG_LINETO_VERTICAL_REL: number;
        PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
        PATHSEG_CURVETO_QUADRATIC_REL: number;
        PATHSEG_CURVETO_CUBIC_ABS: number;
        PATHSEG_LINETO_HORIZONTAL_ABS: number;
        PATHSEG_CURVETO_QUADRATIC_ABS: number;
        PATHSEG_LINETO_ABS: number;
        PATHSEG_CLOSEPATH: number;
        PATHSEG_LINETO_HORIZONTAL_REL: number;
        PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
        PATHSEG_LINETO_REL: number;
        PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
        PATHSEG_ARC_REL: number;
        PATHSEG_CURVETO_CUBIC_REL: number;
        PATHSEG_UNKNOWN: number;
        PATHSEG_LINETO_VERTICAL_ABS: number;
        PATHSEG_ARC_ABS: number;
        PATHSEG_MOVETO_ABS: number;
        PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;

}

declare  var SVGPathSeg: {
        prototype: SVGPathSeg;
        new(): SVGPathSeg;
        PATHSEG_MOVETO_REL: number;
        PATHSEG_LINETO_VERTICAL_REL: number;
        PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number;
        PATHSEG_CURVETO_QUADRATIC_REL: number;
        PATHSEG_CURVETO_CUBIC_ABS: number;
        PATHSEG_LINETO_HORIZONTAL_ABS: number;
        PATHSEG_CURVETO_QUADRATIC_ABS: number;
        PATHSEG_LINETO_ABS: number;
        PATHSEG_CLOSEPATH: number;
        PATHSEG_LINETO_HORIZONTAL_REL: number;
        PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number;
        PATHSEG_LINETO_REL: number;
        PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number;
        PATHSEG_ARC_REL: number;
        PATHSEG_CURVETO_CUBIC_REL: number;
        PATHSEG_UNKNOWN: number;
        PATHSEG_LINETO_VERTICAL_ABS: number;
        PATHSEG_ARC_ABS: number;
        PATHSEG_MOVETO_ABS: number;
        PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number;
};
interface WheelEvent extends MouseEvent {

        deltaZ: number;
        deltaX: number;
        deltaMode: number;
        deltaY: number;
        initWheelEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, buttonArg: number, relatedTargetArg: EventTarget, modifiersListArg: string, deltaXArg: number, deltaYArg: number, deltaZArg: number, deltaMode: number): void;
        getCurrentPoint(element: Element): void;
        DOM_DELTA_PIXEL: number;
        DOM_DELTA_LINE: number;
        DOM_DELTA_PAGE: number;

}

declare  var WheelEvent: {
        prototype: WheelEvent;
        new(): WheelEvent;
        DOM_DELTA_PIXEL: number;
        DOM_DELTA_LINE: number;
        DOM_DELTA_PAGE: number;
};
interface MSEventAttachmentTarget {

        attachEvent(event: string, listener: EventListener): boolean;
        detachEvent(event: string, listener: EventListener): void;

}


interface SVGNumber {

        value: number;

}

declare  var SVGNumber: {
        prototype: SVGNumber;
        new(): SVGNumber;
};
interface SVGPathElement extends SVGElement, SVGStylable, SVGAnimatedPathData, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {

        getPathSegAtLength(distance: number): number;
        getPointAtLength(distance: number): SVGPoint;
        createSVGPathSegCurvetoQuadraticAbs(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticAbs;
        createSVGPathSegLinetoRel(x: number, y: number): SVGPathSegLinetoRel;
        createSVGPathSegCurvetoQuadraticRel(x: number, y: number, x1: number, y1: number): SVGPathSegCurvetoQuadraticRel;
        createSVGPathSegCurvetoCubicAbs(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicAbs;
        createSVGPathSegLinetoAbs(x: number, y: number): SVGPathSegLinetoAbs;
        createSVGPathSegClosePath(): SVGPathSegClosePath;
        createSVGPathSegCurvetoCubicRel(x: number, y: number, x1: number, y1: number, x2: number, y2: number): SVGPathSegCurvetoCubicRel;
        createSVGPathSegCurvetoQuadraticSmoothRel(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothRel;
        createSVGPathSegMovetoRel(x: number, y: number): SVGPathSegMovetoRel;
        createSVGPathSegCurvetoCubicSmoothAbs(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothAbs;
        createSVGPathSegMovetoAbs(x: number, y: number): SVGPathSegMovetoAbs;
        createSVGPathSegLinetoVerticalRel(y: number): SVGPathSegLinetoVerticalRel;
        createSVGPathSegArcRel(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcRel;
        createSVGPathSegCurvetoQuadraticSmoothAbs(x: number, y: number): SVGPathSegCurvetoQuadraticSmoothAbs;
        createSVGPathSegLinetoHorizontalRel(x: number): SVGPathSegLinetoHorizontalRel;
        getTotalLength(): number;
        createSVGPathSegCurvetoCubicSmoothRel(x: number, y: number, x2: number, y2: number): SVGPathSegCurvetoCubicSmoothRel;
        createSVGPathSegLinetoHorizontalAbs(x: number): SVGPathSegLinetoHorizontalAbs;
        createSVGPathSegLinetoVerticalAbs(y: number): SVGPathSegLinetoVerticalAbs;
        createSVGPathSegArcAbs(x: number, y: number, r1: number, r2: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean): SVGPathSegArcAbs;

}

declare  var SVGPathElement: {
        prototype: SVGPathElement;
        new(): SVGPathElement;
};
interface MSCompatibleInfo {

        version: string;
        userAgent: string;

}

declare  var MSCompatibleInfo: {
        prototype: MSCompatibleInfo;
        new(): MSCompatibleInfo;
};
interface Text extends CharacterData, MSNodeExtensions {

        wholeText: string;
        splitText(offset: number): Text;
        replaceWholeText(content: string): Text;

}

declare  var Text: {
        prototype: Text;
        new(): Text;
};
interface SVGAnimatedRect {

        animVal: SVGRect;
        baseVal: SVGRect;

}

declare  var SVGAnimatedRect: {
        prototype: SVGAnimatedRect;
        new(): SVGAnimatedRect;
};
interface CSSNamespaceRule extends CSSRule {

        namespaceURI: string;
        prefix: string;

}

declare  var CSSNamespaceRule: {
        prototype: CSSNamespaceRule;
        new(): CSSNamespaceRule;
};
interface SVGPathSegList {

        numberOfItems: number;
        replaceItem(newItem: SVGPathSeg, index: number): SVGPathSeg;
        getItem(index: number): SVGPathSeg;
        clear(): void;
        appendItem(newItem: SVGPathSeg): SVGPathSeg;
        initialize(newItem: SVGPathSeg): SVGPathSeg;
        removeItem(index: number): SVGPathSeg;
        insertItemBefore(newItem: SVGPathSeg, index: number): SVGPathSeg;

}

declare  var SVGPathSegList: {
        prototype: SVGPathSegList;
        new(): SVGPathSegList;
};
declare class HTMLUnknownElement extends HTMLElement implements MSDataBindingRecordSetReadonlyExtensions {


        recordset: any;
        namedRecordset(dataMember: string, hierarchy?: any): any;
}

declare class HTMLAudioElement extends HTMLMediaElement {

}

interface MSImageResourceExtensions {

        dynsrc: string;
        vrml: string;
        lowsrc: string;
        start: string;
        loop: number;

}


interface PositionError {

        code: number;
        message: string;
        toString(): string;
        POSITION_UNAVAILABLE: number;
        PERMISSION_DENIED: number;
        TIMEOUT: number;

}

declare  var PositionError: {
        prototype: PositionError;
        new(): PositionError;
        POSITION_UNAVAILABLE: number;
        PERMISSION_DENIED: number;
        TIMEOUT: number;
};
declare class HTMLTableCellElement extends HTMLElement implements HTMLTableAlignment, DOML2DeprecatedBackgroundStyle, DOML2DeprecatedBackgroundColorStyle {

    /**
      * Sets or retrieves the width of the object.
      */
        width: number;
    /**
      * Sets or retrieves a list of header cells that provide information for the object.
      */
        headers: string;
    /**
      * Retrieves the position of the object in the cells collection of a row.
      */
        cellIndex: number;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
        align: string;
    /**
      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.
      */
        borderColorLight: any;
    /**
      * Sets or retrieves the number columns in the table that the object should span.
      */
        colSpan: number;
    /**
      * Sets or retrieves the border color of the object. 
      */
        borderColor: any;
    /**
      * Sets or retrieves a comma-delimited list of conceptual categories associated with the object.
      */
        axis: string;
    /**
      * Sets or retrieves the height of the object.
      */
        height: any;
    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
        noWrap: boolean;
    /**
      * Sets or retrieves abbreviated text for the object.
      */
        abbr: string;
    /**
      * Sets or retrieves how many rows in a table the cell should span.
      */
        rowSpan: number;
    /**
      * Sets or retrieves the group of cells in a table to which the object's information applies.
      */
        scope: string;
    /**
      * Sets or retrieves the color for one of the two colors used to draw the 3-D border of the object.
      */
        borderColorDark: any;

    /**
      * Sets or retrieves a value that you can use to implement your own ch functionality for the object.
      */
        ch: string;
    /**
      * Sets or retrieves how text and other content are vertically aligned within the object that contains them.
      */
        vAlign: string;
    /**
      * Sets or retrieves a value that you can use to implement your own chOff functionality for the object.
      */
        chOff: string;

        background: string;

        bgColor: any;
}

interface SVGElementInstance extends EventTarget {

        previousSibling: SVGElementInstance;
        parentNode: SVGElementInstance;
        lastChild: SVGElementInstance;
        nextSibling: SVGElementInstance;
        childNodes: SVGElementInstanceList;
        correspondingUseElement: SVGUseElement;
        correspondingElement: SVGElement;
        firstChild: SVGElementInstance;

}

declare  var SVGElementInstance: {
        prototype: SVGElementInstance;
        new(): SVGElementInstance;
};
interface MSNamespaceInfoCollection {

        length: number;
        add(namespace?: string, urn?: string, implementationUrl?: any): any;
        item(index: any): any;
    // [index: any]: any;

}

declare  var MSNamespaceInfoCollection: {
        prototype: MSNamespaceInfoCollection;
        new(): MSNamespaceInfoCollection;
};
interface SVGCircleElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {

        cx: SVGAnimatedLength;
        r: SVGAnimatedLength;
        cy: SVGAnimatedLength;

}

declare  var SVGCircleElement: {
        prototype: SVGCircleElement;
        new(): SVGCircleElement;
};
interface StyleSheetList {

        length: number;
        item(index?: number): StyleSheet;
        [index: number]: StyleSheet;

}

declare  var StyleSheetList: {
        prototype: StyleSheetList;
        new(): StyleSheetList;
};
interface CSSImportRule extends CSSRule {

        styleSheet: CSSStyleSheet;
        href: string;
        media: MediaList;

}

declare  var CSSImportRule: {
        prototype: CSSImportRule;
        new(): CSSImportRule;
};
interface CustomEvent extends Event {

        detail: any;
        initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: any): void;

}

declare class HTMLBaseFontElement extends HTMLElement implements DOML2DeprecatedColorProperty {

    /**
      * Sets or retrieves the current typeface family.
      */
        face: string;
    /**
      * Sets or retrieves the font size of the object.
      */
        size: number;

        color: string;
}

declare class HTMLTextAreaElement extends HTMLElement implements MSDataBindingExtensions {

    /**
      * Retrieves or sets the text in the entry field of the textArea element.
      */
        value: string;
    /**
      * Sets or retrieves the value indicating whether the control is selected.
      */
        status: any;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;
    /**
      * Sets or retrieves the name of the object.
      */
        name: string;
    /**
      * Gets or sets the starting position or offset of a text selection.
      */
        selectionStart: number;
    /**
      * Sets or retrieves the number of horizontal rows contained in the object.
      */
        rows: number;
    /**
      * Sets or retrieves the width of the object.
      */
        cols: number;
    /**
      * Sets or retrieves the value indicated whether the content of the object is read-only.
      */
        readOnly: boolean;
    /**
      * Sets or retrieves how to handle wordwrapping in the object.
      */
        wrap: string;
    /**
      * Gets or sets the end position or offset of a text selection.
      */
        selectionEnd: number;
    /**
      * Retrieves the type of control.
      */
        type: string;
    /**
      * Sets or retrieves the initial contents of the object.
      */
        defaultValue: string;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
        validationMessage: string;
    /**
      * Provides a way to direct a user to a specific field when a document loads. This can provide both direction and convenience for a user, reducing the need to click or tab to a field when a page opens. This attribute is true when present on an element, and false when missing.
      */
        autofocus: boolean;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
        validity: ValidityState;
    /**
      * When present, marks an element that can't be submitted without a value.
      */
        required: boolean;
    /**
      * Sets or retrieves the maximum number of characters that the user can enter in a text control.
      */
        maxLength: number;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
        willValidate: boolean;
    /**
      * Gets or sets a text string that is displayed in an input field as a hint or prompt to users as the format or type of information they need to enter.The text appears in an input field until the user puts focus on the field.
      */
        placeholder: string;
    /**
      * Creates a TextRange object for the element.
      */
        createTextRange(): TextRange;
    /**
      * Sets the start and end positions of a selection in a text field.
      * @param start The offset into the text field for the start of the selection.
      * @param end The offset into the text field for the end of the selection.
      */
        setSelectionRange(start: number, end: number): void;
    /**
      * Highlights the input area of a form element.
      */
        select(): void;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
        checkValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
        setCustomValidity(error: string): void;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

interface Geolocation {

        clearWatch(watchId: number): void;
        getCurrentPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): void;
        watchPosition(successCallback: PositionCallback, errorCallback?: PositionErrorCallback, options?: PositionOptions): number;

}

declare  var Geolocation: {
        prototype: Geolocation;
        new(): Geolocation;
};
interface DOML2DeprecatedMarginStyle {

        vspace: number;
        hspace: number;

}


interface MSWindowModeless {

        dialogTop: any;
        dialogLeft: any;
        dialogWidth: any;
        dialogHeight: any;
        menuArguments: any;

}


interface DOML2DeprecatedAlignmentStyle {

        align: string;

}


declare class HTMLMarqueeElement extends HTMLElement implements MSDataBindingExtensions, DOML2DeprecatedBackgroundColorStyle {

        width: string;
        onbounce: (ev: Event) => any;
        vspace: number;
        trueSpeed: boolean;
        scrollAmount: number;
        scrollDelay: number;
        behavior: string;
        height: string;
        loop: number;
        direction: string;
        hspace: number;
        onstart: (ev: Event) => any;
        onfinish: (ev: Event) => any;
        stop(): void;
        start(): void;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "bounce", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "start", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "finish", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;

        bgColor: any;
}

interface SVGRect {

        y: number;
        width: number;
        x: number;
        height: number;

}

declare  var SVGRect: {
        prototype: SVGRect;
        new(): SVGRect;
};
interface MSNodeExtensions {

        swapNode(otherNode: Node): Node;
        removeNode(deep?: boolean): Node;
        replaceNode(replacement: Node): Node;

}


interface History {

        length: number;
        state: any;
        back(distance?: any): void;
        forward(distance?: any): void;
        go(delta?: any): void;
        replaceState(statedata: any, title: string, url?: string): void;
        pushState(statedata: any, title: string, url?: string): void;

}

declare  var History: {
        prototype: History;
        new(): History;
};
interface SVGPathSegCurvetoCubicAbs extends SVGPathSeg {

        y: number;
        y1: number;
        x2: number;
        x: number;
        x1: number;
        y2: number;

}

declare  var SVGPathSegCurvetoCubicAbs: {
        prototype: SVGPathSegCurvetoCubicAbs;
        new(): SVGPathSegCurvetoCubicAbs;
};
interface SVGPathSegCurvetoQuadraticAbs extends SVGPathSeg {

        y: number;
        y1: number;
        x: number;
        x1: number;

}

declare  var SVGPathSegCurvetoQuadraticAbs: {
        prototype: SVGPathSegCurvetoQuadraticAbs;
        new(): SVGPathSegCurvetoQuadraticAbs;
};
interface TimeRanges {

        length: number;
        start(index: number): number;
        end(index: number): number;

}

declare  var TimeRanges: {
        prototype: TimeRanges;
        new(): TimeRanges;
};
interface CSSRule {

        cssText: string;
        parentStyleSheet: CSSStyleSheet;
        parentRule: CSSRule;
        type: number;
        IMPORT_RULE: number;
        MEDIA_RULE: number;
        STYLE_RULE: number;
        NAMESPACE_RULE: number;
        PAGE_RULE: number;
        UNKNOWN_RULE: number;
        FONT_FACE_RULE: number;
        CHARSET_RULE: number;
        KEYFRAMES_RULE: number;
        KEYFRAME_RULE: number;
        VIEWPORT_RULE: number;

}

declare  var CSSRule: {
        prototype: CSSRule;
        new(): CSSRule;
        IMPORT_RULE: number;
        MEDIA_RULE: number;
        STYLE_RULE: number;
        NAMESPACE_RULE: number;
        PAGE_RULE: number;
        UNKNOWN_RULE: number;
        FONT_FACE_RULE: number;
        CHARSET_RULE: number;
        KEYFRAMES_RULE: number;
        KEYFRAME_RULE: number;
        VIEWPORT_RULE: number;
};
interface SVGPathSegLinetoAbs extends SVGPathSeg {

        y: number;
        x: number;

}

declare  var SVGPathSegLinetoAbs: {
        prototype: SVGPathSegLinetoAbs;
        new(): SVGPathSegLinetoAbs;
};
declare class HTMLModElement extends HTMLElement {

    /**
      * Sets or retrieves the date and time of a modification to the object.
      */
        dateTime: string;
    /**
      * Sets or retrieves reference information about the object.
      */
        cite: string;
}

interface SVGMatrix {

        e: number;
        c: number;
        a: number;
        b: number;
        d: number;
        f: number;
        multiply(secondMatrix: SVGMatrix): SVGMatrix;
        flipY(): SVGMatrix;
        skewY(angle: number): SVGMatrix;
        inverse(): SVGMatrix;
        scaleNonUniform(scaleFactorX: number, scaleFactorY: number): SVGMatrix;
        rotate(angle: number): SVGMatrix;
        flipX(): SVGMatrix;
        translate(x: number, y: number): SVGMatrix;
        scale(scaleFactor: number): SVGMatrix;
        rotateFromVector(x: number, y: number): SVGMatrix;
        skewX(angle: number): SVGMatrix;

}

declare  var SVGMatrix: {
        prototype: SVGMatrix;
        new(): SVGMatrix;
};
interface MSPopupWindow {

        document: Document;
        isOpen: boolean;
        show(x: number, y: number, w: number, h: number, element?: any): void;
        hide(): void;

}

declare  var MSPopupWindow: {
        prototype: MSPopupWindow;
        new(): MSPopupWindow;
};
interface BeforeUnloadEvent extends Event {

        returnValue: string;

}

declare  var BeforeUnloadEvent: {
        prototype: BeforeUnloadEvent;
        new(): BeforeUnloadEvent;
};
interface SVGUseElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired, SVGURIReference {

        y: SVGAnimatedLength;
        width: SVGAnimatedLength;
        animatedInstanceRoot: SVGElementInstance;
        instanceRoot: SVGElementInstance;
        x: SVGAnimatedLength;
        height: SVGAnimatedLength;

}

declare  var SVGUseElement: {
        prototype: SVGUseElement;
        new(): SVGUseElement;
};
interface Event {

        timeStamp: number;
        defaultPrevented: boolean;
        isTrusted: boolean;
        currentTarget: EventTarget;
        cancelBubble: boolean;
        target: EventTarget;
        eventPhase: number;
        cancelable: boolean;
        type: string;
        srcElement: Element;
        bubbles: boolean;
        initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
        stopPropagation(): void;
        stopImmediatePropagation(): void;
        preventDefault(): void;
        CAPTURING_PHASE: number;
        AT_TARGET: number;
        BUBBLING_PHASE: number;

}

declare  var Event: {
        prototype: Event;
        new(): Event;
        CAPTURING_PHASE: number;
        AT_TARGET: number;
        BUBBLING_PHASE: number;
};
interface ImageData {

        width: number;
        data: number[];
        height: number;

}

declare  var ImageData: {
        prototype: ImageData;
        new(): ImageData;
};
declare class HTMLTableColElement extends HTMLElement implements HTMLTableAlignment {

    /**
      * Sets or retrieves the width of the object.
      */
        width: any;
    /**
      * Sets or retrieves the alignment of the object relative to the display or table.
      */
        align: string;
    /**
      * Sets or retrieves the number of columns in the group.
      */
        span: number;

    /**
      * Sets or retrieves a value that you can use to implement your own ch functionality for the object.
      */
        ch: string;
    /**
      * Sets or retrieves how text and other content are vertically aligned within the object that contains them.
      */
        vAlign: string;
    /**
      * Sets or retrieves a value that you can use to implement your own chOff functionality for the object.
      */
        chOff: string;
}

interface SVGException {

        code: number;
        message: string;
        name: string;
        toString(): string;
        SVG_MATRIX_NOT_INVERTABLE: number;
        SVG_WRONG_TYPE_ERR: number;
        SVG_INVALID_VALUE_ERR: number;

}

declare  var SVGException: {
        prototype: SVGException;
        new(): SVGException;
        SVG_MATRIX_NOT_INVERTABLE: number;
        SVG_WRONG_TYPE_ERR: number;
        SVG_INVALID_VALUE_ERR: number;
};
interface SVGLinearGradientElement extends SVGGradientElement {

        y1: SVGAnimatedLength;
        x2: SVGAnimatedLength;
        x1: SVGAnimatedLength;
        y2: SVGAnimatedLength;

}

declare  var SVGLinearGradientElement: {
        prototype: SVGLinearGradientElement;
        new(): SVGLinearGradientElement;
};
interface HTMLTableAlignment {

    /**
      * Sets or retrieves a value that you can use to implement your own ch functionality for the object.
      */
        ch: string;
    /**
      * Sets or retrieves how text and other content are vertically aligned within the object that contains them.
      */
        vAlign: string;
    /**
      * Sets or retrieves a value that you can use to implement your own chOff functionality for the object.
      */
        chOff: string;

}


interface SVGAnimatedEnumeration {

        animVal: number;
        baseVal: number;

}

declare  var SVGAnimatedEnumeration: {
        prototype: SVGAnimatedEnumeration;
        new(): SVGAnimatedEnumeration;
};
interface DOML2DeprecatedSizeProperty {

        size: number;

}


declare class HTMLUListElement extends HTMLElement implements DOML2DeprecatedListSpaceReduction, DOML2DeprecatedListNumberingAndBulletStyle {


        compact: boolean;

        type: string;
}

interface SVGRectElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {

        y: SVGAnimatedLength;
        width: SVGAnimatedLength;
        ry: SVGAnimatedLength;
        rx: SVGAnimatedLength;
        x: SVGAnimatedLength;
        height: SVGAnimatedLength;

}

declare  var SVGRectElement: {
        prototype: SVGRectElement;
        new(): SVGRectElement;
};
interface ErrorEventHandler {

        (event: Event, source: string, fileno: number, columnNumber: number): void;

}


declare class HTMLDivElement extends HTMLElement implements MSDataBindingExtensions {

    /**
      * Sets or retrieves how the object is aligned with adjacent text. 
      */
        align: string;
    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
        noWrap: boolean;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

interface DOML2DeprecatedBorderStyle {

        border: string;

}


interface NamedNodeMap {

        length: number;
        removeNamedItemNS(namespaceURI: string, localName: string): Attr;
        item(index: number): Attr;
        [index: number]: Attr;
        removeNamedItem(name: string): Attr;
        getNamedItem(name: string): Attr;
    // [name: string]: Attr;
        setNamedItem(arg: Attr): Attr;
        getNamedItemNS(namespaceURI: string, localName: string): Attr;
        setNamedItemNS(arg: Attr): Attr;

}

declare  var NamedNodeMap: {
        prototype: NamedNodeMap;
        new(): NamedNodeMap;
};
interface MediaList {

        length: number;
        mediaText: string;
        deleteMedium(oldMedium: string): void;
        appendMedium(newMedium: string): void;
        item(index: number): string;
        [index: number]: string;
        toString(): string;

}

declare  var MediaList: {
        prototype: MediaList;
        new(): MediaList;
};
interface SVGPathSegCurvetoQuadraticSmoothAbs extends SVGPathSeg {

        y: number;
        x: number;

}

declare  var SVGPathSegCurvetoQuadraticSmoothAbs: {
        prototype: SVGPathSegCurvetoQuadraticSmoothAbs;
        new(): SVGPathSegCurvetoQuadraticSmoothAbs;
};
interface SVGPathSegCurvetoCubicSmoothRel extends SVGPathSeg {

        y: number;
        x2: number;
        x: number;
        y2: number;

}

declare  var SVGPathSegCurvetoCubicSmoothRel: {
        prototype: SVGPathSegCurvetoCubicSmoothRel;
        new(): SVGPathSegCurvetoCubicSmoothRel;
};
interface SVGLengthList {

        numberOfItems: number;
        replaceItem(newItem: SVGLength, index: number): SVGLength;
        getItem(index: number): SVGLength;
        clear(): void;
        appendItem(newItem: SVGLength): SVGLength;
        initialize(newItem: SVGLength): SVGLength;
        removeItem(index: number): SVGLength;
        insertItemBefore(newItem: SVGLength, index: number): SVGLength;

}

declare  var SVGLengthList: {
        prototype: SVGLengthList;
        new(): SVGLengthList;
};
interface ProcessingInstruction extends Node {

        target: string;
        data: string;

}

declare  var ProcessingInstruction: {
        prototype: ProcessingInstruction;
        new(): ProcessingInstruction;
};
interface MSWindowExtensions {

        status: string;
        onmouseleave: (ev: MouseEvent) => any;
        screenLeft: number;
        offscreenBuffering: any;
        maxConnectionsPerServer: number;
        onmouseenter: (ev: MouseEvent) => any;
        clipboardData: DataTransfer;
        defaultStatus: string;
        clientInformation: Navigator;
        closed: boolean;
        onhelp: (ev: Event) => any;
        external: External;
        event: MSEventObj;
        onfocusout: (ev: FocusEvent) => any;
        screenTop: number;
        onfocusin: (ev: FocusEvent) => any;
        showModelessDialog(url?: string, argument?: any, options?: any): Window;
        navigate(url: string): void;
        resizeBy(x?: number, y?: number): void;
        item(index: any): any;
        resizeTo(x?: number, y?: number): void;
        createPopup(arguments?: any): MSPopupWindow;
        toStaticHTML(html: string): string;
        execScript(code: string, language?: string): any;
        msWriteProfilerMark(profilerMarkName: string): void;
        moveTo(x?: number, y?: number): void;
        moveBy(x?: number, y?: number): void;
        showHelp(url: string, helpArg?: any, features?: string): void;
        captureEvents(): void;
        releaseEvents(): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}


interface MSBehaviorUrnsCollection {

        length: number;
        item(index: number): string;

}

declare  var MSBehaviorUrnsCollection: {
        prototype: MSBehaviorUrnsCollection;
        new(): MSBehaviorUrnsCollection;
};
interface CSSFontFaceRule extends CSSRule {

        style: CSSStyleDeclaration;

}

declare  var CSSFontFaceRule: {
        prototype: CSSFontFaceRule;
        new(): CSSFontFaceRule;
};
interface DOML2DeprecatedBackgroundStyle {

        background: string;

}


interface TextEvent extends UIEvent {

        inputMethod: number;
        data: string;
        locale: string;
        initTextEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, dataArg: string, inputMethod: number, locale: string): void;
        DOM_INPUT_METHOD_KEYBOARD: number;
        DOM_INPUT_METHOD_DROP: number;
        DOM_INPUT_METHOD_IME: number;
        DOM_INPUT_METHOD_SCRIPT: number;
        DOM_INPUT_METHOD_VOICE: number;
        DOM_INPUT_METHOD_UNKNOWN: number;
        DOM_INPUT_METHOD_PASTE: number;
        DOM_INPUT_METHOD_HANDWRITING: number;
        DOM_INPUT_METHOD_OPTION: number;
        DOM_INPUT_METHOD_MULTIMODAL: number;

}

declare  var TextEvent: {
        prototype: TextEvent;
        new(): TextEvent;
        DOM_INPUT_METHOD_KEYBOARD: number;
        DOM_INPUT_METHOD_DROP: number;
        DOM_INPUT_METHOD_IME: number;
        DOM_INPUT_METHOD_SCRIPT: number;
        DOM_INPUT_METHOD_VOICE: number;
        DOM_INPUT_METHOD_UNKNOWN: number;
        DOM_INPUT_METHOD_PASTE: number;
        DOM_INPUT_METHOD_HANDWRITING: number;
        DOM_INPUT_METHOD_OPTION: number;
        DOM_INPUT_METHOD_MULTIMODAL: number;
};
interface DocumentFragment extends Node, NodeSelector, MSEventAttachmentTarget, MSNodeExtensions {


}

declare  var DocumentFragment: {
        prototype: DocumentFragment;
        new(): DocumentFragment;
};
interface SVGPolylineElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGAnimatedPoints, SVGTests, SVGExternalResourcesRequired {


}

declare  var SVGPolylineElement: {
        prototype: SVGPolylineElement;
        new(): SVGPolylineElement;
};
interface SVGAnimatedPathData {

        pathSegList: SVGPathSegList;

}


interface Position {

        timestamp: Date;
        coords: Coordinates;

}

declare  var Position: {
        prototype: Position;
        new(): Position;
};
interface BookmarkCollection {

        length: number;
        item(index: number): any;
        [index: number]: any;

}

declare  var BookmarkCollection: {
        prototype: BookmarkCollection;
        new(): BookmarkCollection;
};
interface PerformanceMark extends PerformanceEntry {


}

declare  var PerformanceMark: {
        prototype: PerformanceMark;
        new(): PerformanceMark;
};
interface CSSPageRule extends CSSRule {

        pseudoClass: string;
        selectorText: string;
        selector: string;
        style: CSSStyleDeclaration;

}

declare  var CSSPageRule: {
        prototype: CSSPageRule;
        new(): CSSPageRule;
};
declare class HTMLBRElement extends HTMLElement {

    /**
      * Sets or retrieves the side on which floating objects are not to be positioned when any IHTMLBlockElement is inserted into the document.
      */
        clear: string;
}

interface MSNavigatorExtensions {

        userLanguage: string;
        plugins: MSPluginsCollection;
        cookieEnabled: boolean;
        appCodeName: string;
        cpuClass: string;
        appMinorVersion: string;
        connectionSpeed: number;
        browserLanguage: string;
        mimeTypes: MSMimeTypesCollection;
        systemLanguage: string;
        language: string;
        javaEnabled(): boolean;
        taintEnabled(): boolean;

}


declare class HTMLSpanElement extends HTMLElement implements MSDataBindingExtensions {


        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

declare class HTMLHeadElement extends HTMLElement {

        profile: string;
}

declare class HTMLHeadingElement extends HTMLElement implements DOML2DeprecatedTextFlowControl {

    /**
      * Sets or retrieves a value that indicates the table alignment.
      */
        align: string;

        clear: string;
}

declare class HTMLFormElement extends HTMLElement implements MSHTMLCollectionExtensions {

    /**
      * Sets or retrieves the number of objects in a collection.
      */
        length: number;
    /**
      * Sets or retrieves the window or frame at which to target content.
      */
        target: string;
    /**
      * Sets or retrieves a list of character encodings for input data that must be accepted by the server processing the form.
      */
        acceptCharset: string;
    /**
      * Sets or retrieves the encoding type for the form.
      */
        enctype: string;
    /**
      * Retrieves a collection, in source order, of all controls in a given form.
      */
        elements: HTMLCollection;
    /**
      * Sets or retrieves the URL to which the form content is sent for processing.
      */
        action: string;
    /**
      * Sets or retrieves the name of the object.
      */
        name: string;
    /**
      * Sets or retrieves how to send the form data to the server.
      */
        method: string;
    /**
      * Sets or retrieves the MIME encoding for the form.
      */
        encoding: string;
    /**
      * Specifies whether autocomplete is applied to an editable text field.
      */
        autocomplete: string;
    /**
      * Designates a form that is not validated when submitted.
      */
        noValidate: boolean;
    /**
      * Fires when the user resets a form.
      */
        reset(): void;
    /**
      * Retrieves a form object or an object from an elements collection.
      * @param name Variant of type Number or String that specifies the object or collection to retrieve. If this parameter is a Number, it is the zero-based index of the object. If this parameter is a string, all objects with matching name or id properties are retrieved, and a collection is returned if more than one match is made.
      * @param index Variant of type Number that specifies the zero-based index of the object to retrieve when a collection is returned.
      */
        item(name?: any, index?: any): any;
    /**
      * Fires when a FORM is about to be submitted.
      */
        submit(): void;
    /**
      * Retrieves a form object or an object from an elements collection.
      */
        namedItem(name: string): any;
        [name: string]: any;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
        checkValidity(): boolean;

        urns(urn: any): any;
        tags(tagName: any): any;
}

interface SVGZoomAndPan {

        zoomAndPan: number;
        SVG_ZOOMANDPAN_MAGNIFY: number;
        SVG_ZOOMANDPAN_UNKNOWN: number;
        SVG_ZOOMANDPAN_DISABLE: number;

}

declare  var SVGZoomAndPan: SVGZoomAndPan;


declare class HTMLMediaElement extends HTMLElement {

    /**
      * Gets the earliest possible position, in seconds, that the playback can begin.
      */
        initialTime: number;
    /**
      * Gets TimeRanges for the current media resource that has been played.
      */
        played: TimeRanges;
    /**
      * Gets the address or URL of the current media resource that is selected by IHTMLMediaElement.
      */
        currentSrc: string;
        readyState: any;
    /**
      * The autobuffer element is not supported by Internet Explorer 9. Use the preload element instead.
      */
        autobuffer: boolean;
    /**
      * Gets or sets a flag to specify whether playback should restart after it completes.
      */
        loop: boolean;
    /**
      * Gets information about whether the playback has ended or not.
      */
        ended: boolean;
    /**
      * Gets a collection of buffered time ranges.
      */
        buffered: TimeRanges;
    /**
      * Returns an object representing the current error state of the audio or video element.
      */
        error: MediaError;
    /**
      * Returns a TimeRanges object that represents the ranges of the current media resource that can be seeked.
      */
        seekable: TimeRanges;
    /**
      * Gets or sets a value that indicates whether to start playing the media automatically.
      */
        autoplay: boolean;
    /**
      * Gets or sets a flag that indicates whether the client provides a set of controls for the media (in case the developer does not include controls for the player).
      */
        controls: boolean;
    /**
      * Gets or sets the volume level for audio portions of the media element.
      */
        volume: number;
    /**
      * The address or URL of the a media resource that is to be considered.
      */
        src: string;
    /**
      * Gets or sets the current rate of speed for the media resource to play. This speed is expressed as a multiple of the normal speed of the media resource.
      */
        playbackRate: number;
    /**
      * Returns the duration in seconds of the current media resource. A NaN value is returned if duration is not available, or Infinity if the media resource is streaming.
      */
        duration: number;
    /**
      * Gets or sets a flag that indicates whether the audio (either audio or the audio track on video media) is muted.
      */
        muted: boolean;
    /**
      * Gets or sets the default playback rate when the user is not using fast forward or reverse for a video or audio resource.
      */
        defaultPlaybackRate: number;
    /**
      * Gets a flag that specifies whether playback is paused.
      */
        paused: boolean;
    /**
      * Gets a flag that indicates whether the the client is currently moving to a new playback position in the media resource.
      */
        seeking: boolean;
    /**
      * Gets or sets the current playback position, in seconds.
      */
        currentTime: number;
    /**
      * Gets or sets the current playback position, in seconds.
      */
        preload: string;
    /**
      * Gets the current network activity for the element.
      */
        networkState: number;
    /**
      * Specifies the purpose of the audio or video media, such as background audio or alerts.
      */
        msAudioCategory: string;
    /**
      * Specifies whether or not to enable low-latency playback on the media element.
      */
        msRealTime: boolean;
    /**
      * Gets or sets the primary DLNA PlayTo device.
      */
        msPlayToPrimary: boolean;
        textTracks: TextTrackList;
    /**
      * Gets or sets whether the DLNA PlayTo device is available.
      */
        msPlayToDisabled: boolean;
    /**
      * Returns an AudioTrackList object with the audio tracks for a given video element.
      */
        audioTracks: AudioTrackList;
    /**
      * Gets the source associated with the media element for use by the PlayToManager.
      */
        msPlayToSource: any;
    /**
      * Specifies the output device id that the audio will be sent to.
      */
        msAudioDeviceType: string;
    /**
      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
      */
        msPlayToPreferredSourceUri: string;
        onmsneedkey: (ev: MSMediaKeyNeededEvent) => any;
    /**
      * Gets the MSMediaKeys object, which is used for decrypting media data, that is associated with this media element.
      */
        msKeys: MSMediaKeys;
        msGraphicsTrustStatus: MSGraphicsTrust;
    /**
      * Pauses the current playback and sets paused to TRUE. This can be used to test whether the media is playing or paused. You can also use the pause or play events to tell whether the media is playing or not.
      */
        pause(): void;
    /**
      * Loads and starts playback of a media resource.
      */
        play(): void;
    /**
      * Fires immediately after the client loads the object.
      */
        load(): void;
    /**
      * Returns a string that specifies whether the client can play a given media resource type.
      */
        canPlayType(type: string): string;
    /**
      * Clears all effects from the media pipeline.
      */
        msClearEffects(): void;
    /**
      * Specifies the media protection manager for a given media pipeline.
      */
        msSetMediaProtectionManager(mediaProtectionManager?: any): void;
    /**
      * Inserts the specified audio effect into media pipeline.
      */
        msInsertAudioEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
        msSetMediaKeys(mediaKeys: MSMediaKeys): void;
        addTextTrack(kind: string, label?: string, language?: string): TextTrack;
        HAVE_METADATA: number;
        HAVE_CURRENT_DATA: number;
        HAVE_NOTHING: number;
        NETWORK_NO_SOURCE: number;
        HAVE_ENOUGH_DATA: number;
        NETWORK_EMPTY: number;
        NETWORK_LOADING: number;
        NETWORK_IDLE: number;
        HAVE_FUTURE_DATA: number;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface ElementCSSInlineStyle {

        runtimeStyle: MSStyleCSSProperties;
        currentStyle: MSCurrentStyleCSSProperties;
        doScroll(component?: any): void;
        componentFromPoint(x: number, y: number): string;

}


interface DOMParser {

        parseFromString(source: string, mimeType: string): Document;

}

declare  var DOMParser: {
        prototype: DOMParser;
        new(): DOMParser;
};
interface MSMimeTypesCollection {

        length: number;

}

declare  var MSMimeTypesCollection: {
        prototype: MSMimeTypesCollection;
        new(): MSMimeTypesCollection;
};
interface StyleSheet {

        disabled: boolean;
        ownerNode: Node;
        parentStyleSheet: StyleSheet;
        href: string;
        media: MediaList;
        type: string;
        title: string;

}

declare  var StyleSheet: {
        prototype: StyleSheet;
        new(): StyleSheet;
};
interface SVGTextPathElement extends SVGTextContentElement, SVGURIReference {

        startOffset: SVGAnimatedLength;
        method: SVGAnimatedEnumeration;
        spacing: SVGAnimatedEnumeration;
        TEXTPATH_SPACINGTYPE_EXACT: number;
        TEXTPATH_METHODTYPE_STRETCH: number;
        TEXTPATH_SPACINGTYPE_AUTO: number;
        TEXTPATH_SPACINGTYPE_UNKNOWN: number;
        TEXTPATH_METHODTYPE_UNKNOWN: number;
        TEXTPATH_METHODTYPE_ALIGN: number;

}

declare  var SVGTextPathElement: {
        prototype: SVGTextPathElement;
        new(): SVGTextPathElement;
        TEXTPATH_SPACINGTYPE_EXACT: number;
        TEXTPATH_METHODTYPE_STRETCH: number;
        TEXTPATH_SPACINGTYPE_AUTO: number;
        TEXTPATH_SPACINGTYPE_UNKNOWN: number;
        TEXTPATH_METHODTYPE_UNKNOWN: number;
        TEXTPATH_METHODTYPE_ALIGN: number;
};
declare class HTMLDTElement extends HTMLElement {

    /**
      * Sets or retrieves whether the browser automatically performs wordwrap.
      */
        noWrap: boolean;
}

interface NodeList {

        length: number;
        item(index: number): Node;
        [index: number]: Node;

}

declare  var NodeList: {
        prototype: NodeList;
        new(): NodeList;
};
interface XMLSerializer {

        serializeToString(target: Node): string;

}

declare  var XMLSerializer: {
        prototype: XMLSerializer;
        new(): XMLSerializer;
};
interface PerformanceMeasure extends PerformanceEntry {


}

declare  var PerformanceMeasure: {
        prototype: PerformanceMeasure;
        new(): PerformanceMeasure;
};
interface SVGGradientElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGExternalResourcesRequired, SVGURIReference {

        spreadMethod: SVGAnimatedEnumeration;
        gradientTransform: SVGAnimatedTransformList;
        gradientUnits: SVGAnimatedEnumeration;
        SVG_SPREADMETHOD_REFLECT: number;
        SVG_SPREADMETHOD_PAD: number;
        SVG_SPREADMETHOD_UNKNOWN: number;
        SVG_SPREADMETHOD_REPEAT: number;

}

declare  var SVGGradientElement: {
        prototype: SVGGradientElement;
        new(): SVGGradientElement;
        SVG_SPREADMETHOD_REFLECT: number;
        SVG_SPREADMETHOD_PAD: number;
        SVG_SPREADMETHOD_UNKNOWN: number;
        SVG_SPREADMETHOD_REPEAT: number;
};
interface NodeFilter {

        acceptNode(n: Node): number;
        SHOW_ENTITY_REFERENCE: number;
        SHOW_NOTATION: number;
        SHOW_ENTITY: number;
        SHOW_DOCUMENT: number;
        SHOW_PROCESSING_INSTRUCTION: number;
        FILTER_REJECT: number;
        SHOW_CDATA_SECTION: number;
        FILTER_ACCEPT: number;
        SHOW_ALL: number;
        SHOW_DOCUMENT_TYPE: number;
        SHOW_TEXT: number;
        SHOW_ELEMENT: number;
        SHOW_COMMENT: number;
        FILTER_SKIP: number;
        SHOW_ATTRIBUTE: number;
        SHOW_DOCUMENT_FRAGMENT: number;

}

declare  var NodeFilter: NodeFilter;


interface SVGNumberList {

        numberOfItems: number;
        replaceItem(newItem: SVGNumber, index: number): SVGNumber;
        getItem(index: number): SVGNumber;
        clear(): void;
        appendItem(newItem: SVGNumber): SVGNumber;
        initialize(newItem: SVGNumber): SVGNumber;
        removeItem(index: number): SVGNumber;
        insertItemBefore(newItem: SVGNumber, index: number): SVGNumber;

}

declare  var SVGNumberList: {
        prototype: SVGNumberList;
        new(): SVGNumberList;
};
interface MediaError {

        code: number;
        msExtendedCode: number;
        MEDIA_ERR_ABORTED: number;
        MEDIA_ERR_NETWORK: number;
        MEDIA_ERR_SRC_NOT_SUPPORTED: number;
        MEDIA_ERR_DECODE: number;
        MS_MEDIA_ERR_ENCRYPTED: number;

}

declare  var MediaError: {
        prototype: MediaError;
        new(): MediaError;
        MEDIA_ERR_ABORTED: number;
        MEDIA_ERR_NETWORK: number;
        MEDIA_ERR_SRC_NOT_SUPPORTED: number;
        MEDIA_ERR_DECODE: number;
        MS_MEDIA_ERR_ENCRYPTED: number;
};
declare class HTMLFieldSetElement extends HTMLElement {

    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
        align: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
        validationMessage: string;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
        validity: ValidityState;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
        willValidate: boolean;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
        checkValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
        setCustomValidity(error: string): void;
}

declare class HTMLBGSoundElement extends HTMLElement {

    /**
      * Sets or gets the value indicating how the volume of the background sound is divided between the left speaker and the right speaker.
      */
        balance: any;
    /**
      * Sets or gets the volume setting for the sound. 
      */
        volume: any;
    /**
      * Sets or gets the URL of a sound to play.
      */
        src: string;
    /**
      * Sets or retrieves the number of times a sound or video clip will loop when activated.
      */
        loop: number;
}

interface Comment extends CharacterData {

        text: string;

}

declare  var Comment: {
        prototype: Comment;
        new(): Comment;
};
interface PerformanceResourceTiming extends PerformanceEntry {

        redirectStart: number;
        redirectEnd: number;
        domainLookupEnd: number;
        responseStart: number;
        domainLookupStart: number;
        fetchStart: number;
        requestStart: number;
        connectEnd: number;
        connectStart: number;
        initiatorType: string;
        responseEnd: number;

}

declare  var PerformanceResourceTiming: {
        prototype: PerformanceResourceTiming;
        new(): PerformanceResourceTiming;
};
interface CanvasPattern {


}

declare  var CanvasPattern: {
        prototype: CanvasPattern;
        new(): CanvasPattern;
};
declare class HTMLHRElement extends HTMLElement implements DOML2DeprecatedColorProperty, DOML2DeprecatedSizeProperty {

    /**
      * Sets or retrieves the width of the object.
      */
        width: number;
    /**
      * Sets or retrieves how the object is aligned with adjacent text.
      */
        align: string;
    /**
      * Sets or retrieves whether the horizontal rule is drawn with 3-D shading.
      */
        noShade: boolean;

        color: string;

        size: number;
}

declare class HTMLObjectElement extends HTMLElement implements GetSVGDocument, DOML2DeprecatedMarginStyle, DOML2DeprecatedBorderStyle, DOML2DeprecatedAlignmentStyle, MSDataBindingExtensions, MSDataBindingRecordSetExtensions {

    /**
      * Sets or retrieves the width of the object.
      */
        width: string;
    /**
      * Sets or retrieves the Internet media type for the code associated with the object.
      */
        codeType: string;
    /**
      * Retrieves the contained object.
      */
        object: any;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;
    /**
      * Sets or retrieves the URL of the file containing the compiled Java class.
      */
        code: string;
    /**
      * Sets or retrieves a character string that can be used to implement your own archive functionality for the object.
      */
        archive: string;
    /**
      * Sets or retrieves a message to be displayed while an object is loading.
      */
        standby: string;
    /**
      * Sets or retrieves a text alternative to the graphic.
      */
        alt: string;
    /**
      * Sets or retrieves the class identifier for the object.
      */
        classid: string;
    /**
      * Sets or retrieves the name of the object.
      */
        name: string;
    /**
      * Sets or retrieves the URL, often with a bookmark extension (#name), to use as a client-side image map.
      */
        useMap: string;
    /**
      * Sets or retrieves the URL that references the data of the object.
      */
        data: string;
    /**
      * Sets or retrieves the height of the object.
      */
        height: string;
    /**
      * Retrieves the document object of the page or frame.
      */
        contentDocument: Document;
    /**
      * Gets or sets the optional alternative HTML script to execute if the object fails to load.
      */
        altHtml: string;
    /**
      * Sets or retrieves the URL of the component.
      */
        codeBase: string;
        declare: boolean;
    /**
      * Sets or retrieves the MIME type of the object.
      */
        type: string;
    /**
      * Retrieves a string of the URL where the object tag can be found. This is often the href of the document that the object is in, or the value set by a base element.
      */
        BaseHref: string;
    /**
      * Returns the error message that would be displayed if the user submits the form, or an empty string if no error message. It also triggers the standard error message, such as "this is a required field". The result is that the user sees validation messages without actually submitting.
      */
        validationMessage: string;
    /**
      * Returns a  ValidityState object that represents the validity states of an element.
      */
        validity: ValidityState;
    /**
      * Returns whether an element will successfully validate based on forms validation rules and constraints.
      */
        willValidate: boolean;
    /**
      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
      */
        msPlayToPreferredSourceUri: string;
    /**
      * Gets or sets the primary DLNA PlayTo device.
      */
        msPlayToPrimary: boolean;
    /**
      * Gets or sets whether the DLNA PlayTo device is available.
      */
        msPlayToDisabled: boolean;
        readyState: number;
    /**
      * Gets the source associated with the media element for use by the PlayToManager.
      */
        msPlayToSource: any;
    /**
      * Returns whether a form will validate when it is submitted, without having to submit it.
      */
        checkValidity(): boolean;
    /**
      * Sets a custom error message that is displayed when a form is submitted.
      * @param error Sets a custom error message that is displayed when a form is submitted.
      */
        setCustomValidity(error: string): void;

        getSVGDocument(): Document;

        vspace: number;
        hspace: number;

        border: string;

        align: string;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;

        recordset: any;
        namedRecordset(dataMember: string, hierarchy?: any): any;
}

declare class HTMLEmbedElement extends HTMLElement implements GetSVGDocument {

    /**
      * Sets or retrieves the width of the object.
      */
        width: string;
    /**
      * Retrieves the palette used for the embedded document.
      */
        palette: string;
    /**
      * Sets or retrieves a URL to be loaded by the object.
      */
        src: string;
    /**
      * Sets or retrieves the name of the object.
      */
        name: string;
        hidden: string;
    /**
      * Retrieves the URL of the plug-in used to view an embedded document.
      */
        pluginspage: string;
    /**
      * Sets or retrieves the height of the object.
      */
        height: string;
    /**
      * Sets or retrieves the height and width units of the embed object.
      */
        units: string;
    /**
      * Gets or sets the path to the preferred media source. This enables the Play To target device to stream the media content, which can be DRM protected, from a different location, such as a cloud media server.
      */
        msPlayToPreferredSourceUri: string;
    /**
      * Gets or sets the primary DLNA PlayTo device.
      */
        msPlayToPrimary: boolean;
    /**
      * Gets or sets whether the DLNA PlayTo device is available.
      */
        msPlayToDisabled: boolean;
        readyState: string;
    /**
      * Gets the source associated with the media element for use by the PlayToManager.
      */
        msPlayToSource: any;

        getSVGDocument(): Document;
}

interface StorageEvent extends Event {

        oldValue: any;
        newValue: any;
        url: string;
        storageArea: Storage;
        key: string;
        initStorageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, keyArg: string, oldValueArg: any, newValueArg: any, urlArg: string, storageAreaArg: Storage): void;

}

declare  var StorageEvent: {
        prototype: StorageEvent;
        new(): StorageEvent;
};
interface CharacterData extends Node {

        length: number;
        data: string;
        deleteData(offset: number, count: number): void;
        replaceData(offset: number, count: number, arg: string): void;
        appendData(arg: string): void;
        insertData(offset: number, arg: string): void;
        substringData(offset: number, count: number): string;

}

declare  var CharacterData: {
        prototype: CharacterData;
        new(): CharacterData;
};
declare class HTMLOptGroupElement extends HTMLElement implements MSDataBindingExtensions {

    /**
      * Sets or retrieves the ordinal position of an option in a list box.
      */
        index: number;
    /**
      * Sets or retrieves the status of an option.
      */
        defaultSelected: boolean;
    /**
      * Sets or retrieves the text string specified by the option tag.
      */
        text: string;
    /**
      * Sets or retrieves the value which is returned to the server when the form control is submitted.
      */
        value: string;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;
    /**
      * Sets or retrieves a value that you can use to implement your own label functionality for the object.
      */
        label: string;
    /**
      * Sets or retrieves whether the option in the list box is the default item.
      */
        selected: boolean;

        dataSrc: string;
        dataFormatAs: string;
        dataFld: string;
}

declare class HTMLIsIndexElement extends HTMLElement {

    /**
      * Retrieves a reference to the form that the object is embedded in. 
      */
        form: HTMLFormElement;
    /**
      * Sets or retrieves the URL to which the form content is sent for processing.
      */
        action: string;
        prompt: string;
}

interface SVGPathSegLinetoRel extends SVGPathSeg {

        y: number;
        x: number;

}

declare  var SVGPathSegLinetoRel: {
        prototype: SVGPathSegLinetoRel;
        new(): SVGPathSegLinetoRel;
};
interface DOMException {

        code: number;
        message: string;
        name: string;
        toString(): string;
        HIERARCHY_REQUEST_ERR: number;
        NO_MODIFICATION_ALLOWED_ERR: number;
        INVALID_MODIFICATION_ERR: number;
        NAMESPACE_ERR: number;
        INVALID_CHARACTER_ERR: number;
        TYPE_MISMATCH_ERR: number;
        ABORT_ERR: number;
        INVALID_STATE_ERR: number;
        SECURITY_ERR: number;
        NETWORK_ERR: number;
        WRONG_DOCUMENT_ERR: number;
        QUOTA_EXCEEDED_ERR: number;
        INDEX_SIZE_ERR: number;
        DOMSTRING_SIZE_ERR: number;
        SYNTAX_ERR: number;
        SERIALIZE_ERR: number;
        VALIDATION_ERR: number;
        NOT_FOUND_ERR: number;
        URL_MISMATCH_ERR: number;
        PARSE_ERR: number;
        NO_DATA_ALLOWED_ERR: number;
        NOT_SUPPORTED_ERR: number;
        INVALID_ACCESS_ERR: number;
        INUSE_ATTRIBUTE_ERR: number;
        INVALID_NODE_TYPE_ERR: number;
        DATA_CLONE_ERR: number;
        TIMEOUT_ERR: number;

}

declare  var DOMException: {
        prototype: DOMException;
        new(): DOMException;
        HIERARCHY_REQUEST_ERR: number;
        NO_MODIFICATION_ALLOWED_ERR: number;
        INVALID_MODIFICATION_ERR: number;
        NAMESPACE_ERR: number;
        INVALID_CHARACTER_ERR: number;
        TYPE_MISMATCH_ERR: number;
        ABORT_ERR: number;
        INVALID_STATE_ERR: number;
        SECURITY_ERR: number;
        NETWORK_ERR: number;
        WRONG_DOCUMENT_ERR: number;
        QUOTA_EXCEEDED_ERR: number;
        INDEX_SIZE_ERR: number;
        DOMSTRING_SIZE_ERR: number;
        SYNTAX_ERR: number;
        SERIALIZE_ERR: number;
        VALIDATION_ERR: number;
        NOT_FOUND_ERR: number;
        URL_MISMATCH_ERR: number;
        PARSE_ERR: number;
        NO_DATA_ALLOWED_ERR: number;
        NOT_SUPPORTED_ERR: number;
        INVALID_ACCESS_ERR: number;
        INUSE_ATTRIBUTE_ERR: number;
        INVALID_NODE_TYPE_ERR: number;
        DATA_CLONE_ERR: number;
        TIMEOUT_ERR: number;
};
interface SVGAnimatedBoolean {

        animVal: boolean;
        baseVal: boolean;

}

declare  var SVGAnimatedBoolean: {
        prototype: SVGAnimatedBoolean;
        new(): SVGAnimatedBoolean;
};
interface MSCompatibleInfoCollection {

        length: number;
        item(index: number): MSCompatibleInfo;

}

declare  var MSCompatibleInfoCollection: {
        prototype: MSCompatibleInfoCollection;
        new(): MSCompatibleInfoCollection;
};
interface SVGSwitchElement extends SVGElement, SVGStylable, SVGTransformable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {


}

declare  var SVGSwitchElement: {
        prototype: SVGSwitchElement;
        new(): SVGSwitchElement;
};
interface SVGPreserveAspectRatio {

        align: number;
        meetOrSlice: number;
        SVG_PRESERVEASPECTRATIO_NONE: number;
        SVG_PRESERVEASPECTRATIO_XMINYMID: number;
        SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
        SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
        SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
        SVG_MEETORSLICE_UNKNOWN: number;
        SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
        SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
        SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
        SVG_MEETORSLICE_MEET: number;
        SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
        SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
        SVG_MEETORSLICE_SLICE: number;
        SVG_PRESERVEASPECTRATIO_UNKNOWN: number;

}

declare  var SVGPreserveAspectRatio: {
        prototype: SVGPreserveAspectRatio;
        new(): SVGPreserveAspectRatio;
        SVG_PRESERVEASPECTRATIO_NONE: number;
        SVG_PRESERVEASPECTRATIO_XMINYMID: number;
        SVG_PRESERVEASPECTRATIO_XMAXYMIN: number;
        SVG_PRESERVEASPECTRATIO_XMINYMAX: number;
        SVG_PRESERVEASPECTRATIO_XMAXYMAX: number;
        SVG_MEETORSLICE_UNKNOWN: number;
        SVG_PRESERVEASPECTRATIO_XMAXYMID: number;
        SVG_PRESERVEASPECTRATIO_XMIDYMAX: number;
        SVG_PRESERVEASPECTRATIO_XMINYMIN: number;
        SVG_MEETORSLICE_MEET: number;
        SVG_PRESERVEASPECTRATIO_XMIDYMID: number;
        SVG_PRESERVEASPECTRATIO_XMIDYMIN: number;
        SVG_MEETORSLICE_SLICE: number;
        SVG_PRESERVEASPECTRATIO_UNKNOWN: number;
};
interface Attr extends Node {

        expando: boolean;
        specified: boolean;
        ownerElement: Element;
        value: string;
        name: string;

}

declare  var Attr: {
        prototype: Attr;
        new(): Attr;
};
interface PerformanceNavigation {

        redirectCount: number;
        type: number;
        toJSON(): any;
        TYPE_RELOAD: number;
        TYPE_RESERVED: number;
        TYPE_BACK_FORWARD: number;
        TYPE_NAVIGATE: number;

}

declare  var PerformanceNavigation: {
        prototype: PerformanceNavigation;
        new(): PerformanceNavigation;
        TYPE_RELOAD: number;
        TYPE_RESERVED: number;
        TYPE_BACK_FORWARD: number;
        TYPE_NAVIGATE: number;
};
interface SVGStopElement extends SVGElement, SVGStylable {

        offset: SVGAnimatedNumber;

}

declare  var SVGStopElement: {
        prototype: SVGStopElement;
        new(): SVGStopElement;
};
interface PositionCallback {

        (position: Position): void;

}


interface SVGSymbolElement extends SVGElement, SVGStylable, SVGLangSpace, SVGFitToViewBox, SVGExternalResourcesRequired {


}

declare  var SVGSymbolElement: {
        prototype: SVGSymbolElement;
        new(): SVGSymbolElement;
};
interface SVGElementInstanceList {

        length: number;
        item(index: number): SVGElementInstance;

}

declare  var SVGElementInstanceList: {
        prototype: SVGElementInstanceList;
        new(): SVGElementInstanceList;
};
interface CSSRuleList {

        length: number;
        item(index: number): CSSRule;
        [index: number]: CSSRule;

}

declare  var CSSRuleList: {
        prototype: CSSRuleList;
        new(): CSSRuleList;
};
interface MSDataBindingRecordSetExtensions {

        recordset: any;
        namedRecordset(dataMember: string, hierarchy?: any): any;

}


interface LinkStyle {

        styleSheet: StyleSheet;
        sheet: StyleSheet;

}


declare class HTMLVideoElement extends HTMLMediaElement {

    /**
      * Gets or sets the width of the video element.
      */
        width: number;
    /**
      * Gets the intrinsic width of a video in CSS pixels, or zero if the dimensions are not known.
      */
        videoWidth: number;
    /**
      * Gets the intrinsic height of a video in CSS pixels, or zero if the dimensions are not known.
      */
        videoHeight: number;
    /**
      * Gets or sets the height of the video element.
      */
        height: number;
    /**
      * Gets or sets a URL of an image to display, for example, like a movie poster. This can be a still frame from the video, or another image if no video data is available.
      */
        poster: string;
        msIsStereo3D: boolean;
        msStereo3DPackingMode: string;
        onMSVideoOptimalLayoutChanged: (ev: any) => any;
        onMSVideoFrameStepCompleted: (ev: any) => any;
        msStereo3DRenderMode: string;
        msIsLayoutOptimalForPlayback: boolean;
        msHorizontalMirror: boolean;
        onMSVideoFormatChanged: (ev: any) => any;
        msZoom: boolean;
        msInsertVideoEffect(activatableClassId: string, effectRequired: boolean, config?: any): void;
        msSetVideoRectangle(left: number, top: number, right: number, bottom: number): void;
        msFrameStep(forward: boolean): void;
        getVideoPlaybackQuality(): VideoPlaybackQuality;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgotpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mslostpointercapture", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "lostpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "gotpointercapture", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "move", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "deactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetchanged", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsdelete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "losecapture", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "controlselect", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "layoutcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "filterchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "datasetcomplete", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "errorupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cellchange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowexit", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "rowsinserted", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "propertychange", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforepaste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforecopy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "paste", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "moveend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "beforeeditfocus", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "afterupdate", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resizeend", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "dataavailable", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "beforedeactivate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "activate", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "movestart", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "selectstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "cut", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "copy", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "rowenter", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "mscontentzoom", listener: (ev: MSEventObj) => any, useCapture?: boolean): void;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "msmanipulationstatechanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "msneedkey", listener: (ev: MSMediaKeyNeededEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "MSVideoOptimalLayoutChanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "MSVideoFrameStepCompleted", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "MSVideoFormatChanged", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
}

interface ClientRectList {

        length: number;
        item(index: number): ClientRect;
        [index: number]: ClientRect;

}

declare  var ClientRectList: {
        prototype: ClientRectList;
        new(): ClientRectList;
};
interface SVGMaskElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGTests, SVGExternalResourcesRequired {

        y: SVGAnimatedLength;
        width: SVGAnimatedLength;
        maskUnits: SVGAnimatedEnumeration;
        maskContentUnits: SVGAnimatedEnumeration;
        x: SVGAnimatedLength;
        height: SVGAnimatedLength;

}

declare  var SVGMaskElement: {
        prototype: SVGMaskElement;
        new(): SVGMaskElement;
};
interface External {


}

declare  var External: {
        prototype: External;
        new(): External;
};
interface MSGestureEvent extends UIEvent {

        offsetY: number;
        translationY: number;
        velocityExpansion: number;
        velocityY: number;
        velocityAngular: number;
        translationX: number;
        velocityX: number;
        hwTimestamp: number;
        offsetX: number;
        screenX: number;
        rotation: number;
        expansion: number;
        clientY: number;
        screenY: number;
        scale: number;
        gestureObject: any;
        clientX: number;
        initGestureEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, offsetXArg: number, offsetYArg: number, translationXArg: number, translationYArg: number, scaleArg: number, expansionArg: number, rotationArg: number, velocityXArg: number, velocityYArg: number, velocityExpansionArg: number, velocityAngularArg: number, hwTimestampArg: number): void;
        MSGESTURE_FLAG_BEGIN: number;
        MSGESTURE_FLAG_END: number;
        MSGESTURE_FLAG_CANCEL: number;
        MSGESTURE_FLAG_INERTIA: number;
        MSGESTURE_FLAG_NONE: number;

}

declare  var MSGestureEvent: {
        prototype: MSGestureEvent;
        new(): MSGestureEvent;
        MSGESTURE_FLAG_BEGIN: number;
        MSGESTURE_FLAG_END: number;
        MSGESTURE_FLAG_CANCEL: number;
        MSGESTURE_FLAG_INERTIA: number;
        MSGESTURE_FLAG_NONE: number;
};
interface ErrorEvent extends Event {

        colno: number;
        filename: string;
        error: any;
        lineno: number;
        message: string;
        initErrorEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, messageArg: string, filenameArg: string, linenoArg: number): void;

}

declare  var ErrorEvent: {
        prototype: ErrorEvent;
        new(): ErrorEvent;
};
interface SVGFilterElement extends SVGElement, SVGUnitTypes, SVGStylable, SVGLangSpace, SVGURIReference, SVGExternalResourcesRequired {

        y: SVGAnimatedLength;
        width: SVGAnimatedLength;
        filterResX: SVGAnimatedInteger;
        filterUnits: SVGAnimatedEnumeration;
        primitiveUnits: SVGAnimatedEnumeration;
        x: SVGAnimatedLength;
        height: SVGAnimatedLength;
        filterResY: SVGAnimatedInteger;
        setFilterRes(filterResX: number, filterResY: number): void;

}

declare  var SVGFilterElement: {
        prototype: SVGFilterElement;
        new(): SVGFilterElement;
};
interface TrackEvent extends Event {

        track: any;

}

declare  var TrackEvent: {
        prototype: TrackEvent;
        new(): TrackEvent;
};
interface SVGFEMergeNodeElement extends SVGElement {

        in1: SVGAnimatedString;

}

declare  var SVGFEMergeNodeElement: {
        prototype: SVGFEMergeNodeElement;
        new(): SVGFEMergeNodeElement;
};
interface SVGFEFloodElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {


}

declare  var SVGFEFloodElement: {
        prototype: SVGFEFloodElement;
        new(): SVGFEFloodElement;
};
interface MSGesture {

        target: Element;
        addPointer(pointerId: number): void;
        stop(): void;

}

declare  var MSGesture: {
        prototype: MSGesture;
        new(): MSGesture;
};
interface TextTrackCue extends EventTarget {

        onenter: (ev: Event) => any;
        track: TextTrack;
        endTime: number;
        text: string;
        pauseOnExit: boolean;
        id: string;
        startTime: number;
        onexit: (ev: Event) => any;
        getCueAsHTML(): DocumentFragment;
        addEventListener(type: "enter", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "exit", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var TextTrackCue: {
        prototype: TextTrackCue;
        new(startTime: number, endTime: number, text: string): TextTrackCue;
};
interface MSStreamReader extends MSBaseReader {

        error: DOMError;
        readAsArrayBuffer(stream: MSStream, size?: number): void;
        readAsBlob(stream: MSStream, size?: number): void;
        readAsDataURL(stream: MSStream, size?: number): void;
        readAsText(stream: MSStream, encoding?: string, size?: number): void;

}

declare  var MSStreamReader: {
        prototype: MSStreamReader;
        new(): MSStreamReader;
};
interface DOMTokenList {

        length: number;
        contains(token: string): boolean;
        remove(token: string): void;
        toggle(token: string): boolean;
        add(token: string): void;
        item(index: number): string;
        [index: number]: string;
        toString(): string;

}

declare  var DOMTokenList: {
        prototype: DOMTokenList;
        new(): DOMTokenList;
};
interface SVGFEFuncAElement extends SVGComponentTransferFunctionElement {


}

declare  var SVGFEFuncAElement: {
        prototype: SVGFEFuncAElement;
        new(): SVGFEFuncAElement;
};
interface SVGFETileElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        in1: SVGAnimatedString;

}

declare  var SVGFETileElement: {
        prototype: SVGFETileElement;
        new(): SVGFETileElement;
};
interface SVGFEBlendElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        in2: SVGAnimatedString;
        mode: SVGAnimatedEnumeration;
        in1: SVGAnimatedString;
        SVG_FEBLEND_MODE_DARKEN: number;
        SVG_FEBLEND_MODE_UNKNOWN: number;
        SVG_FEBLEND_MODE_MULTIPLY: number;
        SVG_FEBLEND_MODE_NORMAL: number;
        SVG_FEBLEND_MODE_SCREEN: number;
        SVG_FEBLEND_MODE_LIGHTEN: number;

}

declare  var SVGFEBlendElement: {
        prototype: SVGFEBlendElement;
        new(): SVGFEBlendElement;
        SVG_FEBLEND_MODE_DARKEN: number;
        SVG_FEBLEND_MODE_UNKNOWN: number;
        SVG_FEBLEND_MODE_MULTIPLY: number;
        SVG_FEBLEND_MODE_NORMAL: number;
        SVG_FEBLEND_MODE_SCREEN: number;
        SVG_FEBLEND_MODE_LIGHTEN: number;
};
interface MessageChannel {

        port2: MessagePort;
        port1: MessagePort;

}

declare  var MessageChannel: {
        prototype: MessageChannel;
        new(): MessageChannel;
};
interface SVGFEMergeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {


}

declare  var SVGFEMergeElement: {
        prototype: SVGFEMergeElement;
        new(): SVGFEMergeElement;
};
interface TransitionEvent extends Event {

        propertyName: string;
        elapsedTime: number;
        initTransitionEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, propertyNameArg: string, elapsedTimeArg: number): void;

}

declare  var TransitionEvent: {
        prototype: TransitionEvent;
        new(): TransitionEvent;
};
interface MediaQueryList {

        matches: boolean;
        media: string;
        addListener(listener: MediaQueryListListener): void;
        removeListener(listener: MediaQueryListListener): void;

}

declare  var MediaQueryList: {
        prototype: MediaQueryList;
        new(): MediaQueryList;
};
interface DOMError {

        name: string;
        toString(): string;

}

declare  var DOMError: {
        prototype: DOMError;
        new(): DOMError;
};
interface CloseEvent extends Event {

        wasClean: boolean;
        reason: string;
        code: number;
        initCloseEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, wasCleanArg: boolean, codeArg: number, reasonArg: string): void;

}

declare  var CloseEvent: {
        prototype: CloseEvent;
        new(): CloseEvent;
};
interface WebSocket extends EventTarget {

        protocol: string;
        readyState: number;
        bufferedAmount: number;
        onopen: (ev: Event) => any;
        extensions: string;
        onmessage: (ev: MessageEvent) => any;
        onclose: (ev: CloseEvent) => any;
        onerror: (ev: ErrorEvent) => any;
        binaryType: string;
        url: string;
        close(code?: number, reason?: string): void;
        send(data: any): void;
        OPEN: number;
        CLOSING: number;
        CONNECTING: number;
        CLOSED: number;
        addEventListener(type: "open", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "close", listener: (ev: CloseEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var WebSocket: {
        prototype: WebSocket;
        new(url: string, protocols?: string): WebSocket;
        new(url: string, protocols?: string[]): WebSocket;
        OPEN: number;
        CLOSING: number;
        CONNECTING: number;
        CLOSED: number;
};
interface SVGFEPointLightElement extends SVGElement {

        y: SVGAnimatedNumber;
        x: SVGAnimatedNumber;
        z: SVGAnimatedNumber;

}

declare  var SVGFEPointLightElement: {
        prototype: SVGFEPointLightElement;
        new(): SVGFEPointLightElement;
};
interface ProgressEvent extends Event {

        loaded: number;
        lengthComputable: boolean;
        total: number;
        initProgressEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, lengthComputableArg: boolean, loadedArg: number, totalArg: number): void;

}

declare  var ProgressEvent: {
        prototype: ProgressEvent;
        new(): ProgressEvent;
};
interface IDBObjectStore {

        indexNames: DOMStringList;
        name: string;
        transaction: IDBTransaction;
        keyPath: string;
        count(key?: any): IDBRequest;
        add(value: any, key?: any): IDBRequest;
        clear(): IDBRequest;
        createIndex(name: string, keyPath: string, optionalParameters?: any): IDBIndex;
        put(value: any, key?: any): IDBRequest;
        openCursor(range?: any, direction?: string): IDBRequest;
        deleteIndex(indexName: string): void;
        index(name: string): IDBIndex;
        get(key: any): IDBRequest;
        delete(key: any): IDBRequest;

}

declare  var IDBObjectStore: {
        prototype: IDBObjectStore;
        new(): IDBObjectStore;
};
interface SVGFEGaussianBlurElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        stdDeviationX: SVGAnimatedNumber;
        in1: SVGAnimatedString;
        stdDeviationY: SVGAnimatedNumber;
        setStdDeviation(stdDeviationX: number, stdDeviationY: number): void;

}

declare  var SVGFEGaussianBlurElement: {
        prototype: SVGFEGaussianBlurElement;
        new(): SVGFEGaussianBlurElement;
};
interface SVGFilterPrimitiveStandardAttributes extends SVGStylable {

        y: SVGAnimatedLength;
        width: SVGAnimatedLength;
        x: SVGAnimatedLength;
        height: SVGAnimatedLength;
        result: SVGAnimatedString;

}


interface IDBVersionChangeEvent extends Event {

        newVersion: number;
        oldVersion: number;

}

declare  var IDBVersionChangeEvent: {
        prototype: IDBVersionChangeEvent;
        new(): IDBVersionChangeEvent;
};
interface IDBIndex {

        unique: boolean;
        name: string;
        keyPath: string;
        objectStore: IDBObjectStore;
        count(key?: any): IDBRequest;
        getKey(key: any): IDBRequest;
        openKeyCursor(range?: IDBKeyRange, direction?: string): IDBRequest;
        get(key: any): IDBRequest;
        openCursor(range?: IDBKeyRange, direction?: string): IDBRequest;

}

declare  var IDBIndex: {
        prototype: IDBIndex;
        new(): IDBIndex;
};
interface FileList {

        length: number;
        item(index: number): File;
        [index: number]: File;

}

declare  var FileList: {
        prototype: FileList;
        new(): FileList;
};
interface IDBCursor {

        source: any;
        direction: string;
        key: any;
        primaryKey: any;
        advance(count: number): void;
        delete(): IDBRequest;
        continue(key?: any): void;
        update(value: any): IDBRequest;
        PREV: string;
        PREV_NO_DUPLICATE: string;
        NEXT: string;
        NEXT_NO_DUPLICATE: string;

}

declare  var IDBCursor: {
        prototype: IDBCursor;
        new(): IDBCursor;
        PREV: string;
        PREV_NO_DUPLICATE: string;
        NEXT: string;
        NEXT_NO_DUPLICATE: string;
};
interface SVGFESpecularLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        kernelUnitLengthY: SVGAnimatedNumber;
        surfaceScale: SVGAnimatedNumber;
        specularExponent: SVGAnimatedNumber;
        in1: SVGAnimatedString;
        kernelUnitLengthX: SVGAnimatedNumber;
        specularConstant: SVGAnimatedNumber;

}

declare  var SVGFESpecularLightingElement: {
        prototype: SVGFESpecularLightingElement;
        new(): SVGFESpecularLightingElement;
};
interface File extends Blob {

        lastModifiedDate: any;
        name: string;

}

declare  var File: {
        prototype: File;
        new(): File;
};
interface URL {

        revokeObjectURL(url: string): void;
        createObjectURL(object: any, options?: ObjectURLOptions): string;

}

declare  var URL: URL;


interface IDBCursorWithValue extends IDBCursor {

        value: any;

}

declare  var IDBCursorWithValue: {
        prototype: IDBCursorWithValue;
        new(): IDBCursorWithValue;
};
interface XMLHttpRequestEventTarget extends EventTarget {

        onprogress: (ev: ProgressEvent) => any;
        onerror: (ev: ErrorEvent) => any;
        onload: (ev: Event) => any;
        ontimeout: (ev: Event) => any;
        onabort: (ev: UIEvent) => any;
        onloadstart: (ev: Event) => any;
        onloadend: (ev: ProgressEvent) => any;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "timeout", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var XMLHttpRequestEventTarget: {
        prototype: XMLHttpRequestEventTarget;
        new(): XMLHttpRequestEventTarget;
};
interface IDBEnvironment {

        msIndexedDB: IDBFactory;
        indexedDB: IDBFactory;

}


interface AudioTrackList extends EventTarget {

        length: number;
        onchange: (ev: Event) => any;
        onaddtrack: (ev: TrackEvent) => any;
        onremovetrack: (ev: any) => any;
        getTrackById(id: string): AudioTrack;
        item(index: number): AudioTrack;
        [index: number]: AudioTrack;
        addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "removetrack", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var AudioTrackList: {
        prototype: AudioTrackList;
        new(): AudioTrackList;
};
interface MSBaseReader extends EventTarget {

        onprogress: (ev: ProgressEvent) => any;
        readyState: number;
        onabort: (ev: UIEvent) => any;
        onloadend: (ev: ProgressEvent) => any;
        onerror: (ev: ErrorEvent) => any;
        onload: (ev: Event) => any;
        onloadstart: (ev: Event) => any;
        result: any;
        abort(): void;
        LOADING: number;
        EMPTY: number;
        DONE: number;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "loadend", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}


interface SVGFEMorphologyElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        operator: SVGAnimatedEnumeration;
        radiusX: SVGAnimatedNumber;
        radiusY: SVGAnimatedNumber;
        in1: SVGAnimatedString;
        SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
        SVG_MORPHOLOGY_OPERATOR_ERODE: number;
        SVG_MORPHOLOGY_OPERATOR_DILATE: number;

}

declare  var SVGFEMorphologyElement: {
        prototype: SVGFEMorphologyElement;
        new(): SVGFEMorphologyElement;
        SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number;
        SVG_MORPHOLOGY_OPERATOR_ERODE: number;
        SVG_MORPHOLOGY_OPERATOR_DILATE: number;
};
interface SVGFEFuncRElement extends SVGComponentTransferFunctionElement {


}

declare  var SVGFEFuncRElement: {
        prototype: SVGFEFuncRElement;
        new(): SVGFEFuncRElement;
};
interface WindowTimersExtension {

        msSetImmediate(expression: any, ...args: any[]): number;
        clearImmediate(handle: number): void;
        msClearImmediate(handle: number): void;
        setImmediate(expression: any, ...args: any[]): number;

}


interface SVGFEDisplacementMapElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        in2: SVGAnimatedString;
        xChannelSelector: SVGAnimatedEnumeration;
        yChannelSelector: SVGAnimatedEnumeration;
        scale: SVGAnimatedNumber;
        in1: SVGAnimatedString;
        SVG_CHANNEL_B: number;
        SVG_CHANNEL_R: number;
        SVG_CHANNEL_G: number;
        SVG_CHANNEL_UNKNOWN: number;
        SVG_CHANNEL_A: number;

}

declare  var SVGFEDisplacementMapElement: {
        prototype: SVGFEDisplacementMapElement;
        new(): SVGFEDisplacementMapElement;
        SVG_CHANNEL_B: number;
        SVG_CHANNEL_R: number;
        SVG_CHANNEL_G: number;
        SVG_CHANNEL_UNKNOWN: number;
        SVG_CHANNEL_A: number;
};
interface AnimationEvent extends Event {

        animationName: string;
        elapsedTime: number;
        initAnimationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, animationNameArg: string, elapsedTimeArg: number): void;

}

declare  var AnimationEvent: {
        prototype: AnimationEvent;
        new(): AnimationEvent;
};
interface SVGComponentTransferFunctionElement extends SVGElement {

        tableValues: SVGAnimatedNumberList;
        slope: SVGAnimatedNumber;
        type: SVGAnimatedEnumeration;
        exponent: SVGAnimatedNumber;
        amplitude: SVGAnimatedNumber;
        intercept: SVGAnimatedNumber;
        offset: SVGAnimatedNumber;
        SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
        SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
        SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
        SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
        SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
        SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;

}

declare  var SVGComponentTransferFunctionElement: {
        prototype: SVGComponentTransferFunctionElement;
        new(): SVGComponentTransferFunctionElement;
        SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number;
        SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number;
        SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number;
        SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number;
        SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number;
        SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number;
};
interface MSRangeCollection {

        length: number;
        item(index: number): Range;
        [index: number]: Range;

}

declare  var MSRangeCollection: {
        prototype: MSRangeCollection;
        new(): MSRangeCollection;
};
interface SVGFEDistantLightElement extends SVGElement {

        azimuth: SVGAnimatedNumber;
        elevation: SVGAnimatedNumber;

}

declare  var SVGFEDistantLightElement: {
        prototype: SVGFEDistantLightElement;
        new(): SVGFEDistantLightElement;
};
interface SVGFEFuncBElement extends SVGComponentTransferFunctionElement {


}

declare  var SVGFEFuncBElement: {
        prototype: SVGFEFuncBElement;
        new(): SVGFEFuncBElement;
};
interface IDBKeyRange {

        upper: any;
        upperOpen: boolean;
        lower: any;
        lowerOpen: boolean;

}

declare  var IDBKeyRange: {
        prototype: IDBKeyRange;
        new(): IDBKeyRange;
        bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange;
        only(value: any): IDBKeyRange;
        lowerBound(bound: any, open?: boolean): IDBKeyRange;
        upperBound(bound: any, open?: boolean): IDBKeyRange;
};
interface WindowConsole {

        console: Console;

}


interface IDBTransaction extends EventTarget {

        oncomplete: (ev: Event) => any;
        db: IDBDatabase;
        mode: string;
        error: DOMError;
        onerror: (ev: ErrorEvent) => any;
        onabort: (ev: UIEvent) => any;
        abort(): void;
        objectStore(name: string): IDBObjectStore;
        READ_ONLY: string;
        VERSION_CHANGE: string;
        READ_WRITE: string;
        addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var IDBTransaction: {
        prototype: IDBTransaction;
        new(): IDBTransaction;
        READ_ONLY: string;
        VERSION_CHANGE: string;
        READ_WRITE: string;
};
interface AudioTrack {

        kind: string;
        language: string;
        id: string;
        label: string;
        enabled: boolean;
        sourceBuffer: SourceBuffer;

}

declare  var AudioTrack: {
        prototype: AudioTrack;
        new(): AudioTrack;
};
interface SVGFEConvolveMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        orderY: SVGAnimatedInteger;
        kernelUnitLengthY: SVGAnimatedNumber;
        orderX: SVGAnimatedInteger;
        preserveAlpha: SVGAnimatedBoolean;
        kernelMatrix: SVGAnimatedNumberList;
        edgeMode: SVGAnimatedEnumeration;
        kernelUnitLengthX: SVGAnimatedNumber;
        bias: SVGAnimatedNumber;
        targetX: SVGAnimatedInteger;
        targetY: SVGAnimatedInteger;
        divisor: SVGAnimatedNumber;
        in1: SVGAnimatedString;
        SVG_EDGEMODE_WRAP: number;
        SVG_EDGEMODE_DUPLICATE: number;
        SVG_EDGEMODE_UNKNOWN: number;
        SVG_EDGEMODE_NONE: number;

}

declare  var SVGFEConvolveMatrixElement: {
        prototype: SVGFEConvolveMatrixElement;
        new(): SVGFEConvolveMatrixElement;
        SVG_EDGEMODE_WRAP: number;
        SVG_EDGEMODE_DUPLICATE: number;
        SVG_EDGEMODE_UNKNOWN: number;
        SVG_EDGEMODE_NONE: number;
};
interface TextTrackCueList {

        length: number;
        item(index: number): TextTrackCue;
        [index: number]: TextTrackCue;
        getCueById(id: string): TextTrackCue;

}

declare  var TextTrackCueList: {
        prototype: TextTrackCueList;
        new(): TextTrackCueList;
};
interface CSSKeyframesRule extends CSSRule {

        name: string;
        cssRules: CSSRuleList;
        findRule(rule: string): CSSKeyframeRule;
        deleteRule(rule: string): void;
        appendRule(rule: string): void;

}

declare  var CSSKeyframesRule: {
        prototype: CSSKeyframesRule;
        new(): CSSKeyframesRule;
};
interface SVGFETurbulenceElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        baseFrequencyX: SVGAnimatedNumber;
        numOctaves: SVGAnimatedInteger;
        type: SVGAnimatedEnumeration;
        baseFrequencyY: SVGAnimatedNumber;
        stitchTiles: SVGAnimatedEnumeration;
        seed: SVGAnimatedNumber;
        SVG_STITCHTYPE_UNKNOWN: number;
        SVG_STITCHTYPE_NOSTITCH: number;
        SVG_TURBULENCE_TYPE_UNKNOWN: number;
        SVG_TURBULENCE_TYPE_TURBULENCE: number;
        SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
        SVG_STITCHTYPE_STITCH: number;

}

declare  var SVGFETurbulenceElement: {
        prototype: SVGFETurbulenceElement;
        new(): SVGFETurbulenceElement;
        SVG_STITCHTYPE_UNKNOWN: number;
        SVG_STITCHTYPE_NOSTITCH: number;
        SVG_TURBULENCE_TYPE_UNKNOWN: number;
        SVG_TURBULENCE_TYPE_TURBULENCE: number;
        SVG_TURBULENCE_TYPE_FRACTALNOISE: number;
        SVG_STITCHTYPE_STITCH: number;
};
interface TextTrackList extends EventTarget {

        length: number;
        onaddtrack: (ev: TrackEvent) => any;
        item(index: number): TextTrack;
        [index: number]: TextTrack;
        addEventListener(type: "addtrack", listener: (ev: TrackEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var TextTrackList: {
        prototype: TextTrackList;
        new(): TextTrackList;
};
interface SVGFEFuncGElement extends SVGComponentTransferFunctionElement {


}

declare  var SVGFEFuncGElement: {
        prototype: SVGFEFuncGElement;
        new(): SVGFEFuncGElement;
};
interface SVGFEColorMatrixElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        in1: SVGAnimatedString;
        type: SVGAnimatedEnumeration;
        values: SVGAnimatedNumberList;
        SVG_FECOLORMATRIX_TYPE_SATURATE: number;
        SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
        SVG_FECOLORMATRIX_TYPE_MATRIX: number;
        SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
        SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;

}

declare  var SVGFEColorMatrixElement: {
        prototype: SVGFEColorMatrixElement;
        new(): SVGFEColorMatrixElement;
        SVG_FECOLORMATRIX_TYPE_SATURATE: number;
        SVG_FECOLORMATRIX_TYPE_UNKNOWN: number;
        SVG_FECOLORMATRIX_TYPE_MATRIX: number;
        SVG_FECOLORMATRIX_TYPE_HUEROTATE: number;
        SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number;
};
interface SVGFESpotLightElement extends SVGElement {

        pointsAtY: SVGAnimatedNumber;
        y: SVGAnimatedNumber;
        limitingConeAngle: SVGAnimatedNumber;
        specularExponent: SVGAnimatedNumber;
        x: SVGAnimatedNumber;
        pointsAtZ: SVGAnimatedNumber;
        z: SVGAnimatedNumber;
        pointsAtX: SVGAnimatedNumber;

}

declare  var SVGFESpotLightElement: {
        prototype: SVGFESpotLightElement;
        new(): SVGFESpotLightElement;
};
interface WindowBase64 {

        btoa(rawString: string): string;
        atob(encodedString: string): string;

}


interface IDBDatabase extends EventTarget {

        version: string;
        name: string;
        objectStoreNames: DOMStringList;
        onerror: (ev: ErrorEvent) => any;
        onabort: (ev: UIEvent) => any;
        createObjectStore(name: string, optionalParameters?: any): IDBObjectStore;
        close(): void;
        transaction(storeNames: any, mode?: string): IDBTransaction;
        deleteObjectStore(name: string): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var IDBDatabase: {
        prototype: IDBDatabase;
        new(): IDBDatabase;
};
interface DOMStringList {

        length: number;
        contains(str: string): boolean;
        item(index: number): string;
        [index: number]: string;

}

declare  var DOMStringList: {
        prototype: DOMStringList;
        new(): DOMStringList;
};
interface IDBOpenDBRequest extends IDBRequest {

        onupgradeneeded: (ev: IDBVersionChangeEvent) => any;
        onblocked: (ev: Event) => any;
        addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "upgradeneeded", listener: (ev: IDBVersionChangeEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "blocked", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var IDBOpenDBRequest: {
        prototype: IDBOpenDBRequest;
        new(): IDBOpenDBRequest;
};
declare class HTMLProgressElement extends HTMLElement {

    /**
      * Sets or gets the current value of a progress element. The value must be a non-negative number between 0 and the max value.
      */
        value: number;
    /**
      * Defines the maximum, or "done" value for a progress element.
      */
        max: number;
    /**
      * Returns the quotient of value/max when the value attribute is set (determinate progress bar), or -1 when the value attribute is missing (indeterminate progress bar).
      */
        position: number;
    /**
      * Retrieves a reference to the form that the object is embedded in.
      */
        form: HTMLFormElement;
}

interface MSLaunchUriCallback {

        (): void;

}


interface SVGFEOffsetElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        dy: SVGAnimatedNumber;
        in1: SVGAnimatedString;
        dx: SVGAnimatedNumber;

}

declare  var SVGFEOffsetElement: {
        prototype: SVGFEOffsetElement;
        new(): SVGFEOffsetElement;
};
interface MSUnsafeFunctionCallback {

        (): any;

}


interface TextTrack extends EventTarget {

        language: string;
        mode: any;
        readyState: number;
        activeCues: TextTrackCueList;
        cues: TextTrackCueList;
        oncuechange: (ev: Event) => any;
        kind: string;
        onload: (ev: Event) => any;
        onerror: (ev: ErrorEvent) => any;
        label: string;
        addCue(cue: TextTrackCue): void;
        removeCue(cue: TextTrackCue): void;
        ERROR: number;
        SHOWING: number;
        LOADING: number;
        LOADED: number;
        NONE: number;
        HIDDEN: number;
        DISABLED: number;
        addEventListener(type: "cuechange", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var TextTrack: {
        prototype: TextTrack;
        new(): TextTrack;
        ERROR: number;
        SHOWING: number;
        LOADING: number;
        LOADED: number;
        NONE: number;
        HIDDEN: number;
        DISABLED: number;
};
interface MediaQueryListListener {

        (mql: MediaQueryList): void;

}


interface IDBRequest extends EventTarget {

        source: any;
        onsuccess: (ev: Event) => any;
        error: DOMError;
        transaction: IDBTransaction;
        onerror: (ev: ErrorEvent) => any;
        readyState: string;
        result: any;
        addEventListener(type: "success", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var IDBRequest: {
        prototype: IDBRequest;
        new(): IDBRequest;
};
interface MessagePort extends EventTarget {

        onmessage: (ev: MessageEvent) => any;
        close(): void;
        postMessage(message?: any, ports?: any): void;
        start(): void;
        addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var MessagePort: {
        prototype: MessagePort;
        new(): MessagePort;
};
interface FileReader extends MSBaseReader {

        error: DOMError;
        readAsArrayBuffer(blob: Blob): void;
        readAsDataURL(blob: Blob): void;
        readAsText(blob: Blob, encoding?: string): void;

}

declare  var FileReader: {
        prototype: FileReader;
        new(): FileReader;
};
interface ApplicationCache extends EventTarget {

        status: number;
        ondownloading: (ev: Event) => any;
        onprogress: (ev: ProgressEvent) => any;
        onupdateready: (ev: Event) => any;
        oncached: (ev: Event) => any;
        onobsolete: (ev: Event) => any;
        onerror: (ev: ErrorEvent) => any;
        onchecking: (ev: Event) => any;
        onnoupdate: (ev: Event) => any;
        swapCache(): void;
        abort(): void;
        update(): void;
        CHECKING: number;
        UNCACHED: number;
        UPDATEREADY: number;
        DOWNLOADING: number;
        IDLE: number;
        OBSOLETE: number;
        addEventListener(type: "downloading", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "updateready", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "cached", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "obsolete", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "checking", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "noupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var ApplicationCache: {
        prototype: ApplicationCache;
        new(): ApplicationCache;
        CHECKING: number;
        UNCACHED: number;
        UPDATEREADY: number;
        DOWNLOADING: number;
        IDLE: number;
        OBSOLETE: number;
};
interface FrameRequestCallback {

        (time: number): void;

}


interface PopStateEvent extends Event {

        state: any;
        initPopStateEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, stateArg: any): void;

}

declare  var PopStateEvent: {
        prototype: PopStateEvent;
        new(): PopStateEvent;
};
interface CSSKeyframeRule extends CSSRule {

        keyText: string;
        style: CSSStyleDeclaration;

}

declare  var CSSKeyframeRule: {
        prototype: CSSKeyframeRule;
        new(): CSSKeyframeRule;
};
interface MSFileSaver {

        msSaveBlob(blob: any, defaultName?: string): boolean;
        msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;

}


interface MSStream {

        type: string;
        msDetachStream(): any;
        msClose(): void;

}

declare  var MSStream: {
        prototype: MSStream;
        new(): MSStream;
};
interface MSBlobBuilder {

        append(data: any, endings?: string): void;
        getBlob(contentType?: string): Blob;

}

declare  var MSBlobBuilder: {
        prototype: MSBlobBuilder;
        new(): MSBlobBuilder;
};
interface DOMSettableTokenList extends DOMTokenList {

        value: string;

}

declare  var DOMSettableTokenList: {
        prototype: DOMSettableTokenList;
        new(): DOMSettableTokenList;
};
interface IDBFactory {

        open(name: string, version?: number): IDBOpenDBRequest;
        cmp(first: any, second: any): number;
        deleteDatabase(name: string): IDBOpenDBRequest;

}

declare  var IDBFactory: {
        prototype: IDBFactory;
        new(): IDBFactory;
};
interface MSPointerEvent extends MouseEvent {

        width: number;
        rotation: number;
        pressure: number;
        pointerType: any;
        isPrimary: boolean;
        tiltY: number;
        height: number;
        intermediatePoints: any;
        currentPoint: any;
        tiltX: number;
        hwTimestamp: number;
        pointerId: number;
        initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
        getCurrentPoint(element: Element): void;
        getIntermediatePoints(element: Element): void;
        MSPOINTER_TYPE_PEN: number;
        MSPOINTER_TYPE_MOUSE: number;
        MSPOINTER_TYPE_TOUCH: number;

}

declare  var MSPointerEvent: {
        prototype: MSPointerEvent;
        new(): MSPointerEvent;
        MSPOINTER_TYPE_PEN: number;
        MSPOINTER_TYPE_MOUSE: number;
        MSPOINTER_TYPE_TOUCH: number;
};
interface MSManipulationEvent extends UIEvent {

        lastState: number;
        currentState: number;
        initMSManipulationEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, lastState: number, currentState: number): void;
        MS_MANIPULATION_STATE_STOPPED: number;
        MS_MANIPULATION_STATE_ACTIVE: number;
        MS_MANIPULATION_STATE_INERTIA: number;
        MS_MANIPULATION_STATE_SELECTING: number;
        MS_MANIPULATION_STATE_COMMITTED: number;
        MS_MANIPULATION_STATE_PRESELECT: number;
        MS_MANIPULATION_STATE_DRAGGING: number;
        MS_MANIPULATION_STATE_CANCELLED: number;

}

declare  var MSManipulationEvent: {
        prototype: MSManipulationEvent;
        new(): MSManipulationEvent;
        MS_MANIPULATION_STATE_STOPPED: number;
        MS_MANIPULATION_STATE_ACTIVE: number;
        MS_MANIPULATION_STATE_INERTIA: number;
        MS_MANIPULATION_STATE_SELECTING: number;
        MS_MANIPULATION_STATE_COMMITTED: number;
        MS_MANIPULATION_STATE_PRESELECT: number;
        MS_MANIPULATION_STATE_DRAGGING: number;
        MS_MANIPULATION_STATE_CANCELLED: number;
};
interface FormData {

        append(name: any, value: any, blobName?: string): void;

}

declare  var FormData: {
        prototype: FormData;
        new(): FormData;
};
declare class HTMLDataListElement extends HTMLElement {

        options: HTMLCollection;
}

interface SVGFEImageElement extends SVGElement, SVGLangSpace, SVGFilterPrimitiveStandardAttributes, SVGURIReference, SVGExternalResourcesRequired {

        preserveAspectRatio: SVGAnimatedPreserveAspectRatio;

}

declare  var SVGFEImageElement: {
        prototype: SVGFEImageElement;
        new(): SVGFEImageElement;
};
interface AbstractWorker extends EventTarget {

        onerror: (ev: ErrorEvent) => any;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}


interface SVGFECompositeElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        operator: SVGAnimatedEnumeration;
        in2: SVGAnimatedString;
        k2: SVGAnimatedNumber;
        k1: SVGAnimatedNumber;
        k3: SVGAnimatedNumber;
        in1: SVGAnimatedString;
        k4: SVGAnimatedNumber;
        SVG_FECOMPOSITE_OPERATOR_OUT: number;
        SVG_FECOMPOSITE_OPERATOR_OVER: number;
        SVG_FECOMPOSITE_OPERATOR_XOR: number;
        SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
        SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
        SVG_FECOMPOSITE_OPERATOR_IN: number;
        SVG_FECOMPOSITE_OPERATOR_ATOP: number;

}

declare  var SVGFECompositeElement: {
        prototype: SVGFECompositeElement;
        new(): SVGFECompositeElement;
        SVG_FECOMPOSITE_OPERATOR_OUT: number;
        SVG_FECOMPOSITE_OPERATOR_OVER: number;
        SVG_FECOMPOSITE_OPERATOR_XOR: number;
        SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number;
        SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number;
        SVG_FECOMPOSITE_OPERATOR_IN: number;
        SVG_FECOMPOSITE_OPERATOR_ATOP: number;
};
interface ValidityState {

        customError: boolean;
        valueMissing: boolean;
        stepMismatch: boolean;
        rangeUnderflow: boolean;
        rangeOverflow: boolean;
        typeMismatch: boolean;
        patternMismatch: boolean;
        tooLong: boolean;
        valid: boolean;

}

declare  var ValidityState: {
        prototype: ValidityState;
        new(): ValidityState;
};
declare class HTMLTrackElement extends HTMLElement {

        kind: string;
        src: string;
        srclang: string;
        track: TextTrack;
        label: string;
        default: boolean;
        readyState: number;
        ERROR: number;
        LOADING: number;
        LOADED: number;
        NONE: number;
}

interface MSApp {

        createFileFromStorageFile(storageFile: any): File;
        createBlobFromRandomAccessStream(type: string, seeker: any): Blob;
        createStreamFromInputStream(type: string, inputStream: any): MSStream;
        terminateApp(exceptionObject: any): void;
        createDataPackage(object: any): any;
        execUnsafeLocalFunction(unsafeFunction: MSUnsafeFunctionCallback): any;
        getHtmlPrintDocumentSource(htmlDoc: any): any;
        addPublicLocalApplicationUri(uri: string): void;
        createDataPackageFromSelection(): any;
        getViewOpener(): MSAppView;
        suppressSubdownloadCredentialPrompts(suppress: boolean): void;
        execAsyncAtPriority(asynchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): void;
        isTaskScheduledAtPriorityOrHigher(priority: string): boolean;
        execAtPriority(synchronousCallback: MSExecAtPriorityFunctionCallback, priority: string, ...args: any[]): any;
        createNewView(uri: string): MSAppView;
        getCurrentPriority(): string;
        NORMAL: string;
        HIGH: string;
        IDLE: string;
        CURRENT: string;

}

declare  var MSApp: MSApp;


interface SVGFEComponentTransferElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        in1: SVGAnimatedString;

}

declare  var SVGFEComponentTransferElement: {
        prototype: SVGFEComponentTransferElement;
        new(): SVGFEComponentTransferElement;
};
interface SVGFEDiffuseLightingElement extends SVGElement, SVGFilterPrimitiveStandardAttributes {

        kernelUnitLengthY: SVGAnimatedNumber;
        surfaceScale: SVGAnimatedNumber;
        in1: SVGAnimatedString;
        kernelUnitLengthX: SVGAnimatedNumber;
        diffuseConstant: SVGAnimatedNumber;

}

declare  var SVGFEDiffuseLightingElement: {
        prototype: SVGFEDiffuseLightingElement;
        new(): SVGFEDiffuseLightingElement;
};
interface MSCSSMatrix {

        m24: number;
        m34: number;
        a: number;
        d: number;
        m32: number;
        m41: number;
        m11: number;
        f: number;
        e: number;
        m23: number;
        m14: number;
        m33: number;
        m22: number;
        m21: number;
        c: number;
        m12: number;
        b: number;
        m42: number;
        m31: number;
        m43: number;
        m13: number;
        m44: number;
        multiply(secondMatrix: MSCSSMatrix): MSCSSMatrix;
        skewY(angle: number): MSCSSMatrix;
        setMatrixValue(value: string): void;
        inverse(): MSCSSMatrix;
        rotateAxisAngle(x: number, y: number, z: number, angle: number): MSCSSMatrix;
        toString(): string;
        rotate(angleX: number, angleY?: number, angleZ?: number): MSCSSMatrix;
        translate(x: number, y: number, z?: number): MSCSSMatrix;
        scale(scaleX: number, scaleY?: number, scaleZ?: number): MSCSSMatrix;
        skewX(angle: number): MSCSSMatrix;

}

declare  var MSCSSMatrix: {
        prototype: MSCSSMatrix;
        new(text?: string): MSCSSMatrix;
};
interface Worker extends AbstractWorker {

        onmessage: (ev: MessageEvent) => any;
        postMessage(message: any, ports?: any): void;
        terminate(): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var Worker: {
        prototype: Worker;
        new(stringUrl: string): Worker;
};
interface MSExecAtPriorityFunctionCallback {

        (...args: any[]): any;

}


interface MSGraphicsTrust {

        status: string;
        constrictionActive: boolean;

}

declare  var MSGraphicsTrust: {
        prototype: MSGraphicsTrust;
        new(): MSGraphicsTrust;
};
interface SubtleCrypto {

        unwrapKey(wrappedKey: ArrayBufferView, keyAlgorithm: any, keyEncryptionKey: Key, extractable?: boolean, keyUsages?: string[]): KeyOperation;
        encrypt(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;
        importKey(format: string, keyData: ArrayBufferView, algorithm: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
        wrapKey(key: Key, keyEncryptionKey: Key, keyWrappingAlgorithm: any): KeyOperation;
        verify(algorithm: any, key: Key, signature: ArrayBufferView, buffer?: ArrayBufferView): CryptoOperation;
        deriveKey(algorithm: any, baseKey: Key, derivedKeyType: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
        digest(algorithm: any, buffer?: ArrayBufferView): CryptoOperation;
        exportKey(format: string, key: Key): KeyOperation;
        generateKey(algorithm: any, extractable?: boolean, keyUsages?: string[]): KeyOperation;
        sign(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;
        decrypt(algorithm: any, key: Key, buffer?: ArrayBufferView): CryptoOperation;

}

declare  var SubtleCrypto: {
        prototype: SubtleCrypto;
        new(): SubtleCrypto;
};
interface Crypto extends RandomSource {

        subtle: SubtleCrypto;

}

declare  var Crypto: {
        prototype: Crypto;
        new(): Crypto;
};
interface VideoPlaybackQuality {

        totalFrameDelay: number;
        creationTime: number;
        totalVideoFrames: number;
        droppedVideoFrames: number;

}

declare  var VideoPlaybackQuality: {
        prototype: VideoPlaybackQuality;
        new(): VideoPlaybackQuality;
};
interface GlobalEventHandlers {

        onpointerenter: (ev: PointerEvent) => any;
        onpointerout: (ev: PointerEvent) => any;
        onpointerdown: (ev: PointerEvent) => any;
        onpointerup: (ev: PointerEvent) => any;
        onpointercancel: (ev: PointerEvent) => any;
        onpointerover: (ev: PointerEvent) => any;
        onpointermove: (ev: PointerEvent) => any;
        onpointerleave: (ev: PointerEvent) => any;
        addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}


interface Key {

        algorithm: Algorithm;
        type: string;
        extractable: boolean;
        keyUsage: string[];

}

declare  var Key: {
        prototype: Key;
        new(): Key;
};
interface DeviceAcceleration {

        y: number;
        x: number;
        z: number;

}

declare  var DeviceAcceleration: {
        prototype: DeviceAcceleration;
        new(): DeviceAcceleration;
};
interface HTMLAllCollection extends HTMLCollection {

        namedItem(name: string): Element;
    // [name: string]: Element;

}

declare  var HTMLAllCollection: {
        prototype: HTMLAllCollection;
        new(): HTMLAllCollection;
};
interface AesGcmEncryptResult {

        ciphertext: ArrayBuffer;
        tag: ArrayBuffer;

}

declare  var AesGcmEncryptResult: {
        prototype: AesGcmEncryptResult;
        new(): AesGcmEncryptResult;
};
interface NavigationCompletedEvent extends NavigationEvent {

        webErrorStatus: number;
        isSuccess: boolean;

}

declare  var NavigationCompletedEvent: {
        prototype: NavigationCompletedEvent;
        new(): NavigationCompletedEvent;
};
interface MutationRecord {

        oldValue: string;
        previousSibling: Node;
        addedNodes: NodeList;
        attributeName: string;
        removedNodes: NodeList;
        target: Node;
        nextSibling: Node;
        attributeNamespace: string;
        type: string;

}

declare  var MutationRecord: {
        prototype: MutationRecord;
        new(): MutationRecord;
};
interface MimeTypeArray {

        length: number;
        item(index: number): Plugin;
        [index: number]: Plugin;
        namedItem(type: string): Plugin;
    // [type: string]: Plugin;

}

declare  var MimeTypeArray: {
        prototype: MimeTypeArray;
        new(): MimeTypeArray;
};
interface KeyOperation extends EventTarget {

        oncomplete: (ev: Event) => any;
        onerror: (ev: ErrorEvent) => any;
        result: any;
        addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var KeyOperation: {
        prototype: KeyOperation;
        new(): KeyOperation;
};
interface DOMStringMap {


}

declare  var DOMStringMap: {
        prototype: DOMStringMap;
        new(): DOMStringMap;
};
interface DeviceOrientationEvent extends Event {

        gamma: number;
        alpha: number;
        absolute: boolean;
        beta: number;
        initDeviceOrientationEvent(type: string, bubbles: boolean, cancelable: boolean, alpha: number, beta: number, gamma: number, absolute: boolean): void;

}

declare  var DeviceOrientationEvent: {
        prototype: DeviceOrientationEvent;
        new(): DeviceOrientationEvent;
};
interface MSMediaKeys {

        keySystem: string;
        createSession(type: string, initData: Uint8Array, cdmData?: Uint8Array): MSMediaKeySession;

}

declare  var MSMediaKeys: {
        prototype: MSMediaKeys;
        new(keySystem: string): MSMediaKeys;
        isTypeSupported(keySystem: string, type?: string): boolean;
};
interface MSMediaKeyMessageEvent extends Event {

        destinationURL: string;
        message: Uint8Array;

}

declare  var MSMediaKeyMessageEvent: {
        prototype: MSMediaKeyMessageEvent;
        new(): MSMediaKeyMessageEvent;
};
declare class MSHTMLWebViewElement extends HTMLElement {

        documentTitle: string;
        width: number;
        src: string;
        canGoForward: boolean;
        height: number;
        canGoBack: boolean;
        navigateWithHttpRequestMessage(requestMessage: any): void;
        goBack(): void;
        navigate(uri: string): void;
        stop(): void;
        navigateToString(contents: string): void;
        captureSelectedContentToDataPackageAsync(): MSWebViewAsyncOperation;
        capturePreviewToBlobAsync(): MSWebViewAsyncOperation;
        refresh(): void;
        goForward(): void;
        navigateToLocalStreamUri(source: string, streamResolver: any): void;
        invokeScriptAsync(scriptName: string, ...args: any[]): MSWebViewAsyncOperation;
        buildLocalStreamUri(contentIdentifier: string, relativePath: string): string;
}

interface NavigationEvent extends Event {

        uri: string;

}

declare  var NavigationEvent: {
        prototype: NavigationEvent;
        new(): NavigationEvent;
};
interface RandomSource {

        getRandomValues(array: ArrayBufferView): ArrayBufferView;

}


interface SourceBuffer extends EventTarget {

        updating: boolean;
        appendWindowStart: number;
        appendWindowEnd: number;
        buffered: TimeRanges;
        timestampOffset: number;
        audioTracks: AudioTrackList;
        appendBuffer(data: ArrayBuffer): void;
        remove(start: number, end: number): void;
        abort(): void;
        appendStream(stream: MSStream, maxSize?: number): void;

}

declare  var SourceBuffer: {
        prototype: SourceBuffer;
        new(): SourceBuffer;
};
interface MSInputMethodContext extends EventTarget {

        oncandidatewindowshow: (ev: any) => any;
        target: HTMLElement;
        compositionStartOffset: number;
        oncandidatewindowhide: (ev: any) => any;
        oncandidatewindowupdate: (ev: any) => any;
        compositionEndOffset: number;
        getCompositionAlternatives(): string[];
        getCandidateWindowClientRect(): ClientRect;
        hasComposition(): boolean;
        isCandidateWindowVisible(): boolean;
        addEventListener(type: "candidatewindowshow", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "candidatewindowhide", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: "candidatewindowupdate", listener: (ev: any) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var MSInputMethodContext: {
        prototype: MSInputMethodContext;
        new(): MSInputMethodContext;
};
interface DeviceRotationRate {

        gamma: number;
        alpha: number;
        beta: number;

}

declare  var DeviceRotationRate: {
        prototype: DeviceRotationRate;
        new(): DeviceRotationRate;
};
interface PluginArray {

        length: number;
        refresh(reload?: boolean): void;
        item(index: number): Plugin;
        [index: number]: Plugin;
        namedItem(name: string): Plugin;
    // [name: string]: Plugin;

}

declare  var PluginArray: {
        prototype: PluginArray;
        new(): PluginArray;
};
interface MSMediaKeyError {

        systemCode: number;
        code: number;
        MS_MEDIA_KEYERR_SERVICE: number;
        MS_MEDIA_KEYERR_HARDWARECHANGE: number;
        MS_MEDIA_KEYERR_OUTPUT: number;
        MS_MEDIA_KEYERR_DOMAIN: number;
        MS_MEDIA_KEYERR_UNKNOWN: number;
        MS_MEDIA_KEYERR_CLIENT: number;

}

declare  var MSMediaKeyError: {
        prototype: MSMediaKeyError;
        new(): MSMediaKeyError;
        MS_MEDIA_KEYERR_SERVICE: number;
        MS_MEDIA_KEYERR_HARDWARECHANGE: number;
        MS_MEDIA_KEYERR_OUTPUT: number;
        MS_MEDIA_KEYERR_DOMAIN: number;
        MS_MEDIA_KEYERR_UNKNOWN: number;
        MS_MEDIA_KEYERR_CLIENT: number;
};
interface Plugin {

        length: number;
        filename: string;
        version: string;
        name: string;
        description: string;
        item(index: number): MimeType;
        [index: number]: MimeType;
        namedItem(type: string): MimeType;
    // [type: string]: MimeType;

}

declare  var Plugin: {
        prototype: Plugin;
        new(): Plugin;
};
interface MediaSource extends EventTarget {

        sourceBuffers: SourceBufferList;
        duration: number;
        readyState: string;
        activeSourceBuffers: SourceBufferList;
        addSourceBuffer(type: string): SourceBuffer;
        endOfStream(error?: string): void;
        removeSourceBuffer(sourceBuffer: SourceBuffer): void;

}

declare  var MediaSource: {
        prototype: MediaSource;
        new(): MediaSource;
        isTypeSupported(type: string): boolean;
};
interface SourceBufferList extends EventTarget {

        length: number;
        item(index: number): SourceBuffer;
        [index: number]: SourceBuffer;

}

declare  var SourceBufferList: {
        prototype: SourceBufferList;
        new(): SourceBufferList;
};
interface XMLDocument extends Document {


}

declare  var XMLDocument: {
        prototype: XMLDocument;
        new(): XMLDocument;
};
interface DeviceMotionEvent extends Event {

        rotationRate: DeviceRotationRate;
        acceleration: DeviceAcceleration;
        interval: number;
        accelerationIncludingGravity: DeviceAcceleration;
        initDeviceMotionEvent(type: string, bubbles: boolean, cancelable: boolean, acceleration: DeviceAccelerationDict, accelerationIncludingGravity: DeviceAccelerationDict, rotationRate: DeviceRotationRateDict, interval: number): void;

}

declare  var DeviceMotionEvent: {
        prototype: DeviceMotionEvent;
        new(): DeviceMotionEvent;
};
interface MimeType {

        enabledPlugin: Plugin;
        suffixes: string;
        type: string;
        description: string;

}

declare  var MimeType: {
        prototype: MimeType;
        new(): MimeType;
};
interface PointerEvent extends MouseEvent {

        width: number;
        rotation: number;
        pressure: number;
        pointerType: any;
        isPrimary: boolean;
        tiltY: number;
        height: number;
        intermediatePoints: any;
        currentPoint: any;
        tiltX: number;
        hwTimestamp: number;
        pointerId: number;
        initPointerEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, viewArg: Window, detailArg: number, screenXArg: number, screenYArg: number, clientXArg: number, clientYArg: number, ctrlKeyArg: boolean, altKeyArg: boolean, shiftKeyArg: boolean, metaKeyArg: boolean, buttonArg: number, relatedTargetArg: EventTarget, offsetXArg: number, offsetYArg: number, widthArg: number, heightArg: number, pressure: number, rotation: number, tiltX: number, tiltY: number, pointerIdArg: number, pointerType: any, hwTimestampArg: number, isPrimary: boolean): void;
        getCurrentPoint(element: Element): void;
        getIntermediatePoints(element: Element): void;

}

declare  var PointerEvent: {
        prototype: PointerEvent;
        new(): PointerEvent;
};
interface MSDocumentExtensions {

        captureEvents(): void;
        releaseEvents(): void;

}


interface MutationObserver {

        observe(target: Node, options: MutationObserverInit): void;
        takeRecords(): MutationRecord[];
        disconnect(): void;

}

declare  var MutationObserver: {
        prototype: MutationObserver;
        new(callback: (arr: MutationRecord[], observer: MutationObserver) => any): MutationObserver;
};
interface MSWebViewAsyncOperation extends EventTarget {

        target: MSHTMLWebViewElement;
        oncomplete: (ev: Event) => any;
        error: DOMError;
        onerror: (ev: ErrorEvent) => any;
        readyState: number;
        type: number;
        result: any;
        start(): void;
        ERROR: number;
        TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
        TYPE_INVOKE_SCRIPT: number;
        COMPLETED: number;
        TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
        STARTED: number;
        addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var MSWebViewAsyncOperation: {
        prototype: MSWebViewAsyncOperation;
        new(): MSWebViewAsyncOperation;
        ERROR: number;
        TYPE_CREATE_DATA_PACKAGE_FROM_SELECTION: number;
        TYPE_INVOKE_SCRIPT: number;
        COMPLETED: number;
        TYPE_CAPTURE_PREVIEW_TO_RANDOM_ACCESS_STREAM: number;
        STARTED: number;
};
interface ScriptNotifyEvent extends Event {

        value: string;
        callingUri: string;

}

declare  var ScriptNotifyEvent: {
        prototype: ScriptNotifyEvent;
        new(): ScriptNotifyEvent;
};
interface PerformanceNavigationTiming extends PerformanceEntry {

        redirectStart: number;
        domainLookupEnd: number;
        responseStart: number;
        domComplete: number;
        domainLookupStart: number;
        loadEventStart: number;
        unloadEventEnd: number;
        fetchStart: number;
        requestStart: number;
        domInteractive: number;
        navigationStart: number;
        connectEnd: number;
        loadEventEnd: number;
        connectStart: number;
        responseEnd: number;
        domLoading: number;
        redirectEnd: number;
        redirectCount: number;
        unloadEventStart: number;
        domContentLoadedEventStart: number;
        domContentLoadedEventEnd: number;
        type: string;

}

declare  var PerformanceNavigationTiming: {
        prototype: PerformanceNavigationTiming;
        new(): PerformanceNavigationTiming;
};
interface MSMediaKeyNeededEvent extends Event {

        initData: Uint8Array;

}

declare  var MSMediaKeyNeededEvent: {
        prototype: MSMediaKeyNeededEvent;
        new(): MSMediaKeyNeededEvent;
};
interface LongRunningScriptDetectedEvent extends Event {

        stopPageScriptExecution: boolean;
        executionTime: number;

}

declare  var LongRunningScriptDetectedEvent: {
        prototype: LongRunningScriptDetectedEvent;
        new(): LongRunningScriptDetectedEvent;
};
interface MSAppView {

        viewId: number;
        close(): void;
        postMessage(message: any, targetOrigin: string, ports?: any): void;

}

declare  var MSAppView: {
        prototype: MSAppView;
        new(): MSAppView;
};
interface PerfWidgetExternal {

        maxCpuSpeed: number;
        independentRenderingEnabled: boolean;
        irDisablingContentString: string;
        irStatusAvailable: boolean;
        performanceCounter: number;
        averagePaintTime: number;
        activeNetworkRequestCount: number;
        paintRequestsPerSecond: number;
        extraInformationEnabled: boolean;
        performanceCounterFrequency: number;
        averageFrameTime: number;
        repositionWindow(x: number, y: number): void;
        getRecentMemoryUsage(last: number): any;
        getMemoryUsage(): number;
        resizeWindow(width: number, height: number): void;
        getProcessCpuUsage(): number;
        removeEventListener(eventType: string, callback: (ev: any) => any): void;
        getRecentCpuUsage(last: number): any;
        addEventListener(eventType: string, callback: (ev: any) => any): void;
        getRecentFrames(last: number): any;
        getRecentPaintRequests(last: number): any;

}

declare  var PerfWidgetExternal: {
        prototype: PerfWidgetExternal;
        new(): PerfWidgetExternal;
};
interface PageTransitionEvent extends Event {

        persisted: boolean;

}

declare  var PageTransitionEvent: {
        prototype: PageTransitionEvent;
        new(): PageTransitionEvent;
};
interface MutationCallback {

        (mutations: MutationRecord[], observer: MutationObserver): void;

}


interface HTMLDocument extends Document {


}

declare  var HTMLDocument: {
        prototype: HTMLDocument;
        new(): HTMLDocument;
};
interface KeyPair {

        privateKey: Key;
        publicKey: Key;

}

declare  var KeyPair: {
        prototype: KeyPair;
        new(): KeyPair;
};
interface MSMediaKeySession extends EventTarget {

        sessionId: string;
        error: MSMediaKeyError;
        keySystem: string;
        close(): void;
        update(key: Uint8Array): void;

}

declare  var MSMediaKeySession: {
        prototype: MSMediaKeySession;
        new(): MSMediaKeySession;
};
interface UnviewableContentIdentifiedEvent extends NavigationEvent {

        referrer: string;

}

declare  var UnviewableContentIdentifiedEvent: {
        prototype: UnviewableContentIdentifiedEvent;
        new(): UnviewableContentIdentifiedEvent;
};
interface CryptoOperation extends EventTarget {

        algorithm: Algorithm;
        oncomplete: (ev: Event) => any;
        onerror: (ev: ErrorEvent) => any;
        onprogress: (ev: ProgressEvent) => any;
        onabort: (ev: UIEvent) => any;
        key: Key;
        result: any;
        abort(): void;
        finish(): void;
        process(buffer: ArrayBufferView): void;
        addEventListener(type: "complete", listener: (ev: Event) => any, useCapture?: boolean): void;
        addEventListener(type: "error", listener: (ev: ErrorEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
        addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
        addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

}

declare  var CryptoOperation: {
        prototype: CryptoOperation;
        new(): CryptoOperation;
};
interface WebGLTexture extends WebGLObject {


}

declare  var WebGLTexture: {
        prototype: WebGLTexture;
        new(): WebGLTexture;
};
interface OES_texture_float {


}

declare  var OES_texture_float: {
        prototype: OES_texture_float;
        new(): OES_texture_float;
};
interface WebGLContextEvent extends Event {

        statusMessage: string;

}

declare  var WebGLContextEvent: {
        prototype: WebGLContextEvent;
        new(): WebGLContextEvent;
};
interface WebGLRenderbuffer extends WebGLObject {


}

declare  var WebGLRenderbuffer: {
        prototype: WebGLRenderbuffer;
        new(): WebGLRenderbuffer;
};
interface WebGLUniformLocation {


}

declare  var WebGLUniformLocation: {
        prototype: WebGLUniformLocation;
        new(): WebGLUniformLocation;
};
interface WebGLActiveInfo {

        name: string;
        type: number;
        size: number;

}

declare  var WebGLActiveInfo: {
        prototype: WebGLActiveInfo;
        new(): WebGLActiveInfo;
};
interface WEBGL_compressed_texture_s3tc {

        COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
        COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
        COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
        COMPRESSED_RGB_S3TC_DXT1_EXT: number;

}

declare  var WEBGL_compressed_texture_s3tc: {
        prototype: WEBGL_compressed_texture_s3tc;
        new(): WEBGL_compressed_texture_s3tc;
        COMPRESSED_RGBA_S3TC_DXT1_EXT: number;
        COMPRESSED_RGBA_S3TC_DXT5_EXT: number;
        COMPRESSED_RGBA_S3TC_DXT3_EXT: number;
        COMPRESSED_RGB_S3TC_DXT1_EXT: number;
};
interface WebGLRenderingContext {

        drawingBufferWidth: number;
        drawingBufferHeight: number;
        canvas: HTMLCanvasElement;
        getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation;
        bindTexture(target: number, texture: WebGLTexture): void;
        bufferData(target: number, data: ArrayBufferView, usage: number): void;
        bufferData(target: number, data: ArrayBuffer, usage: number): void;
        bufferData(target: number, size: number, usage: number): void;
        depthMask(flag: boolean): void;
        getUniform(program: WebGLProgram, location: WebGLUniformLocation): any;
        vertexAttrib3fv(indx: number, values: number[]): void;
        vertexAttrib3fv(indx: number, values: Float32Array): void;
        linkProgram(program: WebGLProgram): void;
        getSupportedExtensions(): string[];
        bufferSubData(target: number, offset: number, data: ArrayBuffer): void;
        bufferSubData(target: number, offset: number, data: ArrayBufferView): void;
        vertexAttribPointer(indx: number, size: number, type: number, normalized: boolean, stride: number, offset: number): void;
        polygonOffset(factor: number, units: number): void;
        blendColor(red: number, green: number, blue: number, alpha: number): void;
        createTexture(): WebGLTexture;
        hint(target: number, mode: number): void;
        getVertexAttrib(index: number, pname: number): any;
        enableVertexAttribArray(index: number): void;
        depthRange(zNear: number, zFar: number): void;
        cullFace(mode: number): void;
        createFramebuffer(): WebGLFramebuffer;
        uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
        uniformMatrix4fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
        framebufferTexture2D(target: number, attachment: number, textarget: number, texture: WebGLTexture, level: number): void;
        deleteFramebuffer(framebuffer: WebGLFramebuffer): void;
        colorMask(red: boolean, green: boolean, blue: boolean, alpha: boolean): void;
        compressedTexImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, data: ArrayBufferView): void;
        uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
        uniformMatrix2fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
        getExtension(name: string): any;
        createProgram(): WebGLProgram;
        deleteShader(shader: WebGLShader): void;
        getAttachedShaders(program: WebGLProgram): WebGLShader[];
        enable(cap: number): void;
        blendEquation(mode: number): void;
        texImage2D(target: number, level: number, internalformat: number, width: number, height: number, border: number, format: number, type: number, pixels: ArrayBufferView): void;
        texImage2D(target: number, level: number, internalformat: number, format: number, type: number, image: HTMLImageElement): void;
        texImage2D(target: number, level: number, internalformat: number, format: number, type: number, canvas: HTMLCanvasElement): void;
        texImage2D(target: number, level: number, internalformat: number, format: number, type: number, video: HTMLVideoElement): void;
        texImage2D(target: number, level: number, internalformat: number, format: number, type: number, pixels: ImageData): void;
        createBuffer(): WebGLBuffer;
        deleteTexture(texture: WebGLTexture): void;
        useProgram(program: WebGLProgram): void;
        vertexAttrib2fv(indx: number, values: number[]): void;
        vertexAttrib2fv(indx: number, values: Float32Array): void;
        checkFramebufferStatus(target: number): number;
        frontFace(mode: number): void;
        getBufferParameter(target: number, pname: number): any;
        texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
        texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, image: HTMLImageElement): void;
        texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, canvas: HTMLCanvasElement): void;
        texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, video: HTMLVideoElement): void;
        texSubImage2D(target: number, level: number, xoffset: number, yoffset: number, format: number, type: number, pixels: ImageData): void;
        copyTexImage2D(target: number, level: number, internalformat: number, x: number, y: number, width: number, height: number, border: number): void;
        getVertexAttribOffset(index: number, pname: number): number;
        disableVertexAttribArray(index: number): void;
        blendFunc(sfactor: number, dfactor: number): void;
        drawElements(mode: number, count: number, type: number, offset: number): void;
        isFramebuffer(framebuffer: WebGLFramebuffer): boolean;
        uniform3iv(location: WebGLUniformLocation, v: number[]): void;
        uniform3iv(location: WebGLUniformLocation, v: Int32Array): void;
        lineWidth(width: number): void;
        getShaderInfoLog(shader: WebGLShader): string;
        getTexParameter(target: number, pname: number): any;
        getParameter(pname: number): any;
        getShaderPrecisionFormat(shadertype: number, precisiontype: number): WebGLShaderPrecisionFormat;
        getContextAttributes(): WebGLContextAttributes;
        vertexAttrib1f(indx: number, x: number): void;
        bindFramebuffer(target: number, framebuffer: WebGLFramebuffer): void;
        compressedTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, width: number, height: number, format: number, data: ArrayBufferView): void;
        isContextLost(): boolean;
        uniform1iv(location: WebGLUniformLocation, v: number[]): void;
        uniform1iv(location: WebGLUniformLocation, v: Int32Array): void;
        getRenderbufferParameter(target: number, pname: number): any;
        uniform2fv(location: WebGLUniformLocation, v: number[]): void;
        uniform2fv(location: WebGLUniformLocation, v: Float32Array): void;
        isTexture(texture: WebGLTexture): boolean;
        getError(): number;
        shaderSource(shader: WebGLShader, source: string): void;
        deleteRenderbuffer(renderbuffer: WebGLRenderbuffer): void;
        stencilMask(mask: number): void;
        bindBuffer(target: number, buffer: WebGLBuffer): void;
        getAttribLocation(program: WebGLProgram, name: string): number;
        uniform3i(location: WebGLUniformLocation, x: number, y: number, z: number): void;
        blendEquationSeparate(modeRGB: number, modeAlpha: number): void;
        clear(mask: number): void;
        blendFuncSeparate(srcRGB: number, dstRGB: number, srcAlpha: number, dstAlpha: number): void;
        stencilFuncSeparate(face: number, func: number, ref: number, mask: number): void;
        readPixels(x: number, y: number, width: number, height: number, format: number, type: number, pixels: ArrayBufferView): void;
        scissor(x: number, y: number, width: number, height: number): void;
        uniform2i(location: WebGLUniformLocation, x: number, y: number): void;
        getActiveAttrib(program: WebGLProgram, index: number): WebGLActiveInfo;
        getShaderSource(shader: WebGLShader): string;
        generateMipmap(target: number): void;
        bindAttribLocation(program: WebGLProgram, index: number, name: string): void;
        uniform1fv(location: WebGLUniformLocation, v: number[]): void;
        uniform1fv(location: WebGLUniformLocation, v: Float32Array): void;
        uniform2iv(location: WebGLUniformLocation, v: number[]): void;
        uniform2iv(location: WebGLUniformLocation, v: Int32Array): void;
        stencilOp(fail: number, zfail: number, zpass: number): void;
        uniform4fv(location: WebGLUniformLocation, v: number[]): void;
        uniform4fv(location: WebGLUniformLocation, v: Float32Array): void;
        vertexAttrib1fv(indx: number, values: number[]): void;
        vertexAttrib1fv(indx: number, values: Float32Array): void;
        flush(): void;
        uniform4f(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
        deleteProgram(program: WebGLProgram): void;
        isRenderbuffer(renderbuffer: WebGLRenderbuffer): boolean;
        uniform1i(location: WebGLUniformLocation, x: number): void;
        getProgramParameter(program: WebGLProgram, pname: number): any;
        getActiveUniform(program: WebGLProgram, index: number): WebGLActiveInfo;
        stencilFunc(func: number, ref: number, mask: number): void;
        pixelStorei(pname: number, param: number): void;
        disable(cap: number): void;
        vertexAttrib4fv(indx: number, values: number[]): void;
        vertexAttrib4fv(indx: number, values: Float32Array): void;
        createRenderbuffer(): WebGLRenderbuffer;
        isBuffer(buffer: WebGLBuffer): boolean;
        stencilOpSeparate(face: number, fail: number, zfail: number, zpass: number): void;
        getFramebufferAttachmentParameter(target: number, attachment: number, pname: number): any;
        uniform4i(location: WebGLUniformLocation, x: number, y: number, z: number, w: number): void;
        sampleCoverage(value: number, invert: boolean): void;
        depthFunc(func: number): void;
        texParameterf(target: number, pname: number, param: number): void;
        vertexAttrib3f(indx: number, x: number, y: number, z: number): void;
        drawArrays(mode: number, first: number, count: number): void;
        texParameteri(target: number, pname: number, param: number): void;
        vertexAttrib4f(indx: number, x: number, y: number, z: number, w: number): void;
        getShaderParameter(shader: WebGLShader, pname: number): any;
        clearDepth(depth: number): void;
        activeTexture(texture: number): void;
        viewport(x: number, y: number, width: number, height: number): void;
        detachShader(program: WebGLProgram, shader: WebGLShader): void;
        uniform1f(location: WebGLUniformLocation, x: number): void;
        uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: number[]): void;
        uniformMatrix3fv(location: WebGLUniformLocation, transpose: boolean, value: Float32Array): void;
        deleteBuffer(buffer: WebGLBuffer): void;
        copyTexSubImage2D(target: number, level: number, xoffset: number, yoffset: number, x: number, y: number, width: number, height: number): void;
        uniform3fv(location: WebGLUniformLocation, v: number[]): void;
        uniform3fv(location: WebGLUniformLocation, v: Float32Array): void;
        stencilMaskSeparate(face: number, mask: number): void;
        attachShader(program: WebGLProgram, shader: WebGLShader): void;
        compileShader(shader: WebGLShader): void;
        clearColor(red: number, green: number, blue: number, alpha: number): void;
        isShader(shader: WebGLShader): boolean;
        clearStencil(s: number): void;
        framebufferRenderbuffer(target: number, attachment: number, renderbuffertarget: number, renderbuffer: WebGLRenderbuffer): void;
        finish(): void;
        uniform2f(location: WebGLUniformLocation, x: number, y: number): void;
        renderbufferStorage(target: number, internalformat: number, width: number, height: number): void;
        uniform3f(location: WebGLUniformLocation, x: number, y: number, z: number): void;
        getProgramInfoLog(program: WebGLProgram): string;
        validateProgram(program: WebGLProgram): void;
        isEnabled(cap: number): boolean;
        vertexAttrib2f(indx: number, x: number, y: number): void;
        isProgram(program: WebGLProgram): boolean;
        createShader(type: number): WebGLShader;
        bindRenderbuffer(target: number, renderbuffer: WebGLRenderbuffer): void;
        uniform4iv(location: WebGLUniformLocation, v: number[]): void;
        uniform4iv(location: WebGLUniformLocation, v: Int32Array): void;
        DEPTH_FUNC: number;
        DEPTH_COMPONENT16: number;
        REPLACE: number;
        REPEAT: number;
        VERTEX_ATTRIB_ARRAY_ENABLED: number;
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
        STENCIL_BUFFER_BIT: number;
        RENDERER: number;
        STENCIL_BACK_REF: number;
        TEXTURE26: number;
        RGB565: number;
        DITHER: number;
        CONSTANT_COLOR: number;
        GENERATE_MIPMAP_HINT: number;
        POINTS: number;
        DECR: number;
        INT_VEC3: number;
        TEXTURE28: number;
        ONE_MINUS_CONSTANT_ALPHA: number;
        BACK: number;
        RENDERBUFFER_STENCIL_SIZE: number;
        UNPACK_FLIP_Y_WEBGL: number;
        BLEND: number;
        TEXTURE9: number;
        ARRAY_BUFFER_BINDING: number;
        MAX_VIEWPORT_DIMS: number;
        INVALID_FRAMEBUFFER_OPERATION: number;
        TEXTURE: number;
        TEXTURE0: number;
        TEXTURE31: number;
        TEXTURE24: number;
        HIGH_INT: number;
        RENDERBUFFER_BINDING: number;
        BLEND_COLOR: number;
        FASTEST: number;
        STENCIL_WRITEMASK: number;
        ALIASED_POINT_SIZE_RANGE: number;
        TEXTURE12: number;
        DST_ALPHA: number;
        BLEND_EQUATION_RGB: number;
        FRAMEBUFFER_COMPLETE: number;
        NEAREST_MIPMAP_NEAREST: number;
        VERTEX_ATTRIB_ARRAY_SIZE: number;
        TEXTURE3: number;
        DEPTH_WRITEMASK: number;
        CONTEXT_LOST_WEBGL: number;
        INVALID_VALUE: number;
        TEXTURE_MAG_FILTER: number;
        ONE_MINUS_CONSTANT_COLOR: number;
        ONE_MINUS_SRC_ALPHA: number;
        TEXTURE_CUBE_MAP_POSITIVE_Z: number;
        NOTEQUAL: number;
        ALPHA: number;
        DEPTH_STENCIL: number;
        MAX_VERTEX_UNIFORM_VECTORS: number;
        DEPTH_COMPONENT: number;
        RENDERBUFFER_RED_SIZE: number;
        TEXTURE20: number;
        RED_BITS: number;
        RENDERBUFFER_BLUE_SIZE: number;
        SCISSOR_BOX: number;
        VENDOR: number;
        FRONT_AND_BACK: number;
        CONSTANT_ALPHA: number;
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
        NEAREST: number;
        CULL_FACE: number;
        ALIASED_LINE_WIDTH_RANGE: number;
        TEXTURE19: number;
        FRONT: number;
        DEPTH_CLEAR_VALUE: number;
        GREEN_BITS: number;
        TEXTURE29: number;
        TEXTURE23: number;
        MAX_RENDERBUFFER_SIZE: number;
        STENCIL_ATTACHMENT: number;
        TEXTURE27: number;
        BOOL_VEC2: number;
        OUT_OF_MEMORY: number;
        MIRRORED_REPEAT: number;
        POLYGON_OFFSET_UNITS: number;
        TEXTURE_MIN_FILTER: number;
        STENCIL_BACK_PASS_DEPTH_PASS: number;
        LINE_LOOP: number;
        FLOAT_MAT3: number;
        TEXTURE14: number;
        LINEAR: number;
        RGB5_A1: number;
        ONE_MINUS_SRC_COLOR: number;
        SAMPLE_COVERAGE_INVERT: number;
        DONT_CARE: number;
        FRAMEBUFFER_BINDING: number;
        RENDERBUFFER_ALPHA_SIZE: number;
        STENCIL_REF: number;
        ZERO: number;
        DECR_WRAP: number;
        SAMPLE_COVERAGE: number;
        STENCIL_BACK_FUNC: number;
        TEXTURE30: number;
        VIEWPORT: number;
        STENCIL_BITS: number;
        FLOAT: number;
        COLOR_WRITEMASK: number;
        SAMPLE_COVERAGE_VALUE: number;
        TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
        STENCIL_BACK_FAIL: number;
        FLOAT_MAT4: number;
        UNSIGNED_SHORT_4_4_4_4: number;
        TEXTURE6: number;
        RENDERBUFFER_WIDTH: number;
        RGBA4: number;
        ALWAYS: number;
        BLEND_EQUATION_ALPHA: number;
        COLOR_BUFFER_BIT: number;
        TEXTURE_CUBE_MAP: number;
        DEPTH_BUFFER_BIT: number;
        STENCIL_CLEAR_VALUE: number;
        BLEND_EQUATION: number;
        RENDERBUFFER_GREEN_SIZE: number;
        NEAREST_MIPMAP_LINEAR: number;
        VERTEX_ATTRIB_ARRAY_TYPE: number;
        INCR_WRAP: number;
        ONE_MINUS_DST_COLOR: number;
        HIGH_FLOAT: number;
        BYTE: number;
        FRONT_FACE: number;
        SAMPLE_ALPHA_TO_COVERAGE: number;
        CCW: number;
        TEXTURE13: number;
        MAX_VERTEX_ATTRIBS: number;
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
        TEXTURE_WRAP_T: number;
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
        FLOAT_VEC2: number;
        LUMINANCE: number;
        GREATER: number;
        INT_VEC2: number;
        VALIDATE_STATUS: number;
        FRAMEBUFFER: number;
        FRAMEBUFFER_UNSUPPORTED: number;
        TEXTURE5: number;
        FUNC_SUBTRACT: number;
        BLEND_DST_ALPHA: number;
        SAMPLER_CUBE: number;
        ONE_MINUS_DST_ALPHA: number;
        LESS: number;
        TEXTURE_CUBE_MAP_POSITIVE_X: number;
        BLUE_BITS: number;
        DEPTH_TEST: number;
        VERTEX_ATTRIB_ARRAY_STRIDE: number;
        DELETE_STATUS: number;
        TEXTURE18: number;
        POLYGON_OFFSET_FACTOR: number;
        UNSIGNED_INT: number;
        TEXTURE_2D: number;
        DST_COLOR: number;
        FLOAT_MAT2: number;
        COMPRESSED_TEXTURE_FORMATS: number;
        MAX_FRAGMENT_UNIFORM_VECTORS: number;
        DEPTH_STENCIL_ATTACHMENT: number;
        LUMINANCE_ALPHA: number;
        CW: number;
        VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
        TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
        LINEAR_MIPMAP_LINEAR: number;
        BUFFER_SIZE: number;
        SAMPLE_BUFFERS: number;
        TEXTURE15: number;
        ACTIVE_TEXTURE: number;
        VERTEX_SHADER: number;
        TEXTURE22: number;
        VERTEX_ATTRIB_ARRAY_POINTER: number;
        INCR: number;
        COMPILE_STATUS: number;
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
        TEXTURE7: number;
        UNSIGNED_SHORT_5_5_5_1: number;
        DEPTH_BITS: number;
        RGBA: number;
        TRIANGLE_STRIP: number;
        COLOR_CLEAR_VALUE: number;
        BROWSER_DEFAULT_WEBGL: number;
        INVALID_ENUM: number;
        SCISSOR_TEST: number;
        LINE_STRIP: number;
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
        STENCIL_FUNC: number;
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
        RENDERBUFFER_HEIGHT: number;
        TEXTURE8: number;
        TRIANGLES: number;
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
        STENCIL_BACK_VALUE_MASK: number;
        TEXTURE25: number;
        RENDERBUFFER: number;
        LEQUAL: number;
        TEXTURE1: number;
        STENCIL_INDEX8: number;
        FUNC_ADD: number;
        STENCIL_FAIL: number;
        BLEND_SRC_ALPHA: number;
        BOOL: number;
        ALPHA_BITS: number;
        LOW_INT: number;
        TEXTURE10: number;
        SRC_COLOR: number;
        MAX_VARYING_VECTORS: number;
        BLEND_DST_RGB: number;
        TEXTURE_BINDING_CUBE_MAP: number;
        STENCIL_INDEX: number;
        TEXTURE_BINDING_2D: number;
        MEDIUM_INT: number;
        SHADER_TYPE: number;
        POLYGON_OFFSET_FILL: number;
        DYNAMIC_DRAW: number;
        TEXTURE4: number;
        STENCIL_BACK_PASS_DEPTH_FAIL: number;
        STREAM_DRAW: number;
        MAX_CUBE_MAP_TEXTURE_SIZE: number;
        TEXTURE17: number;
        TRIANGLE_FAN: number;
        UNPACK_ALIGNMENT: number;
        CURRENT_PROGRAM: number;
        LINES: number;
        INVALID_OPERATION: number;
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
        LINEAR_MIPMAP_NEAREST: number;
        CLAMP_TO_EDGE: number;
        RENDERBUFFER_DEPTH_SIZE: number;
        TEXTURE_WRAP_S: number;
        ELEMENT_ARRAY_BUFFER: number;
        UNSIGNED_SHORT_5_6_5: number;
        ACTIVE_UNIFORMS: number;
        FLOAT_VEC3: number;
        NO_ERROR: number;
        ATTACHED_SHADERS: number;
        DEPTH_ATTACHMENT: number;
        TEXTURE11: number;
        STENCIL_TEST: number;
        ONE: number;
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
        STATIC_DRAW: number;
        GEQUAL: number;
        BOOL_VEC4: number;
        COLOR_ATTACHMENT0: number;
        PACK_ALIGNMENT: number;
        MAX_TEXTURE_SIZE: number;
        STENCIL_PASS_DEPTH_FAIL: number;
        CULL_FACE_MODE: number;
        TEXTURE16: number;
        STENCIL_BACK_WRITEMASK: number;
        SRC_ALPHA: number;
        UNSIGNED_SHORT: number;
        TEXTURE21: number;
        FUNC_REVERSE_SUBTRACT: number;
        SHADING_LANGUAGE_VERSION: number;
        EQUAL: number;
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
        BOOL_VEC3: number;
        SAMPLER_2D: number;
        TEXTURE_CUBE_MAP_NEGATIVE_X: number;
        MAX_TEXTURE_IMAGE_UNITS: number;
        TEXTURE_CUBE_MAP_POSITIVE_Y: number;
        RENDERBUFFER_INTERNAL_FORMAT: number;
        STENCIL_VALUE_MASK: number;
        ELEMENT_ARRAY_BUFFER_BINDING: number;
        ARRAY_BUFFER: number;
        DEPTH_RANGE: number;
        NICEST: number;
        ACTIVE_ATTRIBUTES: number;
        NEVER: number;
        FLOAT_VEC4: number;
        CURRENT_VERTEX_ATTRIB: number;
        STENCIL_PASS_DEPTH_PASS: number;
        INVERT: number;
        LINK_STATUS: number;
        RGB: number;
        INT_VEC4: number;
        TEXTURE2: number;
        UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
        MEDIUM_FLOAT: number;
        SRC_ALPHA_SATURATE: number;
        BUFFER_USAGE: number;
        SHORT: number;
        NONE: number;
        UNSIGNED_BYTE: number;
        INT: number;
        SUBPIXEL_BITS: number;
        KEEP: number;
        SAMPLES: number;
        FRAGMENT_SHADER: number;
        LINE_WIDTH: number;
        BLEND_SRC_RGB: number;
        LOW_FLOAT: number;
        VERSION: number;

}

declare  var WebGLRenderingContext: {
        prototype: WebGLRenderingContext;
        new(): WebGLRenderingContext;
        DEPTH_FUNC: number;
        DEPTH_COMPONENT16: number;
        REPLACE: number;
        REPEAT: number;
        VERTEX_ATTRIB_ARRAY_ENABLED: number;
        FRAMEBUFFER_INCOMPLETE_DIMENSIONS: number;
        STENCIL_BUFFER_BIT: number;
        RENDERER: number;
        STENCIL_BACK_REF: number;
        TEXTURE26: number;
        RGB565: number;
        DITHER: number;
        CONSTANT_COLOR: number;
        GENERATE_MIPMAP_HINT: number;
        POINTS: number;
        DECR: number;
        INT_VEC3: number;
        TEXTURE28: number;
        ONE_MINUS_CONSTANT_ALPHA: number;
        BACK: number;
        RENDERBUFFER_STENCIL_SIZE: number;
        UNPACK_FLIP_Y_WEBGL: number;
        BLEND: number;
        TEXTURE9: number;
        ARRAY_BUFFER_BINDING: number;
        MAX_VIEWPORT_DIMS: number;
        INVALID_FRAMEBUFFER_OPERATION: number;
        TEXTURE: number;
        TEXTURE0: number;
        TEXTURE31: number;
        TEXTURE24: number;
        HIGH_INT: number;
        RENDERBUFFER_BINDING: number;
        BLEND_COLOR: number;
        FASTEST: number;
        STENCIL_WRITEMASK: number;
        ALIASED_POINT_SIZE_RANGE: number;
        TEXTURE12: number;
        DST_ALPHA: number;
        BLEND_EQUATION_RGB: number;
        FRAMEBUFFER_COMPLETE: number;
        NEAREST_MIPMAP_NEAREST: number;
        VERTEX_ATTRIB_ARRAY_SIZE: number;
        TEXTURE3: number;
        DEPTH_WRITEMASK: number;
        CONTEXT_LOST_WEBGL: number;
        INVALID_VALUE: number;
        TEXTURE_MAG_FILTER: number;
        ONE_MINUS_CONSTANT_COLOR: number;
        ONE_MINUS_SRC_ALPHA: number;
        TEXTURE_CUBE_MAP_POSITIVE_Z: number;
        NOTEQUAL: number;
        ALPHA: number;
        DEPTH_STENCIL: number;
        MAX_VERTEX_UNIFORM_VECTORS: number;
        DEPTH_COMPONENT: number;
        RENDERBUFFER_RED_SIZE: number;
        TEXTURE20: number;
        RED_BITS: number;
        RENDERBUFFER_BLUE_SIZE: number;
        SCISSOR_BOX: number;
        VENDOR: number;
        FRONT_AND_BACK: number;
        CONSTANT_ALPHA: number;
        VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: number;
        NEAREST: number;
        CULL_FACE: number;
        ALIASED_LINE_WIDTH_RANGE: number;
        TEXTURE19: number;
        FRONT: number;
        DEPTH_CLEAR_VALUE: number;
        GREEN_BITS: number;
        TEXTURE29: number;
        TEXTURE23: number;
        MAX_RENDERBUFFER_SIZE: number;
        STENCIL_ATTACHMENT: number;
        TEXTURE27: number;
        BOOL_VEC2: number;
        OUT_OF_MEMORY: number;
        MIRRORED_REPEAT: number;
        POLYGON_OFFSET_UNITS: number;
        TEXTURE_MIN_FILTER: number;
        STENCIL_BACK_PASS_DEPTH_PASS: number;
        LINE_LOOP: number;
        FLOAT_MAT3: number;
        TEXTURE14: number;
        LINEAR: number;
        RGB5_A1: number;
        ONE_MINUS_SRC_COLOR: number;
        SAMPLE_COVERAGE_INVERT: number;
        DONT_CARE: number;
        FRAMEBUFFER_BINDING: number;
        RENDERBUFFER_ALPHA_SIZE: number;
        STENCIL_REF: number;
        ZERO: number;
        DECR_WRAP: number;
        SAMPLE_COVERAGE: number;
        STENCIL_BACK_FUNC: number;
        TEXTURE30: number;
        VIEWPORT: number;
        STENCIL_BITS: number;
        FLOAT: number;
        COLOR_WRITEMASK: number;
        SAMPLE_COVERAGE_VALUE: number;
        TEXTURE_CUBE_MAP_NEGATIVE_Y: number;
        STENCIL_BACK_FAIL: number;
        FLOAT_MAT4: number;
        UNSIGNED_SHORT_4_4_4_4: number;
        TEXTURE6: number;
        RENDERBUFFER_WIDTH: number;
        RGBA4: number;
        ALWAYS: number;
        BLEND_EQUATION_ALPHA: number;
        COLOR_BUFFER_BIT: number;
        TEXTURE_CUBE_MAP: number;
        DEPTH_BUFFER_BIT: number;
        STENCIL_CLEAR_VALUE: number;
        BLEND_EQUATION: number;
        RENDERBUFFER_GREEN_SIZE: number;
        NEAREST_MIPMAP_LINEAR: number;
        VERTEX_ATTRIB_ARRAY_TYPE: number;
        INCR_WRAP: number;
        ONE_MINUS_DST_COLOR: number;
        HIGH_FLOAT: number;
        BYTE: number;
        FRONT_FACE: number;
        SAMPLE_ALPHA_TO_COVERAGE: number;
        CCW: number;
        TEXTURE13: number;
        MAX_VERTEX_ATTRIBS: number;
        MAX_VERTEX_TEXTURE_IMAGE_UNITS: number;
        TEXTURE_WRAP_T: number;
        UNPACK_PREMULTIPLY_ALPHA_WEBGL: number;
        FLOAT_VEC2: number;
        LUMINANCE: number;
        GREATER: number;
        INT_VEC2: number;
        VALIDATE_STATUS: number;
        FRAMEBUFFER: number;
        FRAMEBUFFER_UNSUPPORTED: number;
        TEXTURE5: number;
        FUNC_SUBTRACT: number;
        BLEND_DST_ALPHA: number;
        SAMPLER_CUBE: number;
        ONE_MINUS_DST_ALPHA: number;
        LESS: number;
        TEXTURE_CUBE_MAP_POSITIVE_X: number;
        BLUE_BITS: number;
        DEPTH_TEST: number;
        VERTEX_ATTRIB_ARRAY_STRIDE: number;
        DELETE_STATUS: number;
        TEXTURE18: number;
        POLYGON_OFFSET_FACTOR: number;
        UNSIGNED_INT: number;
        TEXTURE_2D: number;
        DST_COLOR: number;
        FLOAT_MAT2: number;
        COMPRESSED_TEXTURE_FORMATS: number;
        MAX_FRAGMENT_UNIFORM_VECTORS: number;
        DEPTH_STENCIL_ATTACHMENT: number;
        LUMINANCE_ALPHA: number;
        CW: number;
        VERTEX_ATTRIB_ARRAY_NORMALIZED: number;
        TEXTURE_CUBE_MAP_NEGATIVE_Z: number;
        LINEAR_MIPMAP_LINEAR: number;
        BUFFER_SIZE: number;
        SAMPLE_BUFFERS: number;
        TEXTURE15: number;
        ACTIVE_TEXTURE: number;
        VERTEX_SHADER: number;
        TEXTURE22: number;
        VERTEX_ATTRIB_ARRAY_POINTER: number;
        INCR: number;
        COMPILE_STATUS: number;
        MAX_COMBINED_TEXTURE_IMAGE_UNITS: number;
        TEXTURE7: number;
        UNSIGNED_SHORT_5_5_5_1: number;
        DEPTH_BITS: number;
        RGBA: number;
        TRIANGLE_STRIP: number;
        COLOR_CLEAR_VALUE: number;
        BROWSER_DEFAULT_WEBGL: number;
        INVALID_ENUM: number;
        SCISSOR_TEST: number;
        LINE_STRIP: number;
        FRAMEBUFFER_INCOMPLETE_ATTACHMENT: number;
        STENCIL_FUNC: number;
        FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: number;
        RENDERBUFFER_HEIGHT: number;
        TEXTURE8: number;
        TRIANGLES: number;
        FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: number;
        STENCIL_BACK_VALUE_MASK: number;
        TEXTURE25: number;
        RENDERBUFFER: number;
        LEQUAL: number;
        TEXTURE1: number;
        STENCIL_INDEX8: number;
        FUNC_ADD: number;
        STENCIL_FAIL: number;
        BLEND_SRC_ALPHA: number;
        BOOL: number;
        ALPHA_BITS: number;
        LOW_INT: number;
        TEXTURE10: number;
        SRC_COLOR: number;
        MAX_VARYING_VECTORS: number;
        BLEND_DST_RGB: number;
        TEXTURE_BINDING_CUBE_MAP: number;
        STENCIL_INDEX: number;
        TEXTURE_BINDING_2D: number;
        MEDIUM_INT: number;
        SHADER_TYPE: number;
        POLYGON_OFFSET_FILL: number;
        DYNAMIC_DRAW: number;
        TEXTURE4: number;
        STENCIL_BACK_PASS_DEPTH_FAIL: number;
        STREAM_DRAW: number;
        MAX_CUBE_MAP_TEXTURE_SIZE: number;
        TEXTURE17: number;
        TRIANGLE_FAN: number;
        UNPACK_ALIGNMENT: number;
        CURRENT_PROGRAM: number;
        LINES: number;
        INVALID_OPERATION: number;
        FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: number;
        LINEAR_MIPMAP_NEAREST: number;
        CLAMP_TO_EDGE: number;
        RENDERBUFFER_DEPTH_SIZE: number;
        TEXTURE_WRAP_S: number;
        ELEMENT_ARRAY_BUFFER: number;
        UNSIGNED_SHORT_5_6_5: number;
        ACTIVE_UNIFORMS: number;
        FLOAT_VEC3: number;
        NO_ERROR: number;
        ATTACHED_SHADERS: number;
        DEPTH_ATTACHMENT: number;
        TEXTURE11: number;
        STENCIL_TEST: number;
        ONE: number;
        FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: number;
        STATIC_DRAW: number;
        GEQUAL: number;
        BOOL_VEC4: number;
        COLOR_ATTACHMENT0: number;
        PACK_ALIGNMENT: number;
        MAX_TEXTURE_SIZE: number;
        STENCIL_PASS_DEPTH_FAIL: number;
        CULL_FACE_MODE: number;
        TEXTURE16: number;
        STENCIL_BACK_WRITEMASK: number;
        SRC_ALPHA: number;
        UNSIGNED_SHORT: number;
        TEXTURE21: number;
        FUNC_REVERSE_SUBTRACT: number;
        SHADING_LANGUAGE_VERSION: number;
        EQUAL: number;
        FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: number;
        BOOL_VEC3: number;
        SAMPLER_2D: number;
        TEXTURE_CUBE_MAP_NEGATIVE_X: number;
        MAX_TEXTURE_IMAGE_UNITS: number;
        TEXTURE_CUBE_MAP_POSITIVE_Y: number;
        RENDERBUFFER_INTERNAL_FORMAT: number;
        STENCIL_VALUE_MASK: number;
        ELEMENT_ARRAY_BUFFER_BINDING: number;
        ARRAY_BUFFER: number;
        DEPTH_RANGE: number;
        NICEST: number;
        ACTIVE_ATTRIBUTES: number;
        NEVER: number;
        FLOAT_VEC4: number;
        CURRENT_VERTEX_ATTRIB: number;
        STENCIL_PASS_DEPTH_PASS: number;
        INVERT: number;
        LINK_STATUS: number;
        RGB: number;
        INT_VEC4: number;
        TEXTURE2: number;
        UNPACK_COLORSPACE_CONVERSION_WEBGL: number;
        MEDIUM_FLOAT: number;
        SRC_ALPHA_SATURATE: number;
        BUFFER_USAGE: number;
        SHORT: number;
        NONE: number;
        UNSIGNED_BYTE: number;
        INT: number;
        SUBPIXEL_BITS: number;
        KEEP: number;
        SAMPLES: number;
        FRAGMENT_SHADER: number;
        LINE_WIDTH: number;
        BLEND_SRC_RGB: number;
        LOW_FLOAT: number;
        VERSION: number;
};
interface WebGLProgram extends WebGLObject {


}

declare  var WebGLProgram: {
        prototype: WebGLProgram;
        new(): WebGLProgram;
};
interface OES_standard_derivatives {

        FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;

}

declare  var OES_standard_derivatives: {
        prototype: OES_standard_derivatives;
        new(): OES_standard_derivatives;
        FRAGMENT_SHADER_DERIVATIVE_HINT_OES: number;
};
interface WebGLFramebuffer extends WebGLObject {


}

declare  var WebGLFramebuffer: {
        prototype: WebGLFramebuffer;
        new(): WebGLFramebuffer;
};
interface WebGLShader extends WebGLObject {


}

declare  var WebGLShader: {
        prototype: WebGLShader;
        new(): WebGLShader;
};
interface OES_texture_float_linear {


}

declare  var OES_texture_float_linear: {
        prototype: OES_texture_float_linear;
        new(): OES_texture_float_linear;
};
interface WebGLObject {


}

declare  var WebGLObject: {
        prototype: WebGLObject;
        new(): WebGLObject;
};
interface WebGLBuffer extends WebGLObject {


}

declare  var WebGLBuffer: {
        prototype: WebGLBuffer;
        new(): WebGLBuffer;
};
interface WebGLShaderPrecisionFormat {

        rangeMin: number;
        rangeMax: number;
        precision: number;

}

declare  var WebGLShaderPrecisionFormat: {
        prototype: WebGLShaderPrecisionFormat;
        new(): WebGLShaderPrecisionFormat;
};
interface EXT_texture_filter_anisotropic {

        TEXTURE_MAX_ANISOTROPY_EXT: number;
        MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;

}

declare  var EXT_texture_filter_anisotropic: {
        prototype: EXT_texture_filter_anisotropic;
        new(): EXT_texture_filter_anisotropic;
        TEXTURE_MAX_ANISOTROPY_EXT: number;
        MAX_TEXTURE_MAX_ANISOTROPY_EXT: number;
};
declare  var Option: {     new(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement; };

declare  var Image: {     new(width?: number, height?: number): HTMLImageElement; };

declare  var Audio: {     new(src?: string): HTMLAudioElement; };


declare  var ondragend: (ev: DragEvent) => any;

declare  var onkeydown: (ev: KeyboardEvent) => any;

declare  var ondragover: (ev: DragEvent) => any;

declare  var onkeyup: (ev: KeyboardEvent) => any;

declare  var onreset: (ev: Event) => any;

declare  var onmouseup: (ev: MouseEvent) => any;

declare  var ondragstart: (ev: DragEvent) => any;

declare  var ondrag: (ev: DragEvent) => any;

declare  var screenX: number;

declare  var onmouseover: (ev: MouseEvent) => any;

declare  var ondragleave: (ev: DragEvent) => any;

declare  var history: History;

declare  var pageXOffset: number;

declare  var name: string;

declare  var onafterprint: (ev: Event) => any;

declare  var onpause: (ev: Event) => any;

declare  var onbeforeprint: (ev: Event) => any;

declare  var top: Window;

declare  var onmousedown: (ev: MouseEvent) => any;

declare  var onseeked: (ev: Event) => any;

declare  var opener: Window;

declare  var onclick: (ev: MouseEvent) => any;

declare  var innerHeight: number;

declare  var onwaiting: (ev: Event) => any;

declare  var ononline: (ev: Event) => any;

declare  var ondurationchange: (ev: Event) => any;

declare  var frames: Window;

declare  var onblur: (ev: FocusEvent) => any;

declare  var onemptied: (ev: Event) => any;

declare  var onseeking: (ev: Event) => any;

declare  var oncanplay: (ev: Event) => any;

declare  var outerWidth: number;

declare  var onstalled: (ev: Event) => any;

declare  var onmousemove: (ev: MouseEvent) => any;

declare  var innerWidth: number;

declare  var onoffline: (ev: Event) => any;

declare  var length: number;

declare  var screen: Screen;

declare  var onbeforeunload: (ev: BeforeUnloadEvent) => any;

declare  var onratechange: (ev: Event) => any;

declare  var onstorage: (ev: StorageEvent) => any;

declare  var onloadstart: (ev: Event) => any;

declare  var ondragenter: (ev: DragEvent) => any;

declare  var onsubmit: (ev: Event) => any;

declare  var self: Window;

declare  var document: Document;

declare  var onprogress: (ev: ProgressEvent) => any;

declare  var ondblclick: (ev: MouseEvent) => any;

declare  var pageYOffset: number;

declare  var oncontextmenu: (ev: MouseEvent) => any;

declare  var onchange: (ev: Event) => any;

declare  var onloadedmetadata: (ev: Event) => any;

declare  var onplay: (ev: Event) => any;

declare  var onerror: ErrorEventHandler;

declare  var onplaying: (ev: Event) => any;

declare  var parent: Window;

declare  var location: Location;

declare  var oncanplaythrough: (ev: Event) => any;

declare  var onabort: (ev: UIEvent) => any;

declare  var onreadystatechange: (ev: Event) => any;

declare  var outerHeight: number;

declare  var onkeypress: (ev: KeyboardEvent) => any;

declare  var frameElement: Element;

declare  var onloadeddata: (ev: Event) => any;

declare  var onsuspend: (ev: Event) => any;

declare  var window: Window;

declare  var onfocus: (ev: FocusEvent) => any;

declare  var onmessage: (ev: MessageEvent) => any;

declare  var ontimeupdate: (ev: Event) => any;

declare  var onresize: (ev: UIEvent) => any;

declare  var onselect: (ev: UIEvent) => any;

declare  var navigator: Navigator;

declare  var styleMedia: StyleMedia;

declare  var ondrop: (ev: DragEvent) => any;

declare  var onmouseout: (ev: MouseEvent) => any;

declare  var onended: (ev: Event) => any;

declare  var onhashchange: (ev: Event) => any;

declare  var onunload: (ev: Event) => any;

declare  var onscroll: (ev: UIEvent) => any;

declare  var screenY: number;

declare  var onmousewheel: (ev: MouseWheelEvent) => any;

declare  var onload: (ev: Event) => any;

declare  var onvolumechange: (ev: Event) => any;

declare  var oninput: (ev: Event) => any;

declare  var performance: Performance;

declare  var onmspointerdown: (ev: any) => any;

declare  var animationStartTime: number;

declare  var onmsgesturedoubletap: (ev: any) => any;

declare  var onmspointerhover: (ev: any) => any;

declare  var onmsgesturehold: (ev: any) => any;

declare  var onmspointermove: (ev: any) => any;

declare  var onmsgesturechange: (ev: any) => any;

declare  var onmsgesturestart: (ev: any) => any;

declare  var onmspointercancel: (ev: any) => any;

declare  var onmsgestureend: (ev: any) => any;

declare  var onmsgesturetap: (ev: any) => any;

declare  var onmspointerout: (ev: any) => any;

declare  var msAnimationStartTime: number;

declare  var applicationCache: ApplicationCache;

declare  var onmsinertiastart: (ev: any) => any;

declare  var onmspointerover: (ev: any) => any;

declare  var onpopstate: (ev: PopStateEvent) => any;

declare  var onmspointerup: (ev: any) => any;

declare  var onpageshow: (ev: PageTransitionEvent) => any;

declare  var ondevicemotion: (ev: DeviceMotionEvent) => any;

declare  var devicePixelRatio: number;

declare  var msCrypto: Crypto;

declare  var ondeviceorientation: (ev: DeviceOrientationEvent) => any;

declare  var doNotTrack: string;

declare  var onmspointerenter: (ev: any) => any;

declare  var onpagehide: (ev: PageTransitionEvent) => any;

declare  var onmspointerleave: (ev: any) => any;

declare function alert(message?: any): void;
declare function scroll(x?: number, y?: number): void;
declare function focus(): void;
declare function scrollTo(x?: number, y?: number): void;
declare function print(): void;
declare function prompt(message?: string, _default?: string): string;
declare function toString(): string;
declare function open(url?: string, target?: string, features?: string, replace?: boolean): Window;
declare function scrollBy(x?: number, y?: number): void;
declare function confirm(message?: string): boolean;
declare function close(): void;
declare function postMessage(message: any, targetOrigin: string, ports?: any): void;
declare function showModalDialog(url?: string, argument?: any, options?: any): any;
declare function blur(): void;
declare function getSelection(): Selection;
declare function getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration;
declare function msCancelRequestAnimationFrame(handle: number): void;
declare function matchMedia(mediaQuery: string): MediaQueryList;
declare function cancelAnimationFrame(handle: number): void;
declare function msIsStaticHTML(html: string): boolean;
declare function msMatchMedia(mediaQuery: string): MediaQueryList;
declare function requestAnimationFrame(callback: FrameRequestCallback): number;
declare function msRequestAnimationFrame(callback: FrameRequestCallback): number;
declare function removeEventListener(type: string, listener: EventListener, useCapture?: boolean): void;
declare function dispatchEvent(evt: Event): boolean;
declare function attachEvent(event: string, listener: EventListener): boolean;
declare function detachEvent(event: string, listener: EventListener): void;
declare  var localStorage: Storage;

declare  var status: string;

declare  var onmouseleave: (ev: MouseEvent) => any;

declare  var screenLeft: number;

declare  var offscreenBuffering: any;

declare  var maxConnectionsPerServer: number;

declare  var onmouseenter: (ev: MouseEvent) => any;

declare  var clipboardData: DataTransfer;

declare  var defaultStatus: string;

declare  var clientInformation: Navigator;

declare  var closed: boolean;

declare  var onhelp: (ev: Event) => any;

declare  var external: External;

declare  var event: MSEventObj;

declare  var onfocusout: (ev: FocusEvent) => any;

declare  var screenTop: number;

declare  var onfocusin: (ev: FocusEvent) => any;

declare function showModelessDialog(url?: string, argument?: any, options?: any): Window;
declare function navigate(url: string): void;
declare function resizeBy(x?: number, y?: number): void;
declare function item(index: any): any;
declare function resizeTo(x?: number, y?: number): void;
declare function createPopup(arguments?: any): MSPopupWindow;
declare function toStaticHTML(html: string): string;
declare function execScript(code: string, language?: string): any;
declare function msWriteProfilerMark(profilerMarkName: string): void;
declare function moveTo(x?: number, y?: number): void;
declare function moveBy(x?: number, y?: number): void;
declare function showHelp(url: string, helpArg?: any, features?: string): void;
declare function captureEvents(): void;
declare function releaseEvents(): void;
declare  var sessionStorage: Storage;

declare function clearTimeout(handle: number): void;
declare function setTimeout(handler: any, timeout?: any, ...args: any[]): number;
declare function clearInterval(handle: number): void;
declare function setInterval(handler: any, timeout?: any, ...args: any[]): number;
declare function msSetImmediate(expression: any, ...args: any[]): number;
declare function clearImmediate(handle: number): void;
declare function msClearImmediate(handle: number): void;
declare function setImmediate(expression: any, ...args: any[]): number;
declare function btoa(rawString: string): string;
declare function atob(encodedString: string): string;
declare  var msIndexedDB: IDBFactory;

declare  var indexedDB: IDBFactory;

declare  var console: Console;

declare  var onpointerenter: (ev: PointerEvent) => any;

declare  var onpointerout: (ev: PointerEvent) => any;

declare  var onpointerdown: (ev: PointerEvent) => any;

declare  var onpointerup: (ev: PointerEvent) => any;

declare  var onpointercancel: (ev: PointerEvent) => any;

declare  var onpointerover: (ev: PointerEvent) => any;

declare  var onpointermove: (ev: PointerEvent) => any;

declare  var onpointerleave: (ev: PointerEvent) => any;

declare function addEventListener(type: "mouseleave", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseenter", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "help", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focusout", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focusin", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerenter", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerout", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerdown", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerup", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointercancel", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerover", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointermove", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pointerleave", listener: (ev: PointerEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragend", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keydown", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragover", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keyup", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "reset", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseup", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragstart", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "drag", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseover", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragleave", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "afterprint", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pause", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "beforeprint", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousedown", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "seeked", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "click", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "waiting", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "online", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "durationchange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "blur", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "emptied", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "seeking", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "canplay", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "stalled", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousemove", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "offline", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "beforeunload", listener: (ev: BeforeUnloadEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "ratechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "storage", listener: (ev: StorageEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadstart", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dragenter", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "submit", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "progress", listener: (ev: ProgressEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "dblclick", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "contextmenu", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "change", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadedmetadata", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "play", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "playing", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "canplaythrough", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "abort", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "readystatechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "keypress", listener: (ev: KeyboardEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "loadeddata", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "suspend", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "focus", listener: (ev: FocusEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "message", listener: (ev: MessageEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "timeupdate", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "resize", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "select", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "drop", listener: (ev: DragEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mouseout", listener: (ev: MouseEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "ended", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "hashchange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "unload", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "scroll", listener: (ev: UIEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mousewheel", listener: (ev: MouseWheelEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "load", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "volumechange", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "input", listener: (ev: Event) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerdown", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturedoubletap", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerhover", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturehold", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointermove", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturechange", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturestart", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointercancel", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgestureend", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msgesturetap", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerout", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "msinertiastart", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerover", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "popstate", listener: (ev: PopStateEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerup", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pageshow", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "devicemotion", listener: (ev: DeviceMotionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "deviceorientation", listener: (ev: DeviceOrientationEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerenter", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: "pagehide", listener: (ev: PageTransitionEvent) => any, useCapture?: boolean): void;
declare function addEventListener(type: "mspointerleave", listener: (ev: any) => any, useCapture?: boolean): void;
declare function addEventListener(type: string, listener: EventListener, useCapture?: boolean): void;

/////////////////////////////
/// WorkerGlobalScope APIs 
/////////////////////////////
// These are only available in a Web Worker 
declare function importScripts(...urls: string[]): void;


/////////////////////////////
/// Windows Script Host APIS
/////////////////////////////


interface ActiveXObject {

        new(s: string): any;

}

declare  var ActiveXObject: ActiveXObject;


interface ITextWriter {

        Write(s: string): void;
        WriteLine(s: string): void;
        Close(): void;

}


interface TextStreamBase {

    /**
     * The column number of the current character position in an input stream.
     */
        Column: number;
    /**
     * The current line number in an input stream.
     */
        Line: number;
    /**
     * Closes a text stream.
     * It is not necessary to close standard streams; they close automatically when the process ends. If you close a standard stream, be aware that any other pointers to that standard stream become invalid.
     */
        Close(): void;

}


interface TextStreamWriter extends TextStreamBase {

    /**
     * Sends a string to an output stream.
     */
        Write(s: string): void;
    /**
     * Sends a specified number of blank lines (newline characters) to an output stream.
     */
        WriteBlankLines(intLines: number): void;
    /**
     * Sends a string followed by a newline character to an output stream.
     */
        WriteLine(s: string): void;

}


interface TextStreamReader extends TextStreamBase {

    /**
     * Returns a specified number of characters from an input stream, beginning at the current pointer position.
     * Does not return until the ENTER key is pressed.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
        Read(characters: number): string;
    /**
     * Returns all characters from an input stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
        ReadAll(): string;
    /**
     * Returns an entire line from an input stream.
     * Although this method extracts the newline character, it does not add it to the returned string.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     */
        ReadLine(): string;
    /**
     * Skips a specified number of characters when reading from an input text stream.
     * Can only be used on a stream in reading mode; causes an error in writing or appending mode.
     * @param characters Positive number of characters to skip forward. (Backward skipping is not supported.)
     */
        Skip(characters: number): void;
    /**
     * Skips the next line when reading from an input text stream.
     * Can only be used on a stream in reading mode, not writing or appending mode.
     */
        SkipLine(): void;
    /**
     * Indicates whether the stream pointer position is at the end of a line.
     */
        AtEndOfLine: boolean;
    /**
     * Indicates whether the stream pointer position is at the end of a stream.
     */
        AtEndOfStream: boolean;

}


declare  var WScript: {
    /**
    * Outputs text to either a message box (under WScript.exe) or the command console window followed by a newline (under CScript.ext).
    */
        Echo(s: any): void;
    /**
     * Exposes the write-only error output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
        StdErr: TextStreamWriter;
    /**
     * Exposes the write-only output stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
        StdOut: TextStreamWriter;
        Arguments: {     length: number;     Item(n: number): string; };
    /**
     *  The full path of the currently running script.
     */
        ScriptFullName: string;
    /**
     * Forces the script to stop immediately, with an optional exit code.
     */
        Quit(exitCode?: number): number;
    /**
     * The Windows Script Host build version number.
     */
        BuildVersion: number;
    /**
     * Fully qualified path of the host executable.
     */
        FullName: string;
    /**
     * Gets/sets the script mode - interactive(true) or batch(false).
     */
        Interactive: boolean;
    /**
     * The name of the host executable (WScript.exe or CScript.exe).
     */
        Name: string;
    /**
     * Path of the directory containing the host executable.
     */
        Path: string;
    /**
     * The filename of the currently running script.
     */
        ScriptName: string;
    /**
     * Exposes the read-only input stream for the current script.
     * Can be accessed only while using CScript.exe.
     */
        StdIn: TextStreamReader;
    /**
     * Windows Script Host version
     */
        Version: string;
    /**
     * Connects a COM object's event sources to functions named with a given prefix, in the form prefix_event.
     */
        ConnectObject(objEventSource: any, strPrefix: string): void;
    /**
     * Creates a COM object.
     * @param strProgiID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */
        CreateObject(strProgID: string, strPrefix?: string): any;
    /**
     * Disconnects a COM object from its event sources.
     */
        DisconnectObject(obj: any): void;
    /**
     * Retrieves an existing object with the specified ProgID from memory, or creates a new one from a file.
     * @param strPathname Fully qualified path to the file containing the object persisted to disk. For objects in memory, pass a zero-length string.
     * @param strProgID
     * @param strPrefix Function names in the form prefix_event will be bound to this object's COM events.
     */
        GetObject(strPathname: string, strProgID?: string, strPrefix?: string): any;
    /**
     * Suspends script execution for a specified length of time, then continues execution.
     * @param intTime Interval (in milliseconds) to suspend script execution.
     */
        Sleep(intTime: number): void;
};

/**************************************************************************
 * Extra Chrome specific features and new APIs which need to be mixed in.
 * 
 * The contents of this file is appending to lib.d.ts *before* processing.
 */
interface Element {

      remove(): void; // FF and Chrome specific.

  // Shadow DOM
      createShadowRoot(): ShadowRoot;
  
      webkitCreateShadowRoot(): ShadowRoot;
  
      getDestinationInsertionPoints(): NodeList;
      shadowRoot: ShadowRoot;
      webkitShadowRoot: ShadowRoot;

}


// Shadow DOM
interface ShadowRoot extends DocumentFragment {

      getElementById(elementId: string): HTMLElement;
      getElementsByClassName(className: string): NodeList;
      getElementsByTagName(tagName: string): NodeList;
      getElementsByTagNameNS(namespace: string, localName: string): NodeList;
      getSelection(): Selection;
      elementFromPoint(x: number, y: number): Element;
  
      activeElement: Element;
      host: Element;
      olderShadowRoot: ShadowRoot;
      innerHTML: string;
      styleSheets: StyleSheetList;

}


// HTML Templates
declare class HTMLTemplate extends HTMLElement {

      content: HTMLElement;
}


// HTML Template and custom element related.
declare class HTMLContentElement extends HTMLElement {

      select: string;
      getDistributedNodes(): NodeList;
}


declare class HTMLDialogElement extends HTMLElement {

      open: boolean;
      returnValue: string;
      show(anchor?: Element): void;
      show(anchor?: MouseEvent): void;
      showModal(anchor?: Element): void;
      showModal(anchor?: MouseEvent): void;
      close(returnValue?: string): void;
}


interface Document {

      createElement(tagName: "template"): HTMLTemplate;
      registerElement(tagName: string, props: any): any;

}



interface Window {

      CustomEvent: CustomEvent;

}


interface CustomEventOptions {

      type?: string;
      canBubble?: boolean;
      cancelable?: boolean;
      detail?: any;

}


interface KeyboardEvent {

      keyIdentifier: string;

}


interface Event {

      path: Node[]; // <- obsolete. Removed from later the Shadow DOM spec.
      deepPath: Node[];
      encapsulated: boolean;

}

/**************************************************************************
 * Extra Chrome specific features and new APIs.
 * 
 * The contents of this file are appending to chrome_lib.d.ts.
 */
declare var CustomEvent: {
  prototype: CustomEvent;
  new(type?: string, options?:CustomEventOptions): CustomEvent;
};
interface Console {
  timeStamp(label: string): void;
}

interface FontFace {
  family: string;
  style: string;
  weight: string;
  stretch: string;
  unicodeRange: string;
  variant: string;
  featureSettings: string;

  status: string;

  load(): Promise<FontFace>;
  
  loaded: Promise<FontFace>;
}

interface FontFaceSet extends Set<FontFace> {
  onloading: (ev: Event) => any;
  onloadingdone: (ev: Event) => any;
  onloadingerror: (ev: Event) => any;
  
  // check and start loads if appropriate
  // and fulfill promise when all loads complete
  load(font: string, text?: string): Promise< ArrayLike<FontFace> >;
  
  // return whether all fonts in the fontlist are loaded
  // (does not initiate load if not available)
  check(font: string, text?: string): boolean;
  
  // async notification that font loading and layout operations are done
  ready: Promise<FontFaceSet>;
  
  // loading state, "loading" while one or more fonts loading, "loaded" otherwise
  status: string;
}

interface Document {
  fonts: FontFaceSet;
}