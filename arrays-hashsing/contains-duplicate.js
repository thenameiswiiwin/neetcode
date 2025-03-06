/**Contains Duplicate
*
* Given an integer array nums, return true if any value appears more than once
* in the array, otherwise return false.
*
* Example 1:
*    Input: nums = [1, 2, 3, 3]
*    Output: true
*
* Example 2:
*    Input: nums = [1, 2, 3, 4]
*    Output: false
**/

/** My Approach
Time complexity: O(n) -> Iterate through the nums array once.

Space complexity: O(n) -> The Set stores up to n elements in the worse case.

 HashSet [1, 2, 3] => 3
 **/

class Solution {
    /**
     * @param {number[]} nums
        * @return {boolean}
        */
    hasDuplicate(nums) {
        let hashset = new Set()
        for (let n of nums) {
            if (hashset.has(n)) return true
            hashset.add(n)
        }
        return false
    }
}

// Test cases
const solution = new Solution()
console.log(solution.hasDuplicate([1, 2, 3, 3])) // Output: true
console.log(solution.hasDuplicate([1, 2, 3, 4])) // Output: false
