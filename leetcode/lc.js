//1480
//https://leetcode-cn.com/problems/running-sum-of-1d-array/
//通过javascript中数组的高阶函数reduce来处理，每一次加上一次的累加值，直接修改nums本身，最后返回nums
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    nums.reduce((prev, curr, index) => {
        nums[index] = prev + curr
        return nums[index]
    }, 0)
    return nums
};

//1431
//https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
//直接找到candies的最大值, 判断candies每项 加上 extraCandies 后是否大于或等于 这个最大值
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies)
    return candies.map(item => {
        return item + extraCandies >= max
    })
};