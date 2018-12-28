import expect from 'expect';
import { validateNewUser } from './users';
import { Meteor } from 'meteor/meteor';

if (Meteor.isServer) {
    describe('users', function (){
        it('should allow valid email address', function () {
            const testUser = {
                emails: [
                    {
                        address: 'Test@example.com'
                    }
                ]
            };
            const res = validateNewUser(testUser);
            expect(res).toBe(true);
        });

        it('should reject invalid email', function (){
            const testUser = {
                emails: [
                    {
                        address: 'Test.example/com'
                    }
                ]
            };
            expect(() =>{
                validateNewUser(testUser);
            }).toThrow();
        });
    });
}

// const add = (a,b) => {
//   if (typeof b !='number') {
//     return a + a ;
//   }
//   return a+ b;
// };
//  const square = (a) => a*a;

// describe("Artrematuc", function () {

//   it('should add two numbers', function () {
//     const result = add(11, 9);
//     expect(result).toBe(20)


//   });
//   it('should double a single number', function () {
//     const res = add(44);

//     if (res !== 88) {
//       throw new Error('NUmber was not doubled');
//     }
//   });
//   it ('should square a number', function () {
//     const res = square(4);
//     if (res !==16){
//       throw new Error('NUmber was not squared');
//     }
//   })





// });
