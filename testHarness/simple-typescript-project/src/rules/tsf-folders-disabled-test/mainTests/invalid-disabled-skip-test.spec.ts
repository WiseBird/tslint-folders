describe("someTestSuite - OK", () => {
  it("someTest - OK", () => {
    // test code here
  });

  it.skip("someTest - skipped", () => {
    // ~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
    // test code here
  });
});

describe.skip("someTestSuite - skip", () => {
  // ~~~~~~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
  it.skip("someTest - OK", () => {
    // ~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
    // test code here
  });

  describe.skip("someTestSuite - skip", () => {
    // ~~~~~~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
    it.skip("someTest - OK", () => {
      // ~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
      // test code here
    });
  });

  // test inside a loop
  [1, 2].forEach(value => {
    describe.skip("someTestSuite - skip", () => {
      // ~~~~~~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
      it("someTest - OK", () => {
        // test code here
      });

      it.skip("someTest - skip", () => {
        // ~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
        // test code here
      });
    });
  });
});
