#include <bits/stdc++.h>
#define FOR(i, a) for (int i = 0; i < (a); i++)
#define rep(i, a, n) for (int i = a; i < (n); i++)
#define fastio                    \
    ios_base::sync_with_stdio(0); \
    cin.tie(0);                   \
    cout.tie(0)
#define ll long long
#define coutarr(i, n, arr)      \
    for (int i = 0; i < n; i++) \
        cout << arr[i] << " ";
using namespace std;
const ll MOD = 1e9 + 7;
map<char, int> mp;

class Solution
{
public:
    vector<int> kWeakestRows(vector<vector<int>> &mat, int k)
    {
        int rs = mat.size();
        int cs = mat[0].size();
        vector<int> r(rs, 0);
        // cout << rs << " " << cs << endl;
        for (int i = 0; i < rs; i++)
        {
            for (int j = 0; j < cs; j++)
            {
                r[i] += mat[i][j];
            }
        }
        map<int, int> mp;
        for (int i = 0; i < r.size(); i++)
        {
            mp[i] = r[i];
        }
        // sort(mp.begin(),mp.end());
        for (auto &&x : mp)
        {
            cout << x.first << " " << x.second << endl;
        }
        return r;
    }
};
int main()
{
    fastio;
    vector<vector<int>> arr = {{1, 1, 0, 0, 0},
                               {1, 1, 1, 1, 0},
                               {1, 0, 0, 0, 0},
                               {1, 1, 0, 0, 0},
                               {1, 1, 1, 1, 1}};
    Solution s;
    vector<int> res = s.kWeakestRows(arr, 3);
    coutarr(i, res.size(), res);
    cout << endl;
    return 0;
}