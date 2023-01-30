import deploying from "./suites/deploy.test";
import writing from "./suites/write.test";

describe("Authenticity", function () {
  describe("When deploying", deploying.bind(this));
  describe("When writing", writing.bind(this));
});
