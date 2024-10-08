import { toUpperCase } from '../app/Utils'

describe('Utils test suite', () => {

    it('should return uppercase of a valid string', () => {
        // arrange
        const sut = toUpperCase
        const expected = 'ABC'

        // act
        const actual = sut('abc')

        // assert
        expect(actual).toBe(expected)
    })

})