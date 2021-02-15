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
        cout << arr[i];
using namespace std;
const ll MOD = 1e9 + 7;
class SolutionA
{
public:
    int minOperations(string s)
    {
        int count = 0;
        char zero = '0';
        char one = '1';
        for (int i = 0; i < s.size(); i++)
        {
            if (s[i] != zero)
                count++;
            swap(zero, one);
        }
        int n = s.size();
        return min(count, n - count);
    }
};
// 1759. Count Number of Homogenous Substrings
class SolutionB
{
public:
    int countHomogenous(string s)
    {
        long count = 1;
        long res = 0;
        rep(i, 0, s.size())
        {
            count = 1;
            while (i + 1 < s.size() && s[i] == s[i + 1])
            {
                count++;
                i++;
            }
            res += (count * (count + 1)) / 2;
        }
        return res % MOD;
    }
};
int main()
{
    fastio;
    SolutionB s;
    cout << s.countHomogenous("abbcccaa") << endl;
    return 0;
}