import myFunc from '.././src/index';

it('expect myFunc(5) to equal 25', () => {
  expect(myFunc(5)).toEqual(25);
});

// describe(“suite description”, () => {
//     it(“describes the spec”, () => {
//         const myVar = true;
//         expect(myVar).toBe(true);
//     });
// });
