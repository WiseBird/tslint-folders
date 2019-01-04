import { describe2, it2 } from "../../../../ExampleTestApi";

describe("someTestSuite - OK", () => {
    it("someTest - OK", () => {
        // test code here
    });

    it2.skip2("someTest - skipped", () => {
        // ~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
        // test code here
    });
});

describe2.skip2("someTestSuite - skip", () => {
    // ~~~~~~~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
    it2.skip2("someTest - OK", () => {
        // ~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
        // test code here
    });

    describe2.skip2("someTestSuite - skip", () => {
        // ~~~~~~~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
        it2.skip2("someTest - OK", () => {
            // ~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
            // test code here
        });
    });

    // test inside a loop
    [1, 2].forEach(value => {
        describe2.skip2("someTestSuite - skip", () => {
            // ~~~~~~~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
            it("someTest - OK", () => {
                // test code here
            });

            it2.skip2("someTest - skip", () => {
                // ~~~ [do not disable or enable only some tests (tsf-folders-disabled-test)]
                // test code here
            });
        });
    });
});
