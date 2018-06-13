const assert = require("assert");

const { Given, When, Then } = require("cucumber");

// @ STEP
Given("This is a test", function() {
  this.test = true;
  When("test starts", function() {
    this.Secondtest = true;
  });
  Then("it should pass", function() {
    assert.equal(this.test, this.Secondtest);
  });
});
