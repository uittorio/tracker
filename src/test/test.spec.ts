
const sum = (a: number, b: number): number => {
    return a + b;
};

describe('adds works', () => {
    let sumResult: number;

    beforeEach(() => {
        sumResult = sum(1, 2);
    });

    it("should return the sum of two numbers", () => {
        expect(sumResult).toBe(3);
    });
});
