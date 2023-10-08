var sp = require("./sumPairs");

// Basic tests
describe("sumPairs Tests", () => {
    test("Test 1", () => { 
      expect(sp.sumPairs([1,2,3,4,5], 9)).toEqual([[4,5]];
    });

    test("Test 2", () => { 
        expect(sp.sumPairs([1,2,3,4,5], 7)).toEqual([[2,5], [3,4]];
      });

    test("Test 3", () => { 
    expect(sum_pairs([3, 1, 5, 8, 2], 27)).toEqual('unable to find pairs');
    });
  });