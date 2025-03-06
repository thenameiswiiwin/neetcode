/**Valid Anagram
 *
 * Given two strings s and t, return true if the two strings are anagrams of
 * each other, otherwise return false.
 *
 * An anagram is a string that contains the exact same characters as another
 * string, but the order of the characters can be different.
 *
 * Example 1:
 * Input: s = "racecar", t = "carrace"
 * Output: true
 *
 * Example 2:
 * Input: s = "jar", t = "jam"
 * Output: false
 **/

/**My Approach
 * Time complexity: 0(nlogn + mlogm) -> sorting
 *
 * Space complexity: 0(n + m) -> storing sorted strings
 **/

class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     **/
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let sSorted = s.split("").sort().join("")
        let tSorted = t.split("").sort().join("")
        return sSorted == tSorted
    }
}

// Test cases
const solution = new Solution()
console.log(solution.isAnagram("racecar", "carrace")) // Output: true
console.log(solution.isAnagram("jar", "jam")) // Output: false
