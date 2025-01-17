import{ test, expect, describe } from 'vitest';
import {  cheeseValue } from './main';

describe("Should return high value cheese and there total value ",() =>{
    test("Should return all the high value cheeses",() => {
        const expected = ["Gouda", "Gruyère","Camembert","Roquefort","Parmesan","Blue Cheese","Manchego"];
        const actual = cheeseValue().highValueCheese;
        expect(actual).toEqual(expected)
    });
    test("Should return the total value of the high end cheeses",() =>{
        const expected = 149;
        const actual = cheeseValue().totalValue;
        expect(actual).toBe(expected);
    });
});