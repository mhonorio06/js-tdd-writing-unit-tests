// Your tests here
import { pointsForWord } from '../utils'

describe("pointsForWord", () => {
    it("calculates total points for a word (1 point for a vowel, 2 for a consonant)", () => {
        const word = "test"
        const points = pointsForWord(word)
        expect(points).toBe(7)
    })

    
})