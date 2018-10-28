const make = require('./make.js');
const sumOfOther = require('./sumOfOther.js');
const assert = require('chai').assert;

function sum(a, b) {
    return a + b;
}

describe("make", function() {
    it("суммирует все аргументы функции", function() {
        assert.equal(make(15)(34, 21, 666)(41)(sum), 777);
    });
});

describe("make", function() {
    it("суммирует все аргументы функции", function() {
        assert.equal(make(32, 12, 3, 51, 23, 4)(1)(13, 22, 0)(sum), 161);
    });
});

describe("make", function() {
    it("суммирует все аргументы функции", function() {
        assert.equal(make()(34, 109)(41)(sum), 184);
    });
});

describe("make", function() {
    it("суммирует все аргументы функции", function() {
        assert.equal(make()(15, 401, 8)()(21)(sum), 445);
    });
});

describe("sumOfOther", function() {
    it("Каждый элемент по индексу i - это сумма остальных элементов оригинального массива", function() {
        assert.deepEqual(sumOfOther([2, 3, 4, 1]), [8, 7, 6, 9]);
    });
});

describe("sumOfOther", function() {
    it("Каждый элемент по индексу i - это сумма остальных элементов оригинального массива", function() {
        assert.deepEqual(sumOfOther([12, 4, 0, 1]), [5, 13, 17, 16]);
    });
});

describe("sumOfOther", function() {
    it("Каждый элемент по индексу i - это сумма остальных элементов оригинального массива", function() {
        assert.deepEqual(sumOfOther([1, 5, 9]), [14, 10, 6]);
    });
});

describe("sumOfOther", function() {
    it("Каждый элемент по индексу i - это сумма остальных элементов оригинального массива", function() {
        assert.deepEqual(sumOfOther([-1, 6, 4, 1, 11, 7]), [29, 22, 24, 27, 17, 21]);
    });
});