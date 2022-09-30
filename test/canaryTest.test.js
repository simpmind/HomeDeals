const expect = require("chai").expect;

describe("Canary Test", function() {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function() {
    expect("foo").to.not.be.undefined;
  });
});
