// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

//test phone numbers
test('test for valid number', () => {
    expect(functions.isPhoneNumber('909-532-1355')).toBe(true);
});

test('test for valid number', () => {
    expect(functions.isPhoneNumber('123 456-7890')).toBe(true);
});

test('test for invalid number', () => {
    expect(functions.isPhoneNumber('909-532-13')).toBe(false);
});

test('test for invalid number', () => {
    expect(functions.isPhoneNumber('not a number')).toBe(false); //4
});

//test emails
test('test for valid email', () => {
    expect(functions.isEmail('ajpark@ucsd.edu')).toBe(true);
});

test('test for valid email', () => {
    expect(functions.isEmail('random@yahoo.com')).toBe(true);
});

test('test for invalid email', () => {
    expect(functions.isEmail('facebook.com')).toBe(false);
});

test('test for invalid email', () => {
    expect(functions.isEmail('ajpark@ucsd')).toBe(false); //8
});

//test passwords
test('test for valid password', () => {
    expect(functions.isStrongPassword('andrew_park')).toBe(true);
});

test('test for invalid password', () => {
    expect(functions.isStrongPassword('Abcd12345')).toBe(true);
});

test('test for invalid password', () => {
    expect(functions.isStrongPassword('123456')).toBe(false);
});

test('test for invalid password', () => {
    expect(functions.isStrongPassword('thisisprobablymorethan15characters')).toBe(false); //12
});

//test dates
test('test for valid date', () => {
    expect(functions.isDate('11/14/2021')).toBe(true);
});

test('test for valid date', () => {
    expect(functions.isDate('1/5/2000')).toBe(true);
});

test('test for invalid date', () => {
    expect(functions.isDate('12/25/21')).toBe(false);
});

test('test for invalid date', () => {
    expect(functions.isDate('333/444/555')).toBe(false); //16
});

//test hex colors
test('test for valid hex', () => {
    expect(functions.isHexColor('#d094f2')).toBe(true);
});

test('test for valid hex', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});


test('test for invalid hex', () => {
    expect(functions.isHexColor('#d09445f2')).toBe(false);
});


test('test for invalid hex', () => {
    expect(functions.isHexColor('#e094g2')).toBe(false); //20
});
