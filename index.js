const chai = require("chai");
const spies = require("chai-spies");
const expect = chai.expect;

chai.use(spies);

function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function namedFunction() {

  };
}

function returnsAnAnonymousFunction() {
  return () => {
    
  };
}

describe("index", () => {
  describe("receivesAFunction(callback)", () => {
    it("receives a function and calls it", () => {
      const spy = chai.spy();
      receivesAFunction(spy);
      expect(spy).to.have.been.called();
    });
  });

  describe("returnsANamedFunction()", () => {
    var fn;

    before(() => {
      fn = returnsANamedFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns a named function", () => {
      expect(fn.name).not.to.eql("");
    });
  });

  describe("returnsAnAnonymousFunction()", () => {
    var fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });
  });
});
