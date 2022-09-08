import { calcAverageProductPrice } from "../src/products";

describe("calcAverageProductPrice", () => {
  test("three products", () => {
    const value: number = calcAverageProductPrice([
      { name: "Bike", price: 500 },
      { name: "Walkie Talkie", price: 60 },
      { name: "Air Matress", price: 99 }
    ]);
    expect(value).toBe(219.66666666666666);
  });
  test("two products", () => {
    const value: number = calcAverageProductPrice([
      { name: "Bike", price: 500 },
      { name: "Walkie Talkie", price: 60 }
    ]);
    expect(value).toBe(280);
  });
  test("one product", () => {
    const value: number = calcAverageProductPrice([
      { name: "Bike", price: 500 }
    ]);
    expect(value).toBe(500);
  });
  test("zero products", () => {
    const value: number = calcAverageProductPrice([]);
    expect(value).toBe(0);
  });
});