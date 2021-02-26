#include <iostream>
#include <bits/stdc++.h>
using namespace std;
class Solution
{
public:
    vector<int> solve(vector<int> &nums)
    {
        vector<int> res;
        unordered_map<int, int> mp;
        vector<int> temp = nums;
        sort(temp.begin(), temp.end(), greater<int>());
        int i = 0;
        for (int n : temp)
        {
            if (mp.find(n) == mp.end())
            {
                mp[n] = i;
                i += 1;
            }
        }
        for (auto x : nums)
        {
            res.push_back(mp[x]);
        }
        return res;
    }
};
int main()
{
    Solution s1;
    vector<int> nums = {50, 30, 50, 90, 10};
    nums = s1.solve(nums);
    for (auto &&x : nums)
    {
        cout << x << " ";
    }
    return 0;
}