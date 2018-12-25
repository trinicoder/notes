import expect from 'expect';
const add = (a,b) => {
  if (typeof b !='number') {
    return a + a ;
  }
  return a+ b;
};
 const square = (a) => a*a;

describe("Artrematuc", function () {

  it('should add two numbers', function () {
    const result = add(11, 9);
    expect(result).toBe(20)


  });
  it('should double a single number', function () {
    const res = add(44);

    if (res !== 88) {
      throw new Error('NUmber was not doubled');
    }
  });
  it ('should square a number', function () {
    const res = square(4);
    if (res !==16){
      throw new Error('NUmber was not squared');
    }
  })





});
