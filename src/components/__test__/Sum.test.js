import { Sum } from "../Sum";


test("Sum function should calculated the number of two numbers", () => {

    const result = Sum(3,6);
    expect(result).toBe(9);
});