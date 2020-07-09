//1480
//https://leetcode-cn.com/problems/running-sum-of-1d-array/
//没啥好说的，直接当前+上一个和给当前就好
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        for(int i=1;i<nums.size();i++){
            nums[i]+=nums[i-1];
        }
        return nums;
    }
};

//1431
//https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/
//candies[i]+ex>=max就是true
class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int n=candies.size();
        int mx=*max_element(candies.begin(),candies.end());
        vector<bool>ans;
        for(int i=0;i<n;i++){
            ans.push_back(candies[i]+extraCandies>=mx);
        }
        return ans;
    }
};